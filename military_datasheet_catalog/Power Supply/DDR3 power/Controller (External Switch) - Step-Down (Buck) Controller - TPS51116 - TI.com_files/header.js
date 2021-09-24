(function ($) {
    jQuery.fn.inlineFormLabel = function () {
        if (jQuery(this).length == 0) {
            return jQuery(this); //nothing todo
        }

        var f = jQuery(this).parents('form'),
            labelText = jQuery.trim(jQuery('label.' + jQuery(this).attr('id'), f).html());

        if (jQuery(this).val().length == 0) {
            jQuery(this).val(labelText);
        }

        /*When the input gains focus, move up to the label and apply the focus class.*/        
        jQuery(this).focus(function () {
            jQuery(this).prev().addClass("focus");

            if (jQuery(this).val() == labelText) {
                jQuery(this).val('');
            }
        });

        /*When the user starts typing, apply the has-text class.*/
        jQuery(this).keypress(function () {
            jQuery(this).prev().addClass("has-text").removeClass("focus");
        });

        /*When the user shifts out of the field, check if it's empty: if so, remove the has-text class so the label will fade back in.*/
        jQuery(this).blur(function () {
            if (jQuery(this).val() == "") {
                jQuery(this).val(labelText).removeClass("has-text").removeClass("focus");
            }
        });

        return jQuery(this);
    }
})(jQuery);

com.TI.header.nav = function () {
    var _isNavFlyoutOpen = [],
            _keepFlyoutOpen = false,
            _lastNavClickId = null,
            closeStyledDropdown = function (e) {
                $("div.ti_tools_software_by_device_list .dropdown dd div").hide();
            },
            showHeaderNavFlyout = function (e) {
                //close all that are open
                var alreadyIn = false,
                    o = _isNavFlyoutOpen;
                for (var i = 0; i < _isNavFlyoutOpen.length; i++) {
                    if ($('#' + _isNavFlyoutOpen[i]).attr('id') != $(this).attr('id')) {
                        $('div.sub', $('#' + _isNavFlyoutOpen[i])).hide();
                        $('#' + _isNavFlyoutOpen[i]).removeClass('active');
                    } else {
                        alreadyIn = true;
                    }
                }

                //reset
                var id = $(this).attr('id'),
                    t = $(this);

                if (!alreadyIn) {
                    $('div.sub', $(this)).show(0, function () {
                        t.addClass('active');
                    });
                }

                //reset
                _keepFlyoutOpen = false;
                _isNavFlyoutOpen = [];
                _isNavFlyoutOpen.push(id);
            },
            hideHeaderNavFlyout = function (e) {
                var id = $(this).attr('id'),
                    parent = $(this);

                if (_keepFlyoutOpen) {
                    return true;
                }

                //hide the panel
                $('div.sub', $(this)).hide(0, function () {
                    parent.removeClass('active');
                });

                //lookup
                var i = jQuery.inArray(id, _isNavFlyoutOpen);
                if (i >= 0) {
                    //_isNavFlyoutOpen.remove(i);
					_isNavFlyoutOpen = [];
                }

                //close drop down lists
                closeStyledDropdown(e);
            },
            openSubMenu = function () {
                $(this).find('.langbox').css('display', 'block');
            },
            closeSubMenu = function () {
                $(this).find('.langbox').css('display', 'none');
            },
            hIConfig = {
                over: showHeaderNavFlyout,
                timeout: 500,
                out: hideHeaderNavFlyout
            };

    //enable close button on tabs
    $('.mega a.flyout-close', '#nav').click(function (e) {
        var p = $(this).data('closeparent');

        if (p) {
            p = $('#' + p);
            hideHeaderNavFlyout.call(p, e);
        }

        return false;
    });

    //iPad/mouse menu click
    $('a.nav', '#nav').click(function (e) {
        //close all that are open
        var id = $(this).parent().attr('id'),
            i = jQuery.inArray(id, _isNavFlyoutOpen);

        if (i >= 0 && _lastNavClickId == id) {
            _lastNavClickId = null;
            hideHeaderNavFlyout.call($(this).parent(), e);
        } else {
            _lastNavClickId = id;
            showHeaderNavFlyout.call($(this).parent(), e);
        }

        return false;
    });

    //enable hover of menus
    $('li.mega', '#nav').hoverIntent(hIConfig);

    // language selector below //
    $('#language').hover(openSubMenu, closeSubMenu);    
};

(function () {
    var buildHeaderNavFlyouts = function () {
        var nav = $('#nav'),
            startPos = (com.TI.header.contents.length - 1) > 0 ? (com.TI.header.contents.length - 1) : -1;

        if (startPos == -1) {
            return;
        }

        for (i = startPos; i >= 0; i--) {
            nav.prepend(com.TI.header.contents[i]);
        }
    };

    //build the top nav flyouts
    buildHeaderNavFlyouts();

    //show nav search box
    $('#navsearch').show();

    //continue to load header functionality after a brief pause for browser DOM updates to complete.
    setTimeout(function () {
        //enable inline field label on text boxes
        $('div.ti_samplebuy form.navProductSearchForm input.productNum').inlineFormLabel();        

        //bind nav elements and functionality
        com.TI.header.nav();

        $('#flyout-products-webench').TIwebenchPanel({
            'width': 280,
            'height': 215,
            'lang': 'en_US',
            'navBGColor': '#5e5e5e'
        });

        $('#flyout-tools-webench').TIwebenchPanel({
            'width': 280,
            'height': 215,
            'lang': 'en_US',
            'navBGColor': '#5e5e5e'
        });

        //check browser
        if ($.browser.msie && parseInt($.browser.version.substr(0, 1)) < 8) {
            // rule to remove outlines in IE 6 and IE 7
            $("a").each(function () {
                $(this).attr("hideFocus", "true").css("outline", "none");
            });
        }
    }, 500); //wait 500ms before executing code
})();