dojo.require("dojo.html.*");

function xGetElementsByClassName(classname) {
	return dojo.html.getElementsByClassName(classname);
}

function xClientWidth() {
	return dojo.html.getViewport().width;
}