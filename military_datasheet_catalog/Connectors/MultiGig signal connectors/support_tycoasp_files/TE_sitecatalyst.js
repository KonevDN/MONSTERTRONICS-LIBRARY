/********************************************************************************/
/*	SiteCatalyst code version: G.9.												*/
/*	Copyright 1997-2004 Omniture, Inc. More info available at					*/
/*	http://www.omniture.com -->													*/
/********************************************************************************/
/********************************************************************************/
/* SiteCatalyst code version: G.9.
 * Copyright 1997-2004 Omniture, Inc. More info available at http://www.omniture.com */

// Setting the page name to the URL - it is all we have at this point
var s_pageName = document.title
var TE_pageRe = new RegExp("^(.+) - Tyco Electronics$","ig");
 // check the page name to see if it ends with Tyco Electronics
if (TE_pageRe.test(s_pageName))
{
		// matched, so now replace s_pageName with just the value at the begining
		s_pageName=s_pageName.replace(TE_pageRe, "$1");
}

var s_server=""
var s_channel=""
var s_prop1=""
var s_prop2=""
var s_prop3=""
var s_prop4=""
var s_prop5=""
/* E-commerce Variables */
var s_events=""
var s_products=""
var s_purchaseID=""
var s_eVar1=""
var s_eVar2=""
var s_eVar3=""
var s_eVar4=""
var s_eVar5=""
/************************ ADDITIONAL FEATURES ************************
     Plugins
*/

/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here.                       */
/* Variables (s_pageName, s_prop1, etc.) not prefixed with "s_" will not be used. */
var s_disableLegacyVars=true

/* Specify the Report Suite ID(s) to track here */
var s_account="tycoeglobal"
var s_cookieDomainPeriods="2"

/* E-commerce Config */
var s_currencyCode="USD"
var s_eVarCFG=""
/* Link Tracking Config */
var s_trackDownloadLinks=true
var s_trackExternalLinks=true
var s_trackInlineStats=true
var s_linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls,tar,gz,tif,tiff"

/* Used to determine whether user left a particular domain in our control to another domain in our control, 
   for example leaving tycoelectronics.com to go to elotouch.com domain */
var TE_baseHostName = new String(window.location.hostname);
var TE_hostNameArray
/* split the hostname into pieces, want to get the primary domain */
TE_hostNameArray = TE_baseHostName.split(".");

/* walk the hostname right to left and find the index of the first non-suffix part, i.e. not com, or co, etc.  The key is
that all suffixes are three or less characters, so we can stop checking for whether it is a suffix once the length is > than three, 
will collect the  entire name if every part of the hostname is  3 characters long or less*/
var firstIndex = 0;
for( i=TE_hostNameArray.length-1; i >= 0; i--){
	var tmpString = new String(TE_hostNameArray[i]);
	if( tmpString.length > 3){
		firstIndex = i;
		i=0;
	}
}

/* put the pieces of the hostname back together left to right  */
TE_baseHostName = "";
for( i=firstIndex; i < TE_hostNameArray.length; i++){
	TE_baseHostName = TE_baseHostName + TE_hostNameArray[i]
	if( i < TE_hostNameArray.length-1){
		TE_baseHostName = TE_baseHostName + '.'
	}

}
// add the shortened hostname to the s_linkInternalFilters so that when we go to pages in that same overall domain
// SiteCatalyst doesn't report it as an exit.

var s_linkInternalFilters="javascript:,"+TE_baseHostName
var s_linkLeaveQueryString=false
var s_linkTrackVars="None"
var s_linkTrackEvents="None"

/* Plugin Config */
var s_usePlugins=true
function s_doPlugins() {
	/* Add calls to plugins here */
	s_vp_getCGI('s_campaign','s_cid');
}

/****************************************************************/
/*	reset the s_account dynamicly								*/
/*																*/
/****************************************************************/

var s_dynamicAccountSelection=true
var s_dynamicAccountList="tycoeglobal,tycotycoejapan=www.tycoelectronics.com/japan;"+
"tycoeglobal,tycoecatalog=catalog.tycoelectronics.com;"+
"tycoeglobal,tycoecatalog=www.tycoelectronics.com/catalog;"+
"tycoeglobal,tycoecatalog=ecommas.tycoelectronics.com/commerce/DocumentDelivery;"+
"tycoeglobal,tycoecatalog=ecommas.tycoelectronics.com/commerce/pcr;"+
"tycoeglobal,tycoecatalog=ecommas.tycoelectronics.com/commerce/alt;"+
"tycoeglobal,tycoecatalog=ebzasp01.tycoelectronics.com/catalog/ToolingXrefWeb;"+
"tycoeglobal,tycoemain=www.tycoelectronics.com;"+
"tycoeglobal,tycoesearch=search.tycoelectronics.com;"+
"tycoeglobal,tycoerelays=relays.tycoelectronics.com;"+
"tycoeglobal,tycoemicrodotconnectors=www.microdotconnectors.com;"+
"tycoeglobal,tycoetooling=tooling.tycoelectronics.com;"+
"tycoeglobal,tycoecircuitprotection=www.circuitprotection.com;"+
"tycoeglobal,tycoecorcom=www.cor.com,www.corcom.com;"+
"tycoeglobal,tycoeidentification=identification.tycoelectronics.com;"+
"tycoeglobal,tycoeenergy=energy.tycoelectronics.com;"+
"tycoeglobal,tycoeraychem=raychem.tycoelectronics.com,www.raychem.com;"+
"tycoeglobal,tycoepassives=passives.tycoelectronics.com;"+
"tycoeglobal,tycoeampnetconnect=www.ampnetconnect.com;"+
"tycoeglobal,tycoepower=power.tycoelectronics.com;"+
"tycoeglobal,tycoeloar=elotouch.com.ar;"+
"tycoeglobal,tycoelobr=elotouch.com.br;"+
"tycoeglobal,tycoelomain=www.elotouch.com;"+
"tycoeglobal,tycoelocorner=corner.elotouch.com;"+
"tycoeglobal,tycoelode=elotouch.de;"+
"tycoeglobal,tycoeloexpress=elotouchexpress.com;"+
"tycoeglobal,tycoeloexpressbe=elotouchexpress.be;"+
"tycoeglobal,tycoelofr=elotouch.fr;"+
"tycoeglobal,tycoelogaming=elogaming.com;"+
"tycoeglobal,tycoelouk=elotouch.co.uk;"+
"tycoeglobal,tycoelojp=www.tps.co.jp;"+
"tycoeglobal,tycoapptool=www.applicationtooling.com;"+
"tycoeglobal,tycocomacc=www.comacc.co.uk;"+
"tycoeglobal,tycoesupplier=supplierportal.tycoelectronics.com,supplier.tycoelectronics.com,ecommerce.tycoelectronics.com/supplier;"+
"tycoeglobal,tycoecommerce,tycopcn=ecommas.tycoelectronics.com/commerce/pcnws;"+
"tycoeglobal,tycoecommerce=ecommerce.tycoelectronics.com/commerce;"+
"tycoeglobal,tycoecommerce=ecommas.tycoelectronics.com/commerce;"+
"tycoeglobal,tycoecommchannelxraychem=raychem-cx.tycoelectronics.com;"+
"tycoeglobal,tycoecommchannelxgicus=gic-us-cx.tycoelectronics.com;"+
"tycoeglobal,tycoecommchannelxgiccx=gic-cx.tycoelectronics.com;"+
"tycoeglobal,tycotelecomosp=www.telecomosp.com;"+
"tycoeglobal,tycotops=tops.us.tycoelectronics.com;"+
"tycoeglobal,tycorts=requesttracking.us.tycoelectronics.com;"+
"devtyco=dev,topstest,requesttrackingtest;"+
"devtyco=qa;"+
"tycoeglobal=."

var s_dynamicAccountMatch=window.location.host+window.location.pathname

 
/************************** End SiteCatalyst *************************/
