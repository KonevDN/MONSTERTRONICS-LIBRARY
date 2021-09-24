var	langSelectorArea;
var	langCollapseIcon1;
var	langCollapseIcon2;
var	langCollapseNode;
var	wipeTimer = 750;
var	expandLangDelay = 350;
var	savedHeight;
var expandLangDelayTimer;


var langIds = new Array();
langIds[0] = 1;
langIds[1] = 2;
langIds[2] = 3;
langIds[3] = 4;
langIds[4] = 5;
langIds[5] = 6;
langIds[6] = 8;
langIds[7] = 9;
langIds[8] = 10;
langIds[9] = 14;
langIds[10] = 15;
langIds[11] = 16;
langIds[12] = 17;

function TE_initLanguageSelection() {
	var pageUrl = new String(window.location);
	
	var selectedLang = dojo.io.cookie.getCookie("language_id");
	
	// if language cookie doesn't exist, check whether language_id cookie 
	//		can be written and read
	if ( ! selectedLang) {
		TE_setLanguageCookie(1);
  		selectedLang = dojo.io.cookie.getCookie("language_id");
  
  		// cookies are not enabled or domain is not tycoelectronics.com, 
  		//	so don't show language selector
		if ( ! selectedLang || selectedLang != 1) {
			if ( dojo.byId("TE_corpnav_header") ) {
				dojo.html.setStyle("TE_corpnav_header","padding-right","0px");
			}
			
			return;
		}
	}
		
	langCollapseNode = dojo.byId("TE_langSelector_langContent");
	langSelectorArea = dojo.byId("TE_langSelector_bottom");
	langExpandIcon = dojo.byId("TE_langSelector_expandLink");
	langCollapseIcon1 = dojo.byId("TE_langSelector_collapseLink");
	langCollapseIcon2 = dojo.byId("TE_langSelector_langContentHeader");
		
	dojo.event.connect(langSelectorArea, "onmouseover", "TE_delayedExpandLanguages");
	dojo.event.connect(langSelectorArea, "onmouseout", "TE_cancelDelayedExpandLanguages");

	var isLangIdValid = false;	

	if (selectedLang) {
		for (i = 0; i < langIds.length; i++) {
			if (langIds[i] == selectedLang) {
				isLangIdValid = true;
				break;
			}
		}
	}
	
	if ( ! isLangIdValid) {
		TE_setLanguage(1);
	}
	
	TE_showLangSelectorText();
	dojo.html.show(langSelectorArea);
	
	for (i = 0; i < langIds.length; i++) {
		if (langIds[i] != selectedLang) {
			langNode = dojo.byId("langId" + langIds[i]);
			var subLangNode = document.createElement("a");
			subLangNode.setAttribute("href", "javascript:TE_setLanguage(" + langIds[i] + ")");
			subLangNode.appendChild(langNode.firstChild);
			langNode.appendChild(subLangNode);
		} 
	}
		
	savedHeight = langCollapseNode.style.height;
}

function TE_cancelDelayedExpandLanguages() {
	clearTimeout(expandLangDelayTimer);
	expandLangDelayTimer = null;
}
	
function TE_delayedExpandLanguages() {
	expandLangDelayTimer = setTimeout(TE_expandLanguages, expandLangDelay);
}
	
function TE_expandLanguages() {
	TE_cancelDelayedExpandLanguages();
	
	dojo.event.disconnect(langSelectorArea, "onmouseover", "TE_delayedExpandLanguages");
	
	dojo.html.hide(langExpandIcon);
	dojo.html.show(langCollapseIcon1);
	closeTE_Inquira_searchselector("TE_Inquira_searchselector");
		
	dojo.lfx.toggle.wipe.show(langCollapseNode, wipeTimer, null, 
				function() {		
					langCollapseNode.style.height = savedHeight;
					dojo.event.connect(langCollapseIcon1, "onclick", "TE_collapseLanguages");
					dojo.event.connect(langCollapseIcon2, "onclick", "TE_collapseLanguages");
			});	
}
	
function TE_collapseLanguages() {
	dojo.event.disconnect(langCollapseIcon1, "onclick", "TE_collapseLanguages");
	dojo.event.disconnect(langCollapseIcon2, "onclick", "TE_collapseLanguages");
	
	dojo.html.show(langExpandIcon);
	dojo.html.hide(langCollapseIcon1);
		
	dojo.lfx.toggle.wipe.hide(langCollapseNode, wipeTimer, null,
				function() {		
					langCollapseNode.style.height = savedHeight;
					dojo.event.connect(langSelectorArea, "onmouseover", "TE_delayedExpandLanguages");
			});
}

function TE_showLangSelectorText() {
		var languagesNode = dojo.byId("TE_langSelector_languageHeading");
		var countrySitesNode = dojo.byId("TE_langSelector_countrySiteHeading");
		var worldwideNode = dojo.byId("TE_langSelector_langHeader");
		var expandLangSelImage = dojo.byId("TE_langSelector_expandImg");
		var collapseLangSelImage = dojo.byId("TE_langSelector_collapseImg");
		var closeLangSelImage = dojo.byId("TE_langSelector_closeImg");
	
		var locale = TE_getLocale();
		
		dojo.requireLocalization("te", "ewt", locale);
		var ewt = dojo.i18n.getLocalization("te", "ewt", locale);

		languagesNode.appendChild(document.createTextNode(ewt.languagesMessage));
		countrySitesNode.appendChild(document.createTextNode(ewt.countrySitesMessage));
		worldwideNode.appendChild(document.createTextNode(ewt.worldwideMessage));
		expandLangSelImage.alt = ewt.expandLangSelMessage;
		expandLangSelImage.title = ewt.expandLangSelMessage;
		collapseLangSelImage.alt = ewt.closeLangSelMessage;
		collapseLangSelImage.title = ewt.closeLangSelMessage;
		closeLangSelImage.alt = ewt.closeLangSelMessage;
		closeLangSelImage.title = ewt.closeLangSelMessage;
}

function TE_setLanguageCookie(langId){
	TE_SetCookie("language_id",langId,TE_GetCookieExpiration(365),".tycoelectronics.com","/");
}

function TE_setLanguage(langId){
	TE_setLanguageCookie(langId);
	var sURL = window.location;
	sURL = TE_languageReWriteURL(sURL,langId);
	var re = new RegExp("/catalog/.*/(en|cs|de|es|fr|hu|it|ja|ko|pl|pt|zh-hans|ru)", "ig");
	if (re.test(sURL)) {
		window.location.reload(true);
	}
	else {
		window.location.replace( sURL );
	}
}

// Function to rewrite the URL and add or replace a
// LG parameter with the new language id
function TE_languageReWriteURL(url,id) {
	var re,str,newurl;
	// default set the return url to be the incomming url
	newurl=url;
	// create a RegExp object to handle the functionality
	// initial pattern looking for an existing LG parameter, either first or somewhere
	// on the line.  Pattern ignores case and is global (finds all occurences).
	re = new RegExp("([\?\&]LG=)([1-9][0-9]?)","ig");
	// check the URL to see if it matches
	if (re.test(url))
	{
		// found a match, then we have a parameter already in place
		// lets replace it.
		// create a String object
		str = new String(url);
		// Ask the string object to do the replace for us giving it the regular expression
		// the replacement string is to return the &LG= or ?LG= ($1) followed by our new language id
		newurl = str.replace(re,"$1"+id);
	}
	else { // we didn't match, so no LG parameter on the URL
		var checkParam;
		// look to see if anchor fragment on the url - remove for now
		checkParam = new RegExp("([\#].*$)","ig");
		if (checkParam.test(url))
		{
		    // Yes, there is a # present, so remove
			str = new String(url);
			newurl = str.replace(checkParam,"");
			// put this back in the url so we can contine to check for other parameters
			url = newurl;
		}
		// look to see if other parameters on the string, respect them...
		checkParam = new RegExp("([\?])","ig");
		if (checkParam.test(url))
		{
		    // Yes, there is a ? already present, so append &LG=N
			//unless we are in the /catalog/*/language path
			var ree = new RegExp("/catalog/.*/(en|cs|de|es|fr|hu|it|ja|ko|pl|pt|zh-hans|ru)", "ig");
			var chk = new RegExp("([\?\&]LG=)([1-9][0-9]?)","ig");
			if(ree.test(url) && chk.test(url)) {
				var stree = new String(url);
				newurl = stree.replace(chk, "");
			}
			else {
			newurl = url + "&LG="+id;
			}
		}
		else {
		    // No there wasn't a ? found on the URL so append ?LG=N
			//unless we are in the /catalog/*/language path
			var noq = new RegExp("/catalog/.*/(en|cs|de|es|fr|hu|it|ja|ko|pl|pt|zh-hans|ru)", "ig");
			if(noq.test(url)) {
				newurl = url;
			}
			else {
				newurl = url + "?LG="+id;
			}
		} 
	} // end of if didn't find LG paramenter
	// return the transformed url
	return newurl;
}
