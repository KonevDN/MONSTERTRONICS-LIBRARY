/********************************************************************************/
/*		This is the common JavaScript file for Tyco Electronics					*/
/*		This file is loaded by every page				          				*/
/*																				*/
/*																				*/
/*																				*/
/*																				*/
/********************************************************************************/

// returns either http://www.tycoelectronics.com [prod ] 
//             or http://wwwcat.us.tycoelectronics.com/ [Internal Prod] 
//			   or http://build1-qa.us.tycoelectronics.com [QA] 
//             or http://build1-dev.us.tycoelectronics.com

function TE_getHomePageURL(){
	return "http://www.tycoelectronics.com";
}
 
// returns either http://catalog.tycoelectronics.com [prod] 
//             or http://gecwebp01.us.tycoelectronics.com [Internal Prod] 
//             or http://gecwebq01.us.tycoelectronics.com [QA] 
//             or http://gecwebd01.us.tycoelectronics.com [dev]
 
function TE_getCatalogURL() {
	return "http://catalog.tycoelectronics.com";
}

// returns either https://ecommerce.tycoelectronics.com [prod] 
//             or https://ecommerce.tycoelectronics.com [Internal Prod] 
//             or https://ebiz-qa.tycoelectronics.com [QA] 
//             or https://ebiz-dev.us.tycoelectronics.com [DEV]
 
function TE_getEcommerceUrl()  {
	return "https://ecommerce.tycoelectronics.com";
}
 
// returns either http://ecommas.tycoelectronics.com [PROD] 
//             or http://ecommas.tycoelectronics.com [Internal Prod]
//             or http://ebizas-qa.tycoelectronics.com [QA] 
//             or http://ebizas-dev.us.tycoelectronics.com [DEV]

function TE_getApplicationServerUrl() {
	return "http://ecommas.tycoelectronics.com";
}

//TEMP
function TE_getApplicationServerUrlWWW() {
	return "http://ecommas.tycoelectronics.com";
}
 
// returns either https://ecommas.tycoelectronics.com [PROD] 
//             or https://ecommas.tycoelectronics.com [Internal Prod] 
//             or https://ebizas-qa.tycoelectronics.com [QA] 
//             or https://ebizas-dev.us.tycoelectronics.com [DEV]

function TE_getSecureApplicationServerUrl() {
	return "https://ecommas.tycoelectronics.com";
}

// returns either https://supplierportal.tycoelectronics.com [PROD] 
//             or https://supplierportal.tycoelectronics.com [Internal Prod] 
//             or https://supplierportalqa.tycoelectronics.com [QA] 
//             or http://supplierportaldev.us.tycoelectronics.com [DEV]

function TE_getSupplierServerUrl() {
	return "http://supplierportal.tycoelectronics.com/portal/server.pt";
}

// returns either http://search.tycoelectronics.com [PROD] 
//             or http://search-qa.tycoelectronics.com [Internal Prod] 
//             or http://search-qa.tycoelectronics.com [QA] 
//             or http://inquira-dev.us.tycoelectronics.com [DEV]

function TE_getSearchServerUrl() {
	return "http://search.tycoelectronics.com";
}