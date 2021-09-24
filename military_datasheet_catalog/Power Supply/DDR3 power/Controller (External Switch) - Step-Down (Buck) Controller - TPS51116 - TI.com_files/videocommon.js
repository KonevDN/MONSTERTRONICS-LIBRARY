var ajaxLoaded = false;
var serverRoot = "";
var baseURL = "";
function SendHttpRequest (method, url, params, callback, callbackParam)
{
	if (!ajaxLoaded)
	{
		alert ("Ajax not loaded");
		return;
	}
	
    var frameObj = document.getElementById("ajaxFrame");
    frameObj.contentWindow.SendHttpRequest (method, url, params, callback, callbackParam);
}

function AlertOnLoadAjax ()
{
	ajaxLoaded = true;
}

function ParseParamString (paramStr, paramSep, valueSep)
{
	if (arguments.length < 3)
	{
		valueSep = "=";
	}

	if (arguments.length < 2)
	{
		paramSep = ";";
	}

	var params = paramStr.split (paramSep);
	var paramsArr = new Array ();

	for (var i = 0; i < params.length; i++)
	{
		var sepIndex = params [i].indexOf (valueSep);
		paramsArr [params [i].substr (0, sepIndex)] = params [i].substr (sepIndex + 1);
	}

	return paramsArr;
}

function FormatString (str, args)
{
    var strParts = str.split ("`");
    var newStr = "";

    for (var i = 0; i < strParts.length; i++)
    {
        if (i % 2 == 0)
        {
            newStr += strParts [i];
        }
        else
        {
            newStr += arguments [strParts [i]];
        }
    }

    return newStr;
}

function NotEmpty (str, numOfLines)
{
	if (str == null || str == "")
	{
		var newStr = "&nbsp;";
		
		for (var i = 1; i < numOfLines; i++)
		{
			newStr += "<br/>&nbsp;";
		}
		
		return newStr;
	}

	return str;
}

function FormatDuration (duration)
{
	if (duration == null)
	{
		duration = 0;
	}
	
	var mins = Math.floor(duration / 60);
	var secs = duration % 60;
	
	return mins + ":" + (secs < 10 ? "0" + secs : secs);
}

function FormatNumber (num)
{
	if (num == null)
	{
		num = 0;
	}
	
	var mil = Math.floor (num / 1000000);
	var tho = Math.floor (num / 1000) % 1000;
	var sin = num % 1000;
	
	var numStr = "";
	
	if (mil > 0)
	{
		numStr += mil + ",";
		
		if (tho < 100)
		{
			numStr += "0";
		}
		if (tho < 10)
		{
			numStr += "0";
		}
		if (tho == 0)
		{
			numStr += "0,";
		}
	}
	
	if (tho > 0)
	{
		numStr += tho + ",";
	}
		
	if (tho > 0 || mil > 0)
	{
		if (sin < 100)
		{
			numStr += "0";
		}
		if (sin < 10)
		{
			numStr += "0";
		}
	}

	numStr += sin;
	return numStr;
}

function RenderRank (rank)
{
	var html = '<table cellpadding="1" cellspacing="0" border="0"> \
					<tr>';

	for (var i = 0; i < 5; i++)
	{
		html += '<td><img src="/graphics/video/rank-' + (rank > i ? "on" : "off") + '.png" /></td>';
	}

	html +=		'</tr> \
			</table>';

	return html;
}

function MakeUrlParams (paramsArr)
{
    var paramsStr = "";

    for (var param in paramsArr)
    {
        if (paramsArr [param] == null)
        {
            continue;
        }

        if (paramsStr != "")
        {
            paramsStr += "&";
        }

        paramsStr += param + "=" + encodeURIComponent (paramsArr [param]);
    }

    return paramsStr;
}

function GetUrlParams ()
{
	var getParams = new Array ();

	if (document.location.search != "")
	{
		var paramsStr = document.location.href.split ("?") [1];
		var params = paramsStr.split ("&");

		for (var param in params)
		{
			paramParts = params [param].split ("=");
			getParams [paramParts [0]] = paramParts [1];
		}
	}
	
	return getParams;
}

String.prototype.trim = function ()
{
	return this.replace (/^\s+|\s+$/g, "");
}

function GetCurrentLang()
{
	var lang = "en";
	var opLang = document.getElementById("selectLang").options;
	
	for (var i = 0; i < opLang.length; i++)
	{
		if (opLang [i].selected)
		{
			lang = opLang [i].value;
			break;
		}
	}

	return lang;
}

function ReloadPageWithParams (newParams)
{
    
	var params = GetUrlParams ();	
	var langID = GetCurrentLang();
	for ( var key in newParams )
	{
		params[key] =  newParams[key];
	}
	params ["lang"] = GetCurrentLang();	
	//Modified for kintana 40214 start
	if (langID != "en" && langID != "otl" && langID != "de" && langID != "it" && langID != "kr" && langID !="ru" && langID !="br") {
		baseURL ="/general/" + langID +  baseURL;
	} 
	else if(langID == "de" ||langID == "it" || langID == "kr" ||langID =="ru" || langID =="br" ) {
		serverRoot ="http://www.ti.com";
		baseURL = "/ww/" + langID + "/index_video_"+langID+".shtml";
	}
	//Modified for kintana 40214 end	
	else {
		baseURL ="/general" + baseURL;
	}

	document.location.href = serverRoot + baseURL + "?" + MakeUrlParams (params);
			
}

function ReloadPage ()
{
	var params =  new Array ();
	ReloadPageWithParams(params);
}

function RenderPagingWidget (itemsInPage)
{
	var numOfPages = Math.floor ((gTotCatEntries + itemsInPage - 1) / itemsInPage);
	var pageCount = FormatString (NLS ["Paging Items"], gCatEntryPage, numOfPages, gTotCatEntries);
	
	var firstNum = gCatEntryPage - 2;
	if (firstNum <= 0)
	{
		firstNum = 1;
	}
	
	var lastNum = firstNum + 4;
	if (lastNum >= numOfPages)
	{
		lastNum = numOfPages;
		firstNum = lastNum - 4;
		if (firstNum <= 0)
		{
			firstNum = 1;
		}
	}


	var html = '<center><table cellpadding="0" cellspacing="0" border="0"> \
					<tr> \
						<td class="pageWidgetCount">' + pageCount + '</td> \
						<td class="pageWidgetSep">&nbsp;</td>';

	if (gCatEntryPage > 1)
	{
		html +=			'<td class="pageWidgetLink" onclick="JumpToCatPage (1)">&lt; ' + NLS ["Paging First"] + '</td> \
						<td class="pageWidgetSep">&nbsp;</td> \
						<td class="pageWidgetLink" onclick="JumpToCatPage (' + (gCatEntryPage - 1) + ')">' + NLS ["Paging Previous"] + '</td> \
						<td class="pageWidgetSep">&nbsp;</td>';
	}
	
	for (var i = firstNum; i <= lastNum; i++)
	{
		html +=			'<td class="' + (i == gCatEntryPage ? "pageWidgetCurrPage" : "pageWidgetLink") + '" onclick="JumpToCatPage (' + (i) + ')">' + (i) + '</td> \
						<td class="pageWidgetSep">&nbsp;</td>';
	}

	if (numOfPages > 0 && gCatEntryPage < numOfPages)
	{
		html +=			'<td class="pageWidgetLink" onclick="JumpToCatPage (' + (gCatEntryPage + 1) + ')">' + NLS ["Paging Next"] + '</td> \
						<td class="pageWidgetSep">&nbsp;</td> \
						<td class="pageWidgetLink" onclick="JumpToCatPage (' + (numOfPages) + ')">' + NLS ["Paging Last"] + ' &gt;</td> \
						<td class="pageWidgetSep">&nbsp;</td>';
	}
	
	html +=		'</tr> \
				</table></center>';

	document.getElementById("pagingWidget").innerHTML = html;
}

function ParseAjaxEntryResultsCount (resultText)
{
	var lines = resultText.split ("|~~|");
	return lines[0];
}

function ParseAjaxEntryResults (resultText, pageItems)
{
	var lines = resultText.split ("|~~|");
	var counter = 0;

	var catEntries = new Array ();
	
	for (var i = 1; i < lines.length - 1 && counter < pageItems; i++, counter++)
	{
		var props = ParseParamString (lines [i], "|~|");

		var newEntry = new Object ();
		newEntry.entryId = props.entryId;
		newEntry.title = props.title;
		newEntry.thumbnail = props.thumbnail;
		newEntry.description = props.description;
		newEntry.tags = props.tags;
		newEntry.duration = props.duration;
		newEntry.plays = props.plays;
		newEntry.rank = props.rank;
		newEntry.creation = props.creation;

		catEntries.push (newEntry);
	}
	
	return catEntries;
}

function DoOnClickSearch ()
{
	var searchInp = document.getElementById("inputSearch");

	if (searchInp.value == "" || searchInp.value == NLS ["Common Search Term"])
	{
		return;
	}
	
	var params = GetUrlParams ();

	var newParams = new Array ();
	newParams ["lang"] = params ["lang"];
	newParams ["term"] = searchInp.value;
	//Ofer

	document.location.href = "Search.tsp?" + MakeUrlParams (newParams);
}

function DoOnFocusSearch ()
{
	var searchInp = document.getElementById("inputSearch");

	if (searchInp.value == NLS ["Common Search Term"])
	{
		searchInp.value = "";
	}
}

function DoOnBlurSearch ()
{
	var searchInp = document.getElementById("inputSearch");

	if (searchInp.value == "")
	{
		searchInp.value = NLS ["Common Search Term"];
	}
}

function JumpToPage (catid)
{
//	gCatEntryPage = toPage;
//	HideTooltip ();

	var params = new Array ();
//	params ["start"] = toPage;
//	params ["count"] = gPageItems;
	params ["categoryid"] = catid;
	params ["lang"] = GetCurrentLang();			

	document.location.href = "Portal.tsp" + "?" + MakeUrlParams (params);	
}

function GetEllipsedByHeightText (element, text, height)
{
    element.innerHTML = '<span id="ellipsisSpan">' + text + '</span>';

    var inSpan = document.getElementById ('ellipsisSpan');
    if (inSpan.offsetHeight > height)
    {
        var i = 1;
        inSpan.innerHTML = '';

        while (inSpan.offsetHeight < height && i < text.length)
        {
            inSpan.innerHTML = text.substr (0, i) + '...';
            i++; 
        } 

        var returnText = text.substr (0, i - 2) + '...';
        element.innerHTML = "";
        return returnText;
    }

    element.innerHTML = "";
    return text;
}

var delegate = {};
delegate.flashObj = null;

delegate.upload = function()
{
	delegate.flashObj.upload ();
}

delegate.readyHandler = function()
{
	delegate.flashObj = document.getElementById("kalturaCw");
}

delegate.selectHandler = function()
{
	var files = delegate.flashObj.getFiles ();
	if (files.length > 1)
	{
		delegate.flashObj.removeFiles(0, 0);
		files = delegate.flashObj.getFiles ();
	}
	if (delegate.clientCallback != null)
	{
		delegate.clientCallback ("select", files[0].title);
	}
}
	
delegate.singleUploadCompleteHandler = function(args)
{
	delegate.flashObj.addEntries();

	if (delegate.clientCallback != null)
	{
		delegate.clientCallback ("uploadComplete", args[0].title);
	}
}

delegate.allUploadsCompleteHandler = function()
{
}

delegate.entriesAddedHandler = function(entries)
{
	if (delegate.clientCallback != null)
	{
		var entryId = (entries[0].uniqueID == null ? entries[0].entryId : entries[0].uniqueID);
		delegate.clientCallback ("entryAdded", entryId);
	}

/*    var entriesStr = "&entries=";
	if (entries && entries.length > 0)
	{
		for (i=0; i < entries.length; i++)
		{
			entriesStr += entryId + ",";
		}
	}
	node_url = node_url + entriesStr;
	console.log(entries);
	document.getElementById("filStatus").innerHTML = "Upload Complete!";
	*/
}

delegate.progressHandler = function(args)
{	
	if (delegate.clientCallback != null)
	{
		var data = new Object ();
		data.fileName = args[2].title;
		data.fileSize = args [1] / 1000;
		data.progress = Math.round (((args [0] * 100 / args [1]) * 100) / 100);

		delegate.clientCallback ("progress", data);
	}
}
   
delegate.uiConfErrorHandler = function()
{
	if (delegate.clientCallback != null)
	{
		delegate.clientCallback ("error", null);
	}
}
