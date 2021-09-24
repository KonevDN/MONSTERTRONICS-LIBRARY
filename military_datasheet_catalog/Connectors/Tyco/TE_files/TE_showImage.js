/************************************************************************************************/
/* Wrapper around showImage which adds try and catch support for more robustness.				*/
/* To use, simply use an onClick(return returnShowImage(url)) and add a href to the link.		*/
/* The href will run if the javascript fails, or if there is no javascript on the machine.		*/
/* Don't forget target=_blank 																	*/
/************************************************************************************************/

function TE_returnShowImage (image_url) {
	try {
		TE_showImageFunction(image_url,"","",false);
		return false;		// So that href doesnt activate when javascript has worked
	} catch (e) {
		return true;		// So that href activates if javascript breaks
	}
}
function TE_ShowImage (image_url) {
	return TE_returnShowImage(image_url);
}
function TE_returnShowImageFull (image_url) {
	try {
		TE_showImageFunction(image_url,"","",true);
		return false;		// So that href doesnt activate when javascript has worked
	} catch (e) {
		return true;		// So that href activates if javascript breaks
	}
}
function TE_returnShowImageWithTitleAndDesc (image_url,ImageTitle,ImageDesc) {
	try {
		TE_showImageFunction(image_url,ImageTitle,ImageDesc,false);
		return false;		// So that href doesnt activate when javascript has worked
	} catch (e) {
		return true;		// So that href activates if javascript breaks
	}
}
function TE_returnShowImageWithTitleAndDescFull (image_url,ImageTitle,ImageDesc) {
	try {
		TE_showImageFunction(image_url,ImageTitle,ImageDesc,true);
		return false;		// So that href doesnt activate when javascript has worked
	} catch (e) {
		return true;		// So that href activates if javascript breaks
	}
}
// use TE_returnShowImage(image_url)
var TE_imagewindow;
function TE_showImageFunction(image_url,ImageTitle,ImageDesc,ShowFullSize)
{			
// if image or movie, pass to show_image.asp to open
		if ((image_url.toLowerCase().indexOf(".avi") > 1) ||(image_url.toLowerCase().indexOf(".ram") > 1) ||(image_url.toLowerCase().indexOf(".wmv") > 1) ||(image_url.toLowerCase().indexOf(".mpeg") > 1) ||(image_url.toLowerCase().indexOf(".mpg") > 1) ||(image_url.toLowerCase().indexOf(".jpg") > 1) || (image_url.toLowerCase().indexOf(".mov") > 1) ||(image_url.toLowerCase().indexOf(".jpeg") > 1) || (image_url.toLowerCase().indexOf(".gif") > 1) || !image_url.isNaN) {
					//if (TE_imagewindow){TE_imagewindow =	window.close()}
		image_url = escape(image_url)
		
			if(!TE_imagewindow || TE_imagewindow.closed){
				TE_imagewindow = window.open(TE_globalAspVarable +"/_TEincludes/ver/920/TEFunctions/TE_showImage.asp?src=" + image_url+"&ImageTitle="+ImageTitle+"&ImageDesc="+ImageDesc+"&ShowFullSize="+ShowFullSize, "image", "width=500, height=500, left=" + ((screen.availWidth - 500)/2) + ", top=" + ((screen.availHeight - 500)/2));
			}else{
				TE_imagewindow.location.href = TE_globalAspVarable + "/_TEincludes/ver/920/TEFunctions/TE_showImage.asp?src=" + image_url+"&ImageTitle="+ImageTitle+"&ImageDesc="+ImageDesc+"&ShowFullSize="+ShowFullSize
			}
		}
	// else if any other type of file, open it in a large window
		else {
			TE_imagewindow = window.open( image_url, "OtherDocumentType", "width="+screen.availWidth+", height="+screen.availHeight+", left=0, top=0")
		}

		TE_imagewindow.focus() // focus on new window
}

// Incase any pages still calling old show_image function.
function show_image (image_url) {
	return TE_ShowImage(image_url);
}
function showImage (image_url) {
	return TE_ShowImage(image_url);
}


