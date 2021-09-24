
var langToLocale = new Array();
langToLocale[1] = "en";
langToLocale[2] = "fr";
langToLocale[3] = "de";
langToLocale[4] = "it";
langToLocale[5] = "es";
langToLocale[6] = "ja";
langToLocale[7] = "zh-hant";	// The h is uppercase in the W3C language codes registry, but Dojo makes it lowercase
langToLocale[8] = "ko";
langToLocale[9] = "zh-hans";	// The h is uppercase in the W3C language codes registry, but Dojo makes it lowercase
langToLocale[10] = "pt";
langToLocale[14] = "ru";
langToLocale[15] = "hu";
langToLocale[16] = "cs";
langToLocale[17] = "pl";

function TE_getLocale() {
	var langId = dojo.io.cookie.getCookie("language_id");
	
	if (!langId || langId.length == 0) {
		langId = "1";
	}
	
	var locale = langToLocale[langId];
	
	if (typeof(locale) == 'undefined') {
		locale = "en";	// default to English locale
	}
	
	return locale;
}

