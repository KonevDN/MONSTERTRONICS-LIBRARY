var TE_mplWidgetObj;

function addToPartList(requestPartNbr, tcpn) {
	TE_mplWidgetObj.addToPartList(requestPartNbr, tcpn);
}

function openPartList() {
	TE_mplWidgetObj.openWidget();
}

function minimizePartList() {
	TE_mplWidgetObj.minimizeWidget();
}

dojo.addOnLoad(function() {
	if (TE_showMyPartList != undefined && TE_showMyPartList) {
		dojo.require("te.MyPartListWidget");
		TE_mplWidgetObj = new mpl.MyPartListWidget(dojo.byId("TE_mpl_container"));
	}
});

function ExportListToExcelFromPartList(/*Boolean*/ includeFeatures, /*String*/ src){
	registerClickForReporting(src);
	newForm = document.createElement("form");
	newForm.setAttribute("action", TE_getApplicationServerUrl() + "/commerce/mpl/exportExcel.do");
	newForm.setAttribute("method","post");
	field1 = document.createElement("input");
	field1.setAttribute("name", "includeFeatures");
	field1.setAttribute("type", "hidden");
	field1.setAttribute("value", includeFeatures);
	newForm.appendChild(field1);
	field3 = document.createElement("input");
	field3.setAttribute("name", "buildFromPartList");
	field3.setAttribute("type", "hidden");
	field3.setAttribute("value", "true");
	newForm.appendChild(field3);
	field4 = document.createElement("input");
	field4.setAttribute("name", "src");
	field4.setAttribute("type", "hidden");
	field4.setAttribute("value", src);
	newForm.appendChild(field4);
	document.body.appendChild(newForm);
	newForm.submit();
}
	
function ExportListToExcel (/*String[]*/ partNums, /*String*/ documentTitle, /*Boolean*/ includeFeatures, /*String*/ src){
	registerClickForReporting(src);
	newForm = document.createElement("form");
	newForm.setAttribute("action", TE_getApplicationServerUrl() + "/commerce/mpl/exportExcel.do");
	newForm.setAttribute("method","post");
	field1 = document.createElement("input");
	field1.setAttribute("name", "partNums");
	field1.setAttribute("type", "hidden");
	field1.setAttribute("value", partNums);
	newForm.appendChild(field1);
	field2 = document.createElement("input");
	field2.setAttribute("name", "documentTitle");
	field2.setAttribute("type", "hidden");
	field2.setAttribute("value", documentTitle);
	newForm.appendChild(field2);
	field3 = document.createElement("input");
	field3.setAttribute("name", "buildFromPartList");
	field3.setAttribute("type", "hidden");
	field3.setAttribute("value", "false");
	newForm.appendChild(field3);
	field4 = document.createElement("input");
	field4.setAttribute("name", "src");
	field4.setAttribute("type", "hidden");
	field4.setAttribute("value", src);
	newForm.appendChild(field4);
	field5 = document.createElement("input");
	field5.setAttribute("name", "includeFeatures");
	field5.setAttribute("type", "hidden");
	field5.setAttribute("value", includeFeatures);
	newForm.appendChild(field5);
	document.body.appendChild(newForm);
	newForm.submit();
}

function registerClickForReporting(/*String*/ src)
{
	var link = document.createElement('a');
	document.body.appendChild(link);

	s_linkTrackVars = 'None';
	s_linkTrackEvents = 'None';
	s_linkType = 'o';
	s_linkName = 'TE_ExcelExport_' + src;
	s_lnk = s_co(link);
	s_gs('tycoeglobal');
}