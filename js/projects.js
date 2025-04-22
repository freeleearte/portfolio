// 필터링된 p_con 요소에만 l_con과 r_con 클래스 적용
function applyVisibleOrderClasses() {
    $('.p_con').removeClass('l_con r_con'); // 기존 클래스 제거

    // 화면에 보이는 요소만 선택 (visible인 요소들만 대상으로)
    $('.p_con:visible').each(function (index) {
        // 보이는 요소만 index에 맞춰 l_con, r_con 클래스 추가
        if (index % 2 === 0) {
            $(this).addClass('l_con');
        } else {
            $(this).addClass('r_con');
        }
    });
}

applyVisibleOrderClasses();
// $('.scroll_page').fadeIn();
// setTimeout(() => {
//     $('.scroll_page').fadeOut();
// }, 1200)
// ScrollTrigger와 Locomotive Scroll 초기화
gsap.registerPlugin(ScrollTrigger);
const scrollContainer = document.querySelector("[data-scroll-container]");

ScrollTrigger.defaults({
    scroller: scrollContainer,
    scrub: 1
});

const locoScroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    lerp: 0.08,
});

// Locomotive Scroll과 ScrollTrigger 동기화
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(scrollContainer, {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }
});

// GSAP 애니메이션 설정
gsap.config({
    nullTargetWarn: false,
    trialWarn: false
});

ScrollTrigger.create({
    trigger: ".null"
});


// p_con 요소의 애니메이션 설정
function animate() {
    document.querySelectorAll('.p_con').forEach((el) => {
        ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.trigger === el) {
                trigger.kill(); // scrollTrigger 제거
            }
        });

        gsap.globalTimeline.getChildren().forEach(tween => {
            if (tween.scrollTrigger?.trigger === el) {
                tween.kill();
            }
        });

        // Progress Bar 애니메이션
        gsap.to(".progress_bar", {
            width: "180px",
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        });
        const isLeft = el.classList.contains('l_con')
        if (isLeft) {
            const l_img_wrap = el.querySelector('.img_wrap');
            const l_tri_b = el.querySelector('.img_wrap .tri_b');
            const l_tri_t = el.querySelector('.img_wrap .tri_t');

            gsap.fromTo(l_img_wrap,
                { width: "300px", rotateZ: "0deg" },
                {
                    width: "100%",
                    height: "80vh",
                    rotateZ: "-4deg",
                    scrollTrigger: {
                        trigger: el,
                        scroller: "[data-scroll-container]",
                        start: "top center",
                        end: "center center",
                        scrub: true,
                        // markers: true,
                    },
                    ease: "none"
                }
            );

            gsap.to(l_tri_b,
                {
                    display: "none",
                    marginTop: "-20px",
                    rotateZ: "2deg",
                    scrollTrigger: {
                        trigger: el,
                        scroller: "[data-scroll-container]",
                        start: "top center",
                        end: "center center+=30",
                        scrub: true,
                        // markers: true,
                    },
                    ease: "none"
                }
            );

            gsap.fromTo(l_tri_t,
                { rotateZ: "5deg" },
                {
                    display: "block",
                    rotateZ: "6deg",
                    scrollTrigger: {
                        trigger: el,
                        scroller: "[data-scroll-container]",
                        start: "center center-=50",
                        end: "bottom center",
                        scrub: true,
                        // markers: true,
                    },
                    ease: "none"
                }
            );

            gsap.fromTo(l_img_wrap,
                { width: "100%", rotateZ: "-4deg" },
                {
                    width: "300px",
                    height: "400px",
                    rotateZ: "-8deg",
                    scrollTrigger: {
                        trigger: el,
                        scroller: "[data-scroll-container]",
                        start: "center center+=1", // ← 살짝 밀어줌
                        end: "bottom center",
                        scrub: true,
                        // markers: true,
                    },
                    immediateRender: false,
                    ease: "none"
                });
        }

        const isRight = el.classList.contains('r_con')
        if (isRight) {
            const r_img_wrap = el.querySelector('.img_wrap');
            const r_tri_b = el.querySelector('.img_wrap .tri_b');
            const r_tri_t = el.querySelector('.img_wrap .tri_t');

            gsap.fromTo(r_img_wrap,
                { width: "300px", rotateZ: "0deg" },
                {
                    width: "100%",
                    height: "80vh",
                    rotateZ: "4deg",
                    scrollTrigger: {
                        trigger: el,
                        scroller: "[data-scroll-container]",
                        start: "top center",
                        end: "center center",
                        scrub: true,
                        // markers: true,
                    },
                    ease: "none"
                }
            );

            gsap.to(r_tri_b,
                {
                    display: "none",
                    marginTop: "-20px",
                    rotateZ: "-2deg",
                    scrollTrigger: {
                        trigger: el,
                        scroller: "[data-scroll-container]",
                        start: "top center",
                        end: "center center+=30",
                        scrub: true,
                        // markers: true,
                    },
                    ease: "none"
                }
            );

            gsap.fromTo(r_tri_t,
                { rotateZ: "-5deg" },
                {
                    display: "block",
                    rotateZ: "-6deg",
                    scrollTrigger: {
                        trigger: el,
                        scroller: "[data-scroll-container]",
                        start: "center center-=50",
                        end: "bottom center",
                        scrub: true,
                        // markers: true,
                    },
                    ease: "none"
                }
            );
            gsap.fromTo(r_img_wrap,
                { width: "100%", rotateZ: "4deg" },
                {
                    width: "300px",
                    height: "400px",
                    rotateZ: "8deg",
                    scrollTrigger: {
                        trigger: el,
                        scroller: "[data-scroll-container]",
                        start: "center center+=1", // ← 살짝 밀어줌
                        end: "bottom center",
                        scrub: true,
                        // markers: true,
                    },
                    immediateRender: false,
                    ease: "none"
                });
        }

        const info = el.querySelector('.info');

        gsap.to(info,
            {
                marginTop: "100px",
                scrollTrigger: {
                    trigger: el,
                    scroller: "[data-scroll-container]",
                    start: "top center",
                    end: "center center",
                    scrub: true,
                    // markers: true,
                },
                ease: "none"
            }
        );
    });
}

animate();

function moveBg(posX) {
    $('.box_wrap').stop().animate({
        left: posX + '%'
    }, 800); // 0.8초간 부드럽게 이동
}

// 필터 버튼 클릭 시 동작
$('header ul.nav li').click(function () {
    $('header ul.nav li').removeClass('on');
    $(this).addClass('on');
    $('.loading').fadeIn();
    setTimeout(() => {
        $('.loading').fadeOut();
    }, 1200)

    // 공통 처리 함수
    function handleFilter($fadeInTarget) {
        $('.p_con').fadeOut(300, function () {
            // 스크롤 먼저 위로 보냄 (애니메이션 후 실행을 위해 setTimeout)
            locoScroll.scrollTo(0, {
                duration: 0,
                offset: 0,
                disableLerp: true,
            });

            setTimeout(() => {
                $fadeInTarget.fadeIn(300, function () {
                    // 1. 기존 트리거 제거
                    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

                    // 2. 클래스 적용
                    applyVisibleOrderClasses();

                    // 3. 최소한의 시간차로 update
                    locoScroll.update();

                    // 4. 리프레시 타이밍을 더 뒤로 빼기
                    setTimeout(() => {
                        ScrollTrigger.refresh();

                        // 5. 애니메이션도 refresh 이후에
                        animate();

                    }, 100);
                });
            }, 300);// 살짝 딜레이 줘서 튕김 방지
        });
    }

    // 필터 조건별 처리
    if ($('header ul.nav li.all.on').length) {
        handleFilter($('.p_con'));
        $('body').removeClass();
        moveBg(0);
    }
    if ($('header ul.nav li.live.on').length) {
        handleFilter($('.p_con.live'));
        $('body').removeClass().addClass('live');
        moveBg(-100);
    }
    if ($('header ul.nav li.mock.on').length) {
        handleFilter($('.p_con.mock'));
        $('body').removeClass().addClass('mock');
        moveBg(-200);
    }
    if ($('header ul.nav li.art.on').length) {
        handleFilter($('.p_con.art'));
        $('body').removeClass().addClass('art');
        moveBg(-300);
    }
});
