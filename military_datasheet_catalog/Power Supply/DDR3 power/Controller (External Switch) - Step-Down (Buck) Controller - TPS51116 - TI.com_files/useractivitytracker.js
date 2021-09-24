// Modified the following array to include TF.
// Modified for AP Enable Tracking - Start
// Modified the following array to include AF, EF and LD.
// Modified to enable tracking for Videos in PF, TF and EF
// Modified to enable tracking for Third party folders
var tracked_appl_type = [ ["TL","TF","VI","en","Y"], ["TL","TF","VI","cn","Y"], ["TL","TF","VI","jp","Y"],
                          ["PR","PF","VI","en","Y"], ["PR","PF","VI","cn","Y"], ["PR","PF","VI","jp","Y"],
                          ["AT","AF","VI","en","Y"], ["AT","AF","VI","cn","Y"], ["AT","AF","VI","jp","Y"],
                          ["EE","EF","VI","en","Y"], ["EE","EF","VI","cn","Y"], ["EE","EF","VI","jp","Y"],
                          ["LT","LD","DL","en","Y"], ["LT","LD","DL","cn","Y"], ["LT","LD","DL","jp","Y"],
                          ["TL","TF","VP","en","Y"], ["TL","TF","VP","cn","Y"], ["TL","TF","VP","jp","Y"],
                          ["PR","PF","VP","en","Y"], ["PR","PF","VP","cn","Y"], ["PR","PF","VP","jp","Y"],
                          ["EE","EF","VP","en","Y"], ["EE","EF","VP","cn","Y"], ["EE","EF","VP","jp","Y"],
                          ["3C","CF","VI","en","Y"], ["3C","CF","VI","cn","Y"], ["3C","CF","VI","jp","Y"],
                          ["3E","ES","VI","en","Y"], ["3E","ES","VI","cn","Y"], ["3E","ES","VI","jp","Y"],
                          ["3S","SF","VI","en","Y"], ["3S","SF","VI","cn","Y"], ["3S","SF","VI","jp","Y"],
                          ["3R","RF","VI","en","Y"], ["3R","RF","VI","cn","Y"], ["3R","RF","VI","jp","Y"],
                          ["3D","DF","VI","en","Y"], ["3D","DF","VI","cn","Y"], ["3D","DF","VI","jp","Y"]
                        ];
// Modified for AP Enable Tracking - End
/* Wrapper function for constructing a request object.
Parameters:
    reqType: The HTTP request type, such as GET or POST.
    url: The URL of the server program.
    asynch: Whether to send the request asynchronously or not.
    respHandle: The name of the function that will handle the response.
    Any fifth parameters, represented as arguments[4], are the data a
    POST request is designed to send.
*/

function httpRequest(reqType,url,asynch,respHandle){

    //Mozilla-based browsers
    if(window.XMLHttpRequest){
        request = new XMLHttpRequest( );
    } else if (window.ActiveXObject){
        request=new ActiveXObject("Msxml2.XMLHTTP");
        if (! request){
            request=new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    //very unlikely, but we test for a null request
    //if neither ActiveXObject was initialized
    if(request) {
         //if the reqType parameter is POST, then the
        //5th argument to the function is the POSTed data
        if(reqType.toLowerCase( ) != "post") {
            initReq(reqType,url,asynch,respHandle);

        } else {
            //the POSTed data
            var args = arguments[4];
            if(args != null && args.length > 0){
                initReq(reqType,url,asynch,respHandle,args);
            }
        }
    } else {
        //alert("Your browser does not permit the use of all "+
        //"of this application's features!");
    }
}

//event handler for XMLHttpRequest
function handleResponse(){

    if(request.readyState == 4){
        if(request.status == 200){
           var info=request.responseText;
           stylizeDiv(info,document.getElementById("lastViewedEntitiesComponent"));

        }
    }//end outer if
}

/* Initialize a request object that is already constructed */
function initReq(reqType,url,bool,respHandle){
    try{

        url += '&randomid='+Math.random();
        /* Specify the function that will handle the HTTP response */
        request.onreadystatechange=respHandle;
        request.open(reqType,url,bool);
        //if the reqType parameter is POST, then the
        //5th argument to the function is the POSTed data
        if(reqType.toLowerCase( ) == "post") {
            request.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
            request.send(arguments[4]);


        } else {
            request.send(null);
        }
    } catch (errv) {
        //alert(
        //    "The application cannot contact "+
        //    "the server at the moment. "+
        //    "Please try again in a few seconds.\n"+
        //    "Error detail: "+errv.message);
    }
}


function stylizeDiv(bdyTxt,div){
    // Modified for AP Enable Tracking - Start
    // Added a null check before setting the innerHTML.
    if(div != null){
       //reset DIV content
       div.innerHTML="";
       div.innerHTML=bdyTxt;
    }
    // Modified for AP Enable Tracking - End
}


function isApplTracked(entityType, webPageName, activityType, region){

    if(tracked_appl_type != null) {
        for (var i = 0; i < tracked_appl_type.length; i++) {
            var record = tracked_appl_type[i];
            if(record[0] == entityType && record[1] == webPageName && record[2] == activityType && record[3] == region){
                if(record[4] == "Y"){
                    return true;
                }
                else{
                    return false;
                }
            }

        }
    }
    return false;
}

function shouldRecordRetrieve(){
    var a1 = navigator.appName;
    if (a1 !=null && a1 != "")
    {
        //Invoked by Browser
        return true;
    }
    else
    {
        //Invoked by Script
        return false;
    }
}

function userActivityTracker(entityType,entityId,webPageName,activityType,region,url){
    var entityType  = entityType;
    var entityId    = entityId;
    var webPageName = webPageName;
    var activityType= activityType;
    var region  = region;
    var url     = url;
    var host    = location.host;
    if(shouldRecordRetrieve())
    {
        if (navigator.cookieEnabled == 0)
        {
          //alert("You need to enable cookies for this site to load properly!");
        }
        else
        {
          if(isApplTracked(entityType, webPageName, activityType, region))
          {
            //url = '<bean:message key="personalization.ajax.url"/>'+entityType+'<bean:message key="personalization.ajax.url.entityid"/>'+entityId+'<bean:message key="personalization.ajax.url.webpagename"/>'+webPageName+'<bean:message key="personalization.ajax.url.activitytype"/>'+activityType+'<bean:message key="personalization.ajax.url.regionalsite"/>'+region;

            httpRequest("POST",url,true,handleResponse,"allCookies="+encodeURIComponent(document.cookie));
          }
        }
    }
}

