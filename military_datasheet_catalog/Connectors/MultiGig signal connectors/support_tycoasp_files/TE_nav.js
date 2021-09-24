
function TE_displayCorpNavText() {
	var locale = TE_getLocale();
	
	dojo.requireLocalization("te", "ewt", locale);
	var ewt = dojo.i18n.getLocalization("te", "ewt", locale);

	var corpHomeNode = dojo.byId("TE_corpnav_home");
	var elecCompsNode = dojo.byId("TE_corpnav_eleccomps");
	var segmentsNode = dojo.byId("TE_corpnav_segments");
	var whoWeAreNode = dojo.byId("TE_corpnav_whoweare");
	
	corpHomeNode.appendChild(document.createTextNode(ewt.corpHomeMessage));
	elecCompsNode.appendChild(document.createTextNode(ewt.elecCompsMessage));
	segmentsNode.appendChild(document.createTextNode(ewt.segmentsMessage));
	whoWeAreNode.appendChild(document.createTextNode(ewt.whoWeAreMessage));	
}
