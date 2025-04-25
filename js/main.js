$(function () {
    const cursor = document.querySelector('.custom_cursor');
    let isFlipped = false;  // 클릭 상태 추적 변수

    $('.start').on('mousemove', function (e) {
        let posX = e.pageX;
        let posY = e.pageY;
        let cursorCx = $('.custom_cursor').innerWidth() / 2;
        let cursorCy = $('.custom_cursor').innerHeight() / 2;

        const moveX = (posX - window.innerWidth / 2) / 50;
        const moveY = (posY - window.innerHeight / 2) / 50;

        $('.box1').css({
            transform: `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`
        });

        $('.box2').css({
            transform: `translate(${moveX * 0.7}px, ${moveY * 0.7}px)`
        });

        $('.box3').css({
            transform: `translate(${moveX}px, ${moveY}px)`
        });
    });

    $('.box1>a').hover(function () {
        $(this).children('.txt').css('display', 'flex');
    }, function () {
        $(this).children('.txt').css('display', 'none');
    });

    $('.box2>a').hover(function () {
        $(this).children('.txt').css('display', 'flex');
        $('.box1>.txt').css('display', 'none');
    }, function () {
        $(this).children('.txt').css('display', 'none');
        $('.box1>.txt').css('display', 'flex');
    });

    $('.box3>a').hover(function () {
        $(this).children('.txt').css('display', 'flex');
        $('.box1>.txt').css('display', 'none');
        $('.box2>.txt').css('display', 'none');
    }, function () {
        $(this).children('.txt').css('display', 'none');
        $('.box1>.txt').css('display', 'none');
        $('.box2>.txt').css('display', 'flex');
    });

    $('.txtAni1').simplyScroll({
        speed: 4,
        pauseOnHover: false,
        pauseOnTouch: false,
        direction: 'forwards',
        continuous: true
    });

    $('.txtAni2').simplyScroll({
        speed: 4,
        pauseOnHover: false,
        pauseOnTouch: false,
        direction: 'backwards',
        continuous: true
    });

    $('.box1>.delayed-link, .tab_menu .front ul li a.m_contact').on('click', function (e) {
        e.preventDefault();
        if (!isFlipped) {
            if ($('.tab_menu_wrap').is(':visible')) {
                $('.tab_menu_wrap').fadeOut()
                $('.tab_menu').animate({
                    left: -100 + '%'
                })
            }
            // 박스 축소 후 회전하면서 커지는 3D 애니메이션
            $('.box1').addClass('rotate-shrink-expand');
            $('.box2').addClass('rotate-shrink-expand');
            $('.box3').addClass('rotate-shrink-expand');

            $('.start>i').fadeOut();

            // 배경 색상 천천히 흰색으로 변경
            setTimeout(function () {
                $('.start').addClass('white-background');
            }, 2000); // 크기 축소 후 배경색 변경

            // 박스들이 사라지게 하고, 콘텐츠를 표시하는 타이밍
            setTimeout(function () {
                $('.box1').addClass('hide-box');
                $('.box2').addClass('hide-box');
                $('.box3').addClass('hide-box');
                $('.contact_c, .f_left, .f_right').addClass('show-content');
                $('.out .f_profile').addClass('f_on');
                $('.in .f_projects').addClass('f_on');
            }, 3000); // 박스들이 완전히 사라지고, 콘텐츠가 나타나게 함

            // 클릭 상태를 true로 설정하여 더 이상 돌아가지 않게 함
            isFlipped = true;
            setTimeout(() => {
                window.location.href = $(this).attr('href');
            }, 3500);
        }
    });

    $('.box2>.delayed-link, .tab_menu .front ul li a.m_profile').on('click', function (e) {
        e.preventDefault();
        if (!isFlipped) {
            if ($('.tab_menu_wrap').is(':visible')) {
                $('.tab_menu_wrap').fadeOut()
                $('.tab_menu').animate({
                    left: -100 + '%'
                })
            }

            // 박스 축소 후 회전하면서 커지는 3D 애니메이션
            $('.box1').addClass('rotate-shrink-expand');
            $('.box2').addClass('rotate-shrink-expand');
            $('.box3').addClass('rotate-shrink-expand');

            $('.start>i').fadeOut();

            // 배경 색상 천천히 흰색으로 변경
            setTimeout(function () {
                $('.start').addClass('white-background');
            }, 2000); // 크기 축소 후 배경색 변경

            // 박스들이 사라지게 하고, 콘텐츠를 표시하는 타이밍
            setTimeout(function () {
                $('.box1').addClass('hide-box');
                $('.box2').addClass('hide-box');
                $('.box3').addClass('hide-box');
                $('.profile_c, .f_left, .f_right').addClass('show-content');
                $('.out .f_contact').addClass('f_on');
                $('.in .f_projects').addClass('f_on');
            }, 3000, () => {
                window.location.href = $(this).attr('href');
            }); // 박스들이 완전히 사라지고, 콘텐츠가 나타나게 함

            // 클릭 상태를 true로 설정하여 더 이상 돌아가지 않게 함
            isFlipped = true;
            setTimeout(() => {
                window.location.href = $(this).attr('href');
            }, 3500);
        }
    });

    $('.box3>.delayed-link, .tab_menu .front ul li a.m_projects').on('click', function (e) {
        e.preventDefault();
        if (!isFlipped) {
            if ($('.tab_menu_wrap').is(':visible')) {
                $('.tab_menu_wrap').fadeOut()
                $('.tab_menu').animate({
                    left: -100 + '%'
                })
            }

            // 박스 축소 후 회전하면서 커지는 3D 애니메이션
            $('.box1').addClass('rotate-shrink-expand');
            $('.box2').addClass('rotate-shrink-expand');
            $('.box3').addClass('rotate-shrink-expand');

            $('.start>i').fadeOut();

            // 배경 색상 천천히 흰색으로 변경
            setTimeout(function () {
                $('.start').addClass('white-background');
            }, 2000); // 크기 축소 후 배경색 변경

            // 박스들이 사라지게 하고, 콘텐츠를 표시하는 타이밍
            setTimeout(function () {
                $('.box1').addClass('hide-box');
                $('.box2').addClass('hide-box');
                $('.box3').addClass('hide-box');
                $('.projects_c, .f_left, .f_right').addClass('show-content');
                $('.out .f_contact').addClass('f_on');
                $('.in .f_profile').addClass('f_on');
            }, 3000); // 박스들이 완전히 사라지고, 콘텐츠가 나타나게 함

            // 클릭 상태를 true로 설정하여 더 이상 돌아가지 않게 함
            isFlipped = true;
            setTimeout(() => {
                window.location.href = $(this).attr('href');
            }, 3500);
        }
    });
});
