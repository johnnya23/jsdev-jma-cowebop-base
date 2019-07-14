jQuery(document).ready(function($) {
    $window = $(window);
    cloned = false;

    var $menu = $('#branding').find('#access');
    var menu_top_pos = parseInt($('#wrapper').css("padding-top"));
    $logo_wrap = $menu.find('.site-logo');
    logo_padding = $logo_wrap.outerHeight() - $logo_wrap.find('img').height();

    $menu.prevAll().each(function() {
        menu_top_pos += $(this).height();
    });

    function fix_menu() {
        $('#access').find('.sub-menu').css('display', 'none');
        //reads @media query in base.css to trigger window size change
        if (($('.copyright').css('margin-bottom') == '5px')) {
            var admin_bar_height = $('#wpadminbar').length ? $('#wpadminbar').height() + 'px' : 0;
            var offset = $window.scrollTop();
            var menu_height = $menu.height();

            if (offset > menu_top_pos &&
                (($(window).height() + menu_height + menu_top_pos + 25) < $('body').height())) {
                if (!cloned) {
                    $menu.clone(true).prependTo($('#branding').children('.wrap')).addClass('fix-menu');
                    $menu.find('.sub-menu').css('display', 'none');
                    menu_padding = $menu.data('menupadding');
                    $fixed = $('.fix-menu');
                    $fixed.css({
                        'top': admin_bar_height
                    });
                    $fixed.find('ul').children('li').find('a').css({
                        'padding-top': menu_padding,
                        'padding-bottom': menu_padding
                    });
                }

                cloned = true;
                widget_height = 0;

                $menu_ul = $menu.find('.sf-menu');
                if ($menu.hasClass('bottom')) {
                    if ($menu.find('.jma-header-right').length) {
                        widget_height = $menu.find('.jma-header-right').outerHeight(true) + parseInt($menu.find('.jma-header-right').css('top'), 10);
                    }
                    if (!$menu.hasClass('slide-menu')) {
                        $menu_ul.css('margin-top', widget_height + 'px');
                    } else {
                        $menu_ul.css('margin-top', '');
                    }
                }
                $fixed.find('.site-logo').find('img').css({
                    'height': (widget_height + $menu.find('ul.sf-menu').find('li.level-1').find('a').height() + $menu.data('menupadding') * 2 - logo_padding) + 'px'
                });
            } else {
                $('.fix-menu').remove();
                cloned = false;
            }
        }
    }

    function header_adjust() {
        var header_width = $('#branding').width();
        $('.logo.header-nav').each(function() {
            $this = $(this);
            logo_width = $this.find('.site-logo').outerWidth();
            menu_width = $this.find('ul.sf-menu').outerWidth();
            if ((logo_width + menu_width + 6) > header_width) {
                $this.addClass('slide-menu');
            } else {
                $this.removeClass('slide-menu');
            }
        });
    }

    $window.load(function() {
        if ($('#access').data('usechildsticky')) {
            fix_menu();
        }
        header_adjust();
    });
    $window.scroll(function() {
        //do this one immediately
        if ($('#access').data('usechildsticky')) {
            fix_menu();
        }
    });

    $window.bind('baseresizeEnd', function() {
        //do something, window hasn't changed size in 500ms
        header_adjust();
    });

    $window.resize(function() {
        if (this.baseresizeTO) clearTimeout(this.baseresizeTO);
        this.baseresizeTO = setTimeout(function() {
            $(this).trigger('baseresizeEnd');
        }, 500);
    });

});