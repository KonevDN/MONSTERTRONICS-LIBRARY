// JavaScript Document
var timeout    = 500;
var closetimer = 0;
var ddmenuitem = 0;
var jqDropdownLangBound = false;


function jQdropdown_open()
{  jQdropdown_canceltimer();
   ddmenuitem = $(this).find('ul').css('visibility', 'visible');
}

function jQdropdown_close()
{   if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');}

function jQdropdown_timer()
{  closetimer = window.setTimeout(jQdropdown_close, timeout);}

function jQdropdown_canceltimer() {
    if (closetimer) {
        window.clearTimeout(closetimer);
        closetimer = null;
    }
}

function jQdropdown_bind() {
 $('#jQdropdown > li').bind('mouseover', jQdropdown_open);
   $('#jQdropdown > li').bind('mouseout',  jQdropdown_timer);
   
   jqDropdownLangBound = true; 
}

$(document).ready(function () {
   if(!jqDropdownLangBound) {
	jQdropdown_bind();
   }
});

$(document).click(function() {
	jQdropdown_close();
});