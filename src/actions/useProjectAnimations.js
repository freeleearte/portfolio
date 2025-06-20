import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useProjectAnimations = (deps = []) => {
    useEffect(() => {
        const elements = document.querySelectorAll(".p_con");

        // 애니메이션 설정 함수
        const setupAnimations = () => {
            // 기존 트리거/애니메이션 제거
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            gsap.globalTimeline.clear();

            // progress bar는 한 번만 생성
            if (!ScrollTrigger.getById("progress-bar")) {
                gsap.to(".progress_bar", {
                    id: "progress-bar",
                    width: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: document.body,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: true,
                    },
                });
            }

            // matchMedia로 반응형 처리
            ScrollTrigger.matchMedia({
                "(min-width: 501px)": () => {
                    elements.forEach(el => applyAnimation(el));
                },
                "(max-width: 500px)": () => {
                    elements.forEach(el => {
                        const img_wrap = el.querySelector(".img_wrap");
                        const tri_b = el.querySelector(".img_wrap .tri_b");
                        const tri_t = el.querySelector(".img_wrap .tri_t");
                        const info = el.querySelector(".info");

                        if (img_wrap) {
                            img_wrap.style.width = "75vw";
                            img_wrap.style.height = "auto";
                            img_wrap.style.transform = "rotate(0deg)";
                        }

                        if (tri_b) tri_b.style.display = "none";
                        if (tri_t) tri_t.style.display = "none";
                        if (info) info.style.marginTop = "5vh";
                    });
                }
            });
        };

        // 최초 실행
        setupAnimations();

        // 창 크기 변경 시 다시 설정
        const handleResize = () => {
            setupAnimations();
            ScrollTrigger.refresh();
        };
        window.addEventListener("resize", handleResize);

        // 클린업
        return () => {
            window.removeEventListener("resize", handleResize);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            gsap.globalTimeline.clear();
        };
    }, deps);
};

// 데스크탑 애니메이션 함수
const applyAnimation = (el) => {
    const isLeft = el.classList.contains("l_con");
    const isRight = el.classList.contains("r_con");
    const img_wrap = el.querySelector(".img_wrap");
    const tri_b = el.querySelector(".img_wrap .tri_b");
    const tri_t = el.querySelector(".img_wrap .tri_t");
    const info = el.querySelector(".info");

    const baseAnimation = {
        trigger: el,
        scrub: true,
        ease: "none",
    };

    if (isLeft) {
        gsap.fromTo(img_wrap, { width: "300px", rotateZ: "0deg" }, {
            width: "100%",
            height: "80vh",
            rotateZ: "-4deg",
            scrollTrigger: {
                ...baseAnimation,
                start: "top center",
                end: "center center",
            },
        });

        gsap.to(tri_b, {
            display: "none",
            marginTop: "-20px",
            rotateZ: "2deg",
            scrollTrigger: {
                ...baseAnimation,
                start: "top center",
                end: "center center+=30",
            },
        });

        gsap.fromTo(tri_t, { rotateZ: "5deg" }, {
            display: "block",
            rotateZ: "6deg",
            scrollTrigger: {
                ...baseAnimation,
                start: "center center-=50",
                end: "bottom center-=80",
            },
        });

        gsap.fromTo(img_wrap, { width: "100%", rotateZ: "-4deg" }, {
            width: "300px",
            height: "400px",
            rotateZ: "-8deg",
            immediateRender: false,
            scrollTrigger: {
                ...baseAnimation,
                start: "center center-=40",
                end: "bottom center",
            },
        });
    }

    if (isRight) {
        gsap.fromTo(img_wrap, { width: "300px", rotateZ: "0deg" }, {
            width: "100%",
            height: "80vh",
            rotateZ: "4deg",
            scrollTrigger: {
                ...baseAnimation,
                start: "top center",
                end: "center center",
            },
        });

        gsap.to(tri_b, {
            display: "none",
            marginTop: "-20px",
            rotateZ: "-2deg",
            scrollTrigger: {
                ...baseAnimation,
                start: "top center",
                end: "center center+=30",
            },
        });

        gsap.fromTo(tri_t, { rotateZ: "-5deg" }, {
            display: "block",
            rotateZ: "-6deg",
            scrollTrigger: {
                ...baseAnimation,
                start: "center center-=50",
                end: "bottom center-=80",
            },
        });

        gsap.fromTo(img_wrap, { width: "100%", rotateZ: "4deg" }, {
            width: "300px",
            height: "400px",
            rotateZ: "8deg",
            immediateRender: false,
            scrollTrigger: {
                ...baseAnimation,
                start: "center center-=40",
                end: "bottom center",
            },
        });
    }

    gsap.to(info, {
        marginTop: "10vh",
        scrollTrigger: {
            ...baseAnimation,
            start: "top center",
            end: "center center",
        },
    });
};

export default useProjectAnimations;