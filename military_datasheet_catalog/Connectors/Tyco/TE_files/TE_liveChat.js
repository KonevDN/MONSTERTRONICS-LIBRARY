dojo.require("dojo.io.script");

function liveCheck() {
		var f = document.frm_chat_data;
		if(f.c_email.value != "" && f.c_fname.value != "" && f.c_lname.value != "") {
			var newWin = makePopup('test2.asp?email='+f.c_email.value+'&fname='+f.c_fname.value+'&lname='+f.c_lname.value, 628, 514, 'resize');
		} else {
		}
		return false;
	}
	
function makePopup(url, width, height, overflow) {
	if(overflow == '' || !/^(scroll|resize|both)$/.test(overflow)) { overflow = 'both'; }
	var win = window.open(url, '',
						  'width=' + width + ',height=' + height
						  + ',scrollbars=' + (/^(scroll|both)$/.test(overflow) ? 'yes' : 'no')
						  + ',resizable=' + (/^(resize|both)$/.test(overflow) ? 'yes' : 'no')
						  + ',status=yes,toolbar=no,menubar=no,location=no'
	);
	return win;
}

/*=================================================================*/
/* LIVE CHAT DETECT JAVA CAPABILITY & BROWSER */
if (!navigator.javaEnabled()) document.write("This browser does not have Java enabled.");
var submit_accepted = false;
var width = 525;
var height= 600;
if (navigator.platform != 'MacPPC')
{
        if (navigator.appName == "Microsoft Internet Explorer")
              {width=238;height=245;}
        else if (parseInt(navigator.appVersion) > 4)
              {width=600;height=450;}
        else
    	  {
        width=window.outerWidth;
        if (width < 800) width=800;
        height=window.outerHeight;
        if (height <600) height=600;
    	  }
} else {
        if (navigator.appName == "Microsoft Internet Explorer")
              {width=525;height=500;}
        else if (parseInt(navigator.appVersion) < 5)
              {width=850;height=600;}
        else  {width=525;height=500;}
}

var roundCorners = new Image();
var ast = new Image();
roundCorners.src = "/_TEincludes/ver/920/TEimages/TE_livechat_box.gif";
ast.src = "/_TEincludes/ver/920/TEimages/TE_required.gif";

/*=================================================================*/
/* LIVE CHAT FORM SUBMIT */
function do_submit(form)
{
    var em = document.chat.c_email.value;
	var fir = document.chat.c_fname.value;
	var las = document.chat.c_lname.value;
	
	if (em == "" || fir == "" || las == "") {
		dojo.style("TE_lc_msg1", "display", "none");
		dojo.style("TE_lc_errmsg1", "display", "block");
		return false;
	}
 	else {	
		if (submit_accepted) // prevents NN4 resubmission
			return(false);
	
		submit_accepted = true;
	
		window.open('', "chat_window",'resizable=yes,scrollbars=no,width='+width+',height='+height);
		
		form.submit();
		dojo.style("TE_lc_windowTrue", "display", "none");
		return(false);
	}
}

/*=================================================================*/
/* Right Now - Live Chat functions */

var TE_LiveChat = new objLiveChat();

function showLiveChatOverlay(linkObj) {

	TE_LiveChat.showLiveChat(linkObj);
	
}

function hideLiveChatOverlay() {

	TE_LiveChat.hideLiveChat();
}

function objLiveChat() {

	var public = objLiveChat.prototype;

	var g_regionJson = "";
	var g_languageJson = "";
	var g_registered = "";
	var g_timeoutMessage = "";
			
    var	g_prefCache = {
    	firstName: "",
    	lastName: "",
    	emailAddress: "",
    	region: "",
    	language: "",
    	saveMe: false,
    	hasData: false
    };	

	public.showLiveChat = function(linkObj) {
		dojo.io.script.get({
			url: TE_getHomePageURL() + "/commerce/lvc/show_live_chat.do",
			callbackParamName : "callback",
			preventCache : true,
			timeout : 10000,
			load : function(response, ioArgs) {
				//console.log('successful response');
				loadLiveChatForm(response, linkObj);
			},
			error : function(response, ioArgs) {
				//console.log("Timed out");
			}
		});
	}
		
	public.hideLiveChat = function() {
		
		if (dojo.byId("regionSelection").disabled == false) {
			dojo.style("TE_liveChat_windowTrue", "display", "none");
		}
	}
	
	public.submitLiveChat = function(linkObj) {
	
		hideErrorMessage();
		showWaitAnimation();
		
		var saveMe = dojo.byId("saveMe");
		var saveMeCheckBox = dojo.byId("save");
		if (saveMeCheckBox.checked == true) {
			saveMe.value = "true";
		}

		var firstName = dojo.byId("fName").value;
		var lastName = dojo.byId("lName").value;
		var emailAddress = dojo.byId("emailAddress").value;
		var regionCode = dojo.byId("regionSelection").value;
		var languageCode = dojo.byId("languageSelection").value;				

		params = {
					firstName: firstName,
					lastName: lastName,
					emailAddress: emailAddress, 
					region: regionCode,
					language: languageCode,
					saveMe: saveMeCheckBox.checked,
					hasData: true				
				 };
		
		g_prefCache = params;
		
		dojo.io.script.get({
			url: TE_getHomePageURL() + "/commerce/lvc/submit_live_chat.do",
			callbackParamName: "callback",
			preventCache : true,
			content : params,
			timeout : 10000,
			load : function(response, ioArgs) {
				redirectToLiveChat(response);
			},
			error : function(response, ioArgs) {
				if(response.dojoType == 'timeout') {
					showErrorMessage(g_timeoutMessage);
				}
				hideWaitAnimation();
			}
		});
		
	}
	
	public.getSchedule = function() {

		var languages = dojo.byId("languageSelection");
		var timesDiv = dojo.byId("times");
		var selectedIndex = languages.selectedIndex;
		var textColor = languages.options[languages.selectedIndex].style.color;
			 		 	 		
		dojo.style(languages, "color", textColor);
		dojo.style(timesDiv, "color", textColor);
		timesDiv.innerHTML = g_languageJson[selectedIndex].hours;
						
		if (g_languageJson[selectedIndex].selectable == false) {
			disableSubmitButton();
			showErrorMessage(g_languageJson[selectedIndex].hoursException);
		}
		else {
			enableSubmitButton();
			hideErrorMessage();
		}
	}	

	function showWaitAnimation() {
		disableSubmitButton();
		dojo.style("loading", "display", "block");
		
		dojo.byId("fName").disabled = true;
		dojo.byId("lName").disabled = true;
		dojo.byId("emailAddress").disabled = true;
		dojo.byId("regionSelection").disabled = true;
		dojo.byId("languageSelection").disabled = true;
		dojo.byId("save").disabled = true;		
	}
	
	function hideWaitAnimation() {
		enableSubmitButton();
		dojo.style("loading", "display", "none");

		dojo.byId("fName").disabled = false;
		dojo.byId("lName").disabled = false;
		dojo.byId("emailAddress").disabled = false;
		dojo.byId("regionSelection").disabled = false;
		dojo.byId("languageSelection").disabled = false;		
		dojo.byId("save").disabled = false;
	}

	function enableSubmitButton() {
		dojo.byId("livechatSubmitButton").disabled = false;
	}
	
	function disableSubmitButton() {
	    dojo.byId("livechatSubmitButton").disabled = true;
	}
	
	function showOfflineMessage(errorMessage) {
	
		var divString = "";

		for (var i in g_languageJson) {
			divString += g_languageJson[i].value + " " + g_languageJson[i].hours + "<br>";
		}
		
		dojo.byId("scheduleDivList").innerHTML = divString;
	
		showErrorMessage(errorMessage);
		dojo.style("scheduleDiv", "display", "block");     	
	}
	
	function showRequiredMessage(errorObj) {
		clearErrorDiv();
		
		var errorString = '<div class="TE_WarningBox" style="width:500px;">';		
		var varArray = errorObj.varArray;
								
		errorString += '<b><span id="errorSpan">'+errorObj.value+'</span></b><ul class="TE_ULbullets">';

		for (var i in varArray) {
			errorString += '<li>'+varArray[i]+'</li>';
		}
		
		errorString += '</ul></div>';

		dojo.byId("errorDiv").innerHTML = errorString;
		dojo.style("errorDiv", "display", "block");
	}
	
	function clearErrorDiv() {
	
		var errorDivDefault = '<div class="TE_WarningBox" style="width:500px;"><b><span id="errorSpan"></span></b><!--[if lt IE 7]><br>&nbsp;</br><![endif]--><div>';
		dojo.byId("errorDiv").innerHTML = errorDivDefault;		
	}
		
	function showErrorMessage(errorMessage) {
		clearErrorDiv();
		dojo.byId("errorSpan").innerHTML = errorMessage;
		dojo.style("errorDiv", "display", "block");		
	}
	
	function hideErrorMessage() {
		dojo.style("errorDiv", "display", "none");
	}
	
	function redirectToLiveChat(data) {

		hideWaitAnimation();

		var jsonObj = eval(data);
		var formError = jsonObj.formError;

		if (jsonObj.hasError == false) {
			public.hideLiveChat();
			return makePopup(jsonObj.liveChatLink, 628, 514, 'resize');
		}
		else {
			if (formError.id == "REQUIRED_ERROR") {
				showRequiredMessage(formError);
			}
			else {			
				showErrorMessage(formError.value);
			}
		}//else
	}
	
	function languageAvailable(userLang) {

		for (var i in g_languageJson) {
			if (g_languageJson[i].id == userLang) {				
				if (g_languageJson[i].selectable) return true;
			}
		}
		
		return false;
	}		
				
	function loadLiveChatForm(data, linkObj) {

	    var jsonObj = eval(data);
 	 	var hasError = jsonObj.hasError;
	 	var formError = jsonObj.formError;

	 	var boilerPlate = jsonObj.boilerPlate;
	 	var emailUs = jsonObj.emailUs;
	 	var formLabels = jsonObj.formLabels;
	 	var formSelections = jsonObj.formSelections;   	
	 	var languages = jsonObj.languages;	
	 	var regions = jsonObj.regions;
	 	var registered = jsonObj.registered;
	 	 		 		 		 
		g_regionJson = regions;
		g_languageJson = languages;
	 	g_registered = registered;
	 	g_timeoutMessage = jsonObj.timeoutError;

	 	loadFormLabels(boilerPlate, formLabels);	 	     	
	 	loadRegions(regions);	     
	 	loadLanguages(languages, formSelections.language);	
	 	
	 	var lcOverlayId = "TE_liveChat_" + formSelections.language; 
	 	
	 	if (hasError) {
	 		if(formError.id == "SYSTEM_ERROR") {
				showSystemError(formError.value);
				hideAllUserDiv();
			}
			
			if (formError.id == "LIVE_CHAT_OFFLINE") {
				showOfflineMessage(formError.value);	
				hideAllUserDiv();
			}
		}
	 	else {
	 		loadUserPreferences(formSelections);
 	    	showUserDiv();
 	    }
		
		var errorDivStyle = dojo.style("errorDiv", "display");
		
		if (errorDivStyle == "block") {
		
			lcOverlayId = lcOverlayId + "_Closed";
		}
		else {
		
			lcOverlayId = lcOverlayId + "_Open";
		}
		
		s_linkTrackVars = 's_prop1';
		s_linkTrackEvents = 'None';
		s_linkType = 'o';
		s_linkName = lcOverlayId;
		s_lnk = s_co(linkObj);
		s_gs('tycoeglobal');
		
		setTimeout(function() {
		 	dojo.style("TE_liveChat_windowTrue", "display", "block");
	 	}, 500);	 	
	}
		
	function loadUserPreferences(formSelections) {

		if (g_prefCache.hasData) {		
			if (g_prefCache.saveMe) {
				dojo.byId("fName").value = g_prefCache.firstName;
				dojo.byId("lName").value = g_prefCache.lastName;
				dojo.byId("emailAddress").value = g_prefCache.emailAddress;
				setSelectedRegion(g_prefCache.region);
				setSelectedLanguage(g_prefCache.language);
				dojo.byId("save").checked = g_prefCache.saveMe;
			}
			else {
				dojo.byId("fName").value = "";
				dojo.byId("lName").value = "";
				dojo.byId("emailAddress").value = "";
				dojo.byId("regionSelection").reset;
				dojo.byId("languageSelection").reset;
				dojo.byId("save").checked = false;				
			}
		}
		else {
			if (formSelections.saveMe == "true") {
				dojo.byId("fName").value = formSelections.firstName;
				dojo.byId("lName").value = formSelections.lastName;
				dojo.byId("emailAddress").value = formSelections.emailAddress;
				setSelectedRegion(formSelections.region);
				setSelectedLanguage(formSelections.language);			
				dojo.byId("save").checked = true;
			}
			else {

				dojo.byId("fName").value = "";
				dojo.byId("lName").value = "";
				dojo.byId("emailAddress").value = "";
				dojo.byId("regionSelection").reset;
				dojo.byId("languageSelection").reset;
				dojo.byId("save").checked = true;
			}
		}
		
 		public.getSchedule();
	}
			
	function loadFormLabels(boilerPlate, formLabels) {

	    dojo.byId("modelWindowLabel").innerHTML = boilerPlate.modelWindowLabel;
	
	    dojo.byId("firstNameDiv").innerHTML = formLabels.firstName;
	    dojo.byId("lastNameDiv").innerHTML = formLabels.lastName;
	    dojo.byId("emailDiv").innerHTML = formLabels.emailAddress;
	    dojo.byId("regionDiv").innerHTML = formLabels.region;
	    dojo.byId("languageDiv").innerHTML = formLabels.language;
	    dojo.byId("saveMeSpan").innerHTML = formLabels.saveMe;
	    dojo.byId("livechatSubmitButton").value = formLabels.chatButton; 	     
	    
	    dojo.byId("emailUsLabel").innerHTML = boilerPlate.emailUs.label;
	    dojo.byId("emailUsDesc").innerHTML = '<p>'+boilerPlate.emailUs.description+'</p>';
	    dojo.byId("emailUsLink").innerHTML = '<a href="'+boilerPlate.emailUs.link+'">'+boilerPlate.emailUs.linkLabel+'</a>';
	     	     
	    dojo.byId("knowledgeBaseLabel").innerHTML = boilerPlate.knowledgeBase.label;
	    dojo.byId("knowledgeBaseDesc").innerHTML = '<p>'+boilerPlate.knowledgeBase.description+'</p>';
	    dojo.byId("knowledgeBaseLink").innerHTML = '<a href="'+boilerPlate.knowledgeBase.link+'">'+boilerPlate.knowledgeBase.linkLabel+'</a>';
	    
	    dojo.byId("callUsLabel").innerHTML = boilerPlate.callUs.label;
	    dojo.byId("callUsDesc").innerHTML = '<p>'+boilerPlate.callUs.description+'</p>';
	    dojo.byId("callUsLink").innerHTML = '<a href="'+boilerPlate.callUs.link+'">'+boilerPlate.callUs.linkLabel+'</a>';
	}
	
	function loadRegions(regions) {
		var selections = dojo.byId("regionSelection");
		fillCombo(selections, regions);
	}
	
	function loadLanguages(languages, defaultLang) {
		var selections = dojo.byId("languageSelection");
		fillLanguages(selections, languages, defaultLang);
	}
	
	function setSelectedRegion(regionCode) {
	
		var selectObj = dojo.byId("regionSelection");
				  	
		for (var i in g_regionJson) {
			if (g_regionJson[i].id == regionCode) {
				selectObj.selectedIndex = i;
				break;
			}
		}
	}
	
	function setSelectedLanguage(langCode) {	
	
		var selectObj = dojo.byId("languageSelection");
				  	
		for (var i in g_languageJson) {
			if (g_languageJson[i].id == langCode) {
				selectObj.selectedIndex = i;
				break;
			}
		}		
	}
	
	function clearCombo(selectObj) {
		
		var i = selectObj.options.length-1;
		for (i; i>=0; i--) {  			
			selectObj.options[i] = null;
		}
		
		selectObj.selectedIndex = -1;
	}
	
	function fillCombo(selectObj, jsonObj) {
		clearCombo(selectObj);
		
		for (var i in jsonObj) {
			selectObj.options[i]= new Option(jsonObj[i].value, jsonObj[i].id);
		}
	}
		 
	function fillLanguages(selectObj, jsonObj, defaultLang) {	   
		clearCombo(selectObj);
		  	
		for (var i in jsonObj) {
			if (jsonObj[i].selectable) {
				selectObj.options[i] = new Option(jsonObj[i].value, jsonObj[i].id);
				dojo.style(selectObj.options[i], "color", "#000");
			}
			else {    							
		   		selectObj.options[i] = new Option(jsonObj[i].value, jsonObj[i].id);
		   		dojo.style(selectObj.options[i], "color", "#999");
			}
			
			if (jsonObj[i].id == defaultLang) {
				selectObj.selectedIndex = i;
			}
		}
	}	
			
	function hideAllUserDiv() {
		hideUserDiv();
		dojo.style("submitDiv", "display", "none");
	}
	
	function showUserDiv() {
		if (g_registered) {
			showRegisteredDiv();
		}
		else {
			showUnregisteredDiv();
		}
	}

	function hideUserDiv() {
		if (g_registered) {
			hideRegisteredDiv();
		}
		else {
			hideUnregisteredDiv();
		}
	}
	
	function showSystemError(errorMessage) {
		showErrorMessage(errorMessage);
	}
	
	function showUnregisteredDiv() {
		dojo.style("unregisteredDiv", "display", "block");
	 	dojo.style("saveMeDiv", "display", "block");	 	
		hideRegisteredDiv();
	}
	
	function hideUnregisteredDiv() {
		dojo.style("unregisteredDiv", "display", "none");
	 	dojo.style("saveMeDiv", "display", "none");	 	
	}
	
	function showRegisteredDiv() {
		dojo.style("registeredDiv", "display", "block");
		dojo.style("saveMeDiv", "display", "none");
		hideUnregisteredDiv();     	
	}
	
	function hideRegisteredDiv() {
		dojo.style("registeredDiv", "display", "none");
	}
}
	dojo.addOnLoad(function(){
		var locale = TE_getLocale();
		dojo.requireLocalization("te", "ewt", locale);
		var ewt = dojo.i18n.getLocalization("te", "ewt", locale);
		dojo.byId("supt_lc").innerHTML = ewt.supportTab;
		dojo.byId("supt_lc_a").innerHTML = ewt.supportChat2;
	});