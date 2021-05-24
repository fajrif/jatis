(function ($) {
    'use strict';

    // Code Goes Here

    /*=======================
    	01. Wow Active
    ======================*/

    new WOW().init();


    /*=====================================
    	03. Mainmenu Activation
    =========================================*/

    $('nav.mobilemenu__nav').meanmenu({
        meanMenuClose: 'X',
        meanMenuCloseSize: '18px',
        meanScreenWidth: '991',
        meanExpandableChildren: true,
        meanMenuContainer: '.mobile-menu',
        onePage: true
    });

    /*====================================
    	10. Headroom For Sticky Header
    ======================================*/

    $('.headroom--sticky').headroom();

    /* ===================================
    	12. Sidebar Mobile Menu Active
    =====================================*/
    var $html = $('html'),
        $body = $('body');

    function menuClose() {
        $body.removeClass('popup-mobile-menu-wrapper'), $html.css({
            overflow: ""
        })
    };

    $('.popup-mobile-click').on('click', function (e) {
        e.preventDefault(),
            function () {
                $body.addClass('popup-mobile-menu-wrapper'), $html.css({
                    overflow: "hidden"
                });
            }()
    });

    $('.mobile-close').on('click', function (e) {
        e.preventDefault();
        menuClose();
    });
    $('.popup-mobile-visiable').on('click', function (e) {
        e.target === this && menuClose();
    });

    /* =============================
    	15. Sidebar Mobile Menu
    ================================*/

    $('.object-custom-menu > li.has-mega-menu > a').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('.object-submenu').slideToggle('400');
        $(this).toggleClass('active').siblings('.object-submenu').toggleClass('is-visiable');
    })

    /* =====================
    	16. Hamburger Menu
    =========================*/

    $('.hamberger-trigger').on('click', function (e) {
        e.preventDefault();
        $('.open-hamberger-wrapper').addClass('is-visiable');
    });

    $('.page-close').on('click', function (e) {
        e.preventDefault();
        $('.open-hamberger-wrapper').removeClass('is-visiable');
    });

    /*===================================
        47. Background Image
    ====================================*/
    var $backgroundImage = $('.bg-image');
    $backgroundImage.each(function() {
        var $this = $(this),
            $bgImage = $this.data('bg');
        $this.css('background-image', 'url('+$bgImage+')');
    });


})(jQuery);
