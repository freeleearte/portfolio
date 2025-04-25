$(function () {
    $(window).scroll(function () {
        let sct = $(this).scrollTop();
        let aboutHeight = $('.about').height();
        let ngHeight = $('.news_wrap .nav_go').height();
        if (sct > aboutHeight + ngHeight) {
            $('.news_wrap .nav_go ul.go').addClass('sc');
        } else {
            $('.news_wrap .nav_go ul.go').removeClass('sc');
        }
    });
    let newsSlide = new Swiper(".list_wrap", {
        direction: "vertical",
        slidesPerView: 3,
        grid: {
            rows: 2,
        },
        navigation: {
            nextEl: "#news .down",
            prevEl: "#news .up",
        },
        pagination: {
            el: "#news .swiper-pagination",
            clickable: true,
        }
    });

    let eventSlide = new Swiper(".ev_list", {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 86,
        loop: true,
        navigation: {
            nextEl: "#event .next",
            prevEl: "#event .prev",
        },
        pagination: {
            el: "#event .swiper-pagination",
            type: "fraction",
        },
        scrollbar: {
            el: "#event .swiper-scrollbar",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
    });

    $('section#hot article.hot_list').on('click', '.button', function () {
        const hot_list = $('section#hot article.hot_list ul.list');
        if ($(this).hasClass('down')) {
            hot_list.stop().animate({ height: '990px' }, 2000);
            $(this).removeClass('down').addClass('up');
        } else {
            hot_list.stop().animate({ height: '540px' }, 2000);
            $(this).removeClass('up').addClass('down');
        }
    });

    var swiper = new Swiper(".weeklyNew_wrap", {
        slidesPerView: 7,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: "#weeklyNew .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: "section#weeklyNew .next",
            prevEl: "section#weeklyNew .prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
    });

    $('section#artist article.artist_wrap').on('click', '.button', function () {
        const artist_list = $('section#artist article ul');
        const autoHeight = artist_list[0].scrollHeight;
        if ($(this).hasClass('down')) {
            artist_list.stop().animate({ height: autoHeight }, 2000);
            $('.button.down').removeClass('on');
            $('.button.up').addClass('on');
        } else {
            artist_list.stop().animate({ height: '2306px' }, 2000);
            $('.button.up').removeClass('on');
            $('.button.down').addClass('on');
        }
    });

    const items = document.querySelectorAll('section#artist article ul li');
    const aside = document.querySelector('section#artist aside');
    const close = document.querySelector('section#artist aside i');

    items.forEach(item => {
        item.addEventListener('click', e => {
            const tit = e.currentTarget.querySelector('h4').innerText;
            let nexttit = '';
            let prevtit = '';

            // nextElementSibling이 null인지 확인
            if (e.currentTarget.nextElementSibling) {
                nexttit = e.currentTarget.nextElementSibling.querySelector('h4').innerText;
            } else {
                nexttit = ''; // or 'No next item'과 같은 기본값을 설정할 수 있습니다.
            }

            // previousElementSibling이 null인지 확인
            if (e.currentTarget.previousElementSibling) {
                prevtit = e.currentTarget.previousElementSibling.querySelector('h4').innerText;
            } else {
                prevtit = ''; // or 'No previous item'과 같은 기본값을 설정할 수 있습니다.
            }
            // const vidSrc = e.currentTarget.querySelector('video').getAttribute('src');

            aside.querySelector('.center h3').innerText = tit;
            aside.querySelector('.right h3').innerText = nexttit;
            aside.querySelector('.left h3').innerText = prevtit;

            // 팝업 위치 조정 (클릭한 위치 기준)
            const clickX = e.clientX;
            const clickY = e.clientY;
            const asideWidth = aside.offsetWidth;
            const asideHeight = aside.offsetHeight;

            // 클릭 위치를 기준으로 팝업이 화면 넘어가지 않도록 처리
            let posX = clickX - asideWidth / 2;
            let posY = clickY - asideHeight / 2;

            // 화면 밖으로 안 나가게 조정
            if (posX < 0) posX = 0;
            if (posY < 0) posY = 0;
            if (posX + asideWidth > window.innerWidth) posX = window.innerWidth - asideWidth;
            if (posY + asideHeight > window.innerHeight) posY = window.innerHeight - asideHeight;

            // 위치 적용
            aside.style.left = `${posX}px`;
            aside.style.top = `${posY}px`;

            // 팝업 활성화
            aside.classList.add('on');
        });
    });

    // 닫기 버튼 클릭 시 팝업 닫기
    close.addEventListener('click', () => {
        aside.classList.remove('on');
    });
});
