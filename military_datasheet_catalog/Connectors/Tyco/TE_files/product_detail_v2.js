dojo.require("dojo.fx");
dojo.require("dojo.NodeList-fx");
dojo.require("te.fx");

var detailVisible = false;
var myUrlStart;
var myCurrentClass;
var myBreadCrumbs;
var myCurrentLanguage;
var myCurrentInterestArea;
var myFeatureList;
var myLoadingAnimationId;
var docTitle;

function showSimilarChoiceOverlay(layerToShow, parentElement) {
	var scroll, listTop;
	
	if (detailVisible == false) {
		scroll = dijit.getViewport();
		if (scroll.t < 50) {
			listTop = scroll.t + 100 + (50 - scroll.t);
		} else  {
			listTop = scroll.t + 100;
		}	
		dojo.style(layerToShow, "top", listTop + "px");
		
		te.fx.explode( {node:layerToShow, startNode:parentElement, duration:500} ).play();
		detailVisible = true;
	} else {
		te.fx.implode( {node:parentElement, startNode:layerToShow, duration:500} ).play();
		detailVisible = false;
	}
	
	return;
}

function hideSimilarChoiceOverlay(){
	te.fx.implode( {node:"overlayAnchor", startNode:"findSimilarPart", duration:500} ).play();
	detailVisible = false;
}

function selectAll(overlay) {
	var cbArray = document.getElementsByName('cbFindSimilar');

	for(var inx = 0;inx < cbArray.length;inx++) {
		cbArray[inx].checked = true;
	}
}

function clearAll(overlay) {
	var cbArray = document.getElementsByName('cbFindSimilar');

	    for(var inx = 0;inx < cbArray.length;inx++) {
            cbArray[inx].checked = false;
    }
}

function submitChoices(urlStart, currentClass, breadCrumbs, currentLanguage, currentInterestArea,
	 globalInd,currProductId, animationIdToShow) {
	
	myLoadingAnimationId = animationIdToShow;
	showLoadingAnimation();
	myUrlStart = urlStart;
	myCurrentClass = currentClass;
	myBreadCrumbs = breadCrumbs;
	myCurrentLanguage = currentLanguage;
	myCurrProductId = currProductId;

	dojo.style("errorBoxDiv", "display", "none");
	
	var featureList = '';
	var firstFeature = true;
	var cbArray = document.getElementsByName('cbFindSimilar');
	var cntr = 0;
	for (cntr=0;cntr < cbArray.length; cntr++) {
		
		if (cbArray[cntr].checked) {
			//do nothing
		} else {
			if (! firstFeature) {
				featureList += ',';
			}
			featureList += cbArray[cntr].value;
			firstFeature = false;
		}
	}
	myFeatureList = featureList;

	dojo.xhrGet({url: urlStart,
              load: loadFeatureSelector,
              error: findSimilarErrorHandler,
              handleAs: "json",
			  content: {C: myCurrentClass, M: "FSIM", P: myFeatureList, LG: myCurrentLanguage, PID: myCurrProductId} 
	});
    				
    return false;
}

loadFeatureSelector = function(response, ioArgs) {
	if (response.matches == true) {
		var urlString = window.location.protocol + '//' +  window.location.host;
		urlString += myUrlStart + '?C=' + myCurrentClass;
		urlString += '&M=FEAT';
		urlString += '&P=' + myFeatureList;
		urlString += '&BML=' + myBreadCrumbs;
		urlString += '&LG=' + myCurrentLanguage;
		urlString += '&PID=' + myCurrProductId;	
		
		window.location.href = urlString;			
	} else {
		dojo.style("errorBoxDiv", "display", "block");
	}
	
	hideLoadingAnimation();
}

findSimilarErrorHandler = function(response, ioArgs) {
    console.debug("error: " + ioArgs.xhr.status + " - " + ioArgs.xhr.statusText);
}

function showLoadingAnimation(){
	 dojo.style(myLoadingAnimationId, "display", "block");
}

function hideLoadingAnimation(){
	  dojo.style(myLoadingAnimationId, "display", "none");
}

function redirectToProductFeatureSelector() {
	var urlString = window.location.protocol + '//' +  window.location.host;
		urlString += myUrlStart + '?C=' + myCurrentClass;
		urlString += '&M=FEAT';
		urlString += '&P=' + myFeatureList;
		urlString += '&BML=' + myBreadCrumbs;
		urlString += '&LG=' + myCurrentLanguage;
		urlString += '&PID=' + myCurrProductId;	
		
	window.location.href = urlString;
	
	return false;
}

	function setTXRFHomeURLCookie() {

		document.cookie='TXRFHomeURL=' + document.URL.replace(/,/g,"%2C") +
        	';path=/;domain=.tycoelectronics.com';
		return true;
	}

	function setDDEHomeURLCookie() {

		document.cookie='ddeHomeURL=' + document.URL.replace(/,/g,"%2C") +
        	';path=/;domain=.tycoelectronics.com';
		return true;
	}


// CAD Model disclaimer
function hideSection(agreement, layerToHide){
	dojo.byId(layerToHide).style.display = "none";
	if(agreement == "yes"){
		dojo.cookie("signed_disclaimer", "yes", {expires:30, path: "/", domain: ".tycoelectronics.com"});
		recordCADModelDownload(docTitle);
		location.href = docTitle;
	}
}

// CAD Model disclaimer
function showLayer(layerToShow, parentElement, documentTitle){
	
	var tempurl = documentTitle;
	var disclaimerCookieValue;
	var parentNode, layerToShowNode;
	var regexp = new RegExp("\\u007f", "gi");
	docTitle = tempurl.replace(regexp, "%7F");		
	
	disclaimerCookieValue = dojo.cookie("signed_disclaimer");
	
	if (disclaimerCookieValue == null || disclaimerCookieValue == "no") {
		parentNode = dojo.byId(parentElement);
		layerToShowNode = dojo.byId(layerToShow);
		layerToShowNode.left = parentNode.offsetWidth + 20; 
		layerToShowNode.top = parentNode.offsetHeight + 40;
		layerToShowNode.zIndex = 1;
		layerToShowNode.style.display = "block";			
	} else {
		recordCADModelDownload(docTitle);
		location.href = docTitle;
	}		
}

function recordProductDocView(link) {
	s_linkTrackVars = 'events,products';
	s_linkTrackEvents = 'event1';
	s_events = 'event1';
	s_products = ';' + s_prop1;
	s_linkType = 'd';
	s_linkName = 'Product Document - ' + getDocNameFromUrl(link.href);
	s_lnk = s_co(link);
	s_gs('tycoeglobal');
	s_linkTrackVars = 'None';
	s_linkTrackEvents = 'None';
	
	return true;
}

function recordCADModelDownload(url) {
	var link = document.createElement('a');
	link.href="";/*Need this or FF2 throws an error*/
	document.body.appendChild(link);

	s_linkTrackVars = 'events,products';
	s_linkTrackEvents = 'event2';
	s_events = 'event2';
	s_products = ';' + s_prop1;
	s_linkType = 'd';
	s_linkName = 'CAD Model - ' + getDocNameFromUrl(url);
	s_lnk = s_co(link);
	s_gs('tycoeglobal');
	s_linkTrackVars = 'None';
	s_linkTrackEvents = 'None';
	
	return true;
}

function getDocNameFromUrl(url) {
	var docName="";
	var idx = url.lastIndexOf("%7F");
	if (idx != -1) {
		idx += 3;
		if (idx < url.length) {
			docName = url.substring(idx);
		}
	}
	
	return docName;
}