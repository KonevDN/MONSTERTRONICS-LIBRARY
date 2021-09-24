if(!window.com) com = new Object();
if(!com.TI) com.TI = new Object();

com.TI.sampleButtonUrls = [
	"/product/cd40106b",
	"/product/cd4011b",
	"/product/cd4013b",
	"/product/cd4017b",
	"/product/cd4093b",
	"/product/lm324-n",
	"/product/lm35",
	"/product/lm358",
	"/product/lm393",
	"/product/max232",
	"/product/ne555",
	"/product/opa2134",
	"/product/sn74hc00",
	"/product/sn74hc04",
	"/product/sn74hc14",
	"/product/sn74hc595",
	"/product/sn74ls00",
	"/product/sn74ls04",
	"/product/sn74lvc1g04",
	"/product/sn74lvc1g08",
	"/product/sn74lvc1g125",
	"/product/sn74lvc1g14",
	"/product/sn74lvc1g17",
	"/product/sn75176b",
	"/product/sn754410",
	"/product/tl072",
	"/product/tl074",
	"/product/uln2003a",
	"/product/uln2803a"
];

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {
	var $mainBtn = $('#mainsamplebuy'),
		$newLink = $('<a id="newSampleBuyBtn" name="&lid=en_US_folder_p_quick_link_sample_buy_sampleandbuy" href="#samplebuy">Sample &<br>Buy</a>').css({
			"color":"#ffffff",
			"display":"block"
		}),
		$urlsList = $(com.TI.sampleButtonUrls),
		pathName = location.pathname.toLowerCase(),
		doBtnChange = false;
	
	//if button doesn't exist this won't run and boolean will always be false
	if ($mainBtn.length == 1) {
		$urlsList.each(function(i,urlVal){
			if (urlVal == pathName) {
				doBtnChange = true;
				return false; //exit each() loop
			}
		});
	}
	
	if (doBtnChange) {
		$mainBtn.css({
			"background":"#EA272A url(http://www.ti.com/assets/images/iconCartWhite.png) no-repeat 8px -2px"
		}).contents().each(function(i,e){
			var $this = $(this);
			if (!$this.hasClass('close')) $this.remove();
			else return false;
		}).end().prepend($newLink);
	}
})( jQuery, window, document );