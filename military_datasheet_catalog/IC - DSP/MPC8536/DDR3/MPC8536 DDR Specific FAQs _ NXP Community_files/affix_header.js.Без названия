define([
    'jquery',
    'application/base_view',
    'jive/rte/bootstrap-affix-custom',
    'bootstrap-affix'
    ], function($, View) {
    'use strict';

    return View.extend({
        initialize: function() {
            this.$el.affix({customAffixTest: customAffixTest});
            this.$el.on('affix-top.bs.affix', this.hideDoc.bind(this));
            $(window).on('resize', this.onResize.bind(this));
        },
        events: {
            'click .js-show': 'showDoc',
            'click .js-hide': 'hideDoc'
        },
        onResize: function() {
            var $content = $('.j-content-body.affix');
            if ($content.length > 0 && $('.j-content-body').not('.affix').outerHeight(true) + 110 > window.innerHeight) {
                $content.removeAttr('style');
                $content.height(window.innerHeight - 110);
                $('body').attr('style', 'overflow:hidden;');

            } else {
                $content.attr('style', 'overflow:hidden;');
                $('body').removeAttr('style');
            }
        },
        toggleDoc: function(show) {
            this.$('.js-show').attr('aria-hidden', show);
            this.$('.js-hide').attr('aria-hidden', !show);
        },
        showDoc: function() {
            var $content = $('.j-content-body').clone().addClass('affix').appendTo('.js-tlo');
            $(window).trigger('resize');
            this.toggleDoc(true);
        },
        hideDoc: function () {
            $('.j-content-body.affix').remove();
            $('body').removeAttr('style');
            this.toggleDoc(false);
        }
    });

    function customAffixTest(scrollTop, offsetTop, offsetBottom) {
        if ($('body').hasClass('j-responsive-sm')) {
            return 'top';
        }
        var $trigger = $('.j-content-footer');
        var offset = 150;
        if ($trigger.length > 0 && $trigger.offset().top - offset <= scrollTop) {
            return false;
        } else {
            return 'top';
        }
    }
});
