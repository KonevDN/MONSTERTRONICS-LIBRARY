/********************************************************************************/
/*		This is the common JavaScript file for Tyco Electronics					*/
/*		This file is loaded by every page				          				*/
/*																				*/
/*																				*/
/*																				*/
/*																				*/
/********************************************************************************/

// functions to execute when page loads
function TE_AddToPageLoad(functionText){
	dojo.addOnLoad(function() {
		eval(functionText);
	});
}

// Register stopError as the default error handler...
window.onerror = TE_errorHandler;



// this function is called by window.error and using javasrcipt calls am emailer on the server to log the error 
var TE_globalAspVarable = "" // this glabal is used by non asp servers to call an asp page/function
var TE_errorHandlerTestEmail = 0;
function TE_errorHandler(message, url, line) 
{
	params = {
		jslineno: line, path: url, message: message
	}
	
	if (TE_errorHandlerTestEmail.length > 0){
		params['email'] = TE_errorHandlerTestEmail;
	}
	
	dojo.io.bind({
		url: "/_TEincludes/TE_error.asp",
		//load: function(type, data, evt) { alert("TE_errorHandler: " + data) }, // debugging
		mimetype: "text/plain",
		content: params
	});	
	
	return true;
}

function TE_getDate(){
    var today = new Date()
	var todayStr = today.toLocaleDateString()
    return todayStr
}

// Get cookie expiration date for registered user cookies
//		(90 days from the current date)
function TE_getUserCookieExpiration() {
	return TE_GetCookieExpiration(90);
}


/************************** Start Cookie Handling Functions *************************/

// function: TE_SetCookie
//   name - name of the cookie
//   value - value of the cookie
//   date - date cookie should expire
//   domain - domain cookie should be written to
//   path - path to use for the cookie
// 
//  example usage:  TE_SetCookie("language_id","3",TE_GetCookieExpiration(365),".tycoelectronics.com","/");
//
function TE_SetCookie(name,value, date, domain, path){
	var cookiestring;
	cookiestring = "";
	cookiestring=name+"="+escape(value)+";EXPIRES="+date+";DOMAIN="+domain+";PATH="+path+";"
	document.cookie=cookiestring;
	if(!TE_GetCookie(name)){
		//alert("Unable to write cookie");
		//alert(cookiestring);
		return false;
	}
	else{
		//alert("Wrote cookie");
		//alert(cookiestring);
		return true;
	}
}

// function: TE_SetCookieNoExpire
//   name - name of the cookie
//   value - value of the cookie
//   domain - domain cookie should be written to
//   path - path to use for the cookie
// 
//  example usage:  TE_SetCookieNoExpire("language_id","3",".tycoelectronics.com","/");
//
//  By not setting the Expiration Date the cookie becomes a session only cookie, non-persistent
// 
function TE_SetCookieNoExpire(name,value, domain, path){
	var cookiestring;
	cookiestring = "";
	cookiestring=name+"="+escape(value)+";DOMAIN="+domain+";PATH="+path+";"
	document.cookie=cookiestring;
	if(!TE_GetCookie(name)){
		//alert("Unable to write cookie");
		//alert(cookiestring);
		return false;
	}
	else{
		//alert("Wrote cookie");
		//alert(cookiestring);
		return true;
	}
}


// function: TE_SetCookieNoEscapeNoExpire
//   name - name of the cookie
//   value - value of the cookie
//   domain - domain cookie should be written to
//   path - path to use for the cookie
// 
//  example usage:  TE_SetCookieNoEscapeNoExpire("ECOMHOME","http://ebiz-dev.us.tycoelectronics.com",".tycoelectronics.com","/");
//
//  By not escaping the cookie value we are violating the RFC controlling cookies, but matching functionality of the ECommerce
//  default.pl menu framework.
// 
function TE_SetCookieNoEscapeNoExpire(name,value, domain, path){
	var cookiestring;
	cookiestring = "";
	cookiestring=name+"="+value+";DOMAIN="+domain+";PATH="+path+";"
	document.cookie=cookiestring;
	if(!TE_GetCookie(name)){
		//alert("Unable to write cookie");
		//alert(cookiestring);
		return false;
	}
	else{
		//alert("Wrote cookie");
		//alert(cookiestring);
		return true;
	}
}
// function: TE_GetCookieExpiration
//   interval - number of days until cookie expires
//
//  example usage:  TE_GetCookieExpiration(10);
//
//  Take the interval given and multiples it by the number of miliseconds in a day and use this to get a Universal Time String
// 
function TE_GetCookieExpiration(interval){
	var UTCstring;
	Today = new Date();
	nomilli=Date.parse(Today);
	Today.setTime(nomilli+interval*24*60*60*1000);
	UTCstring = Today.toUTCString();
	return UTCstring;
}

// function: TE_GetCookie
//   cookiename - name of the cookie
//
//  example usage:  TE_GetCookie("language_id");
//
//  Returns the value set for the cookie.  Used by the cookie setting routine to make sure set has worked.
// 

function TE_GetCookie(cookiename) {
	var cookiestring=""+document.cookie;
	var index1=cookiestring.indexOf(cookiename);
	if (index1==-1 || cookiename=="") return ""; 
	var index2=cookiestring.indexOf(';',index1);
	if (index2==-1) index2=cookiestring.length; 
	return unescape(cookiestring.substring(index1+cookiename.length+1,index2));
}

// function: TE_ExpireCookie
//		name - name of the cookie
//		domain - domain of the cookie (must be same as domain used to create cookie)
//		path - path of the cookie (must be same as path used to create cookie)
//
//	example usage: TE_ExpireCookie("TECewt1", ".tycoelectronics.com", "/");
//

function TE_ExpireCookie(name, domain, path) {
    document.cookie = name + "=; expires=Thu, 01-Jan-70 00:00:01 GMT" + 
    	((domain) ? "; domain=" + domain : "") +
    	((path) ? "; path=" + path : "");
}
/************************** End Cookie Handling Functions *************************/
/************************** Function to Test Domain *******************************/
// function: TE_isTycoElectronicsDomain
//	 
//  returns true if the hostname in the url ends with .tycoelectronics.com or exactly matches tycoelectronics.com
// 
//  Is used by various JavaScript routines to display the header language notice and greeting if within the 
//  tycoelectronics.com domain (so cookie managment used in language setting will work)
//
//	example usage: if (TE_isTycoElectronicsDomain() ) {
//                   ... }
//

function TE_isTycoElectronicsDomain(){
	var TE_baseHostName = new String(window.location.hostname); // let JavaScript figure out the URL 
											//and give me just the host DNS name.
	// 
	var TE_domainRE = new RegExp("^tycoelectronics\.com$|\.tycoelectronics\.com$", "ig") // look for a hostname that ends 
                                                              // tycoelectronics.com ignoring case
	var return_value = false
	if( TE_domainRE.test(TE_baseHostName) ){
	    return_value = true
	}
	return return_value
}
