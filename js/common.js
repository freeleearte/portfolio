$(function () {
    const cursor = document.querySelector('.custom_cursor');
    $('html').on('mousemove', function (e) {
        let posX = e.pageX;
        let posY = e.pageY;
        let cursorCx = $('.custom_cursor').innerWidth() / 2;
        let cursorCy = $('.custom_cursor').innerHeight() / 2;
        cursor.style.transform = `translate(${posX - cursorCx}px, ${posY - cursorCy}px)`;
    });

    $('.txtAni3').simplyScroll({
        speed: 2,
        pauseOnHover: false,
        pauseOnTouch: false,
        direction: 'forwards',
        continuous: true
    });

    $('.txtAni4').simplyScroll({
        speed: 2,
        pauseOnHover: false,
        pauseOnTouch: false,
        direction: 'forwards',
        continuous: true
    });

    $('.tab').on('click', function () {
        $('.tab_menu_wrap').fadeIn()
        $('.tab_menu').animate({
            left: 0
        }, 'slow')
    });

    $('.tab_menu .front i, .tab_menu .front ul li span').on('click', function () {
        $('.tab_menu_wrap').fadeOut()
        $('.tab_menu').animate({
            left: -100 + '%'
        })
    });
});