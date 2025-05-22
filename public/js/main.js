$(document).ready(function () {
    // Inicialização do carousel da home
    $('.banners-home').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false, // Removendo as setas de navegação
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    // Inicialização do carousel de convênios (planos)
    $('.convenios-imgs').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Removendo as setas de navegação
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    // Inicialização do carousel de exames
    $('.lista-exames').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false, // Sem setas de navegação
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Inicialização do carousel de unidades
    $('.lista-unidades').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Hamburger menu toggle
    $('#hamburger-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('#mobile-menu').toggleClass('active');
    });

    // Add animation classes on scroll
    $(window).on('scroll', function () {
        $('.cada-uteis, .box-exame, .box-unidade, .overlap-group-2').each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
                $(this).addClass('fade-in');
            }
        });
    });

    // Add hover animations
    $('.cta-nossas-unidades, .cta-seja-parceiro, .cta-consulte').hover(
        function () { $(this).addClass('bounce'); },
        function () { $(this).removeClass('bounce'); }
    );

    // Add animation to buttons
    $('.botao-exames, .botao-nossas-unidades, .convenios-botao, .btn-ligar-unidade, .btn-whats-unidade').hover(
        function () { $(this).addClass('bounce'); },
        function () { $(this).removeClass('bounce'); }
    );

    // Trigger animations on page load
    setTimeout(function () {
        $('.cada-uteis, .box-exame, .box-unidade, .overlap-group-2').addClass('fade-in');
    }, 300);
});
