declare let $;

export let funciones = {
    OwlCarouselConfig: () => {
        // tslint:disable-next-line:prefer-const
        const target = $('.owl-slider');
        if (target.length > 0) {
            target.each(function () {
                const el = $(this);
                const dataAuto = el.data('owl-auto');
                const dataLoop = el.data('owl-loop');
                const dataSpeed = el.data('owl-speed');
                const dataGap = el.data('owl-gap');
                const dataNav = el.data('owl-nav');
                const dataDots = el.data('owl-dots');
                const dataAnimateIn = (el.data('owl-animate-in')) ? el.data('owl-animate-in') : '';
                const dataAnimateOut = (el.data('owl-animate-out')) ? el.data('owl-animate-out') : '';
                const dataDefaultItem = el.data('owl-item');
                const dataItemXS = el.data('owl-item-xs');
                const dataItemSM = el.data('owl-item-sm');
                const dataItemMD = el.data('owl-item-md');
                const dataItemLG = el.data('owl-item-lg');
                const dataItemXL = el.data('owl-item-xl');
                const dataNavLeft = (el.data('owl-nav-left')) ? el.data('owl-nav-left') : '<i class=\'icon-chevron-left\'></i>';
                const dataNavRight = (el.data('owl-nav-right')) ? el.data('owl-nav-right') : '<i class=\'icon-chevron-right\'></i>';
                const duration = el.data('owl-duration');
                const datamouseDrag = (el.data('owl-mousedrag') === 'on') ? true : false;
                if (target.children('div, span, a, img, h1, h2, h3, h4, h5, h5').length >= 2) {
                    el.owlCarousel({
                        animateIn: dataAnimateIn,
                        animateOut: dataAnimateOut,
                        margin: dataGap,
                        autoplay: dataAuto,
                        autoplayTimeout: dataSpeed,
                        autoplayHoverPause: true,
                        loop: dataLoop,
                        nav: dataNav,
                        mouseDrag: datamouseDrag,
                        touchDrag: true,
                        autoplaySpeed: duration,
                        navSpeed: duration,
                        dotsSpeed: duration,
                        dragEndSpeed: duration,
                        navText: [dataNavLeft, dataNavRight],
                        dots: dataDots,
                        items: dataDefaultItem,
                        responsive: {
                            0: {
                                items: dataItemXS
                            },
                            480: {
                                items: dataItemSM
                            },
                            768: {
                                items: dataItemMD
                            },
                            992: {
                                items: dataItemLG
                            },
                            1200: {
                                items: dataItemXL
                            },
                            1680: {
                                items: dataDefaultItem
                            }
                        }
                    });
                }

            });
        }
    },
    BackgroundImage: () => {
        const databackground = $('[data-background]');
        databackground.each(function () {
            if ($(this).attr('data-background')) {
                const image_path = $(this).attr('data-background');
                $(this).css({
                    background: 'url(' + image_path + ')'
                });
            }
        });
    }, CarouselNavigation: () => {
        const prevBtn = $('.ps-carousel__prev');
        const nextBtn = $('.ps-carousel__next');
        prevBtn.on('click', function (e) {
            e.preventDefault();
            const target = $(this).attr('href');
            $(target).trigger('prev.owl.carousel', [1000]);
        });
        nextBtn.on('click', function (e) {
            e.preventDefault();
            const target = $(this).attr('href');
            $(target).trigger('next.owl.carousel', [1000]);
        });
    },
    Tabs: () => {
        $('.ps-tab-list  li > a ').on('click', function (e) {
            e.preventDefault();
            const target = $(this).attr('href');
            $(this).closest('li').siblings('li').removeClass('active');
            $(this).closest('li').addClass('active');
            $(target).addClass('active');
            $(target).siblings('.ps-tab').removeClass('active');
        });
        $('.ps-tab-list.owl-slider .owl-item a').on('click', function (e) {
            e.preventDefault();
            const target = $(this).attr('href');
            $(this).closest('.owl-item').siblings('.owl-item').removeClass('active');
            $(this).closest('.owl-item').addClass('active');
            $(target).addClass('active');
            $(target).siblings('.ps-tab').removeClass('active');
        });
    }, SlickConfig: () => {
        const product = $('.ps-product--detail');
        if (product.length > 0) {
            const primary = product.find('.ps-product__gallery');
            const second = product.find('.ps-product__variants');
            const vertical = product.find('.ps-product__thumbnail').data('vertical');
            primary.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.ps-product__variants',
                fade: true,
                dots: false,
                infinite: false,
                arrows: primary.data('arrow'),
                prevArrow: '<a href=\'#\'><i class=\'fa fa-angle-left\'></i></a>',
                nextArrow: '<a href=\'#\'><i class=\'fa fa-angle-right\'></i></a>',
            });
            second.slick({
                slidesToShow: second.data('item'),
                slidesToScroll: 1,
                infinite: false,
                arrows: second.data('arrow'),
                focusOnSelect: true,
                prevArrow: '<a href=\'#\'><i class=\'fa fa-angle-up\'></i></a>',
                nextArrow: '<a href=\'#\'><i class=\'fa fa-angle-down\'></i></a>',
                asNavFor: '.ps-product__gallery',
                vertical: vertical,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            arrows: second.data('arrow'),
                            slidesToShow: 4,
                            vertical: false,
                            prevArrow: '<a href=\'#\'><i class=\'fa fa-angle-left\'></i></a>',
                            nextArrow: '<a href=\'#\'><i class=\'fa fa-angle-right\'></i></a>'
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            arrows: second.data('arrow'),
                            slidesToShow: 4,
                            vertical: false,
                            prevArrow: '<a href=\'#\'><i class=\'fa fa-angle-left\'></i></a>',
                            nextArrow: '<a href=\'#\'><i class=\'fa fa-angle-right\'></i></a>'
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 3,
                            vertical: false,
                            prevArrow: '<a href=\'#\'><i class=\'fa fa-angle-left\'></i></a>',
                            nextArrow: '<a href=\'#\'><i class=\'fa fa-angle-right\'></i></a>'
                        }
                    },
                ]
            });
        }
    },
    ProductLightbox: () => {
        const product = $('.ps-product--detail');
        if (product.length > 0) {
            $('.ps-product__gallery').lightGallery({
                selector: '.item a',
                thumbnail: true,
                share: false,
                fullScreen: false,
                autoplay: false,
                autoplayControls: false,
                actualSize: false
            });
            if (product.hasClass('ps-product--sticky')) {
                $('.ps-product__thumbnail').lightGallery({
                    selector: '.item a',
                    thumbnail: true,
                    share: false,
                    fullScreen: false,
                    autoplay: false,
                    autoplayControls: false,
                    actualSize: false
                });
            }
        }
        $('.ps-gallery--image').lightGallery({
            selector: '.ps-gallery__item',
            thumbnail: true,
            share: false,
            fullScreen: false,
            autoplay: false,
            autoplayControls: false,
            actualSize: false
        });
        $('.ps-video').lightGallery({
            thumbnail: false,
            share: false,
            fullScreen: false,
            autoplay: false,
            autoplayControls: false,
            actualSize: false
        });
    },
    CountDown: () => {
        const time = $('.ps-countdown');
        time.each(function () {
            const el = $(this);
            const value = $(this).data('time');
            const countDownDate = new Date(value).getTime();
            const timeout = setInterval(function () {
                const now = new Date().getTime();
                const distance = countDownDate - now;
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                el.find('.days').html(days);
                el.find('.hours').html(hours);
                el.find('.minutes').html(minutes);
                el.find('.seconds').html(seconds);
                if (distance < 0) {
                    clearInterval(timeout);
                    el.closest('.ps-section').hide();
                }
            }, 1000);
        });
    },
    Rating: ()=> {
        $('select.ps-rating').each(function() {
            let readOnly;
            if ($(this).attr('data-read-only') === 'true') {
                readOnly = true;
            } else {
                readOnly = false;
            }
            $(this).barrating({
                theme: 'fontawesome-stars',
                readonly: readOnly,
                emptyValue: '0'
            });
        });
    },
    ProgressBar: () => {
        const progress = $('.ps-progress');
        progress.each(function(e) {
            const value = $(this).data('value');
            $(this).find('span').css({
                width: value + '%'
            })
        });
    },

    NumerosAlAzar: (length: number, numeros: number) => {
        const arrayNum: number[] = [];
        for (let i = 0; i < length; i++) {
            arrayNum.push(i);
        }
        const _numeros: number[] = [];
        for (let i = 0; i < numeros; i++) {

            // sacamos un indice al azar
            const indice = Math.floor(Math.random() * arrayNum.length);
            // metemos el número en el nuevo array de umeros
            _numeros.push(arrayNum[indice]);
            // eliminaos el numero sacado para no volverlo a sacar
            arrayNum.splice(indice, 1);
        }
        return _numeros;
    }
}