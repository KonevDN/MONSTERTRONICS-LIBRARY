function TE_AddToPageLoad(_1){
dojo.addOnLoad(function(){
eval(_1);
});
};
var TE_globalAspVarable="";
function TE_getDate(){
var _2=new Date();
var _3=_2.toLocaleDateString();
return _3;
};
function TE_getUserCookieExpiration(){
return TE_GetCookieExpiration(90);
};
function TE_SetCookie(_4,_5,_6,_7,_8){
var _9;
_9="";
_9=_4+"="+escape(_5)+";EXPIRES="+_6+";DOMAIN="+_7+";PATH="+_8+";";
document.cookie=_9;
if(!TE_GetCookie(_4)){
return false;
}else{
return true;
}
};
function TE_SetCookieNoExpire(_a,_b,_c,_d){
var _e;
_e="";
_e=_a+"="+escape(_b)+";DOMAIN="+_c+";PATH="+_d+";";
document.cookie=_e;
if(!TE_GetCookie(_a)){
return false;
}else{
return true;
}
};
function TE_SetCookieNoEscapeNoExpire(_f,_10,_11,_12){
var _13;
_13="";
_13=_f+"="+_10+";DOMAIN="+_11+";PATH="+_12+";";
document.cookie=_13;
if(!TE_GetCookie(_f)){
return false;
}else{
return true;
}
};
function TE_GetCookieExpiration(_14){
var _15;
Today=new Date();
nomilli=Date.parse(Today);
Today.setTime(nomilli+_14*24*60*60*1000);
_15=Today.toUTCString();
return _15;
};
function TE_GetCookie(_16){
var _17=""+document.cookie;
var _18=_17.indexOf(_16);
if(_18==-1||_16==""){
return "";
}
var _19=_17.indexOf(";",_18);
if(_19==-1){
_19=_17.length;
}
return unescape(_17.substring(_18+_16.length+1,_19));
};
function TE_ExpireCookie(_1a,_1b,_1c){
document.cookie=_1a+"=; expires=Thu, 01-Jan-70 00:00:01 GMT"+((_1b)?"; domain="+_1b:"")+((_1c)?"; path="+_1c:"");
};
function TE_isTycoElectronicsDomain(){
var _1d=new String(window.location.hostname);
var _1e=new RegExp("^tycoelectronics.com$|.tycoelectronics.com$","ig");
var _1f=false;
if(_1e.test(_1d)){
_1f=true;
}
return _1f;
};
function TE_doCookieCheck(){
dojo.require("dojo.cookie");
var _20=dojo.cookie("TECewt5");
var d=new dojo.Deferred();
d.addCallback(function(){
if(_20==null||_20.length!=36||te_dateCookie==null){
dojo.cookie("TECewt5","test",{expires:1,path:"/",domain:".tycoelectronics.com"});
_20=dojo.cookie("TECewt5");
if(_20=="test"){
setTimeout(TE_doCookieScript,100);
}
}
});
d.callback();
d.addCallback(listener());
};
function TE_doCookieScript(){
var _22=document.createElement("script");
document.body.appendChild(_22);
_22.src=TE_getSecureWWWServerUrl()+"/commerce/epd/info";
};
function listener(){
var _23=window.setInterval(function(){
if(chkRequest()){
var s=document.createElement("script");
document.body.appendChild(s);
s.src=TE_getSecureWWWServerUrl()+"/commerce/epd/hiperformance";
window.clearInterval(_23);
return 1;
}else{
return 0;
}
},200);
};
function chkRequest(){
if(dojo.cookie("TECewt5")=="test"){
return false;
}else{
return true;
}
};
dojo.addOnLoad(function(){
TE_doCookieCheck();
});
function TE_getHomePageURL(){
return "http://www.tycoelectronics.com";
};
function TE_getCatalogURL(){
return "http://catalog.tycoelectronics.com";
};
function TE_getEcommerceUrl(){
return "https://ecommerce.tycoelectronics.com";
};
function TE_getApplicationServerUrl(){
return "http://ecommas.tycoelectronics.com";
};
function TE_getApplicationServerUrlWWW(){
return "http://www.tycoelectronics.com";
};
function TE_getSecureWWWServerUrl(){
return "https://www.tycoelectronics.com";
};
function TE_getEnv(){
return "Prod";
};
function TE_getSecureApplicationServerUrl(){
return "https://ecommas.tycoelectronics.com";
};
function TE_getSupplierServerUrl(){
return "http://supplierportal.tycoelectronics.com/portal/server.pt";
};
function TE_getSearchServerUrl(){
return "http://search.tycoelectronics.com";
};
dojo.addOnLoad(function(){
dojo.require("dojo.parser");
dojo.forEach(djConfig.searchIds,function(id){
dojo.parser.parse(dojo.byId(id).parent);
});
});
var signInUrl=TE_getEcommerceUrl()+"/commerce/secure/commerce.asp?ID=16";
var signOutUrl=TE_getSecureApplicationServerUrl()+"/commerce/uso/logOff.do?url="+escape(window.location);
var registerUrl=TE_getSecureApplicationServerUrl()+"/commerce/esr/register.do";
var whyRegisterUrl=TE_getApplicationServerUrl()+"/commerce/uso/myaccount.do";
var myAccountUrl=TE_getSecureApplicationServerUrl()+"/commerce/uso/myaccount.do";
var myCartUrl=TE_getApplicationServerUrl()+"/commerce/sam/showCreateSampleRequest.do";
var myCartCookie=dojo.cookie("MyCartCount");
var emptyCartUrl="/_TEincludes/ver/920/TEimages/myCart_sm_empty.jpg";
var fullCartUrl="/_TEincludes/ver/920/TEimages/myCart_sm_full.jpg";
function TE_displayGreeting(){
var _26;
var _27=new String(window.location);
var _28=false;
var _29=dojo.byId("TE_signIn");
var _2a=TE_getLocale();
var _2b;
dojo.requireLocalization("te","ewt",_2a);
var ewt=dojo.i18n.getLocalization("te","ewt",_2a);
if(_29.innerHTML){
_29.innerHTML="";
}
if(!TE_isTycoElectronicsDomain()){
var _2d=document.createElement("a");
_2d.setAttribute("href",myAccountUrl);
_2d.appendChild(document.createTextNode(ewt.myAccountMessage));
_29.appendChild(_2d);
return;
}
if(_27.indexOf("login/login.asp")!=-1){
_28=true;
}
var _2e=dojo.cookie("TECuso4");
var _2f=dojo.cookie("TECewt1");
var _30=dojo.cookie("TECewt4");
if(window.TE_showMyPartList==undefined||!window.TE_showMyPartList){
window.TE_showMyPartList=false;
}else{
_26=document.createDocumentFragment();
var _31=document.createElement("img");
_31.setAttribute("src","/_TEincludes/ver/920/TEimages/TE_mpl_addPart_small.gif");
_31.setAttribute("alt",ewt.myPartListMessage);
_31.setAttribute("title",ewt.myPartListMessage);
_26.appendChild(_31);
_26.appendChild(document.createTextNode(" "));
var _32=true;
if(_27.indexOf("commerce/mpl/managePartLists.do")!=-1){
_32=false;
window.TE_showMyPartList=false;
window.TE_showCart=true;
}
if(_32){
var _33=document.createElement("a");
_33.setAttribute("href","javascript:openPartList()");
_33.appendChild(document.createTextNode(ewt.myPartListMessage));
_26.appendChild(_33);
}else{
_26.appendChild(document.createTextNode(ewt.myPartListMessage));
}
_26.appendChild(document.createTextNode(" | "));
}
if(!window.TE_showCart||window.TE_showCart==undefined){
window.TE_showCart=false;
}else{
_2b=document.createDocumentFragment();
var _34=document.createElement("t");
_34.setAttribute("id","tegreetcartdiv");
_34.setAttribute("style","display:inline-block;float:none;");
_2b.appendChild(_34);
var _35=document.createElement("a");
_35.setAttribute("href",myCartUrl);
if((myCartCookie<1)||(myCartCookie==undefined)){
var _36=document.createElement("img");
_36.setAttribute("id","tegreetcartimg");
_36.setAttribute("src",emptyCartUrl);
_36.setAttribute("alt","Cart");
_36.setAttribute("title","Cart");
}else{
var _36=document.createElement("img");
_36.setAttribute("id","tegreetcartimg");
_36.setAttribute("src",fullCartUrl);
_36.setAttribute("alt","Cart");
_36.setAttribute("title","Cart");
}
_35.appendChild(_36);
_35.appendChild(document.createTextNode(" "));
_34.appendChild(_35);
var _37=document.createElement("a");
_37.setAttribute("href",myCartUrl);
_37.appendChild(document.createTextNode("My Cart"));
_34.appendChild(_37);
var _38=document.createElement("t");
_38.setAttribute("id","cartspan");
_38.setAttribute("style","display:inline-block;float:none;");
if((myCartCookie<1)||(myCartCookie==undefined)){
_38.innerHTML="&nbsp;|&nbsp;";
}else{
var _39="&nbsp;("+myCartCookie+")&nbsp;|&nbsp;";
_38.innerHTML=_39;
}
_34.appendChild(_38);
}
if(_2e&&_2e.length>0&&_2e.toLowerCase()=="signed in"&&!_28){
var _3a=document.createTextNode(ewt.helloMessage+" "+(_30?_30:"")+" | ");
var _3b=document.createElement("a");
_3b.setAttribute("href",signOutUrl);
_3b.appendChild(document.createTextNode(ewt.signOutMessage));
_29.appendChild(_3a);
if(_2b){
_29.appendChild(_2b);
}
if(_26){
_29.appendChild(_26);
}
_29.appendChild(_3b);
}else{
var _3c;
if(_28){
_3c=document.createElement("strong");
}else{
_3c=document.createElement("a");
_3c.setAttribute("href",signInUrl);
}
_3c.appendChild(document.createTextNode(ewt.signInMessage));
if((_2f&&_2f.length>0)&&(_30&&_30.length>0)){
var _3a=document.createTextNode(ewt.helloMessage+" "+_30);
var _3d=new RegExp("%1","ig");
var _3e=ewt.notUserMessage;
if(_3d.test(_3e)){
var _3f=String(_3e);
_3e=_3f.replace(_3d,_30);
}
var _40=document.createElement("a");
_40.setAttribute("href","javascript: TE_removeRegisterData()");
_40.appendChild(document.createTextNode(_3e));
_29.appendChild(_3a);
_29.appendChild(document.createTextNode(" ("));
_29.appendChild(_40);
_29.appendChild(document.createTextNode(") | "));
if(_2b){
_29.appendChild(_2b);
}
if(_26){
_29.appendChild(_26);
}
_29.appendChild(_3c);
}else{
var _41=false;
var _42=false;
if(_27.indexOf("commerce/esr/register.do")!=-1){
_41=true;
}
if(!_41){
if(_27.indexOf("/myaccount/learn_more.asp")!=-1){
_42=true;
}
}
var _43;
if(_41){
_43=document.createElement("strong");
}else{
_43=document.createElement("a");
_43.setAttribute("href",registerUrl);
}
_43.appendChild(document.createTextNode(ewt.registerMessage));
var _44;
if(_42){
_44=document.createElement("strong");
}else{
_44=document.createElement("a");
_44.setAttribute("href",whyRegisterUrl);
}
_44.appendChild(document.createTextNode(ewt.whyRegisterMessage));
if(_2b){
_29.appendChild(_2b);
}
if(_26){
_29.appendChild(_26);
}
_29.appendChild(_3c);
_29.appendChild(document.createTextNode(" | "));
_29.appendChild(_43);
_29.appendChild(document.createTextNode(" ("));
_29.appendChild(_44);
_29.appendChild(document.createTextNode(")"));
}
}
};
function TE_updateCart(){
var _45=dojo.cookie("MyCartCount");
if(_45>=1){
dojo.byId("tegreetcartimg").src=fullCartUrl;
dojo.byId("cartspan").innerHTML="&nbsp;("+_45+")&nbsp;|&nbsp;";
}else{
dojo.byId("tegreetcartimg").src=emptyCartUrl;
dojo.byId("cartspan").innerHTML="&nbsp;|&nbsp;";
}
};
function TE_removeRegisterData(){
TE_ExpireCookie("TECewt1",".tycoelectronics.com","/");
TE_ExpireCookie("TECewt4",".tycoelectronics.com","/");
TE_ExpireCookie("TECewt5",".tycoelectronics.com","/");
TE_ExpireCookie("TECmpl",".tycoelectronics.com","/");
TE_ExpireCookie("TECuso1",".tycoelectronics.com","/");
TE_ExpireCookie("TECuso4",".tycoelectronics.com","/");
TE_ExpireCookie("MyCartCount",".tycoelectronics.com","/");
window.location.replace(window.location);
};
var langSelectorArea;
var langCollapseIcon1;
var langCollapseIcon2;
var langCollapseNode;
var wipeTimer=750;
var expandLangDelay=350;
var savedHeight;
var expandLangDelayTimer;
var TE_locale;
var connectHandle1,connectHandle2,connectHandle3,connectHandle4;
function TE_initLanguageSelection(){
var _46=new Array();
_46[0]=1;
_46[1]=2;
_46[2]=3;
_46[3]=4;
_46[4]=5;
_46[5]=6;
_46[6]=8;
_46[7]=9;
_46[8]=10;
_46[9]=14;
_46[10]=15;
_46[11]=16;
_46[12]=17;
var _47=new String(window.location);
var _48=dojo.cookie("language_id");
if(!_48){
TE_setLanguageCookie(1);
_48=dojo.cookie("language_id");
if(!_48||_48!=1){
if(dojo.byId("TE_corpnav_header")){
dojo.style("TE_corpnav_header","padding-right","0px");
}
return;
}
}
langCollapseNode=dojo.byId("TE_langSelector_langContent");
langSelectorArea=dojo.byId("TE_langSelector_bottom");
langExpandIcon=dojo.byId("TE_langSelector_expandLink");
langCollapseIcon1=dojo.byId("TE_langSelector_collapseLink");
langCollapseIcon2=dojo.byId("TE_langSelector_langContentHeader");
connectHandle1=dojo.connect(langSelectorArea,"onmouseover","TE_delayedExpandLanguages");
connectHandle2=dojo.connect(langSelectorArea,"onmouseout","TE_cancelDelayedExpandLanguages");
var _49=false;
if(_48){
for(i=0;i<_46.length;i++){
if(_46[i]==_48){
_49=true;
break;
}
}
}
if(!_49){
TE_setLanguage(1);
}
TE_locale=TE_getLocale();
TE_showLangSelectorText();
dojo.style(langSelectorArea,"display","");
for(i=0;i<_46.length;i++){
if(_46[i]!=_48){
langNode=dojo.byId("langId"+_46[i]);
var _4a=document.createElement("a");
_4a.setAttribute("href","javascript:TE_setLanguage("+_46[i]+")");
_4a.appendChild(langNode.firstChild);
langNode.appendChild(_4a);
}
}
};
function TE_cancelDelayedExpandLanguages(){
clearTimeout(expandLangDelayTimer);
expandLangDelayTimer=null;
};
function TE_delayedExpandLanguages(){
expandLangDelayTimer=setTimeout(TE_expandLanguages,expandLangDelay);
};
function TE_expandLanguages(){
TE_cancelDelayedExpandLanguages();
dojo.disconnect(connectHandle1);
dojo.style(langExpandIcon,"display","none");
dojo.style(langCollapseIcon1,"display","");
closeTE_Inquira_searchselector("TE_Inquira_searchselector");
dojo.require("dojo.fx");
dojo.fx.wipeIn({node:langCollapseNode,duration:this.wipeTimer,onEnd:function(){
connectHandle3=dojo.connect(langCollapseIcon1,"onclick","TE_collapseLanguages");
connectHandle4=dojo.connect(langCollapseIcon2,"onclick","TE_collapseLanguages");
}}).play();
};
function TE_collapseLanguages(){
dojo.disconnect(connectHandle3);
dojo.disconnect(connectHandle4);
dojo.style(langExpandIcon,"display","");
dojo.style(langCollapseIcon1,"display","none");
dojo.fx.wipeOut({node:langCollapseNode,duration:this.wipeTimer,onEnd:function(){
connectHandle1=dojo.connect(langSelectorArea,"onmouseover","TE_delayedExpandLanguages");
}}).play();
};
function TE_showLangSelectorText(){
var _4b=dojo.byId("TE_langSelector_languageHeading");
var _4c=dojo.byId("TE_langSelector_countrySiteHeading");
var _4d=dojo.byId("TE_langSelector_langHeader");
var _4e=dojo.byId("TE_langSelector_expandImg");
var _4f=dojo.byId("TE_langSelector_collapseImg");
var _50=dojo.byId("TE_langSelector_closeImg");
dojo.requireLocalization("te","ewt",TE_locale);
var ewt=dojo.i18n.getLocalization("te","ewt",TE_locale);
_4b.appendChild(document.createTextNode(ewt.languagesMessage));
_4c.appendChild(document.createTextNode(ewt.countrySitesMessage));
_4d.appendChild(document.createTextNode(ewt.worldwideMessage));
_4e.alt=ewt.expandLangSelMessage;
_4e.title=ewt.expandLangSelMessage;
_4f.alt=ewt.closeLangSelMessage;
_4f.title=ewt.closeLangSelMessage;
_50.alt=ewt.closeLangSelMessage;
_50.title=ewt.closeLangSelMessage;
};
function TE_setLanguageCookie(_52){
TE_SetCookie("language_id",_52,TE_GetCookieExpiration(365),".tycoelectronics.com","/");
};
function TE_setLanguage(_53){
TE_setLanguageCookie(_53);
var _54=window.location;
_54=TE_languageReWriteURL(_54,_53);
var re=new RegExp("/catalog/.*/(en|cs|de|es|fr|hu|it|ja|ko|pl|pt|zh-hans|ru)","ig");
if(re.test(_54)){
window.location.reload(true);
}else{
window.location.replace(_54);
}
};
function TE_languageReWriteURL(url,id){
var re,str,_5a;
_5a=url;
re=new RegExp("([?&]LG=)([1-9][0-9]?)","ig");
if(re.test(url)){
str=new String(url);
_5a=str.replace(re,"$1"+id);
}else{
var _5b;
_5b=new RegExp("([#].*$)","ig");
if(_5b.test(url)){
str=new String(url);
_5a=str.replace(_5b,"");
url=_5a;
}
_5b=new RegExp("([?])","ig");
if(_5b.test(url)){
var ree=new RegExp("/catalog/.*/(en|cs|de|es|fr|hu|it|ja|ko|pl|pt|zh-hans|ru)","ig");
var chk=new RegExp("([?&]LG=)([1-9][0-9]?)","ig");
if(ree.test(url)&&chk.test(url)){
var _5e=new String(url);
_5a=_5e.replace(chk,"");
}else{
_5a=url+"&LG="+id;
}
}else{
var noq=new RegExp("/catalog/.*/(en|cs|de|es|fr|hu|it|ja|ko|pl|pt|zh-hans|ru)","ig");
if(noq.test(url)){
_5a=url;
}else{
_5a=url+"?LG="+id;
}
}
}
return _5a;
};
var langToLocale=new Array();
langToLocale[1]="en";
langToLocale[2]="fr";
langToLocale[3]="de";
langToLocale[4]="it";
langToLocale[5]="es";
langToLocale[6]="ja";
langToLocale[7]="zh-hant";
langToLocale[8]="ko";
langToLocale[9]="zh-hans";
langToLocale[10]="pt";
langToLocale[14]="ru";
langToLocale[15]="hu";
langToLocale[16]="cs";
langToLocale[17]="pl";
function TE_getLocale(){
var _60=dojo.cookie("language_id");
if(!_60||_60.length==0){
_60="1";
}
var _61=langToLocale[_60];
if(typeof (_61)=="undefined"){
_61="en";
}
return _61;
};
function TE_displayCorpNavText(){
var _62=TE_getLocale();
dojo.requireLocalization("te","ewt",_62);
var ewt=dojo.i18n.getLocalization("te","ewt",_62);
var _64=dojo.byId("TE_corpnav_home");
var _65=dojo.byId("TE_corpnav_eleccomps");
var _66=dojo.byId("TE_corpnav_segments");
var _67=dojo.byId("TE_corpnav_whoweare");
_64.appendChild(document.createTextNode(ewt.corpHomeMessage));
_65.appendChild(document.createTextNode(ewt.elecCompsMessage));
_66.appendChild(document.createTextNode(ewt.segmentsMessage));
_67.appendChild(document.createTextNode(ewt.whoWeAreMessage));
};
var s_pageName=document.title;
var TE_pageRe=new RegExp("^(.+) - Tyco Electronics$","ig");
if(TE_pageRe.test(s_pageName)){
s_pageName=s_pageName.replace(TE_pageRe,"$1");
}
var s_server="";
var s_channel="";
var s_prop1="";
var s_prop2="";
var s_prop3="";
var s_prop4="";
var s_prop5="";
var s_events="";
var s_products="";
var s_purchaseID="";
var s_eVar1="";
var s_eVar2="";
var s_eVar3="";
var s_eVar4="";
var s_eVar5="";
var s_disableLegacyVars=true;
var s_account="tycoeglobal";
var s_cookieDomainPeriods="2";
var s_currencyCode="USD";
var s_eVarCFG="";
var s_trackDownloadLinks=true;
var s_trackExternalLinks=true;
var s_trackInlineStats=true;
var s_linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls,tar,gz,tif,tiff";
var TE_baseHostName=new String(window.location.hostname);
var TE_hostNameArray;
TE_hostNameArray=TE_baseHostName.split(".");
var firstIndex=0;
for(i=TE_hostNameArray.length-1;i>=0;i--){
var tmpString=new String(TE_hostNameArray[i]);
if(tmpString.length>3){
firstIndex=i;
i=0;
}
}
TE_baseHostName="";
for(i=firstIndex;i<TE_hostNameArray.length;i++){
TE_baseHostName=TE_baseHostName+TE_hostNameArray[i];
if(i<TE_hostNameArray.length-1){
TE_baseHostName=TE_baseHostName+".";
}
}
var s_linkInternalFilters="javascript:,"+TE_baseHostName;
var s_linkLeaveQueryString=false;
var s_linkTrackVars="None";
var s_linkTrackEvents="None";
var s_usePlugins=true;
function s_doPlugins(){
s_vp_getCGI("s_campaign","s_cid");
};
var s_dynamicAccountSelection=true;
var s_dynamicAccountList="tycoeglobal,tycotycoejapan=www.tycoelectronics.com/japan;"+"tycoeglobal,tycoecatalog=ebzasp01.tycoelectronics.com/catalog/ToolingXrefWeb,www.tycoelectronics.com/catalog/ToolingXrefWeb;"+"tycoeglobal,tycoecatalog=catalog.tycoelectronics.com,www.tycoelectronics.com/catalog;"+"tycoeglobal,tycoecatalog=ecommas.tycoelectronics.com/commerce/DocumentDelivery,www.tycoelectronics.com/commerce/DocumentDelivery;"+"tycoeglobal,tycoecatalog=ecommas.tycoelectronics.com/commerce/pcr,www.tycoelectronics.com/commerce/pcr;"+"tycoeglobal,tycoecatalog=ecommas.tycoelectronics.com/commerce/alt,www.tycoelectronics.com/commerce/alt;"+"tycoeglobal,tycoecommerce,tycopcn=ecommas.tycoelectronics.com/commerce/pcnws,www.tycoelectronics.com/commerce/pcnws;"+"tycoeglobal,tycoecommerce=ecommerce.tycoelectronics.com/commerce,ecommas.tycoelectronics.com/commerce,www.tycoelectronics.com/commerce;"+"tycoeglobal=search.tycoelectronics.com;"+"tycoeglobal,tycoemain=www.tycoelectronics.com;"+"tycoeglobal,tycoerelays=relays.tycoelectronics.com;"+"tycoeglobal,tycoemicrodotconnectors=www.microdotconnectors.com;"+"tycoeglobal,tycoetooling=tooling.tycoelectronics.com;"+"tycoeglobal,tycoecircuitprotection=www.circuitprotection.com;"+"tycoeglobal,tycoecorcom=www.cor.com,www.corcom.com;"+"tycoeglobal,tycoeidentification=identification.tycoelectronics.com;"+"tycoeglobal,tycoeenergy=energy.tycoelectronics.com;"+"tycoeglobal,tycoeraychem=raychem.tycoelectronics.com,www.raychem.com;"+"tycoeglobal,tycoepassives=passives.tycoelectronics.com;"+"tycoeglobal,tycoeampnetconnect=www.ampnetconnect.com;"+"tycoeglobal,tycoeloar=elotouch.com.ar;"+"tycoeglobal,tycoelobr=elotouch.com.br;"+"tycoeglobal,tycoelomain=www.elotouch.com;"+"tycoeglobal,tycoelocorner=corner.elotouch.com;"+"tycoeglobal,tycoelode=elotouch.de;"+"tycoeglobal,tycoeloexpress=elotouchexpress.com;"+"tycoeglobal,tycoeloexpressbe=elotouchexpress.be;"+"tycoeglobal,tycoelofr=elotouch.fr;"+"tycoeglobal,tycoelogaming=elogaming.com;"+"tycoeglobal,tycoelouk=elotouch.co.uk;"+"tycoeglobal,tycoelojp=www.tps.co.jp;"+"tycoeglobal,tycoapptool=www.applicationtooling.com;"+"tycoeglobal,tycocomacc=www.comacc.co.uk;"+"tycoeglobal,tycoesupplier=supplierportal.tycoelectronics.com,supplier.tycoelectronics.com,ecommerce.tycoelectronics.com/supplier;"+"tycoeglobal,tycomacomwireless=www.macom-wireless.com;"+"tycoeglobal,tycotelecomosp=www.telecomosp.com;"+"tycoeglobal,tycoecommchannelxraychem=raychem-cx.tycoelectronics.com;"+"tycoeglobal,tycoecommchannelxgicus=gic-us-cx.tycoelectronics.com;"+"tycoeglobal,tycoecommchannelxgiccx=gic-cx.tycoelectronics.com;"+"tycoeglobal,tycotops=tops.us.tycoelectronics.com;"+"tycoeglobal,tycorts=requesttracking.us.tycoelectronics.com;"+"devtyco=dev,topstest,requesttrackingtest;"+"devtyco=qa;"+"tycoeglobal=.";
var s_dynamicAccountMatch=window.location.host+window.location.pathname;
var MAX_SELECTIONS=20;
var DELAY_TIME=500;
var CBOX_CLASSNAME="compareCbox";
var compareForm;
function doCompareSubmit(_68){
var _69=dojo.byId(_68);
var _6a;
var _6b;
var _6c;
var i;
compareForm=_69.form;
_6a=getCompareCheckboxes();
_6b=countCheckedBoxes(_6a);
if(_6b==0){
_6c=getPartCboxIndexInList(_6a,_68);
if(_6c>=MAX_SELECTIONS){
_69.checked=true;
for(i=0;i<(MAX_SELECTIONS-1);i++){
_6a[i].checked=true;
}
}else{
for(i=0;i<_6a.length&&i<MAX_SELECTIONS;i++){
_6a[i].checked=true;
}
}
setTimeout(submitForm,DELAY_TIME);
}else{
if(_6b==1){
if(_69.checked==false){
_69.checked=true;
}else{
_6c=getPartCboxIndexInList(_6a,_68);
if(_6c>=MAX_SELECTIONS){
for(i=0;i<(MAX_SELECTIONS-1);i++){
_6a[i].checked=true;
}
}else{
for(i=0;i<_6a.length&&i<MAX_SELECTIONS;i++){
_6a[i].checked=true;
}
}
}
setTimeout(submitForm,DELAY_TIME);
}else{
submitForm();
}
}
};
function submitForm(){
compareForm.submit();
};
function countCheckedBoxes(_6e){
var _6f=0;
var i;
for(i=0;i<_6e.length;i++){
if(_6e[i].checked==true){
_6f++;
}
}
return _6f;
};
function getCompareCheckboxes(){
var _71;
var _72;
var _73=new Array();
var i,j=0;
_71=compareForm.getElementsByTagName("input");
for(i=0;i<_71.length;i++){
if(dojo.hasClass(_71[i],CBOX_CLASSNAME)){
_73[j]=_71[i];
j++;
}
}
return _73;
};
function getPartCboxIndexInList(_76,_77){
var _78;
var i;
for(i=0;i<_76.length;i++){
if(_76[i].getAttribute("id")==_77){
_78=i;
break;
}
}
return _78;
};
function doCheck(_7a){
var _7b;
var _7c;
compareForm=_7a.form;
_7b=getCompareCheckboxes();
_7c=countCheckedBoxes(_7b);
if(_7c>MAX_SELECTIONS){
alert("A maximum of "+MAX_SELECTIONS+" products may be selected for comparison!");
_7a.checked=false;
}
};
function requestSamples(_7d,_7e){
var _7f=TE_getApplicationServerUrl()+"/commerce/sam/createSampleReq.do";
var _80=encodeURIComponent(_7d);
var _81=encodeURIComponent(_7e);
_7f+="?TCPN="+_80+"&RQPN="+_81;
recordClick(_7d);
setTimeout(function(){
window.location=_7f;
},100);
};
function recordClick(_82){
var _83=document.createElement("a");
_83.href="";
document.body.appendChild(_83);
var _84=String(_82).replace(/;/gm," ").replace(/,/gm," ");
s_linkTrackVars="prop8,events,products";
s_linkTrackEvents="scAdd";
s_prop8=s_pageName;
s_events="scAdd";
s_products=";"+_84;
s_linkType="o";
s_linkName="TE_RequestSamples";
s_lnk=s_co(_83);
s_gs("tycoeglobal");
s_linkTrackVars="None";
s_linkTrackEvents="None";
};
var TE_mplWidgetObj;
var TE_mplMessages;
function addToPartList(_85,_86){
TE_mplWidgetObj.addToPartList(_85,_86);
};
function openPartList(){
TE_mplWidgetObj.openWidget();
};
function minimizePartList(){
TE_mplWidgetObj.minimizeWidget();
};
dojo.addOnLoad(function(){
if(typeof (TE_showMyPartList)!="undefined"&&TE_showMyPartList){
dojo.require("dojo.i18n");
dojo.require("te.MyPartListWidget");
var _87=TE_getLocale();
dojo.requireLocalization("te","ewt",_87);
TE_mplMessages=dojo.i18n.getLocalization("te","ewt",_87);
TE_mplWidgetObj=new mpl.MyPartListWidget(dojo.byId("TE_mpl_container"));
}
});
function ExportListToExcelFromPartList(_88,src){
registerClickForReporting(src);
newForm=document.createElement("form");
newForm.setAttribute("action",TE_getApplicationServerUrl()+"/commerce/mpl/exportExcel.do");
newForm.setAttribute("method","post");
field1=document.createElement("input");
field1.setAttribute("name","includeFeatures");
field1.setAttribute("type","hidden");
field1.setAttribute("value",_88);
newForm.appendChild(field1);
field3=document.createElement("input");
field3.setAttribute("name","buildFromPartList");
field3.setAttribute("type","hidden");
field3.setAttribute("value","true");
newForm.appendChild(field3);
field4=document.createElement("input");
field4.setAttribute("name","src");
field4.setAttribute("type","hidden");
field4.setAttribute("value",src);
newForm.appendChild(field4);
document.body.appendChild(newForm);
newForm.submit();
};
function ExportListToExcel(_8a,_8b,_8c,src){
registerClickForReporting(src);
newForm=document.createElement("form");
newForm.setAttribute("action",TE_getApplicationServerUrl()+"/commerce/mpl/exportExcel.do");
newForm.setAttribute("method","post");
field1=document.createElement("input");
field1.setAttribute("name","partNums");
field1.setAttribute("type","hidden");
field1.setAttribute("value",_8a);
newForm.appendChild(field1);
field2=document.createElement("input");
field2.setAttribute("name","documentTitle");
field2.setAttribute("type","hidden");
field2.setAttribute("value",_8b);
newForm.appendChild(field2);
field3=document.createElement("input");
field3.setAttribute("name","buildFromPartList");
field3.setAttribute("type","hidden");
field3.setAttribute("value","false");
newForm.appendChild(field3);
field4=document.createElement("input");
field4.setAttribute("name","src");
field4.setAttribute("type","hidden");
field4.setAttribute("value",src);
newForm.appendChild(field4);
field5=document.createElement("input");
field5.setAttribute("name","includeFeatures");
field5.setAttribute("type","hidden");
field5.setAttribute("value",_8c);
newForm.appendChild(field5);
document.body.appendChild(newForm);
newForm.submit();
};
function registerClickForReporting(src){
var _8f=document.createElement("a");
_8f.href="";
document.body.appendChild(_8f);
s_linkTrackVars="None";
s_linkTrackEvents="None";
s_linkType="o";
s_linkName="TE_ExcelExport_"+src;
s_lnk=s_co(_8f);
s_gs("tycoeglobal");
};
var detailVisible=false;
function TE_displaySearchText(){
var _90=TE_getLocale();
dojo.requireLocalization("te","ewt",_90);
var ewt=dojo.i18n.getLocalization("te","ewt",_90);
var _92=dojo.byId("TE_Inquira_searchselector");
var _93=dojo.byId("search_selector");
var _94=dojo.byId("TE_Inquira_searchBy");
var _95=dojo.byId("TE_searchButton");
var _96=dojo.byId("inquiraTypePart");
var _97=dojo.byId("inquiraTypeText");
var _98=dojo.byId("TE_close_searchselector");
var _99="TE_Inquira_searchselector";
var _9a="search_selector";
var _9b=dojo.cookie("language_id");
if(_9b&&_9b.length>0&&_9b!="1"){
_99=_99+"_"+_9b;
_9a=_9a+"_nonEng";
}
dojo.addClass(_92,_99);
dojo.addClass(_93,_9a);
_95.value="  "+ewt.searchMessage+"  ";
_94.appendChild(document.createTextNode(ewt.searchByMessage));
_96.appendChild(document.createTextNode(ewt.partNumberMessage));
_97.appendChild(document.createTextNode(ewt.textMessage));
_98.alt=ewt.closeSearchSelMessage;
_98.title=ewt.closeSearchSelMessage;
enableSubmit();
};
function showTE_Inquira_searchselector(_9c){
if(detailVisible==false){
dojo.byId(_9c).style.display="block";
detailVisible=true;
if(dojo.byId("search_type").value=="Text"){
dojo.byId("search_selector").selectedIndex=1;
}else{
dojo.byId("search_selector").selectedIndex=0;
}
}
};
function closeTE_Inquira_searchselector(_9d){
if(detailVisible==true){
dojo.byId(_9d).style.display="none";
detailVisible=false;
}
};
var qna_submitOK=true;
function TE_SetSearchType(){
var _9e;
_9e=dojo.byId("search_selector").selectedIndex;
if(_9e==1){
dojo.byId("search_type").value="Text";
}else{
dojo.byId("search_type").value="Part";
}
};
function search_inquira_submitQuestion(){
if(!qna_submitOK){
return false;
}
disableSubmit();
TE_SetSearchType();
var _9f=dojo.byId("question_box").value.replace(/^\s+/g,"").replace(/\s+$/g,"");
dojo.byId("question_box").value=_9f;
dojo.byId("inquiraSearchForm").submit();
setTimeout("enableSubmit();",10000);
return false;
};
function disableSubmit(){
qna_submitOK=false;
dojo.byId("TE_searchButton").disabled=true;
};
function enableSubmit(){
qna_submitOK=true;
dojo.byId("TE_searchButton").disabled=false;
};
function overlayControl(obj){
this.body=document.body;
this.docEl=document.documentElement;
this.visible=false;
this.yPos=typeof obj.yPos!="undefined"?obj.yPos:false;
this.scrollPos=[0,0];
this.overlay=dojo.byId(obj.overlay);
this.overlaySize=this.viewPortSize=[0,0];
this.ltIE7=dojo.isIE<7;
this.staticY=false;
var bgs=dojo.query(".preventClick");
if(bgs.length===0){
this.background=document.createElement("div");
dojo.addClass(this.background,"preventClick");
this.body.appendChild(this.background);
}else{
this.background=bgs[0];
}
if(this.ltIE7){
var ifs=dojo.query(".preventClickIE");
if(ifs.length===0){
this.iframe=document.createElement("iframe");
this.iframe.src="/_TEincludes/ver/920/TEimages/TE_transparent.gif";
dojo.addClass(this.iframe,"preventClickIE");
this.body.appendChild(this.iframe);
}else{
this.iframe=ifs[0];
}
}
dojo.connect(window,"onresize",dojo.hitch(this,function(){
if(this.checkVisibility()){
this.getViewportSize();
this.centerOverlay(50);
}
}));
dojo.connect(window,"onscroll",dojo.hitch(this,function(){
if(this.checkVisibility()){
this.centerOverlay();
}
}));
dojo.style(this.overlay,{"position":"absolute","left":"-9999px","display":"block"});
};
overlayControl.prototype.checkVisibility=function(){
return (this.visible===true||(this.visible===false&&dojo.style(this.overlay,"display")=="none"))?true:false;
};
overlayControl.prototype.getViewportSize=function(){
if(typeof window.innerWidth!="undefined"){
this.viewPortSize=[window.innerWidth,window.innerHeight];
}else{
if(typeof this.docEl!="undefined"&&typeof this.docEl.clientWidth!="undefined"&&this.docEl.clientWidth!=0){
this.viewPortSize=[this.docEl.clientWidth,this.docEl.clientHeight];
}else{
this.viewPortSize=[this.body.clientWidth,this.body.clientHeight];
}
}
};
overlayControl.prototype.getOverlaySize=function(){
this.overlaySize=[this.overlay.offsetWidth,this.overlay.offsetHeight];
};
overlayControl.prototype.centerOverlay=function(){
if(typeof window.pageYOffset!="undefined"){
this.scrollPos=[window.pageXOffset,window.pageYOffset];
}else{
if(typeof document.documentElement.scrollTop!="undefined"&&document.documentElement.scrollTop>0){
this.scrollPos=[this.docEl.scrollLeft,this.docEl.scrollTop];
}else{
if(typeof document.body.scrollTop!="undefined"){
this.scrollPos=[document.body.scrollLeft,document.body.scrollTop];
}
}
}
var obj={"width":this.body.offsetWidth+"px","height":this.body.offsetHeight+"px"};
dojo.style(this.background,obj);
if(this.ltIE7){
dojo.style(this.iframe,obj);
}
setTimeout(dojo.hitch(this,function(){
var _a4={};
_a4.left=parseInt(((this.viewPortSize[0]-this.overlaySize[0])/2)+this.scrollPos[0])+"px";
if(this.overlaySize[1]>this.viewPortSize[1]){
if(!this.staticY){
this.staticY=this.scrollPos[1];
}
_a4.top=this.staticY+"px";
}else{
if(this.yPos){
_a4.top=parseInt(this.yPos)+"px";
}else{
if(!this.yPos){
_a4.top=parseInt(((this.viewPortSize[1]-this.overlaySize[1])/2)+this.scrollPos[1])+"px";
}
}
}
dojo.style(this.overlay,_a4);
}),typeof arguments[0]!="undefined"?arguments[0]:0);
};
overlayControl.prototype.showOverlay=function(e){
if(this.overlaySize[0]===0&&this.overlaySize[1]===0){
this.getOverlaySize();
this.hideOverlay();
}
this.visible=true;
this.getViewportSize();
this.centerOverlay();
var obj={"display":"block"};
dojo.style(this.overlay,obj);
dojo.style(this.background,obj);
if(this.ltIE7){
dojo.style(this.iframe,obj);
}
if(typeof e!="undefined"){
dojo.stopEvent(e);
}
};
overlayControl.prototype.hideOverlay=function(){
this.visible=false;
var obj={"display":"none"};
dojo.style(this.overlay,obj);
dojo.style(this.background,obj);
if(this.ltIE7){
dojo.style(this.iframe,obj);
}
if(this.staticY){
this.staticY=false;
}
};

/*
	Copyright (c) 2004-2008, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

/*
	This is a compiled version of Dojo, built for deployment and not for
	development. To get an editable version, please visit:

		http://dojotoolkit.org

	for documentation and information on getting the source.
*/

if(!dojo._hasResource["te.CollapsibleDisplay"]){dojo._hasResource["te.CollapsibleDisplay"]=true;dojo.provide("te.CollapsibleDisplay");dojo.declare("te.CollapsibleDisplay",null,{constructor:function(_1,_2,_3,_4){this.collapseNode=dojo.byId(_1);this.expandIcon=dojo.byId(_2);this.collapseIcon=dojo.byId(_3);if(!_4||_4=="collapse"){this.connectHandle1=dojo.connect(this.expandIcon,"onclick",this,"expand");this.isCollapsed=true;}else{this.connectHandle2=dojo.connect(this.collapseIcon,"onclick",this,"collapse");}this.savedHeight=this.collapseNode.style.height;},isCollapsed:false,expandIcon:null,collapseIcon:null,colapseNode:null,wipeTimer:500,savedHeight:null,connectHandle1:null,connectHandle2:null,expand:function(){if(!this.isCollapsed){return;}dojo.disconnect(this.connectHandle1);this.expandIcon.style.display="none";this.collapseIcon.style.display="";var _5=this;dojo.fx.wipeIn({node:this.collapseNode,duration:this.wipeTimer,onEnd:function(){_5.connectHandle2=dojo.connect(_5.collapseIcon,"onclick",_5,"collapse");_5.isCollapsed=false;}}).play();},collapse:function(){if(this.isCollapsed){return;}dojo.disconnect(this.connectHandle2);this.expandIcon.style.display="";this.collapseIcon.style.display="none";var _6=this;dojo.fx.wipeOut({node:this.collapseNode,duration:this.wipeTimer,onEnd:function(){_6.connectHandle1=dojo.connect(_6.expandIcon,"onclick",_6,"expand");_6.isCollapsed=true;}}).play();}});}if(!dojo._hasResource["te.fx"]){dojo._hasResource["te.fx"]=true;dojo.provide("te.fx");te.fx.explode=function(_7){var _8=dojo.byId(_7.node);var _9=dojo.byId(_7.startNode);var _a=dojo.coords(_9,true);var _b=document.createElement("div");te.fx._copyStyle(_b,_8);with(_b.style){position="absolute";display="none";backgroundColor=dojo.style(_8,"backgroundColor").toLowerCase();}dojo.body().appendChild(_b);with(_8.style){visibility="hidden";display="block";}var _c=dojo.coords(_8,true);with(_8.style){display="none";visibility="visible";}var _d={opacity:{start:0.5,end:1}};_d["height"]={start:_a["h"],end:_c["h"]};_d["width"]={start:_a["w"],end:_c["w"]};_d["top"]={start:_a["y"],end:_c["y"]};_d["left"]={start:_a["x"],end:_c["x"]};var _e=new dojo.animateProperty({node:_b,properties:_d,duration:_7.duration,easing:_7.easing,beforeBegin:function(){dojo.style(_b,"display","block");},onEnd:function(){dojo.style(_8,"display","block");_b.parentNode.removeChild(_b);}});return _e;};te.fx.implode=function(_f){var _10=dojo.byId(_f.node);var _11=dojo.byId(_f.startNode);var _12=dojo.coords(_11,true);var _13=dojo.coords(_10,true);var _14=document.createElement("div");te.fx._copyStyle(_14,_11);dojo._setOpacity(_14,0.3);with(_14.style){position="absolute";display="none";backgroundColor=dojo.style(_11,"backgroundColor").toLowerCase();}dojo.body().appendChild(_14);var _15={opacity:{start:1,end:0.5}};_15["height"]={start:_12["h"],end:_13["h"]};_15["width"]={start:_12["w"],end:_13["w"]};_15["top"]={start:_12["y"],end:_13["y"]};_15["left"]={start:_12["x"],end:_13["x"]};var _16=new dojo.animateProperty({node:_14,properties:_15,duration:_f.duration,easing:_f.easing,beforeBegin:function(){dojo.style(_11,"display","none");dojo.style(_14,"display","block");},onEnd:function(){_14.parentNode.removeChild(_14);}});return _16;};te.fx._copyStyle=function(_17,_18){if(!_18.style.cssText){_17.setAttribute("style",_18.getAttribute("style"));}else{_17.style.cssText=_18.style.cssText;}dojo.attr(_17,"class",dojo.attr(_18,"class"));};}if(!dojo._hasResource["te.MplNewListDlg"]){dojo._hasResource["te.MplNewListDlg"]=true;dojo.provide("te.MplNewListDlg");dojo.declare("mpl.MplNewListDlg",null,{constructor:function(_19,_1a,_1b,_1c,_1d,_1e,_1f){this.partAreaNode=_19;this.newListLink=_1a;this.showDialogOverlayFunc=_1b;this.hideDialogOverlayFunc=_1c;this.hideErrorFunction=_1d;if(this.partAreaNode){this.isWidget=true;}if(_1e){this.isRenameOnly=_1e;this.currentListName=_1f;}this.initialize();},isWidget:false,partAreaNode:null,newListLink:null,showDialogOverlayFunc:null,hideDialogOverlayFunc:null,hideErrorFunction:null,isRenameOnly:false,currentListName:null,listNames:[],newListDlgNode:null,createButton:null,cancelButton:null,partListNameInputNode:null,errorMsgNode:null,inProgress:false,hostUrl:null,MAX_NAME_LENGTH:50,evt_newListLink_onclick_1:null,evt_createButton_onclick_1:null,evt_cancelButton_onclick_1:null,evt_partListNameInputNode_onkeyup_1:null,evt_partListNameInputNode_onkeydown_1:null,initialize:function(){if(this.isWidget){this.newListDlgNode=dojo.byId("TE_mpl_newList_dialog");this.createButton=dojo.byId("TE_mpl_newListDlg_CreateBtn");this.cancelButton=dojo.byId("TE_mpl_newListDlg_CancelBtn");this.partListNameInputNode=dojo.byId("TE_mpl_newListDlg_Name");this.errorMsgNode=dojo.byId("TE_mpl_newList_error");}else{if(this.isRenameOnly){this.newListDlgNode=dojo.byId("TE_mpl_renameList_dialog_manage");this.createButton=dojo.byId("TE_mpl_renameListDlg_CreateBtn_manage");this.cancelButton=dojo.byId("TE_mpl_renameListDlg_CancelBtn_manage");this.partListNameInputNode=dojo.byId("TE_mpl_renameListDlg_Name_manage");this.errorMsgNode=dojo.byId("TE_mpl_renameList_error_manage");}else{this.newListDlgNode=dojo.byId("TE_mpl_newList_dialog_manage");this.createButton=dojo.byId("TE_mpl_newListDlg_CreateBtn_manage");this.cancelButton=dojo.byId("TE_mpl_newListDlg_CancelBtn_manage");this.partListNameInputNode=dojo.byId("TE_mpl_newListDlg_Name_manage");this.errorMsgNode=dojo.byId("TE_mpl_newList_error_manage");}}this.getHostUrl();this.evt_newListLink_onclick_1=dojo.connect(this.newListLink,"onclick",this,"showDialog");},createPartList:function(_20){window.location="/commerce/mpl/createPartList.do?name="+encodeURIComponent(_20)+"&tid="+this.getTrackingUUID();},createPartListAJAX:function(_21){var _22;if(!this.inProgress){_22={name:_21,tid:this.getTrackingUUID()};dojo.io.script.get({url:this.hostUrl+"/commerce/mpl/createPartListAJAX.do",timeout:10000,preventCache:true,callbackParamName:"callback",load:dojo.hitch(this,this.callback_createPartListAJAX),error:dojo.hitch(this,this.callback_createPartListAJAX_err),content:_22});this.inProgress=true;}},renamePartList:function(_23){var _24;if(!this.inProgress){_24={name:_23,tid:this.getTrackingUUID()};dojo.io.script.get({url:this.hostUrl+"/commerce/mpl/renamePartList.do",timeout:10000,preventCache:true,callbackParamName:"callback",load:dojo.hitch(this,this.callback_renamePartList),error:dojo.hitch(this,this.callback_renamePartList_err),content:_24});this.inProgress=true;}},callback_createPartListAJAX:function(_25,_26){if(_25.error){this.handleCustomError(_25.error.errorMsg,_25.error.errorCode);}else{this.loadPartList(_25.listName,_25.listId);}return _25;},callback_renamePartList:function(_27,_28){if(_27.error){this.handleCustomError(_27.error.errorMsg,_27.error.errorCode);}else{this.loadRenamedList(_28.args.content.name,this.currentListName);}return _27;},callback_createPartListAJAX_err:function(_29,_2a){this.handleError(_29);return _29;},callback_renamePartList_err:function(_2b,_2c){this.handleError(_2b);return _2b;},loadPartList:function(_2d,_2e){this.inProgress=false;this.closeDialog();this.finishSuccessfully(_2d,_2e);},loadRenamedList:function(_2f,_30){this.inProgress=false;this.closeDialog();this.currentListName=_2f;this.finishSuccessfully(_2f,_30);},handleError:function(_31){this.closeDialog();this.inProgress=false;this.finishWithError(TE_mplMessages.mplSysErrorMessage,"0");},handleCustomError:function(_32,_33){this.closeDialog();this.inProgress=false;this.finishWithError(_32,_33);},showDialog:function(){this.hideErrorFunction();if(this.isRenameOnly){this.partListNameInputNode.value=this.currentListName;}else{this.partListNameInputNode.value="";}this.showDialogOverlayFunc();this.newListDlgNode.style.display="";this.setDialogCoordinates();this.partListNameInputNode.focus();this.partListNameInputNode.select();this.evt_partListNameInputNode_onkeydown_1=dojo.connect(this.partListNameInputNode,"onkeydown",this,"checkInputLength");this.evt_partListNameInputNode_onkeyup_1=dojo.connect(this.partListNameInputNode,"onkeyup",this,"checkInputLength");this.evt_createButton_onclick_1=dojo.connect(this.createButton,"onclick",this,"handleCreate");this.evt_cancelButton_onclick_1=dojo.connect(this.cancelButton,"onclick",this,"closeDialog");},setDialogCoordinates:function(){if(this.isWidget){var _34=this.partAreaNode.scrollTop;this.newListDlgNode.style.marginTop=_34+10+"px";}else{var _35=dijit.getViewport();var _36=_35.w/2;var _37=dojo.marginBox(this.newListDlgNode).w/2;var _38=Math.ceil(_36)-Math.ceil(_37);var _39=_35.t+125;dijit.placeOnScreen(this.newListDlgNode,{x:_38,y:_39},["TL"]);}},handleCreate:function(){var _3a=this.partListNameInputNode.value;_3a=this.replaceHarmfulCharacters(_3a);_3a=dojo.string.trim(_3a);this.partListNameInputNode.value=_3a;if(!this.isNameValid(_3a)){return;}if(this.isNameDuplicate(_3a)){this.showError(TE_mplMessages.mplNameExistsMessage);return;}if(this.isWidget){this.createPartListAJAX(_3a);}else{if(this.isRenameOnly){this.renamePartList(_3a);}else{this.createPartList(_3a);}}},closeDialog:function(){dojo.style(this.newListDlgNode,"display","none");this.hideDialogOverlayFunc();this.hideError();dojo.disconnect(this.evt_partListNameInputNode_onkeydown_1);dojo.disconnect(this.evt_partListNameInputNode_onkeyup_1);dojo.disconnect(this.evt_createButton_onclick_1);dojo.disconnect(this.evt_cancelButton_onclick_1);this.evt_partListNameInputNode_onkeydown_1=null;this.evt_partListNameInputNode_onkeyup_1=null;this.evt_createButton_onclick_1=null;this.evt_cancelButton_onclick_1=null;},showError:function(_3b){if(this.errorMsgNode.firstChild){this.hideError();}this.errorMsgNode.appendChild(document.createTextNode(_3b));},hideError:function(){if(this.errorMsgNode.firstChild){this.errorMsgNode.removeChild(this.errorMsgNode.firstChild);}},getTrackingUUID:function(){var _3c=dojo.cookie("TECewt5");return _3c;},finishSuccessfully:function(_3d,_3e){},finishWithError:function(_3f,_40){},setlistNames:function(_41){this.listNames=_41;},getHostUrl:function(){var _42=new String(window.location);if(_42.indexOf("https")!=-1){this.hostUrl=TE_getSecureApplicationServerUrl();}else{this.hostUrl=TE_getApplicationServerUrl();}},isNameValid:function(_43){var _44=true;if(_43==""){this.showError(TE_mplMessages.mplNoNameMessage);_44=false;}if(_43.length>this.MAX_NAME_LENGTH){var _45=String(TE_mplMessages.mplNameTooLongMessage);var _46=_45.replace(/\{0\}/ig,(_43.length-this.MAX_NAME_LENGTH));this.showError(_46);_44=false;}return _44;},checkInputLength:function(){var _47=dojo.string.trim(this.partListNameInputNode.value);if(_47.length>this.MAX_NAME_LENGTH){var _48=String(TE_mplMessages.mplNameTooLongMessage);var _49=_48.replace(/\{0\}/ig,(_47.length-this.MAX_NAME_LENGTH));this.showError(_49);}else{if(this.errorMsgNode.firstChild){this.hideError();}}},replaceHarmfulCharacters:function(_4a){_4a=_4a.replace(/\r\n/g," ");_4a=_4a.replace(/\n/g," ");_4a=_4a.replace(/</g," ");_4a=_4a.replace(/>/g," ");return _4a;},isNameDuplicate:function(_4b){for(var i=0;i<this.listNames.length;i++){if(_4b==this.listNames[i][0]){return true;}}return false;},destroy:function(){dojo.disconnect(this.evt_newListLink_onclick_1);}});}if(!dojo._hasResource["te.MplRemovePartDlg"]){dojo._hasResource["te.MplRemovePartDlg"]=true;dojo.provide("te.MplRemovePartDlg");dojo.declare("mpl.MplRemovePartDlg",null,{constructor:function(_4d,_4e,_4f,_50,_51,_52,_53,_54){this.partAreaNode=_4d;this.removePartLink=_4e;this.partKeyId=_4f;this.requestPartNbr=_50;this.partDesc=_51;this.showDialogOverlayFunc=_52;this.hideDialogOverlayFunc=_53;this.hideErrorFunction=_54;if(this.partAreaNode){this.isWidget=true;}this.initialize();},partAreaNode:null,removePartLink:null,partKeyId:null,requestPartNbr:null,partDesc:null,showDialogOverlayFunc:null,hideDialogOverlayFunc:null,hideErrorFunction:null,partDescriptionNode:null,confirmDlgNode:null,confirmButton:null,cancelButton:null,isWidget:false,inProgress:false,hostUrl:null,evt_removePartLink_onclick_1:null,evt_confirmButton_onclick_1:null,evt_cancelButton_onclick_1:null,initialize:function(){if(this.isWidget){this.confirmDlgNode=dojo.byId("TE_mpl_removePart_dialog");this.partDescriptionNode=dojo.byId("TE_mpl_removePartDlg_Desc");this.confirmButton=dojo.byId("TE_mpl_removePartDlg_RemoveBtn");this.cancelButton=dojo.byId("TE_mpl_removePartDlg_CancelBtn");}else{this.confirmDlgNode=dojo.byId("TE_mpl_remove_dialog_manage");this.partDescriptionNode=dojo.byId("TE_mpl_removePartDlg_Desc_manage");this.confirmButton=dojo.byId("TE_mpl_removePartDlg_RemoveBtn_manage");this.cancelButton=dojo.byId("TE_mpl_removePartDlg_CancelBtn_manage");}this.getHostUrl();this.evt_removePartLink_onclick_1=dojo.connect(this.removePartLink,"onclick",this,"showDialog");},removePart:function(_55){var _56;if(!this.inProgress){_56={pk:this.partKeyId,tid:this.getTrackingUUID()};dojo.io.script.get({url:this.hostUrl+"/commerce/mpl/removePart.do",timeout:10000,preventCache:true,callbackParamName:"callback",load:dojo.hitch(this,this.callback_removePart),error:dojo.hitch(this,this.callback_removePart_err),content:_56});this.inProgress=true;}},callback_removePart:function(_57,_58){if(_57.error){this.handleCustomError(_57.error.errorMsg,_57.error.errorCode);}else{this.handleSuccess();}return _57;},callback_removePart_err:function(_59,_5a){this.handleError(_59);return _59;},handleSuccess:function(_5b){this.inProgress=false;this.closeDialog();this.endRemove();},handleCustomError:function(_5c,_5d){this.closeDialog();this.inProgress=false;this.endRemove(_5c,_5d);},handleError:function(_5e){this.closeDialog();this.inProgress=false;this.endRemove(TE_mplMessages.mplSysErrorMessage,"0");},showDialog:function(){this.hideErrorFunction();this.partDescriptionNode.innerHTML=this.requestPartNbr+" "+this.partDesc;this.showDialogOverlayFunc();this.confirmDlgNode.style.display="block";this.setDialogCoordinates();this.evt_confirmButton_onclick_1=dojo.connect(this.confirmButton,"onclick",this,"removePart");this.evt_cancelButton_onclick_1=dojo.connect(this.cancelButton,"onclick",this,"closeDialog");},setDialogCoordinates:function(){if(this.isWidget){var _5f=this.partAreaNode.scrollTop;this.confirmDlgNode.style.marginTop=_5f+10+"px";}else{var _60=dijit.getViewport();var _61=_60.w/2;var _62=dojo.marginBox(this.confirmDlgNode).w/2;var _63=Math.ceil(_61)-Math.ceil(_62);var _64=_60.t+125;dijit.placeOnScreen(this.confirmDlgNode,{x:_63,y:_64},["TL"]);}},closeDialog:function(){dojo.style(this.confirmDlgNode,"display","none");this.hideDialogOverlayFunc();dojo.disconnect(this.evt_confirmButton_onclick_1);dojo.disconnect(this.evt_cancelButton_onclick_1);this.evt_confirmButton_onclick_1=null;this.evt_cancelButton_onclick_1=null;},getTrackingUUID:function(){var _65=dojo.cookie("TECewt5");return _65;},getHostUrl:function(){var _66=new String(window.location);if(_66.indexOf("https")!=-1){this.hostUrl=TE_getSecureApplicationServerUrl();}else{this.hostUrl=TE_getApplicationServerUrl();}},endRemove:function(_67,_68){},destroy:function(){dojo.disconnect(this.evt_removePartLink_onclick_1);}});}if(!dojo._hasResource["te.MplSaveNoteDlg"]){dojo._hasResource["te.MplSaveNoteDlg"]=true;dojo.provide("te.MplSaveNoteDlg");dojo.declare("mpl.MplSaveNoteDlg",null,{constructor:function(_69,_6a,_6b,_6c,_6d,_6e,_6f,_70){this.partAreaNode=_69;this.saveNoteLinks=new dojo.NodeList();this.saveNoteLinks=this.saveNoteLinks.concat(_6a);this.partKeyId=_6c;if(_6d==null){_6d="";}this.noteTxt=_6d;this.showDialogOverlayFunc=_6e;this.hideDialogOverlayFunc=_6f;this.hideErrorFunction=_70;this.displayText=_6b;if(this.partAreaNode){this.isWidget=true;this.isPartNote=true;}else{if(this.partKeyId){this.isPartNote=true;}}this.initialize();},partAreaNode:null,saveNoteLinks:null,partKeyId:null,noteTxt:null,showDialogOverlayFunc:null,hideDialogOverlayFunc:null,hideErrorFunction:null,saveButton:null,cancelButton:null,noteInputNode:null,errorMsgNode:null,dialogHeader:null,displayText:null,isWidget:false,isPartNote:false,saveNoteDlgNode:null,inProgress:false,hostUrl:null,MAX_NOTE_LENGTH:200,evt_saveNoteLinks_onclick_1:null,evt_noteInputNode_onkeydown_1:null,evt_noteInputNode_onkeyup_1:null,evt_saveButton_onclick_1:null,evt_cancelButton_onclick_1:null,initialize:function(){if(this.isWidget){this.saveNoteDlgNode=dojo.byId("TE_mpl_note_dialog");this.saveButton=dojo.byId("TE_mpl_noteDlg_SaveBtn");this.cancelButton=dojo.byId("TE_mpl_notetDlg_CancelBtn");this.noteInputNode=dojo.byId("TE_mpl_noteDlg_noteInput");this.dialogHeader=dojo.byId("TE_mpl_noteDlg_Header");this.errorMsgNode=dojo.byId("TE_mpl_noteDlg_error");}else{this.saveNoteDlgNode=dojo.byId("TE_mpl_note_dialog_manage");this.saveButton=dojo.byId("TE_mpl_noteDlg_SaveBtn_manage");this.cancelButton=dojo.byId("TE_mpl_noteDlg_CancelBtn_manage");this.noteInputNode=dojo.byId("TE_mpl_noteDlg_noteInput_manage");this.dialogHeader=dojo.byId("TE_mpl_noteDlg_Header_manage");this.errorMsgNode=dojo.byId("TE_mpl_noteDlg_error_manage");}this.getHostUrl();this.evt_saveNoteLinks_onclick_1=this.saveNoteLinks.map(dojo.hitch(this,function(x){return dojo.connect(x,"onclick",this,"showDialog");}));},savePartNote:function(_72){var _73;if(!this.inProgress){_73={note:_72,pk:this.partKeyId,tid:this.getTrackingUUID()};dojo.io.script.get({url:this.hostUrl+"/commerce/mpl/addPartNote.do",timeout:10000,preventCache:true,callbackParamName:"callback",load:dojo.hitch(this,this.callback_savePartNote),error:dojo.hitch(this,this.callback_savePartNote_err),content:_73});this.inProgress=true;}},saveListNote:function(_74){var _75;if(!this.inProgress){_75={note:_74,tid:this.getTrackingUUID()};dojo.io.script.get({url:this.hostUrl+"/commerce/mpl/addPartListNote.do",timeout:10000,preventCache:true,callbackParamName:"callback",load:dojo.hitch(this,this.callback_saveListNote),error:dojo.hitch(this,this.callback_saveListNote_err),content:_75});this.inProgress=true;}},callback_savePartNote:function(_76,_77){if(_76.error){this.handleCustomError(_76.error.errorMsg,_76.error.errorCode);}else{this.handleSuccess();}return _76;},callback_saveListNote:function(_78,_79){if(_78.error){this.handleCustomError(_78.error.errorMsg,_78.error.errorCode);}else{this.handleSuccess();}return _78;},callback_saveListNote_err:function(_7a,_7b){this.handleError(_7a);return _7a;},callback_savePartNote_err:function(_7c,_7d){this.handleError(_7c);return _7c;},handleSuccess:function(){this.noteTxt=this.noteInputNode.value;this.inProgress=false;this.closeDialog();this.endEditNote("success",this.noteTxt,"","");},handleCustomError:function(_7e,_7f){this.inProgress=false;this.closeDialog();this.endEditNote("error","",_7e,_7f);},handleError:function(_80){this.inProgress=false;this.closeDialog();this.endEditNote("error","",TE_mplMessages.mplSysErrorMessage,"0");},endEditNote:function(_81,_82,_83,_84){},showDialog:function(){this.noteInputNode.value=this.noteTxt;if(this.dialogHeader.firstChild){this.dialogHeader.removeChild(this.dialogHeader.firstChild);}this.dialogHeader.appendChild(document.createTextNode(this.displayText));this.hideErrorFunction();this.showDialogOverlayFunc();this.saveNoteDlgNode.style.display="";this.setDialogCoordinates();this.noteInputNode.focus();this.evt_noteInputNode_onkeydown_1=dojo.connect(this.noteInputNode,"onkeydown",this,"checkInputLength");this.evt_noteInputNode_onkeyup_1=dojo.connect(this.noteInputNode,"onkeyup",this,"checkInputLength");this.evt_saveButton_onclick_1=dojo.connect(this.saveButton,"onclick",this,"handleSave");this.evt_cancelButton_onclick_1=dojo.connect(this.cancelButton,"onclick",this,"closeDialog");},setDialogCoordinates:function(){if(this.isWidget){var _85=this.partAreaNode.scrollTop;this.saveNoteDlgNode.style.marginTop=_85+10+"px";}else{var _86=dijit.getViewport();var _87=_86.w/2;var _88=dojo.marginBox(this.saveNoteDlgNode).w/2;var _89=Math.ceil(_87)-Math.ceil(_88);var _8a=_86.t+125;dijit.placeOnScreen(this.saveNoteDlgNode,{x:_89,y:_8a},["TL"]);}},handleSave:function(){var _8b=this.noteInputNode.value;_8b=this.replaceHarmfulCharacters(_8b);_8b=dojo.string.trim(_8b);this.noteInputNode.value=_8b;if(!this.validateInput(_8b)){return;}if(this.isPartNote){this.savePartNote(_8b);}else{this.saveListNote(_8b);}},closeDialog:function(){dojo.style(this.saveNoteDlgNode,"display","none");this.hideDialogOverlayFunc();this.hideError();dojo.disconnect(this.evt_noteInputNode_onkeydown_1);dojo.disconnect(this.evt_noteInputNode_onkeyup_1);dojo.disconnect(this.evt_saveButton_onclick_1);dojo.disconnect(this.evt_cancelButton_onclick_1);this.evt_noteInputNode_onkeydown_1=null;this.evt_noteInputNode_onkeyup_1=null;this.evt_saveButton_onclick_1=null;this.evt_cancelButton_onclick_1=null;},showError:function(_8c){if(this.errorMsgNode.firstChild){this.hideError();}this.errorMsgNode.appendChild(document.createTextNode(_8c));},hideError:function(){if(this.errorMsgNode.firstChild){this.errorMsgNode.removeChild(this.errorMsgNode.firstChild);}},validateInput:function(_8d){if(_8d.length>this.MAX_NOTE_LENGTH){var _8e=String(TE_mplMessages.mplNoteTooLongMessage);var _8f=_8e.replace(/\{0\}/ig,(_8d.length-this.MAX_NOTE_LENGTH));this.showError(_8f);return false;}return true;},checkInputLength:function(evt){var _91=dojo.string.trim(this.noteInputNode.value);if(_91.length>this.MAX_NOTE_LENGTH){var _92=String(TE_mplMessages.mplNoteTooLongMessage);var _93=_92.replace(/\{0\}/ig,(_91.length-this.MAX_NOTE_LENGTH));this.showError(_93);}else{if(this.errorMsgNode.firstChild){this.hideError();}}},replaceHarmfulCharacters:function(_94){_94=_94.replace(/\r\n/g," ");_94=_94.replace(/\n/g," ");_94=_94.replace(/</g," ");_94=_94.replace(/>/g," ");return _94;},getTrackingUUID:function(){var _95=dojo.cookie("TECewt5");return _95;},getHostUrl:function(){var _96=new String(window.location);if(_96.indexOf("https")!=-1){this.hostUrl=TE_getSecureApplicationServerUrl();}else{this.hostUrl=TE_getApplicationServerUrl();}},destroy:function(){dojo.forEach(this.evt_saveNoteLinks_onclick_1,function(x){dojo.disconnect(x);});}});}if(!dojo._hasResource["te.MplRemoveNoteDlg"]){dojo._hasResource["te.MplRemoveNoteDlg"]=true;dojo.provide("te.MplRemoveNoteDlg");dojo.declare("mpl.MplRemoveNoteDlg",null,{constructor:function(_98,_99,_9a,_9b,_9c,_9d){this.partAreaNode=_98;this.removeNoteLink=_99;this.partKeyId=_9a;this.showDialogOverlayFunc=_9b;this.hideDialogOverlayFunc=_9c;this.hideErrorFunction=_9d;if(this.partAreaNode){this.isWidget=true;this.isPartNote=true;}else{if(this.partKeyId){this.isPartNote=true;}}this.initialize();},partAreaNode:null,removeNoteLink:null,partKeyId:null,showDialogOverlayFunc:null,hideDialogOverlayFunc:null,hideErrorFunction:null,noteDescriptionNode:null,confirmButton:null,cancelButton:null,confirmDlgNode:null,isWidget:false,isPartNote:false,inProgress:false,hostUrl:null,evt_removeNoteLink_onclick_1:null,evt_confirmButton_onclick_1:null,evt_cancelButton_onclick_1:null,initialize:function(){if(this.isWidget){this.confirmDlgNode=dojo.byId("TE_mpl_removeNote_dialog");this.noteDescriptionNode=dojo.byId("TE_mpl_removeNoteDlg_Desc");this.confirmButton=dojo.byId("TE_mpl_removeNoteDlg_RemoveBtn");this.cancelButton=dojo.byId("TE_mpl_removeNoteDlg_CancelBtn");}else{this.confirmDlgNode=dojo.byId("TE_mpl_removeNote_dialog_manage");this.noteDescriptionNode=dojo.byId("TE_mpl_removeNoteDlg_Desc_manage");this.confirmButton=dojo.byId("TE_mpl_removeNoteDlg_RemoveBtn_manage");this.cancelButton=dojo.byId("TE_mpl_removeNoteDlg_CancelBtn_manage");}this.getHostUrl();this.evt_removeNoteLink_onclick_1=dojo.connect(this.removeNoteLink,"onclick",this,"showDialog");},removePartNote:function(){var _9e;if(!this.inProgress){_9e={pk:this.partKeyId,tid:this.getTrackingUUID()};dojo.io.script.get({url:this.hostUrl+"/commerce/mpl/removePartNote.do",timeout:10000,preventCache:true,callbackParamName:"callback",load:dojo.hitch(this,this.callback_removePartNote),error:dojo.hitch(this,this.callback_removePartNote_err),content:_9e});this.inProgress=true;}},removeListNote:function(){var _9f;if(!this.inProgress){_9f={tid:this.getTrackingUUID()};dojo.io.script.get({url:this.hostUrl+"/commerce/mpl/removePartListNote.do",timeout:10000,preventCache:true,callbackParamName:"callback",load:dojo.hitch(this,this.callback_removeListNote),error:dojo.hitch(this,this.callback_removeListNote_err),content:_9f});this.inProgress=true;}},callback_removePartNote:function(_a0,_a1){if(_a0.error){this.handleCustomError(_a0.error.errorMsg,_a0.error.errorCode);}else{this.handleSuccess();}return _a0;},callback_removeListNote:function(_a2,_a3){if(_a2.error){this.handleCustomError(_a2.error.errorMsg,_a2.error.errorCode);}else{this.handleSuccess();}return _a2;},callback_removePartNote_err:function(_a4,_a5){this.handleError(_a4);return _a4;},callback_removeListNote_err:function(_a6,_a7){this.handleError(_a6);return _a6;},handleSuccess:function(){this.inProgress=false;this.closeDialog();this.endRemoveNote("success","","");},handleCustomError:function(_a8,_a9){this.closeDialog();this.inProgress=false;this.endRemoveNote("error",_a8,_a9);},handleError:function(_aa){this.closeDialog();this.inProgress=false;this.endRemoveNote("error",TE_mplMessages.mplSysErrorMessage,"0");},showDialog:function(){this.hideErrorFunction();this.showDialogOverlayFunc();this.confirmDlgNode.style.display="";this.setDialogCoordinates();this.evt_confirmButton_onclick_1=dojo.connect(this.confirmButton,"onclick",this,"handleRemove");this.evt_cancelButton_onclick_1=dojo.connect(this.cancelButton,"onclick",this,"closeDialog");},setDialogCoordinates:function(){if(this.isWidget){var _ab=this.partAreaNode.scrollTop;this.confirmDlgNode.style.marginTop=_ab+10+"px";}else{var _ac=dijit.getViewport();var _ad=_ac.w/2;var _ae=dojo.marginBox(this.confirmDlgNode).w/2;var _af=Math.ceil(_ad)-Math.ceil(_ae);var _b0=_ac.t+125;dijit.placeOnScreen(this.confirmDlgNode,{x:_af,y:_b0},["TL"]);}},handleRemove:function(){if(this.isPartNote){this.removePartNote();}else{this.removeListNote();}},closeDialog:function(){dojo.style(this.confirmDlgNode,"display","none");this.hideDialogOverlayFunc();dojo.disconnect(this.evt_confirmButton_onclick_1);dojo.disconnect(this.evt_cancelButton_onclick_1);this.evt_confirmButton_onclick_1=null;this.evt_cancelButton_onclick_1=null;},getTrackingUUID:function(){var _b1=dojo.cookie("TECewt5");return _b1;},endRemoveNote:function(_b2,_b3,_b4){},getHostUrl:function(){var _b5=new String(window.location);if(_b5.indexOf("https")!=-1){this.hostUrl=TE_getSecureApplicationServerUrl();}else{this.hostUrl=TE_getApplicationServerUrl();}},destroy:function(){dojo.disconnect(this.evt_removeNoteLink_onclick_1);}});}if(!dojo._hasResource["te.QuickViewWidget"]){dojo._hasResource["te.QuickViewWidget"]=true;dojo.provide("te.QuickViewWidget");dojo.addOnLoad(function(){var _b6=TE_getLocale();TE_qvMessages=dojo.i18n.getLocalization("te","ewt",_b6);var _b7=dojo.query("a.QuickView");_b7.forEach(function(x){new te.QuickViewWidget(x,"auto",false);});});dojo.declare("te.QuickViewWidget",null,{constructor:function(_b9,_ba,_bb){this.partDetailAnchorNode=_b9;this.sidePosition=_ba;this.isMplWidget=_bb;this.partDetailUrl=this.partDetailAnchorNode.href;this.extractPartNumbers();this.getHostUrl();this.evt_partDetailAnchorNode_onmouseover_1=dojo.connect(this.partDetailAnchorNode,"onmouseover",this,"showDelayed");this.evt_partDetailAnchorNode_onmouseout_1=dojo.connect(this.partDetailAnchorNode,"onmouseout",this,"hideDelayed");this.evt_partDetailAnchorNode_onclick_1=dojo.connect(this.partDetailAnchorNode,"onclick",this,"cancelShowDelayed");},SHOW_DELAY:750,partDetailAnchorNode:null,partDetailUrl:null,sidePosition:"auto",isMplWidget:false,qvOuterNode:null,containerNode:null,contentNode:null,screenPosition:null,partDetailHTML:null,isDisplayed:null,inProgress:false,hostUrl:null,tcpn:null,rqpn:null,showDelayTimer:null,hideDelayTimer:null,evt_partDetailAnchorNode_onmouseover_1:null,evt_partDetailAnchorNode_onmouseout_1:null,evt_partDetailAnchorNode_onclick_1:null,evt_qvOuterNode_onmouseover_1:null,evt_qvOuterNode_onmouseout_1:null,showDelayed:function(){this.cancelHideDelayed();if(!this.isDisplayed){this.showDelayTimer=setTimeout(dojo.hitch(this,this.show),this.SHOW_DELAY);}},hideDelayed:function(){this.cancelShowDelayed();if(this.isDisplayed){this.hideDelayTimer=setTimeout(dojo.hitch(this,this.hide),this.SHOW_DELAY);}},cancelShowDelayed:function(){if(this.showDelayTimer){clearTimeout(this.showDelayTimer);this.showDelayTimer=null;}},cancelHideDelayed:function(){if(this.hideDelayTimer){clearTimeout(this.hideDelayTimer);this.hideDelayTimer=null;}},show:function(){this.createQuickViewBox();if(this.partDetailHTML){this.contentNode.innerHTML=this.partDetailHTML;}else{this.retrievePartData();}var _bc=this.qvOuterNode.style.visibility;this.qvOuterNode.style.visibility="hidden";if(this.partDetailHTML){var _bd=this.qvOuterNode.style.display;this.qvOuterNode.style.display="";this.adjustHeight();this.qvOuterNode.style.display=_bd;}dijit.placeOnScreen(this.qvOuterNode,{x:this.screenPosition.x,y:this.screenPosition.y},[this.screenPosition.corner]);this.qvOuterNode.style.visibility=_bc;dojo.style(this.qvOuterNode,"display","");this.evt_qvOuterNode_onmouseover_1=dojo.connect(this.qvOuterNode,"onmouseover",this,"cancelHideDelayed");this.evt_qvOuterNode_onmouseout_1=dojo.connect(this.qvOuterNode,"onmouseout",this,"hideDelayed");setTimeout(dojo.hitch(this,this.reportEvent),10);this.isDisplayed=true;},hide:function(){if(this.isDisplayed){new dojo.NodeList(this.qvOuterNode).orphan();dojo.disconnect(this.evt_qvOuterNode_onmouseover_1);dojo.disconnect(this.evt_qvOuterNode_onmouseout_1);this.evt_qvOuterNode_onmouseover_1=null;this.evt_qvOuterNode_onmouseout_1=null;this.qvOuterNode=null;this.isDisplayed=false;}},extractPartNumbers:function(){var _be=this.partDetailUrl.split("&");for(var i=0;i<_be.length;i++){var _c0=_be[i].split("=");if(_c0[0]=="TCPN"){this.tcpn=this.decodePartNumber(_c0[1]);}else{if(_c0[0]=="RQPN"){this.rqpn=this.decodePartNumber(_c0[1]);}}}},decodePartNumber:function(_c1){var _c2=_c1.replace(/\+/g,"%20");_c2=decodeURIComponent(_c2);return _c2;},retrievePartData:function(){if(!this.inProgress){var _c3;if(this.isMplWidget){_c3={TCPN:this.tcpn,RQPN:this.rqpn,mpl:"Y"};}else{_c3={TCPN:this.tcpn,RQPN:this.rqpn};}dojo.io.script.get({url:this.hostUrl+"/commerce/mpl/getQuickView.do",timeout:10000,callbackParamName:"callback",load:dojo.hitch(this,this.callback_retrievePartData),error:dojo.hitch(this,this.callback_retrievePartData_err),content:_c3});this.inProgress=true;}},callback_retrievePartData:function(_c4,_c5){this.loadPartData(_c4);return _c4;},callback_retrievePartData_err:function(_c6,_c7){this.handleError(_c6);return _c6;},loadPartData:function(_c8){this.partDetailHTML=_c8.html.lDiv;this.partDetailHTML+="<a href=\""+this.partDetailUrl+"\">"+_c8.html.partImage+"</a>";this.partDetailHTML+=_c8.html.partNumPre;this.partDetailHTML+="<a href=\""+this.partDetailUrl+"\">"+_c8.html.partNum+"</a>";this.partDetailHTML+=_c8.html.partNumPost+_c8.html.partStatus+_c8.html.partListLink;this.partDetailHTML+=_c8.html.samplesLink+_c8.html.partDesc+_c8.html.partAttrs;this.contentNode.innerHTML=this.partDetailHTML;this.adjustHeight();this.inProgress=false;},handleError:function(_c9){if(_c9){this.contentNode.innerHTML=_c9.error.html;}else{this.contentNode.innerHTML="<div class=\"TE_quickView_error\">"+TE_qvMessages.quickViewSysErrorMessage+"</div>";}this.inProgress=false;},createQuickViewBox:function(){this.qvOuterNode=document.createElement("div");this.qvOuterNode.style.display="none";this.containerNode=document.createElement("div");var _ca=document.createElement("span");dojo.addClass(_ca,"TE_quickView_title");this.contentNode=document.createElement("div");this.determineScreenPosition();dojo.addClass(this.qvOuterNode,"TE_quickView_"+this.screenPosition.horiz+this.screenPosition.vert);dojo.addClass(this.containerNode,"TE_quickView_"+this.screenPosition.horiz+"contain");this.qvOuterNode.appendChild(this.containerNode);_ca.appendChild(document.createTextNode(TE_qvMessages.quickViewProdDtlsMessage+" "+this.rqpn));this.containerNode.appendChild(_ca);this.containerNode.appendChild(this.contentNode);dojo.body().appendChild(this.qvOuterNode);},determineScreenPosition:function(){this.screenPosition={x:0,y:0,horiz:"R",vert:"T",corner:"TL"};var _cb=dojo.coords(this.partDetailAnchorNode,true);var _cc=dojo.marginBox(this.partDetailAnchorNode).w;var _cd=dijit.getViewport();var _ce=_cd.w/2;var _cf=_cd.h/4;var _d0=_cf*3;if(this.sidePosition=="left"){this.screenPosition.horiz="L";}else{if(this.sidePosition=="right"){this.screenPosition.horiz="R";}else{if(_cb.l<_ce){this.screenPosition.horiz="R";}else{this.screenPosition.horiz="L";}}}var _d1=_cd.t;var _d2=_cb.y-_d1;if(_d2<=_cf){this.screenPosition.vert="T";}else{if(_d2>=_d0){this.screenPosition.vert="B";}else{this.screenPosition.vert="M";}}if(this.screenPosition.vert=="B"){this.screenPosition.corner="B";}else{this.screenPosition.corner="T";}if(this.screenPosition.horiz=="R"){this.screenPosition.corner+="L";}else{this.screenPosition.corner+="R";}_d2+=_d1;this.screenPosition.y=_d2;this.screenPosition.x=_cb.x;if(this.screenPosition.horiz=="R"){this.screenPosition.x+=_cc+2;}},adjustHeight:function(){var _d3;var _d4=0;var _d5=0;var _d6=0;if(dojo.byId("TE_quickView_lContent")){_d4=dojo._getBorderBox(dojo.byId("TE_quickView_lContent")).h;}if(dojo.byId("TE_quickView_rContent")){_d5=dojo._getBorderBox(dojo.byId("TE_quickView_rContent")).h;}if(dojo.byId("TE_quickView_error")){_d6=dojo._getBorderBox(dojo.byId("TE_quickView_error")).h;}_d3=_d4;if(_d5>_d3){_d3=_d5;}if(_d6>_d3){_d3=_d6;}if(_d3>147){this.qvOuterNode.style.height=(_d3+18)+"px";this.containerNode.style.height=(_d3+16)+"px";}},reportEvent:function(){s_prop1=this.tcpn;s_linkTrackVars="None";s_linkTrackEvents="None";s_linkType="o";s_linkName="TE_QuickView";s_lnk=s_co(this.partDetailAnchorNode);s_gs("tycoeglobal");},getHostUrl:function(){var _d7=new String(window.location);if(_d7.indexOf("https")!=-1){this.hostUrl=TE_getSecureApplicationServerUrl();}else{this.hostUrl=TE_getApplicationServerUrl();}},destroy:function(){dojo.disconnect(this.evt_partDetailAnchorNode_onmouseover_1);dojo.disconnect(this.evt_partDetailAnchorNode_onmouseout_1);dojo.disconnect(this.evt_partDetailAnchorNode_onclick_1);}});}if(!dojo._hasResource["te.MplPart"]){dojo._hasResource["te.MplPart"]=true;dojo.provide("te.MplPart");dojo.declare("mpl.MplPart",null,{constructor:function(_d8,_d9,_da,_db,_dc,_dd,_de,_df){this.partAreaNode=_d9;this.tcpn=_da;this.requestPartNbr=_db;this.partKeyId=_dc;this.partDesc=_dd;this.noteTxt=_de;this.partDetailUrl=_df;this.mplPartListWidget=_d8;this.createOptionsMenu();this.createNote();this.createRow();mpl.PartManager.add(this);this.evt_partRowNode_onmouseover_1=dojo.connect(this.partRowNode,"onmouseover",this,"addHoverClass");this.evt_partRowNode_onmouseout_1=dojo.connect(this.partRowNode,"onmouseout",this,"removeHoverClass");},HIDE_DELAY:750,mplPartListWidget:null,partAreaNode:null,optionsMenuNode:null,optionsMenuEditNoteNode:null,optionsMenuAddNoteNode:null,optionsMenuRemoveNoteNode:null,optionsMenuDetailNode:null,noteNode:null,isNoteIconDisplayed:false,partRowNode:null,noteIndNode:null,optionsNode:null,optionsImage:null,removePartNode:null,removePartDialog:null,editPartNoteDialog:null,addPartNoteDialog:null,removePartNoteDialog:null,quickViewWidget:null,requestPartNbr:null,tcpn:null,partKeyId:null,partDesc:null,noteTxt:null,partDetailUrl:null,hideOptionsMenuDelayTimer:null,hideNoteDelayTimer:null,evt_partRowNode_onmouseover_1:null,evt_partRowNode_onmouseout_1:null,evt_optionsNode_onmouseover_1:null,evt_optionsNode_onmouseout_1:null,evt_optionsNode_onclick_1:null,evt_optionsNode_onmouseout_2:null,evt_removePartDialog_endRemove_1:null,evt_editPartNoteDialog_endEditNote_1:null,evt_addPartNoteDialog_endEditNote_1:null,evt_removePartNoteDialog_endRemoveNote_1:null,evt_optionsMenuNode_onmouseover_1:null,evt_optionsMenuNode_onmouseout_1:null,evt_noteIndNode_onmouseover_1:null,evt_noteIndNode_onmouseout_1:null,createRow:function(){this.partRowNode=document.createElement("div");dojo.addClass(this.partRowNode,"TE_mpl_partRow");var _e0=document.createElement("div");dojo.addClass(_e0,"TE_mpl_partRowL");var _e1=document.createElement("div");dojo.addClass(_e1,"TE_mpl_partRowR");this.optionsNode=document.createElement("p");dojo.addClass(this.optionsNode,"TE_mpl_options");this.optionsNode.innerHTML="<a href=\"javascript:void(0)\"></a>";this.optionsImage=document.createElement("img");this.optionsImage.setAttribute("src",mpl.Images.options[0].src);this.optionsImage.setAttribute("alt","");this.optionsNode.firstChild.appendChild(this.optionsImage);var _e2=document.createElement("p");dojo.addClass(_e2,"TE_mpl_partDescr");_e2.innerHTML="<span><a href=\""+this.partDetailUrl+"\">"+this.requestPartNbr+"</a></span>"+this.partDesc;var _e3=_e2.getElementsByTagName("a");this.quickViewWidget=new te.QuickViewWidget(_e3[0],"left",true);this.noteIndNode=document.createElement("p");dojo.addClass(this.noteIndNode,"TE_mpl_noteIndicator");if(this.noteTxt&&this.noteTxt.length>0){this.showNoteIcon();}this.removePartNode=document.createElement("p");dojo.addClass(this.removePartNode,"TE_mpl_partRemove");this.removePartNode.innerHTML="<img src=\""+mpl.Images.delPart[0].src+"\" alt=\""+TE_mplMessages.mplRemovePartMessage+"\" title=\""+TE_mplMessages.mplRemovePartMessage+"\" />";_e0.appendChild(this.optionsNode);_e0.appendChild(_e2);_e1.appendChild(this.noteIndNode);_e1.appendChild(this.removePartNode);this.partRowNode.appendChild(_e0);this.partRowNode.appendChild(_e1);this.partAreaNode.appendChild(this.partRowNode);this.removePartDialog=new mpl.MplRemovePartDlg(this.partAreaNode,this.removePartNode,this.partKeyId,this.requestPartNbr,this.partDesc,dojo.hitch(this.mplPartListWidget,this.mplPartListWidget.showDialogOverlay),dojo.hitch(this.mplPartListWidget,this.mplPartListWidget.hideDialogOverlay),dojo.hitch(this.mplPartListWidget,this.mplPartListWidget.hideError));this.evt_optionsNode_onmouseover_1=dojo.connect(this.optionsNode,"onmouseover",this,"switchToOptionsOverImage");this.evt_optionsNode_onmouseout_1=dojo.connect(this.optionsNode,"onmouseout",this,"switchToOptionsNormalImage");this.evt_optionsNode_onclick_1=dojo.connect(this.optionsNode,"onclick",this,"showOptionsMenu");this.evt_optionsNode_onmouseout_2=dojo.connect(this.optionsNode,"onmouseout",this,"hideOptionsMenuDelayed");this.evt_removePartDialog_endRemove_1=dojo.connect(this.removePartDialog,"endRemove",this,"handlePartRemoval");this.editPartNoteDialog=new mpl.MplSaveNoteDlg(this.partAreaNode,[this.optionsMenuEditNoteNode.firstChild,this.noteIndNode],TE_mplMessages.mplEditNoteMessage,this.partKeyId,this.noteTxt,dojo.hitch(this.mplPartListWidget,this.mplPartListWidget.showDialogOverlay),dojo.hitch(this.mplPartListWidget,this.mplPartListWidget.hideDialogOverlay),dojo.hitch(this.mplPartListWidget,this.mplPartListWidget.hideError));this.addPartNoteDialog=new mpl.MplSaveNoteDlg(this.partAreaNode,[this.optionsMenuAddNoteNode.firstChild],TE_mplMessages.mplAddNoteMessage,this.partKeyId,this.noteTxt,dojo.hitch(this.mplPartListWidget,this.mplPartListWidget.showDialogOverlay),dojo.hitch(this.mplPartListWidget,this.mplPartListWidget.hideDialogOverlay),dojo.hitch(this.mplPartListWidget,this.mplPartListWidget.hideError));this.evt_editPartNoteDialog_endEditNote_1=dojo.connect(this.editPartNoteDialog,"endEditNote",this,"handleEditNote");this.evt_addPartNoteDialog_endEditNote_1=dojo.connect(this.addPartNoteDialog,"endEditNote",this,"handleEditNote");},createOptionsMenu:function(){this.optionsMenuNode=document.createElement("div");this.optionsMenuEditNoteNode=document.createElement("p");var a=document.createElement("a");a.appendChild(document.createTextNode(TE_mplMessages.mplEditNoteMessage));a.setAttribute("href","javascript:void(0)");this.optionsMenuEditNoteNode.appendChild(a);this.optionsMenuNode.appendChild(this.optionsMenuEditNoteNode);this.optionsMenuAddNoteNode=document.createElement("p");var a=document.createElement("a");a.appendChild(document.createTextNode(TE_mplMessages.mplAddNoteMessage));a.setAttribute("href","javascript:void(0)");this.optionsMenuAddNoteNode.appendChild(a);this.optionsMenuNode.appendChild(this.optionsMenuAddNoteNode);this.optionsMenuRemoveNoteNode=document.createElement("p");var a=document.createElement("a");a.appendChild(document.createTextNode(TE_mplMessages.mplRemoveNoteMessage));a.setAttribute("href","javascript:void(0)");this.optionsMenuRemoveNoteNode.appendChild(a);this.optionsMenuNode.appendChild(this.optionsMenuRemoveNoteNode);this.removePartNoteDialog=new mpl.MplRemoveNoteDlg(this.partAreaNode,this.optionsMenuRemoveNoteNode.firstChild,this.partKeyId,dojo.hitch(this.mplPartListWidget,this.mplPartListWidget.showDialogOverlay),dojo.hitch(this.mplPartListWidget,this.mplPartListWidget.hideDialogOverlay),dojo.hitch(this.mplPartListWidget,this.mplPartListWidget.hideError));this.evt_removePartNoteDialog_endRemoveNote_1=dojo.connect(this.removePartNoteDialog,"endRemoveNote",this,"handleRemoveNote");this.optionsMenuDetailNode=document.createElement("p");this.optionsMenuDetailNode.innerHTML="<a href=\""+this.partDetailUrl+"\">"+TE_mplMessages.mplViewProdDtlsMessage+"</a>";this.optionsMenuNode.appendChild(this.optionsMenuDetailNode);if(this.noteTxt&&this.noteTxt.length>0){this.showMenuWithEditNote();}else{this.showMenuWithAddNote();}this.partAreaNode.appendChild(this.optionsMenuNode);this.evt_optionsMenuNode_onmouseover_1=dojo.connect(this.optionsMenuNode,"onmouseover",this,"cancelHideOptionsMenuDelayed");this.evt_optionsMenuNode_onmouseout_1=dojo.connect(this.optionsMenuNode,"onmouseout",this,"hideOptionsMenuDelayed");},showMenuWithAddNote:function(){this.optionsMenuNode.className="TE_mpl_optionsMenu";dojo.style(this.optionsMenuRemoveNoteNode,"display","none");dojo.style(this.optionsMenuEditNoteNode,"display","none");dojo.style(this.optionsMenuAddNoteNode,"display","");},showMenuWithEditNote:function(){this.optionsMenuNode.className="TE_mpl_optionsMenuNotes";dojo.style(this.optionsMenuAddNoteNode,"display","none");dojo.style(this.optionsMenuRemoveNoteNode,"display","");dojo.style(this.optionsMenuEditNoteNode,"display","");},showOptionsMenu:function(){this.cancelHideOptionsMenuDelayed();this.optionsMenuNode.style.display="block";var _e5=dojo._getBorderBox(this.optionsMenuNode).w;this.optionsMenuNode.style.marginLeft="-"+_e5+"px";},hideOptionsMenuDelayed:function(){this.hideOptionsMenuDelayTimer=setTimeout(dojo.hitch(this,this.hideOptionsMenu),this.HIDE_DELAY);},cancelHideOptionsMenuDelayed:function(){if(this.hideOptionsMenuDelayTimer){clearTimeout(this.hideOptionsMenuDelayTimer);this.hideOptionsMenuDelayTimer=null;}},hideOptionsMenu:function(){dojo.style(this.optionsMenuNode,"display","none");},createNote:function(){this.noteNode=document.createElement("div");dojo.addClass(this.noteNode,"TE_mpl_viewNote");if(this.noteTxt&&this.noteTxt.length>0){this.noteNode.innerHTML=this.noteTxt;}this.partAreaNode.appendChild(this.noteNode);},showNoteIcon:function(){this.isNoteIconDisplayed=true;this.noteIndNode.innerHTML="<img src=\""+mpl.Images.note[0].src+"\" alt=\"\" />";this.evt_noteIndNode_onmouseover_1=dojo.connect(this.noteIndNode,"onmouseover",this,"showNote");this.evt_noteIndNode_onmouseout_1=dojo.connect(this.noteIndNode,"onmouseout",this,"hideNoteDelayed");},hideNoteIcon:function(){this.isNoteIconDisplayed=false;this.noteIndNode.innerHTML="";dojo.disconnect(this.evt_noteIndNode_onmouseover_1);dojo.disconnect(this.evt_noteIndNode_onmouseout_1);this.evt_noteIndNode_onmouseover_1=null;this.evt_noteIndNode_onmouseout_1=null;},showNote:function(){this.cancelHideNoteDelayed();var _e6=this.noteNode.style.visibility;this.noteNode.style.display="block";var _e7=dojo._getBorderBox(this.noteNode).h;this.noteNode.style.marginTop="-"+_e7+"px";this.noteNode.style.visibility=_e6;},hideNoteDelayed:function(){this.hideNoteDelayTimer=setTimeout(dojo.hitch(this,this.hideNote),400);},hideNote:function(){dojo.style(this.noteNode,"display","none");},cancelHideNoteDelayed:function(){if(this.hideNoteDelayTimer){clearTimeout(this.hideNoteDelayTimer);this.hideNoteDelayTimer=null;}},addHoverClass:function(){dojo.addClass(this.partRowNode,"TE_mpl_partRow_over");},removeHoverClass:function(){dojo.removeClass(this.partRowNode,"TE_mpl_partRow_over");},switchToOptionsOverImage:function(){this.optionsImage.src=mpl.Images.options[1].src;},switchToOptionsNormalImage:function(){this.optionsImage.src=mpl.Images.options[0].src;},remove:function(){this.removeFromDisplay();mpl.PartManager.remove(this);},handlePartRemoval:function(_e8,_e9){if(_e9){this.mplPartListWidget.handleDialogError(_e8,_e9);}else{this.remove();}},handleEditNote:function(_ea,_eb,_ec,_ed){if(_ea=="success"){if(_eb==""){this.removeNoteFromDisplay();}else{this.noteTxt=_eb;this.noteNode.innerHTML=this.noteTxt;if(this.isNoteIconDisplayed==false){this.showNoteIcon();}this.editPartNoteDialog.noteTxt=_eb;this.addPartNoteDialog.noteTxt=_eb;this.showMenuWithEditNote();}}else{this.mplPartListWidget.handleDialogError(_ec,_ed);}},handleRemoveNote:function(_ee,_ef,_f0){if(_ee=="success"){this.removeNoteFromDisplay();}else{this.mplPartListWidget.handleDialogError(_ef,_f0);}},removeNoteFromDisplay:function(){this.noteNode.innerHTML="";this.hideNoteIcon();this.editPartNoteDialog.noteTxt="";this.addPartNoteDialog.noteTxt="";this.noteTxt="";this.showMenuWithAddNote();},removeFromDisplay:function(){new dojo.NodeList(this.optionsMenuNode,this.noteNode,this.partRowNode).orphan();},destroy:function(){dojo.disconnect(this.evt_partRowNode_onmouseover_1);dojo.disconnect(this.evt_partRowNode_onmouseout_1);dojo.disconnect(this.evt_optionsNode_onmouseover_1);dojo.disconnect(this.evt_optionsNode_onmouseout_1);dojo.disconnect(this.evt_optionsNode_onclick_1);dojo.disconnect(this.evt_optionsNode_onmouseout_2);dojo.disconnect(this.evt_removePartDialog_endRemove_1);dojo.disconnect(this.evt_editPartNoteDialog_endEditNote_1);dojo.disconnect(this.evt_addPartNoteDialog_endEditNote_1);dojo.disconnect(this.evt_removePartNoteDialog_endRemoveNote_1);dojo.disconnect(this.evt_optionsMenuNode_onmouseover_1);dojo.disconnect(this.evt_optionsMenuNode_onmouseout_1);if(this.isNoteIconDisplayed){dojo.disconnect(this.evt_noteIndNode_onmouseover_1);dojo.disconnect(this.evt_noteIndNode_onmouseout_1);}this.quickViewWidget.destroy();this.removePartDialog.destroy();this.addPartNoteDialog.destroy();this.editPartNoteDialog.destroy();this.removePartNoteDialog.destroy();}});}if(!dojo._hasResource["te.MplRemoveListDlg"]){dojo._hasResource["te.MplRemoveListDlg"]=true;dojo.provide("te.MplRemoveListDlg");dojo.declare("mpl.MplRemoveListDlg",null,{constructor:function(_f1,_f2,_f3,_f4,_f5,_f6){this.removeLink=_f1;this.partListId=_f2;this.listName=_f3;this.showDialogOverlayFunc=_f4;this.hideDialogOverlayFunc=_f5;this.hideErrorFunction=_f6;this.initialize();},removeLink:null,partListId:null,listName:null,showDialogOverlayFunc:null,hideDialogOverlayFunc:null,hideErrorFunction:null,listDescriptionNode:null,confirmDlgNode:null,confirmButton:null,cancelButton:null,inProgress:false,hostUrl:null,evt_removeLink_onclick_1:null,evt_confirmButton_onclick_1:null,evt_cancelButton_onclick_1:null,initialize:function(){this.confirmDlgNode=dojo.byId("TE_mpl_removeList_dialog_manage");this.confirmButton=dojo.byId("TE_mpl_removeListDlg_RemoveBtn_manage");this.cancelButton=dojo.byId("TE_mpl_removeListDlg_CancelBtn_manage");this.listDescriptionNode=dojo.byId("TE_mpl_removeListDlg_Desc_manage");this.getHostUrl();this.evt_removeLink_onclick_1=dojo.connect(this.removeLink,"onclick",this,"showDialog");},removeList:function(){window.location="/commerce/mpl/deletePartList.do";},handleSuccess:function(_f7){this.inProgress=false;this.closeDialog();this.endRemoveNote("success","","");},handleError:function(_f8){this.closeDialog();this.inProgress=false;if(_f8){this.endRemoveNote("error",_f8.error.errorMsg,_f8.error.errorCode);}else{this.endRemoveNote("error",TE_mplMessages.mplSysErrorMessage,"0");}},showDialog:function(){this.listDescriptionNode.innerHTML=this.listName;this.hideErrorFunction();this.showDialogOverlayFunc();this.confirmDlgNode.style.display="";this.setDialogCoordinates();this.evt_confirmButton_onclick_1=dojo.connect(this.confirmButton,"onclick",this,"handleRemove");this.evt_cancelButton_onclick_1=dojo.connect(this.cancelButton,"onclick",this,"closeDialog");},setDialogCoordinates:function(){var _f9=dijit.getViewport();var _fa=_f9.w/2;var _fb=dojo.marginBox(this.confirmDlgNode).w/2;var _fc=Math.ceil(_fa)-Math.ceil(_fb);var _fd=_f9.t+125;dijit.placeOnScreen(this.confirmDlgNode,{x:_fc,y:_fd},["TL"]);},handleRemove:function(){this.removeList();},closeDialog:function(){dojo.style(this.confirmDlgNode,"display","none");this.hideDialogOverlayFunc();dojo.disconnect(this.evt_confirmButton_onclick_1);dojo.disconnect(this.evt_cancelButton_onclick_1);this.evt_confirmButton_onclick_1=null;this.evt_cancelButton_onclick_1=null;},getTrackingUUID:function(){var _fe=dojo.cookie("TECewt5");return _fe;},getHostUrl:function(){var _ff=new String(window.location);if(_ff.indexOf("https")!=-1){this.hostUrl=TE_getSecureApplicationServerUrl();}else{this.hostUrl=TE_getApplicationServerUrl();}},destroy:function(){dojo.disconnect(this.evt_removeLink_onclick_1);}});}if(!dojo._hasResource["te.NavigationMenu"]){dojo._hasResource["te.NavigationMenu"]=true;dojo.provide("te.NavigationMenu");dojo.declare("te.NavigationMenu",null,{constructor:function(_100,_101){this.menuNode=dojo.byId(_100);this.expandMenuNode=dojo.byId(_101);dojo.connect(this.menuNode,"onmouseover",this,"delayedExpand");dojo.connect(this.menuNode,"onmouseout",this,"cancelDelayedExpand");this.savedHeight=this.expandMenuNode.style.height;},isCollapsed:true,menuNode:null,expandMenuNode:null,savedHeight:null,wipeTimer:650,expandDelay:500,delayTimer:null,cancelDelayedExpand:function(){clearTimeout(this.delayTimer);this.delayTimer=null;},delayedExpand:function(){if(!this.isCollapsed){return;}this.delayTimer=setTimeout(dojo.hitch(this,this.expand),this.expandDelay);},expand:function(){if(!this.isCollapsed){return;}clearTimeout(this.delayTimer);this.delayTimer=null;te.NavigationManager.expanded(this);dojo.removeClass(this.menuNode,"TE_corp_nav_item_expand");dojo.addClass(this.menuNode,"TE_corp_nav_item_noexpand");var _102=this;dojo.fx.wipeIn({node:this.expandMenuNode,duration:this.wipeTimer,onEnd:function(){_102.expandMenuNode.style.height=_102.savedHeight;_102.isCollapsed=false;}}).play();},collapse:function(){if(this.isCollapsed){return;}dojo.html.removeClass(this.menuNode,"TE_corp_nav_item_noexpand");dojo.html.addClass(this.menuNode,"TE_corp_nav_item_expand");var _103=this;dojo.fx.wipeOut({node:this.expandMenuNode,duration:this.wipeTimer,onEnd:function(){_103.expandMenuNode.style.height=_103.savedHeight;_103.isCollapsed=true;}}).play();}});te.NavigationManager=new function(){this.currentMenu=null;this.collapsed=function(menu){if(this.currentMenu==menu){this.currentMenu=null;}};this.expanded=function(menu){if(this.currentMenu==menu){return;}if(this.currentMenu){this.currentMenu.collapse();}this.currentMenu=menu;};};}if(!dojo._hasResource["te.PageLoadPopup"]){dojo._hasResource["te.PageLoadPopup"]=true;dojo.provide("te.PageLoadPopup");dojo.declare("te.PageLoadPopup",null,{constructor:function(node,_107,_108){this.startNode=dojo.byId(node);if(_108){this.displayMessage=_108;}else{var _109=TE_getLocale();var _10a=dojo.i18n.getLocalization("te","ewt",_109);this.displayMessage=_10a.pageLoadMessage;}if(_107){dojo.connect(this.startNode,_107,this,"show");}},isPageLoadShowing:false,startNode:null,pageLoadNode:null,displayMessage:null,effectsTimer:350,show:function(){var _10b;var _10c;if(this.isPageLoadShowing){return;}this.isPageLoadShowing=true;this.pageLoadNode=document.createElement("div");this.pageLoadNode.style.opacity="0";dojo.addClass(this.pageLoadNode,"TE_pageLoadOuterDiv");var div2=document.createElement("div");dojo.addClass(div2,"TE_pageLoadInnerDiv");var div3=document.createElement("div");dojo.addClass(div3,"TE_pageLoadImageDiv");var span=document.createElement("span");dojo.addClass(span,"TE_pageLoadTextDiv");span.appendChild(document.createTextNode(this.displayMessage));div3.appendChild(span);div2.appendChild(div3);this.pageLoadNode.appendChild(div2);dojo.body().appendChild(this.pageLoadNode);var pos=dojo.coords(this.startNode,true);dijit.placeOnScreen(this.pageLoadNode,{x:pos.x,y:pos.y},["TL"]);dojo.fadeIn({node:this.pageLoadNode,duration:this.effectsTimer}).play();},hide:function(){if(this.isPageLoadShowing){var _111=this;dojo.fadeOut({node:this.pageLoadNode,duration:this.effectsTimer,onEnd:function(){_111.pageLoadNode=null;_111.isPageLoadShowing=false;}}).play();}}});}if(!dojo._hasResource["te.TEQueryReadStore"]){dojo._hasResource["te.TEQueryReadStore"]=true;dojo.provide("te.TEQueryReadStore");dojo.declare("te.TEQueryReadStore",dojox.data.QueryReadStore,{doCachingQuery:false,isGrid:false,iPoupCount:0,popup:null,_tmpItems:[],_containsValue:function(item,_113,_114,_115){return dojo.some(this.getValues(item,_113),function(_116){if(_116!==null&&!dojo.isObject(_116)&&_115){if(_116.toString().match(_115)){return true;}}else{if(_114===_116){return true;}}});},_fetchItems:function(_117,_118,_119){var _11a=_117.serverQuery||_117.query||{};if(!this.doClientPaging){_11a.start=_117.start||0;if(_117.count){_11a.count=_117.count;}}if(!this.doClientSorting){if(_117.sort){var sort=_117.sort[0];if(sort&&sort.attribute){var _11c=sort.attribute;if(sort.descending){_11c="-"+_11c;}_11a.sort=_11c;}}}if(this.doClientPaging&&this._lastServerQuery!==null&&dojo.toJson(_11a)==dojo.toJson(this._lastServerQuery)){_118(this._items,_117);}else{var _11d=false;if(this.doCachingQuery){var _11e={};for(var key in _11a){var _120=_11a[key];if(typeof _120==="string"){if(this._lastServerQuery&&this._lastServerQuery[key]&&typeof this._lastServerQuery[key]!="undefined"&&this._lastServerQuery[key].length>1&&this._lastServerQuery[key]&&_11a[key].replace("*","").indexOf(this._lastServerQuery[key].replace("*",""))>=0){this.fetchFromPrevResp(_11a,key);_118(this._tmpItems,_117);_11d=true;}}}}if(_11d==false){if(this.isGrid==true){this.iPoupCount++;dojo.query(".dojoxGridScrollbox")[0].id="scrolltable";dojo.query(".dojoxGridMasterMessages").style("display","none");if(this.popup==null||this.popup.isPageLoadShowing==false){this.popup=new te.PageLoadPopup("scrolltable");this.popup.show();}}var _121=this.requestMethod.toLowerCase()=="post"?dojo.xhrPost:dojo.xhrGet;var _122=_121({url:this.url,handleAs:"json-comment-optional",content:_11a,preventCache:true});_122.addCallback(dojo.hitch(this,function(data){if(this.popup!=null){this.iPoupCount--;if(this.iPoupCount==0){this.popup.hide();var _124=dojo.query(".TE_pageLoadOuterDiv").orphan();}}if(data.label){this._labelAttr=data.label;}var _125=data.numRows||-1;this._items=[];dojo.forEach(data.items,function(e){this._items.push({i:e,r:this});},this);var _127=data.identifier;this._itemsByIdentity={};if(_127){this._identifier=_127;for(i=0;i<this._items.length;++i){var item=this._items[i].i;var _129=item[_127];if(!this._itemsByIdentity[_129]){this._itemsByIdentity[_129]=item;}else{this._itemsByIdentity[_129]=item;}}}else{this._identifier=Number;for(i=0;i<this._items.length;++i){this._items[i].n=i;}}_125=(_125===-1)?this._items.length:_125;_118(this._items,_117,_125);if(this.isGrid==true){dojo.setSelectable("grid",true);}}));_122.addErrback(function(_12a){_119(_12a,_117);});this.lastRequestHash=new Date().getTime()+"-"+String(Math.random()).substring(2);this._lastServerQuery=dojo.mixin({},_11a);}}},fetchFromPrevResp:function(_12b,key){var _12d=[];var _12e=this._items;if(_12b){var _12f={};for(var i=0;i<_12e.length;++i){var _131=true;var _132=_12e[i];if(_132===null){_131=false;}else{var _133=_12b[key];_12f[key]=dojo.data.util.filter.patternToRegExp(_133,true);var _133=_12b[key];if(!this._containsValue(_132,key,_133,_12f[key])){_131=false;}}if(_131){_12d.push(_132);}}}this._tmpItems=_12d;}});}if(!dojo._hasResource["te.MyPartListWidget"]){dojo._hasResource["te.MyPartListWidget"]=true;dojo.provide("te.MyPartListWidget");dojo.declare("mpl.MyPartListWidget",null,{constructor:function(_134){this.mplContainer=_134;this.getStateFromCookie();this.validateUserAndSetInitialState();this.initialize();if(this.viewState!=0){this.minimizeWidget();}},mplContainer:null,headerNode:null,partListNameNode:null,partListCountNode:null,minMaxNode:null,closeNode:null,minimizeImage:null,maximizeImage:null,closeImage:null,toolBarNode:null,nonRegisteredNode:null,nonRegisteredPopup:null,nonRegisteredRegLink:null,errorNode:null,errorMsgNode:null,partAreaScrollNode:null,partAreaNode:null,actionsOverlayNode:null,footerNode:null,newListDialog:null,hostUrl:null,partListsUrl:null,partListName:"",partListId:null,rqpnToAdd:null,tcpnToAdd:null,viewState:0,listLoaded:false,isScrollable:false,currentUser:null,isRegisteredUser:false,rememberState:false,partRowPaddingNodes:[],inProgress:false,instructions:null,evt_PartManager_add_1:null,evt_PartManager_remove_1:null,evt_nonRegisteredRegLink_onmouseover_1:null,evt_nonRegisteredRegLink_onmouseout_1:null,evt_this_loadPartList_1:null,evt_minimizeImage_onmouseover_1:null,evt_minimizeImage_onmouseout_1:null,evt_maximizeImage_onmouseover_1:null,evt_maximizeImage_onmouseout_1:null,evt_closeImage_onmouseover_1:null,evt_closeImage_onmouseout_1:null,evt_closeNode_onclick_1:null,evt_newListDialog_finishWithError_1:null,evt_newListDialog_finishSuccessfully_1:null,partListSelectWidget:new function(){this.dropDown=null;this.isInitialized=false;this.onChangeEvent=null;this.listNames=[];this.initialize=function(node,_136){this.isInitialized=true;this.dropDown=node;if(_136){this.onChangeEvent=dojo.connect(this.dropDown,"onchange",_136[0],_136[1]);}};this.addList=function(_137,_138,_139){var _13a=document.createElement("option");_13a.text=_137;_13a.value=_138;if(_139){_13a.selected=true;}if(dojo.isIE){this.dropDown.add(_13a);}else{this.dropDown.appendChild(_13a);}this.listNames.push([_13a.text,_13a.value]);};this.getSelectedListName=function(){return this.listNames[this.dropDown.selectedIndex][0];};this.getSelectedListID=function(){return this.listNames[this.dropDown.selectedIndex][1];};this.disconnectEvents=function(){dojo.disconnect(this.onChangeEvent);};this.getRightPosition=function(){if(this.dropDown){var _13b=dojo.coords(this.dropDown,true);return (_13b.x+_13b.w);}else{return 0;}};},initialize:function(){this.headerNode=dojo.byId("TE_mpl_header");this.partListNameNode=dojo.byId("TE_mpl_plName");this.partListCountNode=dojo.byId("TE_mpl_plCount");this.minMaxNode=dojo.byId("TE_mpl_minMax");this.closeNode=dojo.byId("TE_mpl_close");this.toolBarNode=dojo.byId("TE_mpl_tbar");this.nonRegisteredNode=dojo.byId("TE_mpl_nonRegOverlay");this.nonRegisteredPopup=dojo.byId("TE_mpl_nonReg_popup");this.nonRegisteredRegLink=dojo.byId("TE_mpl_nonReg_regLink");this.errorNode=dojo.byId("TE_mpl_errorOverlay");this.partAreaScrollNode=dojo.byId("TE_mpl_partArea_scrollBG");this.partAreaNode=dojo.byId("TE_mpl_partArea");this.actionsOverlayNode=dojo.byId("TE_mpl_actionsOverlay");this.footerNode=dojo.byId("TE_mpl_footer");this.evt_PartManager_add_1=dojo.connect(mpl.PartManager,"add",this,"handlePartAddRemove");this.evt_PartManager_remove_1=dojo.connect(mpl.PartManager,"remove",this,"handlePartAddRemove");this.getHostUrl();this.evt_nonRegisteredRegLink_onmouseover_1=dojo.connect(this.nonRegisteredRegLink,"onmouseover",this,"showTemopraryListPopup");this.evt_nonRegisteredRegLink_onmouseout_1=dojo.connect(this.nonRegisteredRegLink,"onmouseout",this,"hideTemporaryListPopup");this.initHeader();},addToPartList:function(_13c,tcpn){this.rqpnToAdd=_13c;this.tcpnToAdd=tcpn;if(this.viewState==0){if(this.listLoaded){this.showWidget();this.addPart();}else{this.evt_this_loadPartList_1=dojo.connect(this,"loadPartList",this,"addPart");this.retrievePartList();}}else{if(this.viewState==1){this.highlightHeader();this.addPart();}else{this.highlightHeader();this.addPart();}}},loadPartListNames:function(){var _13e;_13e={tid:this.getTrackingUUID()};dojo.io.script.get({url:this.hostUrl+"/commerce/mpl/getPartListNames.do",timeout:10000,preventCache:true,callbackParamName:"callback",load:dojo.hitch(this,this.callback_loadPartListNames),error:dojo.hitch(this,this.callback_loadPartListNames_err),content:_13e});},addPart:function(){dojo.disconnect(this.evt_this_loadPartList_1);this.evt_this_loadPartList_1=null;dojo.io.script.get({url:this.hostUrl+"/commerce/mpl/addPart.do",timeout:10000,preventCache:true,callbackParamName:"callback",load:dojo.hitch(this,this.callback_addPart),error:dojo.hitch(this,this.callback_addPart_err),content:{tid:this.getTrackingUUID(),rqpn:this.rqpnToAdd,tcpn:this.tcpnToAdd}});},retrievePartList:function(_13f){var _140;if(!this.inProgress){if(_13f){_140={pl:_13f,tid:this.getTrackingUUID()};}else{_140={tid:this.getTrackingUUID()};}dojo.io.script.get({url:this.hostUrl+"/commerce/mpl/viewPartList.do",timeout:10000,preventCache:true,callbackParamName:"callback",load:dojo.hitch(this,this.callback_retrievePartList),error:dojo.hitch(this,this.callback_retrievePartList_err),content:_140});this.inProgress=true;}},callback_loadPartListNames:function(_141,_142){if(_141.error){this.handleCustomError(_141.error.errorMsg,_141.error.errorCode);}else{dojo.forEach(_141,dojo.hitch(this,function(x,y){this.partListSelectWidget.addList(x[0],x[1],(x[1]==this.partListId));}));if(this.newListDialog){this.newListDialog.setlistNames(this.partListSelectWidget.listNames);}}return _141;},callback_loadPartListNames_err:function(_145,_146){this.handleError(_145);return _145;},callback_addPart:function(_147,_148){if(_147.error){this.handleCustomError(_147.error.errorMsg,_147.error.errorCode);}else{this.loadPart(_147);}return _147;},callback_addPart_err:function(_149,_14a){this.handleError(_149);return _149;},callback_retrievePartList:function(_14b,_14c){if(_14b.error){dojo.disconnect(this.evt_this_loadPartList_1);this.evt_this_loadPartList_1=null;this.showWidget();this.inProgress=false;this.handleCustomError(_14b.error.errorMsg,_14b.error.errorCode);}else{this.loadPartList(_14b);}return _14b;},callback_retrievePartList_err:function(_14d,_14e){dojo.disconnect(this.evt_this_loadPartList_1);this.evt_this_loadPartList_1=null;this.showWidget();this.inProgress=false;this.handleError(_14d);return _14d;},handleError:function(_14f){this.showError(TE_mplMessages.mplSysErrorMessage);},handleCustomError:function(_150,_151){if(_151!="0"){this.showError(_150);}else{this.showError(TE_mplMessages.mplSysErrorMessage);}},loadPart:function(data){if(this.listLoaded){new mpl.MplPart(this,this.partAreaNode,data.tcpn,data.rqpn,data.partKeyId,data.desc,data.note,data.partDetailUrl);}else{mpl.PartManager.partsCount++;this.updatePartCountDisplay();this.saveStateInCookie();}this.removeInstructions();this.hideError();},loadPartList:function(data){this.hideError();if(!this.listLoaded){this.isRegisteredUser=data.isUserRegistered;this.setRememberState();this.initToolBar();this.listLoaded=true;}this.partListName=data.listName;this.partListId=data.listId;this.updatePartListNameDisplay();mpl.PartManager.partsCount=0;if(data.parts.length<1){this.addInstructions();}else{for(var i=0;i<data.parts.length;i++){new mpl.MplPart(this,this.partAreaNode,data.parts[i].tcpn,data.parts[i].rqpn,data.parts[i].partKeyId,data.parts[i].desc,data.parts[i].note,data.parts[i].partDetailUrl);}}if(data.parts.length==0){this.updatePartCountDisplay();this.saveStateInCookie();this.makeNonScrollable();}this.showWidget();this.inProgress=false;},initHeader:function(){this.updatePartListNameDisplay();this.updatePartCountDisplay();this.minimizeImage=dojo.byId("mplMinimize_img");this.maximizeImage=dojo.byId("mplMaximize_img");this.closeImage=dojo.byId("mplClose_img");this.evt_minimizeImage_onmouseover_1=dojo.connect(this.minimizeImage,"onmouseover",this,"switchToMinimizeOverImage");this.evt_minimizeImage_onmouseout_1=dojo.connect(this.minimizeImage,"onmouseout",this,"switchToMinimizeNormalImage");this.evt_maximizeImage_onmouseover_1=dojo.connect(this.maximizeImage,"onmouseover",this,"switchToMaximizeOverImage");this.evt_maximizeImage_onmouseout_1=dojo.connect(this.maximizeImage,"onmouseout",this,"switchToMaximizeNormalImage");this.evt_closeImage_onmouseover_1=dojo.connect(this.closeImage,"onmouseover",this,"switchToCloseOverImage");this.evt_closeImage_onmouseout_1=dojo.connect(this.closeImage,"onmouseout",this,"switchToCloseNormalImage");this.evt_closeNode_onclick_1=dojo.connect(this.closeNode,"onclick",this,"closeWidget");},initToolBar:function(){var _155=dojo.byId("TE_mpl_newList");if(this.isRegisteredUser){var _156=document.createElement("a");_156.setAttribute("href","javascript:void(0)");_156.appendChild(document.createTextNode(TE_mplMessages.mplNewListMessage));_155.appendChild(_156);this.newListDialog=new mpl.MplNewListDlg(this.partAreaNode,_155,dojo.hitch(this,this.showDialogOverlay),dojo.hitch(this,this.hideDialogOverlay),dojo.hitch(this,this.hideError));this.evt_newListDialog_finishWithError_1=dojo.connect(this.newListDialog,"finishWithError",this,"handleDialogError");this.evt_newListDialog_finishSuccessfully_1=dojo.connect(this.newListDialog,"finishSuccessfully",this,"handleNewListCreate");}else{_155.appendChild(document.createTextNode(TE_mplMessages.mplNewListMessage));dojo.addClass(_155,"TE_mpl_disabled");}},updatePartListNameDisplay:function(){this.partListNameNode.innerHTML=this.partListName;},updatePartCountDisplay:function(){var _157;if(this.partListCountNode.firstChild){this.partListCountNode.removeChild(this.partListCountNode.firstChild);}_157=mpl.PartManager.getPartCount();this.partListCountNode.appendChild(document.createTextNode(" ("+_157+")"));},minimizeWidget:function(){dojo.style(this.headerNode,"display","");dojo.style(this.toolBarNode,"display","none");dojo.style(this.nonRegisteredNode,"display","none");dojo.style(this.errorNode,"display","none");dojo.style(this.partAreaScrollNode,"display","none");dojo.style(this.partAreaNode,"display","none");dojo.style(this.footerNode,"display","none");this.minMaxNode.setAttribute("href","javascript:openPartList()");dojo.style(this.minimizeImage,"display","none");dojo.style(this.maximizeImage,"display","");this.setViewState(1);},maximizeWidget:function(){if(!this.listLoaded){this.retrievePartList();}else{this.showWidget();}},showWidget:function(){this.hideError();dojo.style(this.headerNode,"display","");dojo.style(this.toolBarNode,"display","");if(!this.partListSelectWidget.isInitialized){this.partListSelectWidget.initialize(dojo.byId("TE_mpl_partLists"),[this,"handleNewListSelection"]);this.loadPartListNames();}if(!this.isRegisteredUser){dojo.style(this.nonRegisteredNode,"display","");}dojo.style(this.partAreaScrollNode,"display","");dojo.style(this.partAreaNode,"display","");dojo.style(this.footerNode,"display","");if(this.listLoaded){this.minMaxNode.setAttribute("href","javascript:minimizePartList()");dojo.style(this.maximizeImage,"display","none");dojo.style(this.minimizeImage,"display","");}this.setViewState(2);},closeWidget:function(){dojo.style(this.headerNode,"display","none");dojo.style(this.toolBarNode,"display","none");dojo.style(this.nonRegisteredNode,"display","none");dojo.style(this.errorNode,"display","none");dojo.style(this.partAreaScrollNode,"display","none");dojo.style(this.partAreaNode,"display","none");dojo.style(this.footerNode,"display","none");this.setViewState(0);},openWidget:function(){this.maximizeWidget();},handlePartAddRemove:function(){this.checkScrollable();this.updatePartCountDisplay();this.saveStateInCookie();},showTemopraryListPopup:function(){var _158=dojo.coords(this.nonRegisteredRegLink,true);this.nonRegisteredPopup.className="TE_mpl_nonReg_popup_show";dojo.style(this.nonRegisteredPopup,"display","");if(_158.x<this.partListSelectWidget.getRightPosition()){var X=this.partListSelectWidget.getRightPosition();}else{var X=_158.x;}dijit.placeOnScreen(this.nonRegisteredPopup,{x:X,y:_158.y},["BL"]);},hideTemporaryListPopup:function(){dojo.style(this.nonRegisteredPopup,"display","none");},makeScrollable:function(){if(dojo.hasClass(this.headerNode,"TE_mpl_header_flash")){dojo.addClass(this.headerNode,"TE_mpl_header_flash_scroll");dojo.removeClass(this.headerNode,"TE_mpl_header_flash");}else{dojo.removeClass(this.headerNode,"TE_mpl_header");dojo.addClass(this.headerNode,"TE_mpl_header_scroll");}dojo.removeClass(this.toolBarNode,"TE_mpl_tbar");dojo.addClass(this.toolBarNode,"TE_mpl_tbar_scroll");if(!this.isRegisteredUser){dojo.removeClass(this.nonRegisteredNode,"TE_mpl_messageOverlay");dojo.addClass(this.nonRegisteredNode,"TE_mpl_messageOverlay_scroll");}dojo.removeClass(this.errorNode,"TE_mpl_messageOverlay");dojo.addClass(this.errorNode,"TE_mpl_messageOverlay_scroll");dojo.addClass(this.partAreaScrollNode,"TE_mpl_partArea_scrollBG");dojo.removeClass(this.partAreaNode,"TE_mpl_partArea");dojo.addClass(this.partAreaNode,"TE_mpl_partArea_scroll");dojo.removeClass(this.actionsOverlayNode,"TE_mpl_actionsOverlay");dojo.addClass(this.actionsOverlayNode,"TE_mpl_actionsOverlay_scroll");dojo.removeClass(this.footerNode,"TE_mpl_footer");dojo.addClass(this.footerNode,"TE_mpl_footer_scroll");this.isScrollable=true;},makeNonScrollable:function(){dojo.removeClass(this.headerNode,"TE_mpl_header_scroll");dojo.addClass(this.headerNode,"TE_mpl_header");dojo.removeClass(this.toolBarNode,"TE_mpl_tbar_scroll");dojo.addClass(this.toolBarNode,"TE_mpl_tbar");if(!this.isRegisteredUser){dojo.removeClass(this.nonRegisteredNode,"TE_mpl_messageOverlay_scroll");dojo.addClass(this.nonRegisteredNode,"TE_mpl_messageOverlay");}dojo.removeClass(this.errorNode,"TE_mpl_messageOverlay_scroll");dojo.addClass(this.errorNode,"TE_mpl_messageOverlay");dojo.removeClass(this.partAreaNode,"TE_mpl_partArea_scroll");dojo.addClass(this.partAreaNode,"TE_mpl_partArea");dojo.removeClass(this.partAreaScrollNode,"TE_mpl_partArea_scrollBG");dojo.removeClass(this.actionsOverlayNode,"TE_mpl_actionsOverlay_scroll");dojo.addClass(this.actionsOverlayNode,"TE_mpl_actionsOverlay");dojo.removeClass(this.footerNode,"TE_mpl_footer_scroll");dojo.addClass(this.footerNode,"TE_mpl_footer");this.isScrollable=false;},checkScrollable:function(){var _15a=8;if(this.isScrollable){if(mpl.PartManager.getPartCount()<=_15a){this.makeNonScrollable();}}else{if(mpl.PartManager.getPartCount()>_15a){this.makeScrollable();}}},highlightHeader:function(){if(this.isScrollable){dojo.removeClass(this.headerNode,"TE_mpl_header_scroll");dojo.addClass(this.headerNode,"TE_mpl_header_flash_scroll");}else{dojo.removeClass(this.headerNode,"TE_mpl_header");dojo.addClass(this.headerNode,"TE_mpl_header_flash");}setTimeout(dojo.hitch(this,this.unhighlightHeader),1000);},unhighlightHeader:function(){if(this.isScrollable){dojo.addClass(this.headerNode,"TE_mpl_header_scroll");dojo.removeClass(this.headerNode,"TE_mpl_header_flash_scroll");}else{dojo.addClass(this.headerNode,"TE_mpl_header");dojo.removeClass(this.headerNode,"TE_mpl_header_flash");}},showError:function(_15b){if(!this.isRegisteredUser){dojo.style(this.nonRegisteredNode,"display","none");}this.errorNode.innerHTML="<img src=\""+mpl.Images.attention.src+"\" alt=\"\" />";this.errorMsgNode=document.createElement("div");this.errorNode.appendChild(this.errorMsgNode);dojo.addClass(this.errorMsgNode,"TE_mpl_error");this.errorMsgNode.innerHTML=_15b;dojo.style(this.errorNode,"display","");},hideError:function(){if(!this.isRegisteredUser&&this.viewState==2){dojo.style(this.nonRegisteredNode,"display","");}dojo.style(this.errorNode,"display","none");},handleDialogError:function(_15c,_15d){this.showError(TE_mplMessages.mplSysErrorMessage);},handleNewListCreate:function(_15e,_15f){this.partListName=_15e;this.partListId=_15f;this.partListSelectWidget.addList(_15e,_15f,true);this.removePartsFromDisplay();this.makeNonScrollable();this.updatePartListNameDisplay();this.updatePartCountDisplay();},handleNewListSelection:function(){this.removePartsFromDisplay();this.removeInstructions();this.partListName=this.partListSelectWidget.getSelectedListName();this.partListId=this.partListSelectWidget.getSelectedListID();this.retrievePartList(this.partListId);this.saveStateInCookie();},removePartsFromDisplay:function(_160){for(var i=0;i<mpl.PartManager.partList.length;i++){mpl.PartManager.partList[i].removeFromDisplay();mpl.PartManager.partList[i].destroy();mpl.PartManager.partList[i]=null;mpl.PartManager.partsCount--;}mpl.PartManager.partList=new Array();},showDialogOverlay:function(){this.addPaddingRows();var _162=dojo.marginBox(this.toolBarNode).h;var _163=dojo.marginBox(this.nonRegisteredNode).h;var _164=dojo.marginBox(this.partAreaNode).h;var _165=this.partAreaNode.scrollTop;this.actionsOverlayNode.style.marginTop=(_165-_162-_163)+"px";this.actionsOverlayNode.style.height=(_164+_162+_163)+"px";this.actionsOverlayNode.style.display="block";},hideDialogOverlay:function(){dojo.style(this.actionsOverlayNode,"display","none");this.removePaddingRows();},addPaddingRows:function(){for(var i=0;(i+mpl.PartManager.getPartCount())<5;i++){this.partRowPaddingNodes[i]=document.createElement("div");dojo.addClass(this.partRowPaddingNodes[i],"TE_mpl_partRow");this.partAreaNode.appendChild(this.partRowPaddingNodes[i]);}},removePaddingRows:function(){for(var i=0;i<this.partRowPaddingNodes.length;i++){this.partAreaNode.removeChild(this.partRowPaddingNodes[i]);}this.partRowPaddingNodes=[];},addInstructions:function(){if(!this.instructions){this.instructions=document.createElement("div");dojo.addClass(this.instructions,"TE_mpl_partRow_noHeight");var _168=document.createElement("div");dojo.addClass(_168,"TE_mpl_partRow_message");var _169="<img src=\"/_TEincludes/ver/920/TEimages/TE_mpl_addPart_small.gif\" alt=\""+TE_mplMessages.mplAddToPartListMessage+"\" title=\""+TE_mplMessages.mplAddToPartListMessage+"\" /> <span class=\"TE_mpl_partRow_message_link\">"+TE_mplMessages.mplAddToPartListMessage+"</span>";var _16a=String(TE_mplMessages.mplNoPartsMessage);var _16b=_16a.replace(/\{0\}/ig,_169);_168.innerHTML=_16b;this.instructions.appendChild(_168);}this.partAreaNode.appendChild(this.instructions);},removeInstructions:function(){if(this.instructions){if(this.instructions.parentNode==this.partAreaNode){this.partAreaNode.removeChild(this.instructions);}}},setViewState:function(_16c){this.viewState=_16c;this.saveStateInCookie();},saveStateInCookie:function(){var _16d;_16d=mpl.PartManager.getPartCount();var _16e=""+this.viewState+"|";_16e+=this.partListName+"|";_16e+=_16d;if(this.currentUser&&this.currentUser.length>0){_16e+="|"+this.currentUser;}if(this.rememberState){dojo.cookie("TECmpl",_16e,{domain:".tycoelectronics.com",expires:30,path:"/"});}else{dojo.cookie("TECmpl",_16e,{domain:".tycoelectronics.com",path:"/"});}this.getStateFromCookie();},getStateFromCookie:function(){var _16f=dojo.cookie("TECmpl");if(_16f){var _170=_16f.split("|");this.viewState=_170[0];this.partListName=_170[1];mpl.PartManager.partsCount=_170[2];if(_170[3]&&_170[3].length>0){this.currentUser=_170[3];}}},getTrackingUUID:function(){var uuid=dojo.cookie("TECewt5");return uuid;},getHostUrl:function(){var _172=new String(window.location);if(_172.indexOf("https")!=-1){this.hostUrl=TE_getSecureApplicationServerUrl();}else{this.hostUrl=TE_getApplicationServerUrl();}},setRememberState:function(){if(this.isRegisteredUser){var _173=dojo.cookie("TECuso1");if(_173&&_173.length>0){this.rememberState=true;}else{this.rememberState=false;this.saveStateInCookie();}}else{this.rememberState=true;}},validateUserAndSetInitialState:function(){var user=dojo.cookie("TECewt4");if(this.isNewUser(user)){this.viewState=0;this.currentUser=user;this.setInitialIsRegisteredUser();this.setRememberState();this.saveStateInCookie();}else{this.setInitialIsRegisteredUser();this.setRememberState();}},setInitialIsRegisteredUser:function(){if(this.currentUser&&this.currentUser.length>0){this.isRegisteredUser=true;}},isNewUser:function(user){if(this.currentUser&&this.currentUser.length>0){if(user&&user.length>0){if(this.currentUser!=user){return true;}}else{return true;}}else{if(user&&user.length>0){return true;}}return false;},switchToMinimizeOverImage:function(){this.minimizeImage.src=mpl.Images.minimize[1].src;},switchToMinimizeNormalImage:function(){this.minimizeImage.src=mpl.Images.minimize[0].src;},switchToMaximizeOverImage:function(){this.maximizeImage.src=mpl.Images.maximize[1].src;},switchToMaximizeNormalImage:function(){this.maximizeImage.src=mpl.Images.maximize[0].src;},switchToCloseOverImage:function(){this.closeImage.src=mpl.Images.close[1].src;},switchToCloseNormalImage:function(){this.closeImage.src=mpl.Images.close[0].src;},destroy:function(){dojo.disconnect(this.evt_PartManager_add_1);dojo.disconnect(this.evt_PartManager_remove_1);dojo.disconnect(this.evt_nonRegisteredRegLink_onmouseover_1);dojo.disconnect(this.evt_nonRegisteredRegLink_onmouseout_1);dojo.disconnect(this.evt_minimizeImage_onmouseover_1);dojo.disconnect(this.evt_minimizeImage_onmouseout_1);dojo.disconnect(this.evt_maximizeImage_onmouseover_1);dojo.disconnect(this.evt_maximizeImage_onmouseout_1);dojo.disconnect(this.evt_closeImage_onmouseover_1);dojo.disconnect(this.evt_closeImage_onmouseout_1);dojo.disconnect(this.evt_closeNode_onclick_1);this.partListSelectWidget.disconnectEvents();for(var i=0;i<mpl.PartManager.partList.length;i++){mpl.PartManager.partList[i].destroy();}if(this.newListDialog){dojo.disconnect(this.evt_newListDialog_finishWithError_1);dojo.disconnect(this.evt_newListDialog_finishSuccessfully_1);this.newListDialog.destroy();}}});dojo.addOnLoad(function(){if(typeof (TE_showMyPartList)!="undefined"&&TE_showMyPartList){mpl.Images=new function(){this.minimize=new Array();this.minimize[0]=new Image();this.minimize[0].src="/_TEincludes/ver/920/TEimages/TE_mpl_minimize.gif";this.minimize[1]=new Image();this.minimize[1].src="/_TEincludes/ver/920/TEimages/TE_mpl_minimizeOver.gif";this.maximize=new Array();this.maximize[0]=new Image();this.maximize[0].src="/_TEincludes/ver/920/TEimages/TE_mpl_maximize.gif";this.maximize[1]=new Image();this.maximize[1].src="/_TEincludes/ver/920/TEimages/TE_mpl_maximizeOver.gif";this.close=new Array();this.close[0]=new Image();this.close[0].src="/_TEincludes/ver/920/TEimages/TE_mpl_close.gif";this.close[1]=new Image();this.close[1].src="/_TEincludes/ver/920/TEimages/TE_mpl_closeOver.gif";this.options=new Array();this.options[0]=new Image();this.options[0].src="/_TEincludes/ver/920/TEimages/TE_mpl_options.gif";this.options[1]=new Image();this.options[1].src="/_TEincludes/ver/920/TEimages/TE_mpl_optionsOver.gif";this.note=new Array();this.note[0]=new Image();this.note[0].src="/_TEincludes/ver/920/TEimages/TE_mpl_note.gif";this.delPart=new Array();this.delPart[0]=new Image();this.delPart[0].src="/_TEincludes/ver/920/TEimages/TE_mpl_deletePart.gif";this.attention=new Image();this.attention.src="/_TEincludes/ver/920/TEimages/TE_mpl_attentionIcon.gif";};}});mpl.PartManager=new function(){this.partList=new Array();this.partsCount=0;this.add=function(part){this.partList.push(part);this.partsCount++;};this.remove=function(part){var _179=this.getPartIndex(part.tcpn);if(_179!=-1){this.partList.splice(_179,1);}this.partsCount--;};this.getPartIndex=function(_17a){var i;for(i=0;i<this.partList.length;i++){if((this.partList[i]!=null)&&(this.partList[i].tcpn==_17a)){break;}}if(i==this.partList.length){return -1;}else{return i;}};this.getPartCount=function(){return parseInt(this.partsCount);};this.createNewList=function(){this.partList.push(part);};};}if(!dojo._hasResource["te.widget.TEFilterSelect"]){dojo._hasResource["te.widget.TEFilterSelect"]=true;dojo.provide("te.widget.TEFilterSelect");dojo.declare("te.widget.TEFilterSelect",[dijit.form.FilteringSelect],{_orig_autoComplete:false,ignoreLeadZeros:true,minChars:0,_openResults:true,_origSearchKey:null,_startSearchFromInput:function(){var _17c=this.removeLeadingZeros(this.focusNode.value);this.focusNode.value=_17c;this._startSearch(_17c);},_startSearch:function(key){if(this.minChars>0){if(key.length==0){if(this.focusNode.value.length>=this.minChars){this._openResults=true;dijit.form.FilteringSelect.superclass._startSearch.call(this,this.focusNode.value.substring(0,this.minChars));}}else{if(key.length<this.minChars||this._isEmpty(key)){this._isvalid=false;this.validate(this._focused);if(this._popupWidget){this._popupWidget.clearResultList();}this._hideResultList();}else{if(key.length>this.minChars){this._openResults=false;this._origSearchKey=key;dijit.form.FilteringSelect.superclass._startSearch.call(this,key.substring(0,this.minChars));}else{this.inherited(arguments);}}}}else{this.inherited(arguments);}},_openResultList:function(_17e,_17f){if(this.minChars>0){if(this.attr("displayedValue").length<this.minChars){return;}else{if(!this._openResults){this._openResults=true;dijit.form.FilteringSelect.superclass._startSearch.call(this,this._origSearchKey);return;}}}this.inherited(arguments);},_setDisplayedValueAttr:function(_180,_181){if(!this._created){this.textbox.value=_180;this._lastDisplayedValue=_180;return;}if(this.minChars>0&&_180.length<this.minChars){this._isvalid=false;this.validate(this._focused);}else{dijit.form.FilteringSelect.prototype._setDisplayedValueAttr.apply(this,arguments);}},_setValueAttr:function(_182,_183){if(!this._created){this._setValue(_182,this.textbox.value,false);}else{this.inherited(arguments);}},_isEmpty:function(_184){if((this.minChars>0)&&(_184.length<this.minChars)){return true;}return /^\s*$/.test(_184);},removeLeadingZeros:function(_185){var _186;if(this.ignoreLeadZeros){for(var i=0;i<_185.length;i++){if(_185.charAt(i)!="0"){break;}}if(i==0){_186=_185;}else{if(i==_185.length){_186=_185;}else{_186=_185.substring(i);}}return _186;}else{return _185;}},highlightAndSearch:function(){var pos;if(this.focusNode.value.length>0){pos=this._getCaretPos(this.focusNode);if(this.searchTimer){clearTimeout(this.searchTimer);}if(pos<this.focusNode.value.length){this.autoComplete=false;dijit.selectInputText(this.focusNode,pos);if((this.minChars>0)&&(pos<this.minChars)&&(this.focusNode.value.length>=this.minChars)){pos=this.minChars;}this._startSearch(this.focusNode.value.substr(0,pos));}else{this._startSearchFromInput();}}else{this._startSearch("");}},restoreAutoComplete:function(){this.autoComplete=this._orig_autoComplete;},_escapeHtml:function(str){str=String(str).replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;").replace(/\(/gm,"&#40;").replace(/\)/gm,"&#41;").replace(/\*/gm,"&#42;");return str;},_handleOnChange:function(_18a,_18b){if(_18a&&_18a.length>0){this.inherited(arguments);}},postMixInProperties:function(){var ewt=dojo.i18n.getLocalization("te","ewt",TE_locale);if(this.invalidMessage=="$_unset_$"){this.invalidMessage=ewt.filterSelectInvalidMessage;}if(this.promptMessage.length==0){if(this.minChars>0){this.promptMessage=dojo.string.substitute(ewt.filterSelectPromptMessage,[this.minChars]);}}this.inherited(arguments);},postCreate:function(){dijit.form.FilteringSelect.prototype._postCreate.apply(this,arguments);this._orig_autoComplete=this.autoComplete;dojo.connect(this.focusNode,"onclick",this,"highlightAndSearch");dojo.connect(this,"_showResultList",this,"restoreAutoComplete");}});}if(!dojo._hasResource["te.te_CustomLayer"]){dojo._hasResource["te.te_CustomLayer"]=true;dojo.provide("te.te_CustomLayer");}

dojo.provide("te.nls.te_CustomLayer_cs");dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.cs");te.nls.ewt.cs={"searchByMessage":"Hledat dle:","textMessage":"Text","mplViewProdDtlsMessage":"Zobrazit podrobnosti o výrobku","mplNoteTooLongMessage":"Tato poznámka je příliš dlouhá. Vymažte {0} znaků.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Rozbalit výběr jazyků","oinclickhere":"Click Here","signInMessage":"Přihlásit","quickViewProdDtlsMessage":"Podrobné informace o výrobku","mplRemoveNoteMessage":"Odstranit poznámku","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Nelze zobrazit informace o dílu. Opakujte akci.<br />Jestliže problém přetrvává, klepněte na číslo dílu a přejděte na stránku s podrobnými informacemi o dílu.","myAccountMessage":"Můj účet","corpHomeMessage":"Domovská stránka","closeLangSelMessage":"Zavřít výběr jazyků","oinStatusRejected":"Rejected","scaChannelMessage":"Kanál","mplNewListMessage":"Nový seznam","mplEditNoteMessage":"Upravit poznámku","supportChat2":"Chat Now","notUserMessage":"Pokud nejste %1, klepněte zde","partNumberMessage":"Číslo dílu","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Přidat poznámku","oinStatusComplete":"Complete","registerMessage":"Zaregistrovat","oinStatusonHold":"On Hold","searchMessage":"Hledat","whoWeAreMessage":"Kdo jsme","oinStatusInProcess":"In Process","myPartListMessage":"Můj seznam dílů","languagesMessage":"Jazyky","signOutMessage":"Odhlásit","mplSysErrorMessage":"Došlo k systémové chybě. Opakujte pokus později.","segmentsMessage":"Segmenty","countrySitesMessage":"Lokální webové stránky","helloMessage":"Dobrý den","scaUnknownMessage":"Neznámo","pageLoadMessage":"Získávám informace...","worldwideMessage":"Celý svět","whyRegisterMessage":"Proč se zaregistrovat?","scaDistributorMessage":"Distributor","scaTradeMessage":"Obchodovat","closeSearchSelMessage":"Zavřít výběr hledání","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Elektronické součástky","oinStatusOpen":"Open","mplNameTooLongMessage":"Tento název je příliš dlouhý. Vymažte {0} znaků.","mplNoNameMessage":"Zadejte název svého nového seznamu.","mplNameExistsMessage":"Tento název již existuje. Zkuste zadat jiný název.","mplRemovePartMessage":"Odstranit díl","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Přidat do seznamu dílů","mplNoPartsMessage":"Tento seznam neobsahuje žádné díly. Chcete-li začít přidávat díly, vyhledejte díl v našem katalogu a klepněte na odkaz {0}."};dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.cs");te.nls.ewt.cs={"searchByMessage":"Hledat dle:","textMessage":"Text","mplViewProdDtlsMessage":"Zobrazit podrobnosti o výrobku","mplNoteTooLongMessage":"Tato poznámka je příliš dlouhá. Vymažte {0} znaků.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Rozbalit výběr jazyků","oinclickhere":"Click Here","signInMessage":"Přihlásit","quickViewProdDtlsMessage":"Podrobné informace o výrobku","mplRemoveNoteMessage":"Odstranit poznámku","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Nelze zobrazit informace o dílu. Opakujte akci.<br />Jestliže problém přetrvává, klepněte na číslo dílu a přejděte na stránku s podrobnými informacemi o dílu.","myAccountMessage":"Můj účet","corpHomeMessage":"Domovská stránka","closeLangSelMessage":"Zavřít výběr jazyků","oinStatusRejected":"Rejected","scaChannelMessage":"Kanál","mplNewListMessage":"Nový seznam","mplEditNoteMessage":"Upravit poznámku","supportChat2":"Chat Now","notUserMessage":"Pokud nejste %1, klepněte zde","partNumberMessage":"Číslo dílu","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Přidat poznámku","oinStatusComplete":"Complete","registerMessage":"Zaregistrovat","oinStatusonHold":"On Hold","searchMessage":"Hledat","whoWeAreMessage":"Kdo jsme","oinStatusInProcess":"In Process","myPartListMessage":"Můj seznam dílů","languagesMessage":"Jazyky","signOutMessage":"Odhlásit","mplSysErrorMessage":"Došlo k systémové chybě. Opakujte pokus později.","segmentsMessage":"Segmenty","countrySitesMessage":"Lokální webové stránky","helloMessage":"Dobrý den","scaUnknownMessage":"Neznámo","pageLoadMessage":"Získávám informace...","worldwideMessage":"Celý svět","whyRegisterMessage":"Proč se zaregistrovat?","scaDistributorMessage":"Distributor","scaTradeMessage":"Obchodovat","closeSearchSelMessage":"Zavřít výběr hledání","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Elektronické součástky","oinStatusOpen":"Open","mplNameTooLongMessage":"Tento název je příliš dlouhý. Vymažte {0} znaků.","mplNoNameMessage":"Zadejte název svého nového seznamu.","mplNameExistsMessage":"Tento název již existuje. Zkuste zadat jiný název.","mplRemovePartMessage":"Odstranit díl","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Přidat do seznamu dílů","mplNoPartsMessage":"Tento seznam neobsahuje žádné díly. Chcete-li začít přidávat díly, vyhledejte díl v našem katalogu a klepněte na odkaz {0}."};

dojo.provide("te.nls.te_CustomLayer_en");dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.en");te.nls.ewt.en={"searchByMessage":"Search By:","textMessage":"Keyword","mplViewProdDtlsMessage":"View product details","mplNoteTooLongMessage":"This note is too long. Please remove {0} characters.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Expand Language Selector","oinclickhere":"Click Here","signInMessage":"Sign In","quickViewProdDtlsMessage":"Product Details for","mplRemoveNoteMessage":"Remove note","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Unable to display part information. Please try again.<br />If this problem persists, click on the part number to proceed to the part detail page.","myAccountMessage":"My Account","corpHomeMessage":"Corporate Home","closeLangSelMessage":"Close Language Selector","oinStatusRejected":"Rejected","scaChannelMessage":"Channel","mplNewListMessage":"New List","mplEditNoteMessage":"Edit note","supportChat2":"Chat Now","notUserMessage":"If not %1, Click here","partNumberMessage":"Part Number","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Add note","oinStatusComplete":"Complete","registerMessage":"Register","oinStatusonHold":"On Hold","searchMessage":"Search","whoWeAreMessage":"Who We Are","oinStatusInProcess":"In Process","myPartListMessage":"My Part Lists","languagesMessage":"Languages","signOutMessage":"Sign Out","mplSysErrorMessage":"A system error has occurred. Please try again later.","segmentsMessage":"Segments","countrySitesMessage":"Country Sites","helloMessage":"Hello","scaUnknownMessage":"Unknown","pageLoadMessage":"Getting Information…","worldwideMessage":"Worldwide","whyRegisterMessage":"Why Register?","scaDistributorMessage":"Distributor","scaTradeMessage":"Trade","closeSearchSelMessage":"Close Search Selector","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Electronic Components","oinStatusOpen":"Open","mplNameTooLongMessage":"This name is too long. Please remove {0} characters.","mplNoNameMessage":"Please specify a name for your new list.","mplNameExistsMessage":"This name already exists. Please try another name.","mplRemovePartMessage":"Remove Part","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Add to Part List","mplNoPartsMessage":"This list has no parts. To begin adding parts, just find a part in our catalog and click the {0} link."};dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.en");te.nls.ewt.en={"searchByMessage":"Search By:","textMessage":"Keyword","mplViewProdDtlsMessage":"View product details","mplNoteTooLongMessage":"This note is too long. Please remove {0} characters.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Expand Language Selector","oinclickhere":"Click Here","signInMessage":"Sign In","quickViewProdDtlsMessage":"Product Details for","mplRemoveNoteMessage":"Remove note","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Unable to display part information. Please try again.<br />If this problem persists, click on the part number to proceed to the part detail page.","myAccountMessage":"My Account","corpHomeMessage":"Corporate Home","closeLangSelMessage":"Close Language Selector","oinStatusRejected":"Rejected","scaChannelMessage":"Channel","mplNewListMessage":"New List","mplEditNoteMessage":"Edit note","supportChat2":"Chat Now","notUserMessage":"If not %1, Click here","partNumberMessage":"Part Number","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Add note","oinStatusComplete":"Complete","registerMessage":"Register","oinStatusonHold":"On Hold","searchMessage":"Search","whoWeAreMessage":"Who We Are","oinStatusInProcess":"In Process","myPartListMessage":"My Part Lists","languagesMessage":"Languages","signOutMessage":"Sign Out","mplSysErrorMessage":"A system error has occurred. Please try again later.","segmentsMessage":"Segments","countrySitesMessage":"Country Sites","helloMessage":"Hello","scaUnknownMessage":"Unknown","pageLoadMessage":"Getting Information…","worldwideMessage":"Worldwide","whyRegisterMessage":"Why Register?","scaDistributorMessage":"Distributor","scaTradeMessage":"Trade","closeSearchSelMessage":"Close Search Selector","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Electronic Components","oinStatusOpen":"Open","mplNameTooLongMessage":"This name is too long. Please remove {0} characters.","mplNoNameMessage":"Please specify a name for your new list.","mplNameExistsMessage":"This name already exists. Please try another name.","mplRemovePartMessage":"Remove Part","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Add to Part List","mplNoPartsMessage":"This list has no parts. To begin adding parts, just find a part in our catalog and click the {0} link."};

dojo.provide("te.nls.te_CustomLayer_es");dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.es");te.nls.ewt.es={"searchByMessage":"Buscar por:","textMessage":"Texto","mplViewProdDtlsMessage":"Ver detalles del producto","mplNoteTooLongMessage":"Esta nota es demasiado larga. Por favor elimine {0} caracteres.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Expandir el selector de idiomas","oinclickhere":"Click Here","signInMessage":"Entrar","quickViewProdDtlsMessage":"Detalles del producto para","mplRemoveNoteMessage":"Eliminar nota","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Imposible mostrar información de la pieza. Por favor inténtelo nuevamente.<br />Si este problema persiste, haga clic en el número de pieza para proseguir a la página de detalles de la pieza.","myAccountMessage":"Mi cuenta","corpHomeMessage":"Página principal corporativa","closeLangSelMessage":"Cerrar el selector de idiomas","oinStatusRejected":"Rejected","scaChannelMessage":"Canal","mplNewListMessage":"Nueva Lista","mplEditNoteMessage":"Editar nota","supportChat2":"Chatee ahora","notUserMessage":"Si no es %1, haga clic aquí","partNumberMessage":"Número de parte","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Añadir nota","oinStatusComplete":"Complete","registerMessage":"Registrarse","oinStatusonHold":"On Hold","searchMessage":"Buscar","whoWeAreMessage":"Quiénes somos","oinStatusInProcess":"In Process","myPartListMessage":"Mis listas de piezas","languagesMessage":"Idiomas","signOutMessage":"Salir","mplSysErrorMessage":"Se produjo un error en el sistema. Por favor vuelva a intentar más tarde.","segmentsMessage":"Segmentos","countrySitesMessage":"Sitios Web por país","helloMessage":"Hola","scaUnknownMessage":"Desconocido","pageLoadMessage":"Obteniendo información…","worldwideMessage":"En todo el mundo","whyRegisterMessage":"¿Por qué registrarse?","scaDistributorMessage":"Distribuidor","scaTradeMessage":"Comercio","closeSearchSelMessage":"Cerrar el selector de búsqueda","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Componentes electrónicos","oinStatusOpen":"Open","mplNameTooLongMessage":"Este nombre es demasiado largo. Por favor elimine {0} caracteres.","mplNoNameMessage":"Por favor indicar un nombre para su nueva lista.","mplNameExistsMessage":"Este nombre ya existe. Por favor intente con otro nombre.","mplRemovePartMessage":"Eliminar pieza","oinStatusUnknown":"Unknown","supportTab":"Chatee con nosotros ahora","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Añadir a Lista de piezas","mplNoPartsMessage":"Esta lista no tiene piezas. Para empezar a añadir piezas, simplemente busque una pieza en nuestro catálogo y haga clic en el link {0}."};dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.es");te.nls.ewt.es={"searchByMessage":"Buscar por:","textMessage":"Texto","mplViewProdDtlsMessage":"Ver detalles del producto","mplNoteTooLongMessage":"Esta nota es demasiado larga. Por favor elimine {0} caracteres.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Expandir el selector de idiomas","oinclickhere":"Click Here","signInMessage":"Entrar","quickViewProdDtlsMessage":"Detalles del producto para","mplRemoveNoteMessage":"Eliminar nota","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Imposible mostrar información de la pieza. Por favor inténtelo nuevamente.<br />Si este problema persiste, haga clic en el número de pieza para proseguir a la página de detalles de la pieza.","myAccountMessage":"Mi cuenta","corpHomeMessage":"Página principal corporativa","closeLangSelMessage":"Cerrar el selector de idiomas","oinStatusRejected":"Rejected","scaChannelMessage":"Canal","mplNewListMessage":"Nueva Lista","mplEditNoteMessage":"Editar nota","supportChat2":"Chatee ahora","notUserMessage":"Si no es %1, haga clic aquí","partNumberMessage":"Número de parte","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Añadir nota","oinStatusComplete":"Complete","registerMessage":"Registrarse","oinStatusonHold":"On Hold","searchMessage":"Buscar","whoWeAreMessage":"Quiénes somos","oinStatusInProcess":"In Process","myPartListMessage":"Mis listas de piezas","languagesMessage":"Idiomas","signOutMessage":"Salir","mplSysErrorMessage":"Se produjo un error en el sistema. Por favor vuelva a intentar más tarde.","segmentsMessage":"Segmentos","countrySitesMessage":"Sitios Web por país","helloMessage":"Hola","scaUnknownMessage":"Desconocido","pageLoadMessage":"Obteniendo información…","worldwideMessage":"En todo el mundo","whyRegisterMessage":"¿Por qué registrarse?","scaDistributorMessage":"Distribuidor","scaTradeMessage":"Comercio","closeSearchSelMessage":"Cerrar el selector de búsqueda","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Componentes electrónicos","oinStatusOpen":"Open","mplNameTooLongMessage":"Este nombre es demasiado largo. Por favor elimine {0} caracteres.","mplNoNameMessage":"Por favor indicar un nombre para su nueva lista.","mplNameExistsMessage":"Este nombre ya existe. Por favor intente con otro nombre.","mplRemovePartMessage":"Eliminar pieza","oinStatusUnknown":"Unknown","supportTab":"Chatee con nosotros ahora","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Añadir a Lista de piezas","mplNoPartsMessage":"Esta lista no tiene piezas. Para empezar a añadir piezas, simplemente busque una pieza en nuestro catálogo y haga clic en el link {0}."};

dojo.provide("te.nls.te_CustomLayer_fr");dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.fr");te.nls.ewt.fr={"searchByMessage":"Rechercher par :","textMessage":"Texte","mplViewProdDtlsMessage":"Afficher les détails du produit","mplNoteTooLongMessage":"Cette note est trop longue. Veuillez enlever {0} caractères.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Ouvrir le sélecteur de langue","oinclickhere":"Click Here","signInMessage":"Connexion","quickViewProdDtlsMessage":"Informations détaillées de","mplRemoveNoteMessage":"Retirer une note","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Impossible d'afficher les informations de la pièce. Veuillez réessayer.<br />Si ce problème persiste, cliquez sur le numéro de la pièce pour aller à la page détaillée.","myAccountMessage":"Mon compte","corpHomeMessage":"Accueil entreprise","closeLangSelMessage":"Fermer le sélecteur de langue","oinStatusRejected":"Rejected","scaChannelMessage":"Canal","mplNewListMessage":"Nouvelle liste","mplEditNoteMessage":"Modifier une note","supportChat2":"Chat Now","notUserMessage":"Si vous n’êtes pas %1, cliquez ici","partNumberMessage":"Référence","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Ajouter une note","oinStatusComplete":"Complete","registerMessage":"Inscription","oinStatusonHold":"On Hold","searchMessage":"Rechercher","whoWeAreMessage":"Qui sommes-nous ?","oinStatusInProcess":"In Process","myPartListMessage":"Mes listes de pièces","languagesMessage":"Langues","signOutMessage":"Déconnexion","mplSysErrorMessage":"Une erreur système s'est produite. Veuillez réessayer plus tard.","segmentsMessage":"Segments","countrySitesMessage":"Sites des différents pays","helloMessage":"Bonjour,","scaUnknownMessage":"Inconnu","pageLoadMessage":"Obtention d'informations...","worldwideMessage":"International","whyRegisterMessage":"Pourquoi s’inscrire ?","scaDistributorMessage":"Distributeur","scaTradeMessage":"Commerce","closeSearchSelMessage":"Fermer le sélecteur de recherche","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Composants électroniques","oinStatusOpen":"Open","mplNameTooLongMessage":"Ce nom est trop long. Veuillez enlever {0} caractères.","mplNoNameMessage":"Veuillez donner un nom à votre nouvelle liste.","mplNameExistsMessage":"Ce nom existe déjà. Essayez un autre nom.","mplRemovePartMessage":"Retirer une pièce","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Ajouter à la liste des pièces","mplNoPartsMessage":"Cette liste contient aucune pièce. Pour ajouter des pièces il suffit de consulter notre catalogue et de cliquer sur le lien {0}."};dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.fr");te.nls.ewt.fr={"searchByMessage":"Rechercher par :","textMessage":"Texte","mplViewProdDtlsMessage":"Afficher les détails du produit","mplNoteTooLongMessage":"Cette note est trop longue. Veuillez enlever {0} caractères.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Ouvrir le sélecteur de langue","oinclickhere":"Click Here","signInMessage":"Connexion","quickViewProdDtlsMessage":"Informations détaillées de","mplRemoveNoteMessage":"Retirer une note","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Impossible d'afficher les informations de la pièce. Veuillez réessayer.<br />Si ce problème persiste, cliquez sur le numéro de la pièce pour aller à la page détaillée.","myAccountMessage":"Mon compte","corpHomeMessage":"Accueil entreprise","closeLangSelMessage":"Fermer le sélecteur de langue","oinStatusRejected":"Rejected","scaChannelMessage":"Canal","mplNewListMessage":"Nouvelle liste","mplEditNoteMessage":"Modifier une note","supportChat2":"Chat Now","notUserMessage":"Si vous n’êtes pas %1, cliquez ici","partNumberMessage":"Référence","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Ajouter une note","oinStatusComplete":"Complete","registerMessage":"Inscription","oinStatusonHold":"On Hold","searchMessage":"Rechercher","whoWeAreMessage":"Qui sommes-nous ?","oinStatusInProcess":"In Process","myPartListMessage":"Mes listes de pièces","languagesMessage":"Langues","signOutMessage":"Déconnexion","mplSysErrorMessage":"Une erreur système s'est produite. Veuillez réessayer plus tard.","segmentsMessage":"Segments","countrySitesMessage":"Sites des différents pays","helloMessage":"Bonjour,","scaUnknownMessage":"Inconnu","pageLoadMessage":"Obtention d'informations...","worldwideMessage":"International","whyRegisterMessage":"Pourquoi s’inscrire ?","scaDistributorMessage":"Distributeur","scaTradeMessage":"Commerce","closeSearchSelMessage":"Fermer le sélecteur de recherche","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Composants électroniques","oinStatusOpen":"Open","mplNameTooLongMessage":"Ce nom est trop long. Veuillez enlever {0} caractères.","mplNoNameMessage":"Veuillez donner un nom à votre nouvelle liste.","mplNameExistsMessage":"Ce nom existe déjà. Essayez un autre nom.","mplRemovePartMessage":"Retirer une pièce","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Ajouter à la liste des pièces","mplNoPartsMessage":"Cette liste contient aucune pièce. Pour ajouter des pièces il suffit de consulter notre catalogue et de cliquer sur le lien {0}."};

dojo.provide("te.nls.te_CustomLayer_hu");dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.hu");te.nls.ewt.hu={"searchByMessage":"Keresés erre:","textMessage":"Szöveg","mplViewProdDtlsMessage":"Termékrészletek megtekintése","mplNoteTooLongMessage":"Ez a megjegyzés túl hosszú. Töröljön {0} karaktert.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Nyelvválasztó maximalizálása","oinclickhere":"Click Here","signInMessage":"Bejelentkezés","quickViewProdDtlsMessage":"Részletek a következőről:","mplRemoveNoteMessage":"Megjegyzés eltávolítása","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Nem lehetséges információ megjelenítése az alkatrészről. Próbálja újra.<br />Ha továbbra is fennáll ez a probléma, kattintson az alkatrész számára az alkatrész részleteinek megtekintéséhez.","myAccountMessage":"Felhasználói profil","corpHomeMessage":"Hivaralos kezdőlap","closeLangSelMessage":"Nyelvválasztó bezárása","oinStatusRejected":"Rejected","scaChannelMessage":"Csatorna","mplNewListMessage":"Új lista","mplEditNoteMessage":"Megjegyzés szerkesztése","supportChat2":"Chat Now","notUserMessage":"Ha nem %1, akkor kattintson ide","partNumberMessage":"Cikkszám","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Megjegyzés hozzáadása","oinStatusComplete":"Complete","registerMessage":"Regisztráció","oinStatusonHold":"On Hold","searchMessage":"Keresés","whoWeAreMessage":"Bemutatkozás","oinStatusInProcess":"In Process","myPartListMessage":"Alkatrészlistáim","languagesMessage":"Nyelvek","signOutMessage":"Kijelentkezés","mplSysErrorMessage":"Rendszerhiba történt. Próbálja újra később.","segmentsMessage":"Szegmensek","countrySitesMessage":"Regionális weboldalak","helloMessage":"Helló","scaUnknownMessage":"Ismeretlen","pageLoadMessage":"Információ kérése…","worldwideMessage":"Nyelvválasztás","whyRegisterMessage":"Miért regisztráljak?","scaDistributorMessage":"Viszonteladó","scaTradeMessage":"Kereskedés","closeSearchSelMessage":"Keresőablak bezárása","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Elektronikai komponensek","oinStatusOpen":"Open","mplNameTooLongMessage":"Ez a név túl hosszú. Töröljön {0} karaktert.","mplNoNameMessage":"Adjon meg egy nevet az új listájához.","mplNameExistsMessage":"Ez a név már létezik. Kérjük, adjon meg másik nevet.","mplRemovePartMessage":"Alkatrész eltávolítása","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Hozzáadás az alkatrészlistához","mplNoPartsMessage":"Ez a lista nem tartalmaz alkatrészeket. Az alkatrészek hozzáadásának megkezdéséhez keressen egy alkatrészt a katalógusunkban és kattintson a {0} linkre."};dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.hu");te.nls.ewt.hu={"searchByMessage":"Keresés erre:","textMessage":"Szöveg","mplViewProdDtlsMessage":"Termékrészletek megtekintése","mplNoteTooLongMessage":"Ez a megjegyzés túl hosszú. Töröljön {0} karaktert.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Nyelvválasztó maximalizálása","oinclickhere":"Click Here","signInMessage":"Bejelentkezés","quickViewProdDtlsMessage":"Részletek a következőről:","mplRemoveNoteMessage":"Megjegyzés eltávolítása","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Nem lehetséges információ megjelenítése az alkatrészről. Próbálja újra.<br />Ha továbbra is fennáll ez a probléma, kattintson az alkatrész számára az alkatrész részleteinek megtekintéséhez.","myAccountMessage":"Felhasználói profil","corpHomeMessage":"Hivaralos kezdőlap","closeLangSelMessage":"Nyelvválasztó bezárása","oinStatusRejected":"Rejected","scaChannelMessage":"Csatorna","mplNewListMessage":"Új lista","mplEditNoteMessage":"Megjegyzés szerkesztése","supportChat2":"Chat Now","notUserMessage":"Ha nem %1, akkor kattintson ide","partNumberMessage":"Cikkszám","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Megjegyzés hozzáadása","oinStatusComplete":"Complete","registerMessage":"Regisztráció","oinStatusonHold":"On Hold","searchMessage":"Keresés","whoWeAreMessage":"Bemutatkozás","oinStatusInProcess":"In Process","myPartListMessage":"Alkatrészlistáim","languagesMessage":"Nyelvek","signOutMessage":"Kijelentkezés","mplSysErrorMessage":"Rendszerhiba történt. Próbálja újra később.","segmentsMessage":"Szegmensek","countrySitesMessage":"Regionális weboldalak","helloMessage":"Helló","scaUnknownMessage":"Ismeretlen","pageLoadMessage":"Információ kérése…","worldwideMessage":"Nyelvválasztás","whyRegisterMessage":"Miért regisztráljak?","scaDistributorMessage":"Viszonteladó","scaTradeMessage":"Kereskedés","closeSearchSelMessage":"Keresőablak bezárása","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Elektronikai komponensek","oinStatusOpen":"Open","mplNameTooLongMessage":"Ez a név túl hosszú. Töröljön {0} karaktert.","mplNoNameMessage":"Adjon meg egy nevet az új listájához.","mplNameExistsMessage":"Ez a név már létezik. Kérjük, adjon meg másik nevet.","mplRemovePartMessage":"Alkatrész eltávolítása","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Hozzáadás az alkatrészlistához","mplNoPartsMessage":"Ez a lista nem tartalmaz alkatrészeket. Az alkatrészek hozzáadásának megkezdéséhez keressen egy alkatrészt a katalógusunkban és kattintson a {0} linkre."};

dojo.provide("te.nls.te_CustomLayer_it");dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.it");te.nls.ewt.it={"searchByMessage":"Cerca per:","textMessage":"Testo","mplViewProdDtlsMessage":"Visualizza dettagli prodotto","mplNoteTooLongMessage":"La nota è troppo lunga. Rimuovere {0} caratteri.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Espandi selettore lingua","oinclickhere":"Click Here","signInMessage":"Accesso","quickViewProdDtlsMessage":"Dettagli dell'articolo","mplRemoveNoteMessage":"Rimuovi nota","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Impossibile visualizzare informazioni sull'articolo. Riprovare.<br />Se il problema persiste cliccare sul codice articolo per procedere alla pagina con i dati dell'articolo.","myAccountMessage":"Account personale","corpHomeMessage":"Home page aziendale","closeLangSelMessage":"Chiudi selettore lingua","oinStatusRejected":"Rejected","scaChannelMessage":"Canale","mplNewListMessage":"Nuovo elenco","mplEditNoteMessage":"Modifica nota","supportChat2":"Chat Now","notUserMessage":"Se diverso da %1, fare clic qui","partNumberMessage":"Numero componente","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Aggiungi nota","oinStatusComplete":"Complete","registerMessage":"Registrazione","oinStatusonHold":"On Hold","searchMessage":"Cerca","whoWeAreMessage":"Chi siamo","oinStatusInProcess":"In Process","myPartListMessage":"Il mio elenco articoli","languagesMessage":"Lingue","signOutMessage":"Disconnessione","mplSysErrorMessage":"Si è verificato un errore di sistema. Riprova più tardi.","segmentsMessage":"Segmenti","countrySitesMessage":"Siti per nazione","helloMessage":"Salve","scaUnknownMessage":"Non noto","pageLoadMessage":"Come ottenere informazioni…","worldwideMessage":"Mondiale","whyRegisterMessage":"Perché registrarsi?","scaDistributorMessage":"Distributore","scaTradeMessage":"Settore commerciale","closeSearchSelMessage":"Chiudi selettore ricerca","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Componenti elettronici","oinStatusOpen":"Open","mplNameTooLongMessage":"Il nome è troppo lungo. Rimuovere {0} caratteri.","mplNoNameMessage":"Specificare un nome per il nuovo elenco.","mplNameExistsMessage":"Il nome esiste già. Tentare con un altro nome.","mplRemovePartMessage":"Rimuovi articolo","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Aggiungi a elenco articoli","mplNoPartsMessage":"Questo elenco non ha articoli. Per iniziare ad aggiungere articoli, è sufficiente trovarne uno nel nostro catalogo e cliccare sul link {0}."};dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.it");te.nls.ewt.it={"searchByMessage":"Cerca per:","textMessage":"Testo","mplViewProdDtlsMessage":"Visualizza dettagli prodotto","mplNoteTooLongMessage":"La nota è troppo lunga. Rimuovere {0} caratteri.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Espandi selettore lingua","oinclickhere":"Click Here","signInMessage":"Accesso","quickViewProdDtlsMessage":"Dettagli dell'articolo","mplRemoveNoteMessage":"Rimuovi nota","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Impossibile visualizzare informazioni sull'articolo. Riprovare.<br />Se il problema persiste cliccare sul codice articolo per procedere alla pagina con i dati dell'articolo.","myAccountMessage":"Account personale","corpHomeMessage":"Home page aziendale","closeLangSelMessage":"Chiudi selettore lingua","oinStatusRejected":"Rejected","scaChannelMessage":"Canale","mplNewListMessage":"Nuovo elenco","mplEditNoteMessage":"Modifica nota","supportChat2":"Chat Now","notUserMessage":"Se diverso da %1, fare clic qui","partNumberMessage":"Numero componente","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Aggiungi nota","oinStatusComplete":"Complete","registerMessage":"Registrazione","oinStatusonHold":"On Hold","searchMessage":"Cerca","whoWeAreMessage":"Chi siamo","oinStatusInProcess":"In Process","myPartListMessage":"Il mio elenco articoli","languagesMessage":"Lingue","signOutMessage":"Disconnessione","mplSysErrorMessage":"Si è verificato un errore di sistema. Riprova più tardi.","segmentsMessage":"Segmenti","countrySitesMessage":"Siti per nazione","helloMessage":"Salve","scaUnknownMessage":"Non noto","pageLoadMessage":"Come ottenere informazioni…","worldwideMessage":"Mondiale","whyRegisterMessage":"Perché registrarsi?","scaDistributorMessage":"Distributore","scaTradeMessage":"Settore commerciale","closeSearchSelMessage":"Chiudi selettore ricerca","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Componenti elettronici","oinStatusOpen":"Open","mplNameTooLongMessage":"Il nome è troppo lungo. Rimuovere {0} caratteri.","mplNoNameMessage":"Specificare un nome per il nuovo elenco.","mplNameExistsMessage":"Il nome esiste già. Tentare con un altro nome.","mplRemovePartMessage":"Rimuovi articolo","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Aggiungi a elenco articoli","mplNoPartsMessage":"Questo elenco non ha articoli. Per iniziare ad aggiungere articoli, è sufficiente trovarne uno nel nostro catalogo e cliccare sul link {0}."};

dojo.provide("te.nls.te_CustomLayer_ja");dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.ja");te.nls.ewt.ja={"searchByMessage":"検索対象：","textMessage":"テキスト","mplViewProdDtlsMessage":"製品詳細を表示する","mplNoteTooLongMessage":"注釈が長すぎます。{0} 文字を削除してください。","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"言語セレクタを開く","oinclickhere":"Click Here","signInMessage":"サインイン","quickViewProdDtlsMessage":"製品の詳細","mplRemoveNoteMessage":"注釈を削除する","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"部品情報を表示できません。再試行してください。<br />この問題が続くようであれば、部品番号をクリックして部品の詳細ページへ進んでください。","myAccountMessage":"マイ アカウント","corpHomeMessage":"ホーム","closeLangSelMessage":"言語セレクタを閉じる","oinStatusRejected":"Rejected","scaChannelMessage":"チャネル","mplNewListMessage":"新規リスト","mplEditNoteMessage":"注釈を編集する","supportChat2":"Chat Now","notUserMessage":"If not %1, Click here","partNumberMessage":"部品番号","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"注釈を追加する","oinStatusComplete":"Complete","registerMessage":"登録","oinStatusonHold":"On Hold","searchMessage":"検索","whoWeAreMessage":"会社情報","oinStatusInProcess":"In Process","myPartListMessage":"部品リスト","languagesMessage":"言語","signOutMessage":"サインアウト","mplSysErrorMessage":"システム エラーが発生しました。後ほど再試行してください。","segmentsMessage":"事業部門","countrySitesMessage":"国別サイト","helloMessage":"Hello","scaUnknownMessage":"未知","pageLoadMessage":"情報を取得中","worldwideMessage":"ワールドワイド","whyRegisterMessage":"ID登録","scaDistributorMessage":"代理店","scaTradeMessage":"取引","closeSearchSelMessage":"検索セレクタを閉じる","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"電子部品","oinStatusOpen":"Open","mplNameTooLongMessage":"名前が長すぎます。{0} 文字を削除してください。","mplNoNameMessage":"新しいリストの名前を指定してください。","mplNameExistsMessage":"この名前はすでに存在します。他の名前で試してください。","mplRemovePartMessage":"部品を削除する","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"部品リストへ追加","mplNoPartsMessage":"このリストには部品がありません。部品を追加するには、カタログから部品を探し、{0}リンクをクリックします。"};dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.ja");te.nls.ewt.ja={"searchByMessage":"検索対象：","textMessage":"テキスト","mplViewProdDtlsMessage":"製品詳細を表示する","mplNoteTooLongMessage":"注釈が長すぎます。{0} 文字を削除してください。","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"言語セレクタを開く","oinclickhere":"Click Here","signInMessage":"サインイン","quickViewProdDtlsMessage":"製品の詳細","mplRemoveNoteMessage":"注釈を削除する","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"部品情報を表示できません。再試行してください。<br />この問題が続くようであれば、部品番号をクリックして部品の詳細ページへ進んでください。","myAccountMessage":"マイ アカウント","corpHomeMessage":"ホーム","closeLangSelMessage":"言語セレクタを閉じる","oinStatusRejected":"Rejected","scaChannelMessage":"チャネル","mplNewListMessage":"新規リスト","mplEditNoteMessage":"注釈を編集する","supportChat2":"Chat Now","notUserMessage":"If not %1, Click here","partNumberMessage":"部品番号","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"注釈を追加する","oinStatusComplete":"Complete","registerMessage":"登録","oinStatusonHold":"On Hold","searchMessage":"検索","whoWeAreMessage":"会社情報","oinStatusInProcess":"In Process","myPartListMessage":"部品リスト","languagesMessage":"言語","signOutMessage":"サインアウト","mplSysErrorMessage":"システム エラーが発生しました。後ほど再試行してください。","segmentsMessage":"事業部門","countrySitesMessage":"国別サイト","helloMessage":"Hello","scaUnknownMessage":"未知","pageLoadMessage":"情報を取得中","worldwideMessage":"ワールドワイド","whyRegisterMessage":"ID登録","scaDistributorMessage":"代理店","scaTradeMessage":"取引","closeSearchSelMessage":"検索セレクタを閉じる","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"電子部品","oinStatusOpen":"Open","mplNameTooLongMessage":"名前が長すぎます。{0} 文字を削除してください。","mplNoNameMessage":"新しいリストの名前を指定してください。","mplNameExistsMessage":"この名前はすでに存在します。他の名前で試してください。","mplRemovePartMessage":"部品を削除する","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"部品リストへ追加","mplNoPartsMessage":"このリストには部品がありません。部品を追加するには、カタログから部品を探し、{0}リンクをクリックします。"};

dojo.provide("te.nls.te_CustomLayer_ko");dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.ko");te.nls.ewt.ko={"searchByMessage":"검색 조건:","textMessage":"텍스트","mplViewProdDtlsMessage":"제품 세부 정보 보기","mplNoteTooLongMessage":"이 메모는 너무 깁니다. {0}자를 지우십시오.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"언어 선택기 확대","oinclickhere":"Click Here","signInMessage":"로그인","quickViewProdDtlsMessage":"다음에 대한 제품 세부 정보:","mplRemoveNoteMessage":"메모 제거","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"부품 정보를 표시할 수 없습니다. 다시 시도하십시오.<br />이 문제가 지속되면, 부품 번호를 클릭하여 부품 세부 정보 페이지로 진행하십시오.","myAccountMessage":"내 계정","corpHomeMessage":"회사 홈 페이지","closeLangSelMessage":"언어 선택기 닫기","oinStatusRejected":"Rejected","scaChannelMessage":"경로","mplNewListMessage":"새 목록","mplEditNoteMessage":"메모 편집","supportChat2":"Chat Now","notUserMessage":"%1이(가) 아닌 경우 여기를 클릭하십시오.","partNumberMessage":"부품 번호","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"메모 추가","oinStatusComplete":"Complete","registerMessage":"등록","oinStatusonHold":"On Hold","searchMessage":"검색","whoWeAreMessage":"회사 소개","oinStatusInProcess":"In Process","myPartListMessage":"내 부품 목록","languagesMessage":"언어","signOutMessage":"로그아웃","mplSysErrorMessage":"시스템 오류가 발생했습니다. 나중에 다시 시도하십시오.","segmentsMessage":"분류","countrySitesMessage":"국가별 사이트","helloMessage":"인사말","scaUnknownMessage":"알 수 없음","pageLoadMessage":"정보를 가져오는 중…","worldwideMessage":"전세계","whyRegisterMessage":"회원 가입 혜택","scaDistributorMessage":"대리점","scaTradeMessage":"거래","closeSearchSelMessage":"검색 선택기 닫기","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"전자 부품","oinStatusOpen":"Open","mplNameTooLongMessage":"이 이름은 너무 깁니다. {0}자를 지우십시오.","mplNoNameMessage":"새 목록의 이름을 지정하십시오.","mplNameExistsMessage":"이 이름은 이미 있습니다. 다른 이름을 사용하십시오.","mplRemovePartMessage":"부품 제거","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"부품 목록에 추가","mplNoPartsMessage":"이 목록에는 부품이 없습니다. 부품을 추가하려면 카탈로그에서 부품을 찾아 {0} 링크를 클릭하십시오."};dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.ko");te.nls.ewt.ko={"searchByMessage":"검색 조건:","textMessage":"텍스트","mplViewProdDtlsMessage":"제품 세부 정보 보기","mplNoteTooLongMessage":"이 메모는 너무 깁니다. {0}자를 지우십시오.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"언어 선택기 확대","oinclickhere":"Click Here","signInMessage":"로그인","quickViewProdDtlsMessage":"다음에 대한 제품 세부 정보:","mplRemoveNoteMessage":"메모 제거","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"부품 정보를 표시할 수 없습니다. 다시 시도하십시오.<br />이 문제가 지속되면, 부품 번호를 클릭하여 부품 세부 정보 페이지로 진행하십시오.","myAccountMessage":"내 계정","corpHomeMessage":"회사 홈 페이지","closeLangSelMessage":"언어 선택기 닫기","oinStatusRejected":"Rejected","scaChannelMessage":"경로","mplNewListMessage":"새 목록","mplEditNoteMessage":"메모 편집","supportChat2":"Chat Now","notUserMessage":"%1이(가) 아닌 경우 여기를 클릭하십시오.","partNumberMessage":"부품 번호","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"메모 추가","oinStatusComplete":"Complete","registerMessage":"등록","oinStatusonHold":"On Hold","searchMessage":"검색","whoWeAreMessage":"회사 소개","oinStatusInProcess":"In Process","myPartListMessage":"내 부품 목록","languagesMessage":"언어","signOutMessage":"로그아웃","mplSysErrorMessage":"시스템 오류가 발생했습니다. 나중에 다시 시도하십시오.","segmentsMessage":"분류","countrySitesMessage":"국가별 사이트","helloMessage":"인사말","scaUnknownMessage":"알 수 없음","pageLoadMessage":"정보를 가져오는 중…","worldwideMessage":"전세계","whyRegisterMessage":"회원 가입 혜택","scaDistributorMessage":"대리점","scaTradeMessage":"거래","closeSearchSelMessage":"검색 선택기 닫기","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"전자 부품","oinStatusOpen":"Open","mplNameTooLongMessage":"이 이름은 너무 깁니다. {0}자를 지우십시오.","mplNoNameMessage":"새 목록의 이름을 지정하십시오.","mplNameExistsMessage":"이 이름은 이미 있습니다. 다른 이름을 사용하십시오.","mplRemovePartMessage":"부품 제거","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"부품 목록에 추가","mplNoPartsMessage":"이 목록에는 부품이 없습니다. 부품을 추가하려면 카탈로그에서 부품을 찾아 {0} 링크를 클릭하십시오."};

dojo.provide("te.nls.te_CustomLayer_pl");dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.pl");te.nls.ewt.pl={"searchByMessage":"Wyszukiwanie według:","textMessage":"Tekst","mplViewProdDtlsMessage":"Przeglądaj szczegóły produktu","mplNoteTooLongMessage":"Ta notatka jest zbyt długa. Proszę usunąć {0} znaków.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Rozwiń ekran wyboru języka","oinclickhere":"Click Here","signInMessage":"Zaloguj się","quickViewProdDtlsMessage":"Szczegóły produktu do","mplRemoveNoteMessage":"Usuń notatkę","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Nie można wyświetlić informacji o części. Proszę spróbować ponownie.<br />Jeśli problem występuje nadal, kliknij na numer części, by przejść do strony jej szczegółowego opisu.","myAccountMessage":"Moje konto","corpHomeMessage":"Strona główna firmy","closeLangSelMessage":"Zamknij ekran wyboru języka","oinStatusRejected":"Rejected","scaChannelMessage":"Kanał","mplNewListMessage":"Nowa lista","mplEditNoteMessage":"Edytuj notatkę","supportChat2":"Chat Now","notUserMessage":"Jeśli nie %1, kliknij tutaj","partNumberMessage":"Numer części","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Dodaj notatkę","oinStatusComplete":"Complete","registerMessage":"Zarejestruj się","oinStatusonHold":"On Hold","searchMessage":"Wyszukaj","whoWeAreMessage":"Kim jesteśmy","oinStatusInProcess":"In Process","myPartListMessage":"Moje listy części","languagesMessage":"Języki","signOutMessage":"Wyloguj się","mplSysErrorMessage":"Wystąpił błąd systemu. Proszę spróbować później.","segmentsMessage":"Segmenty","countrySitesMessage":"Strony regionalne","helloMessage":"Witamy","scaUnknownMessage":"Nieznany","pageLoadMessage":"Otrzymywanie informacji...","worldwideMessage":"Na świecie","whyRegisterMessage":"Co daje rejestracja?","scaDistributorMessage":"Dystrybutor","scaTradeMessage":"Handel","closeSearchSelMessage":"Zamknij ekran wyszukiwania","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Komponenty elektroniczne","oinStatusOpen":"Open","mplNameTooLongMessage":"Ta nazwa jest zbyt długa. Proszę usunąć {0} znaków.","mplNoNameMessage":"Proszę podac nazwę swojej nowej listy.","mplNameExistsMessage":"Ta nazwa już istnieje. Spróbuj użyć innej nazwy.","mplRemovePartMessage":"Usuń część","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Dodaj do listy części","mplNoPartsMessage":"Ta lista nie zawiera części. Aby rozpocząć dodawanie części, odnajdź część w naszym katalogu i kliknij na odsyłacz {0}."};dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.pl");te.nls.ewt.pl={"searchByMessage":"Wyszukiwanie według:","textMessage":"Tekst","mplViewProdDtlsMessage":"Przeglądaj szczegóły produktu","mplNoteTooLongMessage":"Ta notatka jest zbyt długa. Proszę usunąć {0} znaków.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Rozwiń ekran wyboru języka","oinclickhere":"Click Here","signInMessage":"Zaloguj się","quickViewProdDtlsMessage":"Szczegóły produktu do","mplRemoveNoteMessage":"Usuń notatkę","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Nie można wyświetlić informacji o części. Proszę spróbować ponownie.<br />Jeśli problem występuje nadal, kliknij na numer części, by przejść do strony jej szczegółowego opisu.","myAccountMessage":"Moje konto","corpHomeMessage":"Strona główna firmy","closeLangSelMessage":"Zamknij ekran wyboru języka","oinStatusRejected":"Rejected","scaChannelMessage":"Kanał","mplNewListMessage":"Nowa lista","mplEditNoteMessage":"Edytuj notatkę","supportChat2":"Chat Now","notUserMessage":"Jeśli nie %1, kliknij tutaj","partNumberMessage":"Numer części","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Dodaj notatkę","oinStatusComplete":"Complete","registerMessage":"Zarejestruj się","oinStatusonHold":"On Hold","searchMessage":"Wyszukaj","whoWeAreMessage":"Kim jesteśmy","oinStatusInProcess":"In Process","myPartListMessage":"Moje listy części","languagesMessage":"Języki","signOutMessage":"Wyloguj się","mplSysErrorMessage":"Wystąpił błąd systemu. Proszę spróbować później.","segmentsMessage":"Segmenty","countrySitesMessage":"Strony regionalne","helloMessage":"Witamy","scaUnknownMessage":"Nieznany","pageLoadMessage":"Otrzymywanie informacji...","worldwideMessage":"Na świecie","whyRegisterMessage":"Co daje rejestracja?","scaDistributorMessage":"Dystrybutor","scaTradeMessage":"Handel","closeSearchSelMessage":"Zamknij ekran wyszukiwania","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Komponenty elektroniczne","oinStatusOpen":"Open","mplNameTooLongMessage":"Ta nazwa jest zbyt długa. Proszę usunąć {0} znaków.","mplNoNameMessage":"Proszę podac nazwę swojej nowej listy.","mplNameExistsMessage":"Ta nazwa już istnieje. Spróbuj użyć innej nazwy.","mplRemovePartMessage":"Usuń część","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Dodaj do listy części","mplNoPartsMessage":"Ta lista nie zawiera części. Aby rozpocząć dodawanie części, odnajdź część w naszym katalogu i kliknij na odsyłacz {0}."};

dojo.provide("te.nls.te_CustomLayer_pt");dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.pt");te.nls.ewt.pt={"searchByMessage":"Procurar por:","textMessage":"Texto","mplViewProdDtlsMessage":"Exibir detalhes do produto","mplNoteTooLongMessage":"Esta nota é comprida demais. Por favor, remova {0} caracteres.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Expandir seletor de idiomas","oinclickhere":"Click Here","signInMessage":"Login","quickViewProdDtlsMessage":"Detalhes do produto para","mplRemoveNoteMessage":"Remover nota","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Não foi possível exibir informações da peça. Por favor, tente novamente.<br />Se este problema persistir, clique no número da peça, para ir para a página de detalhes da mesma.","myAccountMessage":"Minha conta","corpHomeMessage":"Página inicial corporativa","closeLangSelMessage":"Fechar seletor de idiomas","oinStatusRejected":"Rejected","scaChannelMessage":"Canal","mplNewListMessage":"Nova lista","mplEditNoteMessage":"Editar nota","supportChat2":"Chat Now","notUserMessage":"Se não %1, clique aqui","partNumberMessage":"Nº da peça","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Adicionar nota","oinStatusComplete":"Complete","registerMessage":"Cadastro","oinStatusonHold":"On Hold","searchMessage":"Procurar","whoWeAreMessage":"Quem somos","oinStatusInProcess":"In Process","myPartListMessage":"Minha lista de peças","languagesMessage":"Idiomas","signOutMessage":"Logoff","mplSysErrorMessage":"Ocorreu um erro de sistema. Por favor, tente novamente mais tarde.","segmentsMessage":"Segmentos","countrySitesMessage":"Sites locais","helloMessage":"Olá","scaUnknownMessage":"Desconhecido","pageLoadMessage":"Obtendo informações...","worldwideMessage":"Mundial","whyRegisterMessage":"Por que se cadastrar?","scaDistributorMessage":"Distribuidor","scaTradeMessage":"Comércio","closeSearchSelMessage":"Fechar seletor de procura","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Componentes Eletrônicos","oinStatusOpen":"Open","mplNameTooLongMessage":"Este nome é comprido demais. Por favor, remova {0} caracteres.","mplNoNameMessage":"Por favor, especifique um nome para sua nova lista.","mplNameExistsMessage":"Este nome já existe. Por favor, tente outro nome.","mplRemovePartMessage":"Remover peça","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Adicionar à lista de peças","mplNoPartsMessage":"Esta lista não tem nenhuma peça. Para começar a adicionar peças, localize uma peça em nosso catálogo e clique no link {0}."};dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.pt");te.nls.ewt.pt={"searchByMessage":"Procurar por:","textMessage":"Texto","mplViewProdDtlsMessage":"Exibir detalhes do produto","mplNoteTooLongMessage":"Esta nota é comprida demais. Por favor, remova {0} caracteres.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Expandir seletor de idiomas","oinclickhere":"Click Here","signInMessage":"Login","quickViewProdDtlsMessage":"Detalhes do produto para","mplRemoveNoteMessage":"Remover nota","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Não foi possível exibir informações da peça. Por favor, tente novamente.<br />Se este problema persistir, clique no número da peça, para ir para a página de detalhes da mesma.","myAccountMessage":"Minha conta","corpHomeMessage":"Página inicial corporativa","closeLangSelMessage":"Fechar seletor de idiomas","oinStatusRejected":"Rejected","scaChannelMessage":"Canal","mplNewListMessage":"Nova lista","mplEditNoteMessage":"Editar nota","supportChat2":"Chat Now","notUserMessage":"Se não %1, clique aqui","partNumberMessage":"Nº da peça","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Adicionar nota","oinStatusComplete":"Complete","registerMessage":"Cadastro","oinStatusonHold":"On Hold","searchMessage":"Procurar","whoWeAreMessage":"Quem somos","oinStatusInProcess":"In Process","myPartListMessage":"Minha lista de peças","languagesMessage":"Idiomas","signOutMessage":"Logoff","mplSysErrorMessage":"Ocorreu um erro de sistema. Por favor, tente novamente mais tarde.","segmentsMessage":"Segmentos","countrySitesMessage":"Sites locais","helloMessage":"Olá","scaUnknownMessage":"Desconhecido","pageLoadMessage":"Obtendo informações...","worldwideMessage":"Mundial","whyRegisterMessage":"Por que se cadastrar?","scaDistributorMessage":"Distribuidor","scaTradeMessage":"Comércio","closeSearchSelMessage":"Fechar seletor de procura","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Componentes Eletrônicos","oinStatusOpen":"Open","mplNameTooLongMessage":"Este nome é comprido demais. Por favor, remova {0} caracteres.","mplNoNameMessage":"Por favor, especifique um nome para sua nova lista.","mplNameExistsMessage":"Este nome já existe. Por favor, tente outro nome.","mplRemovePartMessage":"Remover peça","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Adicionar à lista de peças","mplNoPartsMessage":"Esta lista não tem nenhuma peça. Para começar a adicionar peças, localize uma peça em nosso catálogo e clique no link {0}."};

dojo.provide("te.nls.te_CustomLayer_ru");dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.ru");te.nls.ewt.ru={"searchByMessage":"Искать по:","textMessage":"Текст","mplViewProdDtlsMessage":"Просмотреть детали изделия","mplNoteTooLongMessage":"Это примечание слишком длинное. Удалите символы {0}.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Раскрыть список выбора языка","oinclickhere":"Click Here","signInMessage":"Войти","quickViewProdDtlsMessage":"Сведения о продукте","mplRemoveNoteMessage":"Удалить примечание","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Невозможно отобразить сведения о детали. Повторите попытку.<br /> Если проблема не была устранена, щелкните на номере детали для перехода к странице сведений о детали.","myAccountMessage":"Моя учетная запись","corpHomeMessage":"Штаб-квартира","closeLangSelMessage":"Закрыть список выбора языка","oinStatusRejected":"Rejected","scaChannelMessage":"Канал распространения","mplNewListMessage":"Новый список","mplEditNoteMessage":"Править примечание","supportChat2":"Chat Now","notUserMessage":"Если вы не %1, то щелкните здесь","partNumberMessage":"Номер по каталогу","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Добавить примечание","oinStatusComplete":"Complete","registerMessage":"Зарегистрироваться","oinStatusonHold":"On Hold","searchMessage":"Поиск","whoWeAreMessage":"О компании","oinStatusInProcess":"In Process","myPartListMessage":"Мои списки деталей","languagesMessage":"Языки","signOutMessage":"Выйти","mplSysErrorMessage":"Произошла системная ошибка. Повторите попытку позже.","segmentsMessage":"Подразделения","countrySitesMessage":"Локальные сайты","helloMessage":"Здравствуйте,","scaUnknownMessage":"Неизвестно","pageLoadMessage":"Получение информации…","worldwideMessage":"Международный","whyRegisterMessage":"Почему нужно регистрироваться?","scaDistributorMessage":"Дистрибьютор","scaTradeMessage":"Торговля","closeSearchSelMessage":"Закрыть окно выбора поиска","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Электронные компоненты","oinStatusOpen":"Open","mplNameTooLongMessage":"Имя слишком длинное. Удалите символы {0}.","mplNoNameMessage":"Укажите имя нового списка.","mplNameExistsMessage":"Этот список уже существует. Попробуйте другое имя.","mplRemovePartMessage":"Удалить деталь","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Добавить в список деталей","mplNoPartsMessage":"В этом списке не указаны детали. Чтобы начать процесс добавления деталей, найдите нужную деталь в нашем каталоге и щелкните ссылку {0}."};dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.ru");te.nls.ewt.ru={"searchByMessage":"Искать по:","textMessage":"Текст","mplViewProdDtlsMessage":"Просмотреть детали изделия","mplNoteTooLongMessage":"Это примечание слишком длинное. Удалите символы {0}.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Раскрыть список выбора языка","oinclickhere":"Click Here","signInMessage":"Войти","quickViewProdDtlsMessage":"Сведения о продукте","mplRemoveNoteMessage":"Удалить примечание","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Невозможно отобразить сведения о детали. Повторите попытку.<br /> Если проблема не была устранена, щелкните на номере детали для перехода к странице сведений о детали.","myAccountMessage":"Моя учетная запись","corpHomeMessage":"Штаб-квартира","closeLangSelMessage":"Закрыть список выбора языка","oinStatusRejected":"Rejected","scaChannelMessage":"Канал распространения","mplNewListMessage":"Новый список","mplEditNoteMessage":"Править примечание","supportChat2":"Chat Now","notUserMessage":"Если вы не %1, то щелкните здесь","partNumberMessage":"Номер по каталогу","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Добавить примечание","oinStatusComplete":"Complete","registerMessage":"Зарегистрироваться","oinStatusonHold":"On Hold","searchMessage":"Поиск","whoWeAreMessage":"О компании","oinStatusInProcess":"In Process","myPartListMessage":"Мои списки деталей","languagesMessage":"Языки","signOutMessage":"Выйти","mplSysErrorMessage":"Произошла системная ошибка. Повторите попытку позже.","segmentsMessage":"Подразделения","countrySitesMessage":"Локальные сайты","helloMessage":"Здравствуйте,","scaUnknownMessage":"Неизвестно","pageLoadMessage":"Получение информации…","worldwideMessage":"Международный","whyRegisterMessage":"Почему нужно регистрироваться?","scaDistributorMessage":"Дистрибьютор","scaTradeMessage":"Торговля","closeSearchSelMessage":"Закрыть окно выбора поиска","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Электронные компоненты","oinStatusOpen":"Open","mplNameTooLongMessage":"Имя слишком длинное. Удалите символы {0}.","mplNoNameMessage":"Укажите имя нового списка.","mplNameExistsMessage":"Этот список уже существует. Попробуйте другое имя.","mplRemovePartMessage":"Удалить деталь","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Добавить в список деталей","mplNoPartsMessage":"В этом списке не указаны детали. Чтобы начать процесс добавления деталей, найдите нужную деталь в нашем каталоге и щелкните ссылку {0}."};

dojo.provide("te.nls.te_CustomLayer_zh");dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.zh");te.nls.ewt.zh={"searchByMessage":"Search By:","textMessage":"Keyword","mplViewProdDtlsMessage":"View product details","mplNoteTooLongMessage":"This note is too long. Please remove {0} characters.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Expand Language Selector","oinclickhere":"Click Here","signInMessage":"Sign In","quickViewProdDtlsMessage":"Product Details for","mplRemoveNoteMessage":"Remove note","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Unable to display part information. Please try again.<br />If this problem persists, click on the part number to proceed to the part detail page.","myAccountMessage":"My Account","corpHomeMessage":"Corporate Home","closeLangSelMessage":"Close Language Selector","oinStatusRejected":"Rejected","scaChannelMessage":"Channel","mplNewListMessage":"New List","mplEditNoteMessage":"Edit note","supportChat2":"Chat Now","notUserMessage":"If not %1, Click here","partNumberMessage":"Part Number","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Add note","oinStatusComplete":"Complete","registerMessage":"Register","oinStatusonHold":"On Hold","searchMessage":"Search","whoWeAreMessage":"Who We Are","oinStatusInProcess":"In Process","myPartListMessage":"My Part Lists","languagesMessage":"Languages","signOutMessage":"Sign Out","mplSysErrorMessage":"A system error has occurred. Please try again later.","segmentsMessage":"Segments","countrySitesMessage":"Country Sites","helloMessage":"Hello","scaUnknownMessage":"Unknown","pageLoadMessage":"Getting Information…","worldwideMessage":"Worldwide","whyRegisterMessage":"Why Register?","scaDistributorMessage":"Distributor","scaTradeMessage":"Trade","closeSearchSelMessage":"Close Search Selector","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Electronic Components","oinStatusOpen":"Open","mplNameTooLongMessage":"This name is too long. Please remove {0} characters.","mplNoNameMessage":"Please specify a name for your new list.","mplNameExistsMessage":"This name already exists. Please try another name.","mplRemovePartMessage":"Remove Part","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Add to Part List","mplNoPartsMessage":"This list has no parts. To begin adding parts, just find a part in our catalog and click the {0} link."};dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.zh");te.nls.ewt.zh={"searchByMessage":"Search By:","textMessage":"Keyword","mplViewProdDtlsMessage":"View product details","mplNoteTooLongMessage":"This note is too long. Please remove {0} characters.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Expand Language Selector","oinclickhere":"Click Here","signInMessage":"Sign In","quickViewProdDtlsMessage":"Product Details for","mplRemoveNoteMessage":"Remove note","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Unable to display part information. Please try again.<br />If this problem persists, click on the part number to proceed to the part detail page.","myAccountMessage":"My Account","corpHomeMessage":"Corporate Home","closeLangSelMessage":"Close Language Selector","oinStatusRejected":"Rejected","scaChannelMessage":"Channel","mplNewListMessage":"New List","mplEditNoteMessage":"Edit note","supportChat2":"Chat Now","notUserMessage":"If not %1, Click here","partNumberMessage":"Part Number","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Add note","oinStatusComplete":"Complete","registerMessage":"Register","oinStatusonHold":"On Hold","searchMessage":"Search","whoWeAreMessage":"Who We Are","oinStatusInProcess":"In Process","myPartListMessage":"My Part Lists","languagesMessage":"Languages","signOutMessage":"Sign Out","mplSysErrorMessage":"A system error has occurred. Please try again later.","segmentsMessage":"Segments","countrySitesMessage":"Country Sites","helloMessage":"Hello","scaUnknownMessage":"Unknown","pageLoadMessage":"Getting Information…","worldwideMessage":"Worldwide","whyRegisterMessage":"Why Register?","scaDistributorMessage":"Distributor","scaTradeMessage":"Trade","closeSearchSelMessage":"Close Search Selector","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Electronic Components","oinStatusOpen":"Open","mplNameTooLongMessage":"This name is too long. Please remove {0} characters.","mplNoNameMessage":"Please specify a name for your new list.","mplNameExistsMessage":"This name already exists. Please try another name.","mplRemovePartMessage":"Remove Part","oinStatusUnknown":"Unknown","supportTab":"Live Product Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Add to Part List","mplNoPartsMessage":"This list has no parts. To begin adding parts, just find a part in our catalog and click the {0} link."};

dojo.provide("te.nls.te_CustomLayer_zh-hans");dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.zh_hans");te.nls.ewt.zh_hans={"searchByMessage":"搜索条件：","textMessage":"文本","mplViewProdDtlsMessage":"查看产品详细信息","mplNoteTooLongMessage":"该注释太长。 请删除 {0} 个字符。","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"展开语言选择功能","oinclickhere":"Click Here","signInMessage":"登录","quickViewProdDtlsMessage":"如下产品的产品详情：","mplRemoveNoteMessage":"删除注释","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"无法显示零件信息。请重新尝试。<br /> 如果该问题仍然存在，请单击零件号，查看零件详情页面。","myAccountMessage":"我的帐户","corpHomeMessage":"公司首页","closeLangSelMessage":"关闭语言选择功能","oinStatusRejected":"Rejected","scaChannelMessage":"渠道","mplNewListMessage":"新列表","mplEditNoteMessage":"编辑注释","supportChat2":"在线咨询","notUserMessage":"如果不是 %1，请单击此处","partNumberMessage":"产品型号","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"添加注释","oinStatusComplete":"Complete","registerMessage":"注册","oinStatusonHold":"On Hold","searchMessage":"搜索","whoWeAreMessage":"公司简介","oinStatusInProcess":"In Process","myPartListMessage":"我的部件列表","languagesMessage":"语言","signOutMessage":"退出","mplSysErrorMessage":"系统出错。请稍后再试。","segmentsMessage":"业务划分","countrySitesMessage":"各国站点","helloMessage":"您好","scaUnknownMessage":"未知","pageLoadMessage":"正在获得信息...","worldwideMessage":"全球","whyRegisterMessage":"为何要注册？","scaDistributorMessage":"分销商","scaTradeMessage":"行业","closeSearchSelMessage":"关闭搜索选择功能","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"电子元件","oinStatusOpen":"Open","mplNameTooLongMessage":"该名称太长。 请删除 {0} 个字符。","mplNoNameMessage":"请为您的新列表指定一个名称。","mplNameExistsMessage":"该名称已经存在。请尝试另一个名称。","mplRemovePartMessage":"删除部件","oinStatusUnknown":"Unknown","supportTab":"在线产品咨询","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"添加至部件列表","mplNoPartsMessage":"该列表不含部件。 要开始添加部件，只需在目录中找到部件，然后单击 {0} 链接即可。"};dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.zh_hans");te.nls.ewt.zh_hans={"searchByMessage":"搜索条件：","textMessage":"文本","mplViewProdDtlsMessage":"查看产品详细信息","mplNoteTooLongMessage":"该注释太长。 请删除 {0} 个字符。","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"展开语言选择功能","oinclickhere":"Click Here","signInMessage":"登录","quickViewProdDtlsMessage":"如下产品的产品详情：","mplRemoveNoteMessage":"删除注释","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"无法显示零件信息。请重新尝试。<br /> 如果该问题仍然存在，请单击零件号，查看零件详情页面。","myAccountMessage":"我的帐户","corpHomeMessage":"公司首页","closeLangSelMessage":"关闭语言选择功能","oinStatusRejected":"Rejected","scaChannelMessage":"渠道","mplNewListMessage":"新列表","mplEditNoteMessage":"编辑注释","supportChat2":"在线咨询","notUserMessage":"如果不是 %1，请单击此处","partNumberMessage":"产品型号","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"添加注释","oinStatusComplete":"Complete","registerMessage":"注册","oinStatusonHold":"On Hold","searchMessage":"搜索","whoWeAreMessage":"公司简介","oinStatusInProcess":"In Process","myPartListMessage":"我的部件列表","languagesMessage":"语言","signOutMessage":"退出","mplSysErrorMessage":"系统出错。请稍后再试。","segmentsMessage":"业务划分","countrySitesMessage":"各国站点","helloMessage":"您好","scaUnknownMessage":"未知","pageLoadMessage":"正在获得信息...","worldwideMessage":"全球","whyRegisterMessage":"为何要注册？","scaDistributorMessage":"分销商","scaTradeMessage":"行业","closeSearchSelMessage":"关闭搜索选择功能","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"电子元件","oinStatusOpen":"Open","mplNameTooLongMessage":"该名称太长。 请删除 {0} 个字符。","mplNoNameMessage":"请为您的新列表指定一个名称。","mplNameExistsMessage":"该名称已经存在。请尝试另一个名称。","mplRemovePartMessage":"删除部件","oinStatusUnknown":"Unknown","supportTab":"在线产品咨询","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"添加至部件列表","mplNoPartsMessage":"该列表不含部件。 要开始添加部件，只需在目录中找到部件，然后单击 {0} 链接即可。"};

dojo.provide("te.nls.te_CustomLayer_de");dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.de");te.nls.ewt.de={"searchByMessage":"Suche nach:","textMessage":"Text","mplViewProdDtlsMessage":"Produkteinzelheiten anzeigen","mplNoteTooLongMessage":"Diese Bemerkung ist zu lang. Bitte kürzen Sie sie um {0} Zeichen.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Sprachauswahl öffnen","oinclickhere":"Click Here","signInMessage":"Einloggen","quickViewProdDtlsMessage":"Produktdetails für","mplRemoveNoteMessage":"Bemerkung entfernen","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Die Teile-Informationen können nicht angezeigt werden. Versuchen Sie es erneut.<br />Wenn das Problem fortbesteht, klicken Sie auf die Teilenummer, um zur Seite mit den Teiledetails zu gelangen.","myAccountMessage":"Mein Profil","corpHomeMessage":"Startseite des Unternehmens","closeLangSelMessage":"Sprachauswahl schließen","oinStatusRejected":"Rejected","scaChannelMessage":"Distribution","mplNewListMessage":"Neue Liste","mplEditNoteMessage":"Bemerkung bearbeiten","supportChat2":"Chatten Sie jetzt","notUserMessage":"Wenn nicht %1, hier klicken","partNumberMessage":"Teilenummer","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Bemerkung hinzufügen","oinStatusComplete":"Complete","registerMessage":"Registrierung","oinStatusonHold":"On Hold","searchMessage":"Suchen","whoWeAreMessage":"Über uns","oinStatusInProcess":"In Process","myPartListMessage":"Meine Teileliste","languagesMessage":"Sprachen","signOutMessage":"Ausloggen","mplSysErrorMessage":"Ein Systemfehler ist aufgetreten. Bitte versuchen Sie es später noch einmal.","segmentsMessage":"Segmente","countrySitesMessage":"Länder-Websites","helloMessage":"Hallo","scaUnknownMessage":"Unbekannt","pageLoadMessage":"Informationen werden abgerufen....","worldwideMessage":"Weltweit","whyRegisterMessage":"Hilfe bei der Registrierung","scaDistributorMessage":"Vertriebsagent","scaTradeMessage":"Handel","closeSearchSelMessage":"Suchauswahl schließen","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Electronic Components","oinStatusOpen":"Open","mplNameTooLongMessage":"Der Name ist zu lang. Bitte kürzen Sie ihn um {0} Zeichen.","mplNoNameMessage":"Geben Sie einen Namen für Ihre neue Liste an.","mplNameExistsMessage":"Dieser Name existiert bereits. Bitte versuchen Sie mit einem anderen Namen.","mplRemovePartMessage":"Teil entfernen","oinStatusUnknown":"Unknown","supportTab":"Live Produkt Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Zur Teilliste hinzufügen","mplNoPartsMessage":"Diese Liste enthält keine Teile. Um mit dem Hinzufügen von Teilen zu beginnen, suchen Sie in unserem Katalog nach einem Teil, und klicken Sie auf den Link {0}."};dojo.provide("te.nls.ewt");te.nls.ewt._built=true;dojo.provide("te.nls.ewt.de");te.nls.ewt.de={"searchByMessage":"Suche nach:","textMessage":"Text","mplViewProdDtlsMessage":"Produkteinzelheiten anzeigen","mplNoteTooLongMessage":"Diese Bemerkung ist zu lang. Bitte kürzen Sie sie um {0} Zeichen.","oinTipForOrderNum":"Enter at least 6 characters","expandLangSelMessage":"Sprachauswahl öffnen","oinclickhere":"Click Here","signInMessage":"Einloggen","quickViewProdDtlsMessage":"Produktdetails für","mplRemoveNoteMessage":"Bemerkung entfernen","oinTipForPONum":"Enter at least 5 characters","quickViewSysErrorMessage":"Die Teile-Informationen können nicht angezeigt werden. Versuchen Sie es erneut.<br />Wenn das Problem fortbesteht, klicken Sie auf die Teilenummer, um zur Seite mit den Teiledetails zu gelangen.","myAccountMessage":"Mein Profil","corpHomeMessage":"Startseite des Unternehmens","closeLangSelMessage":"Sprachauswahl schließen","oinStatusRejected":"Rejected","scaChannelMessage":"Distribution","mplNewListMessage":"Neue Liste","mplEditNoteMessage":"Bemerkung bearbeiten","supportChat2":"Chatten Sie jetzt","notUserMessage":"Wenn nicht %1, hier klicken","partNumberMessage":"Teilenummer","filterSelectInvalidMessage":"No match","mplAddNoteMessage":"Bemerkung hinzufügen","oinStatusComplete":"Complete","registerMessage":"Registrierung","oinStatusonHold":"On Hold","searchMessage":"Suchen","whoWeAreMessage":"Über uns","oinStatusInProcess":"In Process","myPartListMessage":"Meine Teileliste","languagesMessage":"Sprachen","signOutMessage":"Ausloggen","mplSysErrorMessage":"Ein Systemfehler ist aufgetreten. Bitte versuchen Sie es später noch einmal.","segmentsMessage":"Segmente","countrySitesMessage":"Länder-Websites","helloMessage":"Hallo","scaUnknownMessage":"Unbekannt","pageLoadMessage":"Informationen werden abgerufen....","worldwideMessage":"Weltweit","whyRegisterMessage":"Hilfe bei der Registrierung","scaDistributorMessage":"Vertriebsagent","scaTradeMessage":"Handel","closeSearchSelMessage":"Suchauswahl schließen","oinTipForCustPartNum":"Enter at least 5 characters","elecCompsMessage":"Electronic Components","oinStatusOpen":"Open","mplNameTooLongMessage":"Der Name ist zu lang. Bitte kürzen Sie ihn um {0} Zeichen.","mplNoNameMessage":"Geben Sie einen Namen für Ihre neue Liste an.","mplNameExistsMessage":"Dieser Name existiert bereits. Bitte versuchen Sie mit einem anderen Namen.","mplRemovePartMessage":"Teil entfernen","oinStatusUnknown":"Unknown","supportTab":"Live Produkt Chat","filterSelectPromptMessage":"Type first ${0} characters - exclude leading zeros","mplAddToPartListMessage":"Zur Teilliste hinzufügen","mplNoPartsMessage":"Diese Liste enthält keine Teile. Um mit dem Hinzufügen von Teilen zu beginnen, suchen Sie in unserem Katalog nach einem Teil, und klicken Sie auf den Link {0}."};

dojo.provide("dojo.nls.dojo_ROOT");dojo.provide("dojo.cldr.nls.gregorian");dojo.cldr.nls.gregorian._built=true;dojo.provide("dojo.cldr.nls.gregorian.ROOT");dojo.cldr.nls.gregorian.ROOT={"dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","field-dayperiod":"Dayperiod","field-minute":"Minute","eraNames":["BCE","CE"],"field-weekday":"Day of the Week","days-standAlone-wide":["1","2","3","4","5","6","7"],"months-standAlone-narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],"dateTimeFormats-appendItem-Year":"{0} {1}","field-era":"Era","field-hour":"Hour","quarters-standAlone-abbr":["Q1","Q2","Q3","Q4"],"timeFormat-full":"HH:mm:ss v","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","dateTimeFormats-appendItem-Timezone":"{0} {1}","months-standAlone-abbr":["1","2","3","4","5","6","7","8","9","10","11","12"],"dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","days-standAlone-narrow":["1","2","3","4","5","6","7"],"eraAbbr":["BCE","CE"],"dateFormat-long":"yyyy MMMM d","timeFormat-medium":"HH:mm:ss","field-zone":"Zone","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormat-medium":"yyyy MMM d","quarters-standAlone-wide":["Q1","Q2","Q3","Q4"],"dateTimeFormat":"{1} {0}","field-year":"Year","quarters-standAlone-narrow":["1","2","3","4"],"months-standAlone-wide":["1","2","3","4","5","6","7","8","9","10","11","12"],"dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","field-week":"Week","quarters-format-narrow":["1","2","3","4"],"timeFormat-long":"HH:mm:ss z","months-format-abbr":["1","2","3","4","5","6","7","8","9","10","11","12"],"timeFormat-short":"HH:mm","field-month":"Month","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","quarters-format-abbr":["Q1","Q2","Q3","Q4"],"days-format-abbr":["1","2","3","4","5","6","7"],"pm":"PM","days-format-narrow":["1","2","3","4","5","6","7"],"field-second":"Second","field-day":"Day","dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","months-format-narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],"dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","am":"AM","days-standAlone-abbr":["1","2","3","4","5","6","7"],"dateFormat-short":"yyyy-MM-dd","dateFormat-full":"EEEE, yyyy MMMM dd","months-format-wide":["1","2","3","4","5","6","7","8","9","10","11","12"],"dateTimeAvailableFormats":["H:mm","L","E, M-d","LLL","E MMM d","E MMMM d","MMMM d","MMM d","M-d","d","mm:ss","yyyy","yyyy-M","EEE, yyyy-M-d","yyyy MMM","EEE, yyyy MMM d","yyyy MMMM","yyyy Q","yyyy QQQ"],"dateTimeFormats-appendItem-Era":"{0} {1}","quarters-format-wide":["Q1","Q2","Q3","Q4"],"eraNarrow":["BCE","CE"],"days-format-wide":["1","2","3","4","5","6","7"]};dojo.provide("dijit.form.nls.validate");dijit.form.nls.validate._built=true;dojo.provide("dijit.form.nls.validate.ROOT");dijit.form.nls.validate.ROOT={"rangeMessage":"This value is out of range.","invalidMessage":"The value entered is not valid.","missingMessage":"This value is required."};dojo.provide("dijit.form.nls.ComboBox");dijit.form.nls.ComboBox._built=true;dojo.provide("dijit.form.nls.ComboBox.ROOT");dijit.form.nls.ComboBox.ROOT={"previousMessage":"Previous choices","nextMessage":"More choices"};

dojo.provide("dojo.nls.dojo_en");dojo.provide("dojo.cldr.nls.gregorian");dojo.cldr.nls.gregorian._built=true;dojo.provide("dojo.cldr.nls.gregorian.en");dojo.cldr.nls.gregorian.en={"field-dayperiod":"AM/PM","field-minute":"Minute","eraNames":["Before Christ","Anno Domini"],"field-weekday":"Day of the Week","days-standAlone-wide":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"months-standAlone-narrow":["J","F","M","A","M","J","J","A","S","O","N","D"],"field-era":"Era","field-hour":"Hour","timeFormat-full":"h:mm:ss a v","months-standAlone-abbr":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"days-standAlone-narrow":["S","M","T","W","T","F","S"],"eraAbbr":["BC","AD"],"dateFormat-long":"MMMM d, yyyy","timeFormat-medium":"h:mm:ss a","field-zone":"Zone","dateFormat-medium":"MMM d, yyyy","quarters-standAlone-wide":["1st quarter","2nd quarter","3rd quarter","4th quarter"],"dateTimeFormat":"{1} {0}","field-year":"Year","quarters-standAlone-narrow":["1","2","3","4"],"months-standAlone-wide":["January","February","March","April","May","June","July","August","September","October","November","December"],"field-week":"Week","timeFormat-long":"h:mm:ss a z","months-format-abbr":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"timeFormat-short":"h:mm a","field-month":"Month","quarters-format-abbr":["Q1","Q2","Q3","Q4"],"days-format-abbr":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"pm":"PM","days-format-narrow":["S","M","T","W","T","F","S"],"field-second":"Second","field-day":"Day","months-format-narrow":["J","F","M","A","M","J","J","A","S","O","N","D"],"am":"AM","days-standAlone-abbr":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"dateFormat-short":"M/d/yy","dateFormat-full":"EEEE, MMMM d, yyyy","months-format-wide":["January","February","March","April","May","June","July","August","September","October","November","December"],"dateTimeAvailableFormats":["HH:mm","HH:mm:ss","L","E, M/d","LLL","E, MMM d","E, MMMM d","MMMM d","MMM d","M/d","d","h:mm a","mm:ss","yyyy","M/yyyy","EEE, M/d/yyyy","MMM yyyy","EEE, MMM d, yyyy","MMMM yyyy","Q yyyy","QQQ yyyy"],"quarters-format-wide":["1st quarter","2nd quarter","3rd quarter","4th quarter"],"days-format-wide":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"eraNarrow":["B","A"],"dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dateTimeFormats-appendItem-Year":"{0} {1}","quarters-standAlone-abbr":["Q1","Q2","Q3","Q4"],"dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","dateTimeFormats-appendItem-Timezone":"{0} {1}","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","quarters-format-narrow":["1","2","3","4"],"dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dateTimeFormats-appendItem-Era":"{0} {1}"};dojo.provide("dijit.form.nls.validate");dijit.form.nls.validate._built=true;dojo.provide("dijit.form.nls.validate.en");dijit.form.nls.validate.en={"rangeMessage":"This value is out of range.","invalidMessage":"The value entered is not valid.","missingMessage":"This value is required."};dojo.provide("dijit.form.nls.ComboBox");dijit.form.nls.ComboBox._built=true;dojo.provide("dijit.form.nls.ComboBox.en");dijit.form.nls.ComboBox.en={"previousMessage":"Previous choices","nextMessage":"More choices"};

