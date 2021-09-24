// utility to check whether client browser supports cookies
function TE_doCookieCheck() {
	var te_cookieValue = dojo.io.cookie.getCookie("TECewt5");
	var te_dateCookie = dojo.io.cookie.getCookie("TECewt6");
		
	if (te_cookieValue == null || te_cookieValue.length != 36 || te_dateCookie == null)
	{
		dojo.io.cookie.setCookie("TECewt5","test",1,"/",".tycoelectronics.com",false);				
		te_cookieValue = dojo.io.cookie.getCookie("TECewt5");
		
		if( te_cookieValue == "test"){
			setTimeout(TE_doCookieScript,100);			
		}
	}
	//else: te_cookieValue ='"+te_cookieValue+"' is set."
}
function TE_doCookieScript() {
	var script = document.createElement("script");
	document.body.appendChild(script);
	script.src =TE_getSecureApplicationServerUrl()+"/commerce/epd/info";
}
TE_AddToPageLoad('TE_doCookieCheck();')