jQuery(document).ready(function($) {
    $window = $(window);
    $body = $('body');

    var $menu = $('#branding').find('#access');
    $logo_wrap = $menu.find('.site-logo');
    logo_padding = $logo_wrap.outerHeight() - $logo_wrap.find('img').height();

    //build the fixed menu
    $menu.clone(true).prependTo($('#branding').children('.wrap')).addClass('fix-menu');
    $fixed = $('.fix-menu');
    admin_bar_height = $('#wpadminbar').length ? $('#wpadminbar').height() + 'px' : 0;
    $fixed.css('top', admin_bar_height);
    menu_padding = $menu.data('menupadding');
    $fixed.find('ul').children('li').find('a').css({
        'padding-top': menu_padding,
        'padding-bottom': menu_padding
    });
    widget_height = 0;

    $menu_ul = $menu.find('.sf-menu');
    //done building menu
    var menu_top_pos = parseInt($('#wrapper').css("padding-top"));
    z_index = 21;
    $menu.prevAll().each(function() {
        $this = $(this);
        if (!$this.hasClass('fix-menu')) {
            $this.css('z-index', z_index);
            z_index++;
        }
    });

    //if body is stretched we can reveal fixed menu on doc ready
    //(it will be covered) by header elements
    if ($body.hasClass('stretched')) {
        $fixed.css({
            'display': 'block'
        });
    }

    function reveal_menu() {
        main_pos = $.isNumeric($body.attr('data-available_height')) ? $body.attr('data-available_height') : 0;

        //reads @media query in base.css to trigger window size change
        width_val = $('body').hasClass('jma-stack-991') ? 12 : 7;
        if ($('#dont-edit-this-element').css('z-index') > width_val) {
            var admin_bar_height = $('#wpadminbar').length ? $('#wpadminbar').height() + 'px' : 0;
            var offset = $window.scrollTop();
            var menu_height = $menu.height();

            if (offset > menu_top_pos &&
                (($(window).height() + menu_height + menu_top_pos + 25) < $('body').height() + main_pos)) {
                $fixed.css('display', 'block');
            } else {
                $fixed.css('display', '');
            }
        }
    }

    function header_adjust() {
        var header_width = $('#branding').width();
        $('.logo.header-nav').each(function() {
            $this = $(this);
            fixed_width = $body.hasClass('boxed') ? $this.parent().width() : "''";
            $this.css({
                'width': fixed_width
            });
            logo_width = $this.find('.site-logo').outerWidth();
            menu_width = $this.find('ul.sf-menu').outerWidth();
            if ((logo_width + menu_width + 6) > header_width) {
                $this.addClass('slide-menu');
            } else {
                $this.removeClass('slide-menu');
            }
        });
        if ($menu.hasClass('bottom')) {
            if ($menu.find('.jma-header-right').length) {
                widget_height = $menu.find('.jma-header-right').outerHeight(true) + parseInt($menu.find('.jma-header-right').css('top'), 10);
            }
            if ($menu.hasClass('slide-menu')) {
                $menu_ul.css('margin-top', widget_height + 'px');
            } else {
                $menu_ul.css('margin-top', '');
            }
        }
        $fixed.find('.site-logo').find('img').css({
            'height': (widget_height + $menu.find('ul.sf-menu').find('li.level-1').find('a').height() + $menu.data('menupadding') * 2 - logo_padding) + 'px'
        });
    }

    $window.load(function() {
        header_adjust();
    });

    $window.scroll(function() {
        $menu.find('.sub-menu').css('display', 'none');
        //do this one immediately
        if ($('#access').data('usechildsticky') && $body.hasClass('boxed')) {
            reveal_menu();
        }
    });

    $window.bind('baseresizeEnd', function() {
        //do something, window hasn't changed size in 500ms
        header_adjust();
    });

    $window.resize(function() {
        $menu.find('.sub-menu').css('display', 'none');
        if (this.baseresizeTO) clearTimeout(this.baseresizeTO);
        this.baseresizeTO = setTimeout(function() {
            $(this).trigger('baseresizeEnd');
        }, 500);
    });

});