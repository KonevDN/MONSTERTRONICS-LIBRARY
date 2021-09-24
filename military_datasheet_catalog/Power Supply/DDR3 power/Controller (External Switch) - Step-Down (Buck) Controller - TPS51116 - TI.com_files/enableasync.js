
/* Wrapper function for constructing a request object.
Parameters:
    reqType: The HTTP request type, such as GET or POST.
    url: The URL of the server program.
    asynch: Whether to send the request asynchronously or not.
    respHandle: The name of the function that will handle the response.
    Any fifth parameters, represented as arguments[4], are the data a
    POST request is designed to send.
*/
var isRequestOpen = false;
var requestDetails;
var currentRequest = 0;
var intervalId;

function httpRequest_1 (reqType,url,asynch,respHandle) {
    //Mozilla-based browsers
    if (window.XMLHttpRequest) {
        request_1 = new XMLHttpRequest( );
    } else if (window.ActiveXObject) {
        request_1=new ActiveXObject("Msxml2.XMLHTTP");
        if (! request_1) {
            request_1=new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    //very unlikely, but we test for a null request
    //if neither ActiveXObject was initialized
    if (request_1) {
         //if the reqType parameter is POST, then the
        //5th argument to the function is the POSTed data
        if (reqType.toLowerCase( ) != "post") {
            initReq_1(reqType,url,asynch,respHandle);

        } else {
            //the POSTed data
            var args = arguments[4];
            if (args != null && args.length > 0) {
                initReq_1(reqType,url,asynch,respHandle,args);
            }
        }
    } else {
        //alert("Your browser does not permit the use of all "+
        //"of this application's features!");
    }
}

//event handler for XMLHttpRequest
function handleResponse_1 () {
    if (request_1.readyState == 4) {
        if (request_1.status == 200) {
           var info=request_1.responseText;        
           // Modified for Parts in Carts - Digikey Integration - Start
           var str = requestDetails[currentRequest][2];
           var index = str.indexOf(":");
           if(index != -1 && str.substring(0,index) == 'distyHankShakeWin') {
               closeDistyHankShakeWin(info, str.substring(index+1));
           }
           // Modified for Parts in Carts - Digikey Integration - End
           // Modified for 92210 Geo selection for Parts and Carts - Start 
           // call sethtml instead of stylizeDiv_1
           sethtml1(info,document.getElementById(requestDetails[currentRequest][2]));
           // Modified for 92210 Geo selection for Parts and Carts - End
        }
        isRequestOpen = false;
        currentRequest++;
    } //end outer if
}

/* Initialize a request object that is already constructed */
function initReq_1 (reqType,url,bool,respHandle) {
    try {
        /* Specify the function that will handle the HTTP response */
        request_1.onreadystatechange=respHandle;
        request_1.open(reqType,url,bool);
        //if the reqType parameter is POST, then the
        //5th argument to the function is the POSTed data
        if (reqType.toLowerCase( ) == "post") {
            request_1.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
            request_1.send(arguments[4]);
        } else {
            request_1.send(null);
        }
    } catch (errv) {
        //alert(
        //   "The application cannot contact "+
        //    "the server at the moment. "+
        //    "Please try again in a few seconds.\n"+
        //    "Error detail: "+errv.message);
    }
}

// Added for 92210 Geo selection for Parts and Carts - Start
function sethtml1(content,div) {
    var search1 = content;
    var script;
    while( script = search1.match(/(<script[^>]+javascript[^>]+>\s*(<!--)?)/i)) {
        search1 = search1.substr(search1.indexOf(RegExp.$1) + RegExp.$1.length);
        if (!(endscript = search1.match(/((-->)?\s*<\/script>)/))) break;
        block = search1.substr(0, search1.indexOf(RegExp.$1));
        search1 = search1.substring(block.length + RegExp.$1.length);
        var oScript = document.createElement('script');
        oScript.text = block;
        document.getElementsByTagName("head").item(0).appendChild(oScript);
    }
    if (div != null) {
        div.innerHTML="";
        try{   
            div.innerHTML = content;
        } catch (errv) {
        // alert(errv.message);
        }
    }
}
// Added for 92210 Geo selection for Parts and Carts - End

function stylizeDiv_1(bdyTxt,div) {
    if (div != null) {
       div.innerHTML="";
       try{   
       div.innerHTML = bdyTxt;
       } catch (errv) {
         //  alert(errv.message);
       }

    }
}

function shouldRecordRetrieve_1(){
    var a1 = navigator.appName;
    if (a1 !=null && a1 != "") { //Invoked by Browser
       return true;
    } else { //Invoked by Script
       return false;
    }
}

function getAsyncData() {
    if (!isRequestOpen) {
        if (null != requestDetails && currentRequest < requestDetails.length) {
            isRequestOpen = true;
            if (shouldRecordRetrieve_1()) {
               httpRequest_1(requestDetails[currentRequest][0],requestDetails[currentRequest][1],true,handleResponse_1);
            }
        }
    }
    clearInterval(intervalId);
    intervalId = null;
    if (currentRequest < requestDetails.length && intervalId == null) {
        intervalId = setInterval("getAsyncData()", 10000);
    }
}




/*
Approach II) Another Generic Ajax request code:
Ajax request can be send to the server using the method: sendAsyncRequest()
Supports multiple Ajax calls simultaneously.
Supports form elements to be passed as arguments.
Parameters:
    url         : Ajax request URL to be called,
    fn          : Callback function name where response object will be sent as arg,
    paramsObj   : Reference parameters to be used after receiving the response object,
    form        : Document form. Elements will be parsed as send as request, if form is passed.

*/

var aReq = new Array();
var paramsArr = new Array();

function getXMLHttpRequest() {
    var xmlhttp = null;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari, etc.
        xmlhttp=new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(xmlhttp == null) {
        try {
            xmlhttp = new ActiveXObject('Msxml2.XMLHTTP');
        } catch(e) {
            throw new Exception('Not supported for this type of async request');
        }
    }
    return xmlhttp;
}

function sendAsyncRequest(url, fn, paramsObj, form) {
    var xmlhttp = getXMLHttpRequest();
    if (xmlhttp == null) {
        return false;
    }
    try {
        url += ( ( url.indexOf('?') + 1 ) ? '&' : '?' ) + ( new Date() ).getTime();
    } catch(e) {}

    idx = aReq.length
    aReq[idx] = xmlhttp;
    var paramsLen = paramsArr.length;
    paramsArr[paramsLen] = paramsObj;
    if (xmlhttp) {
        aReq[idx].onreadystatechange = new Function( ' if (aReq[' + idx +'].readyState==4) { if(aReq['+idx+'].status < 300) {' + fn + '(aReq[' + idx +'].responseText, paramsArr[' + paramsLen + ']);  } else {errorInfo(aReq['+idx+'].status,aReq['+idx+'].statusText);}}');
        if(form) {
            var elemStr = getFormElements(form);
            aReq[idx].open('POST', u, true);
            aReq[idx].setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=UTF-8");
            aReq[idx].setRequestHeader("Content-length", elemStr.length);
            aReq[idx].send(elemStr);
        } else {
            aReq[idx].open('GET', url, true);
            aReq[idx].setRequestHeader("Content-type","text/html");
            aReq[idx].setRequestHeader("Content-length", 0);
            aReq[idx].send(null);
        }
    }
    return true;
}

//Added for testing
function errorInfo(errCode, errMsg) {
    //alert(errCode + " : " + errMsg);
}

function getFormElements(frm) {
    var qs="";
    for(var c = 0 ; c < frm.elements.length ; c++) {
        if(document.all) {
            var el = frm.elements[c];  // [];
        } else {
            var el = frm.elements.item(c);  // [];
        }
        switch(el.type) {
            case "textarea":
            case "hidden":
            case "text":
                qs+=el.name+"="+encodeURIComponent(el.value)+"&";
                break;
            case "select-one":
                if(el.selectedIndex != -1) {
                    sv = el.options[el.selectedIndex].value;
                    qs+=el.name+"="+encodeURIComponent(sv)+"&";
                }
                break;
            case "select-multiple":
                ss = ""
                for(var so = 0 ; so < el.options.length ; so++) {
                    if(el.options[so].selected == true) {
                        ss+=(ss=="")?"":"&"
                            sv = el.options[so].value;
                        ss+=el.name+"="+encodeURIComponent(sv);
                    }
                }
                ss+=(ss=="")?"":"&"
                qs+=ss;
                break;
            case "radio":
            case "checkbox":
                if(el.checked == true) {
                    qs+=el.name+"="+encodeURIComponent(el.value)+"&";
                }
                break;
            default:
                qs+=el.name+"="+encodeURIComponent(el.value)+"&";
        }
    }
    //alert(qs);
    qs = qs.substr(0,(qs.length - 1));
    return qs;
}

