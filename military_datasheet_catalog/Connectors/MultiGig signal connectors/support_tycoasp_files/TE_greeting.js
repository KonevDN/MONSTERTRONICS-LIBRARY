	var signInUrl = TE_getEcommerceUrl() + "/commerce/secure/commerce.asp?ID=16";
	var signOutUrl = TE_getSecureApplicationServerUrl() + "/commerce/uso/logOff.do?url=" + escape(window.location);
	var registerUrl = TE_getSecureApplicationServerUrl() + "/commerce/esr/register.do";
	var whyRegisterUrl = TE_getApplicationServerUrl() + "/commerce/uso/myaccount.do";
	var myAccountUrl = TE_getSecureApplicationServerUrl() + "/commerce/uso/myaccount.do";
	var myCartUrl = TE_getApplicationServerUrl() + "/commerce/sam/createSampleReq.do";
	var myCartCookie = dojo.io.cookie.getCookie("MyCartCount");
	var emptyCartUrl = "/_TEincludes/TEimages/TinyCartIcon_empty.png";
	var fullCartUrl = "/_TEincludes/TEimages/TinyCartIcon_full.png";
	
	function TE_displayGreeting() {
		var mplNode;
		var pageUrl = new String(window.location);
		var isSigninPage = false;
		var greetingNode = dojo.byId("TE_signIn");
		var locale = TE_getLocale();
		var myCartNode;
		
		dojo.requireLocalization("te", "ewt", locale);
		var ewt = dojo.i18n.getLocalization("te", "ewt", locale);

		if (greetingNode.innerHTML){
			greetingNode.innerHTML = ""; 
		}

		// if not tycoelectronics.com domain, show MyAccount link only
		if ( ! TE_isTycoElectronicsDomain()) {	// not tycoelectronics.com domain, show MyAccount link only!
			var myAcctNode = document.createElement("a");
			myAcctNode.setAttribute("href", myAccountUrl);
			myAcctNode.appendChild(document.createTextNode(ewt.myAccountMessage));
			greetingNode.appendChild(myAcctNode);
			
			return;
		}
		
		// check if we're on the signin page
		if (pageUrl.indexOf("login/login.asp") != -1) {
			isSigninPage = true;
		}
		
		var smSession = dojo.io.cookie.getCookie("SMSESSION");
		var appCodes = dojo.io.cookie.getCookie("TECewt1");
		var displayName = dojo.io.cookie.getCookie("TECewt4");
		
		if (window.TE_showMyPartList == undefined || ! window.TE_showMyPartList) {
			window.TE_showMyPartList = false;
		} else {
			mplNode = document.createDocumentFragment();
			var mplImg = document.createElement("img");
			mplImg.setAttribute("src", "/_TEincludes/TEimages/TE_mpl_addPart_small.gif");
			mplImg.setAttribute("alt", ewt.myPartListMessage);
			mplImg.setAttribute("title", ewt.myPartListMessage);
			mplNode.appendChild(mplImg);
			mplNode.appendChild(document.createTextNode(" "));

			var showMplLink = true;
			if (pageUrl.indexOf("commerce/mpl/managePartLists.do") != -1) {
				// show only text node...don't show MyPartList link or widget
				showMplLink = false;
				window.TE_showMyPartList = false;
				window.TE_showCart = true;
			}
			
			if (showMplLink) {
				var mplAnchor = document.createElement("a");
				mplAnchor.setAttribute("href", "javascript:openPartList()");
				mplAnchor.appendChild(document.createTextNode(ewt.myPartListMessage));
				mplNode.appendChild(mplAnchor);	
			} else {
				mplNode.appendChild(document.createTextNode(ewt.myPartListMessage));
			}
			mplNode.appendChild(document.createTextNode(" | "));
		}
		
		//MyCart Stuff				
		if ( ! window.TE_showCart || window.TE_showCart == undefined) {
			window.TE_showCart = false;
		}
		else {
			myCartNode = document.createDocumentFragment();
			var cartDiv = document.createElement("t");
			cartDiv.setAttribute("id", "tegreetcartdiv");
			cartDiv.setAttribute("style", "display:inline-block;float:none;");
			myCartNode.appendChild(cartDiv);
			var myCartA = document.createElement("a");
			myCartA.setAttribute("href", myCartUrl); //Add link location.
			if ((myCartCookie < 1) || (myCartCookie == undefined)) {
			
				var myCartImg = document.createElement("img");
				myCartImg.setAttribute("id", "tegreetcartimg");
				myCartImg.setAttribute("src", emptyCartUrl);
				myCartImg.setAttribute("alt", "Cart");
				myCartImg.setAttribute("title", "Cart");
			}
			else {
				var myCartImg = document.createElement("img");
				myCartImg.setAttribute("id", "tegreetcartimg");
				myCartImg.setAttribute("src", fullCartUrl);
				myCartImg.setAttribute("alt", "Cart");
				myCartImg.setAttribute("title", "Cart");
			}
			myCartA.appendChild(myCartImg);
			myCartA.appendChild(document.createTextNode(" "));
			myCartA.appendChild(document.createTextNode("My Cart"));
			cartDiv.appendChild(myCartA);
			var cartspan = document.createElement("t");
			cartspan.setAttribute("id", "cartspan");
			cartspan.setAttribute("style", "display:inline-block;float:none;");
			if ((myCartCookie < 1) || (myCartCookie == undefined)) {
				cartspan.innerHTML = "&nbsp;|&nbsp;";
			}
			else {
				var myCnt = "&nbsp;(" + myCartCookie + ")&nbsp;|&nbsp;";
					cartspan.innerHTML = myCnt;
			}
			cartDiv.appendChild(cartspan);
		}
		
		if (smSession && smSession.length > 0 && smSession != "LOGGEDOFF" && !isSigninPage) {	// Registered, signed in
			var greetingText = document.createTextNode(ewt.helloMessage + " " + 
									(displayName ? displayName : "") + " | ");
				
			var signOutNode = document.createElement("a");
			signOutNode.setAttribute("href", signOutUrl);
			signOutNode.appendChild(document.createTextNode(ewt.signOutMessage));
			greetingNode.appendChild(greetingText);
			if (myCartNode) {
				greetingNode.appendChild(myCartNode);
			}
			if (mplNode) {
				greetingNode.appendChild(mplNode);
			}
			greetingNode.appendChild(signOutNode);
			
		} else {
			var signInNode;
			if (isSigninPage) {
				signInNode = document.createElement("strong");
			} else {
				signInNode = document.createElement("a");
				signInNode.setAttribute("href", signInUrl);
			}
			signInNode.appendChild(document.createTextNode(ewt.signInMessage));		
			
			if ( (appCodes && appCodes.length > 0) && 
				 (displayName && displayName.length > 0) ) {	// Registered, not signed in
					var greetingText = document.createTextNode(ewt.helloMessage + " " + displayName);
					
					var dnRE = new RegExp("%1","ig");
					var notUserMsg = ewt.notUserMessage;
					if (dnRE.test(notUserMsg)) {
						var newMsg = String(notUserMsg);
						notUserMsg = newMsg.replace(dnRE, displayName);
					}
											
					var altGreetingNode = document.createElement("a");
					altGreetingNode.setAttribute("href", "javascript: TE_removeRegisterData()");
					altGreetingNode.appendChild(document.createTextNode(notUserMsg));
										
					greetingNode.appendChild(greetingText);
					greetingNode.appendChild(document.createTextNode(" ("));
					greetingNode.appendChild(altGreetingNode);
					greetingNode.appendChild(document.createTextNode(") | "));
					if (myCartNode) {
						greetingNode.appendChild(myCartNode);
					}
					if (mplNode) {
						greetingNode.appendChild(mplNode);
					}
					greetingNode.appendChild(signInNode);
					
			} else {		// Not Registered
					var isRegisterPage = false;
					var isWhyRegisterPage = false;
					
					// check if we're on the Register page
					if (pageUrl.indexOf("commerce/esr/register.do") != -1) {
						isRegisterPage = true;
					}
				
					if (!isRegisterPage) {
						// check if we're on the Why Register? page
						if (pageUrl.indexOf("/myaccount/learn_more.asp") != -1) {
							isWhyRegisterPage = true;
						}
					}

					var registerNode;
					if (isRegisterPage) {
						registerNode = document.createElement("strong");
					} else {
						registerNode = document.createElement("a");
						registerNode.setAttribute("href", registerUrl);
					}
					registerNode.appendChild(document.createTextNode(ewt.registerMessage));
		
					var whyRegisterNode;
					if (isWhyRegisterPage) {
						whyRegisterNode = document.createElement("strong");
					} else {
						whyRegisterNode = document.createElement("a");
						whyRegisterNode.setAttribute("href", whyRegisterUrl);
					}
					whyRegisterNode.appendChild(document.createTextNode(ewt.whyRegisterMessage));
					
					if (myCartNode) {
						greetingNode.appendChild(myCartNode);
					}
					if (mplNode) {
						greetingNode.appendChild(mplNode);
					}
					
					greetingNode.appendChild(signInNode);
					
					// Self-Registration
					greetingNode.appendChild(document.createTextNode(" | "));
					greetingNode.appendChild(registerNode);
					greetingNode.appendChild(document.createTextNode(" ("));
					greetingNode.appendChild(whyRegisterNode);
					greetingNode.appendChild(document.createTextNode(")"));
			}
			
		}
	}
	
	function TE_updateCart(){
		var cookVal = dojo.io.cookie.getCookie("MyCartCount");
		if (cookVal >= 1) {
			dojo.byId("tegreetcartimg").src = fullCartUrl;
			dojo.byId("cartspan").innerHTML = "&nbsp;(" + cookVal + ")&nbsp;|&nbsp;";
		}
		else {
			dojo.byId("tegreetcartimg").src = emptyCartUrl;
			dojo.byId("cartspan").innerHTML = "&nbsp;|&nbsp;";
		}
	}
	
	function TE_removeRegisterData() {
		TE_ExpireCookie("TECewt1", ".tycoelectronics.com", "/");
		TE_ExpireCookie("TECewt4", ".tycoelectronics.com", "/");
		TE_ExpireCookie("TECewt5", ".tycoelectronics.com", "/");
		TE_ExpireCookie("TECmpl", ".tycoelectronics.com", "/");
		TE_ExpireCookie("TECuso1", ".tycoelectronics.com", "/");

		window.location.replace(window.location);		
	}