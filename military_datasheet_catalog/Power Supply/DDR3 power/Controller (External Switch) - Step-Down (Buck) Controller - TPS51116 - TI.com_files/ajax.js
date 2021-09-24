var http = this._GetHTTPObject ();
var _callback = null;
var _callbackParam = null;


function SendHttpRequest (method, url, params, callback, callbackParam)
{
	_callback = callback;
	_callbackParam = callbackParam;
	_SendHttpRequestBase (url, false, params, method.toLowerCase () == "post");
}

function SendBlindHttpRequest (method, url, params)
{
	_SendHttpRequestBase (url, true, params, method.toLowerCase () == "post");
}


function _SendHttpRequestBase (url, isBlind, params, isPost)
{
	var today = new Date;
	var uId = today.getFullYear () + ":" + today.getMonth () + ":" + today.getDate () + ":" + today.getHours () + ":" + today.getMinutes () + ":" + today.getSeconds ();

	var theUrl = url + "?UniqueId=" + uId;


	if (isPost)
	{
		http.open ("POST", theUrl, true);

		if (params != null)
		{
			http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//			http.setRequestHeader("Content-length", params.length);	
//			http.setRequestHeader("Connection", "close");
		}
	}
	else
	{
		if (params != null)
		{
			theUrl += "&" + params;
		}

		http.open ("GET", theUrl, true);
	}

	if (isBlind)
	{
		http.onreadystatechange = _HandleBlindHttpResponse;
	}
	else
	{
		http.onreadystatechange = _HandleHttpResponse;
	}


	if (isPost)
	{
		http.send (params);
	}
	else
	{
		http.send (null);
	}
}

function _HandleHttpResponse ()
{
	if (http.readyState == 4)
	{
		_callback (http.responseText, _callbackParam);
	}
}

function _HandleBlindHttpResponse ()
{
	if (http.readyState == 4)
	{
//		alert (http.responseText);
	}
}

function _GetHTTPObject ()
{
	var xmlhttp;
	/*@cc_on
	@if (@_jscript_version >= 5)
		try
		{
			xmlhttp = new ActiveXObject ("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			try
			{
				xmlhttp = new ActiveXObject ("Microsoft.XMLHTTP");
			}
			catch (E)
			{
				xmlhttp = false;
			}
		}
	@else
		xmlhttp = false;
	@end @*/

	if (!xmlhttp && typeof XMLHttpRequest != 'undefined')
	{
		try
		{
			xmlhttp = new XMLHttpRequest ();
		}
		catch (e)
		{
			xmlhttp = false;
		}
	}

	return xmlhttp;
}
