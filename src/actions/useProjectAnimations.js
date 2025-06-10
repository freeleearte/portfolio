import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useProjectAnimations = () => {
    useEffect(() => {
        const elements = document.querySelectorAll(".p_con");

        elements.forEach((el) => {
            // 기존 ScrollTrigger 제거
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === el) trigger.kill();
            });

            // 기존 Tween 제거
            gsap.globalTimeline.getChildren().forEach(tween => {
                if (tween.scrollTrigger?.trigger === el) tween.kill();
            });

            // Progress Bar 애니메이션 (한 번만 적용되도록)
            gsap.to(".progress_bar", {
                width: "180px",
                ease: "none",
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                },
            });

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
                gsap.fromTo(
                    img_wrap,
                    { width: "300px", rotateZ: "0deg" },
                    {
                        width: "100%",
                        height: "80vh",
                        rotateZ: "-4deg",
                        scrollTrigger: {
                            ...baseAnimation,
                            start: "top center",
                            end: "center center",
                        },
                    }
                );

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

                gsap.fromTo(
                    tri_t,
                    { rotateZ: "5deg" },
                    {
                        display: "block",
                        rotateZ: "6deg",
                        scrollTrigger: {
                            ...baseAnimation,
                            start: "center center-=50",
                            end: "bottom center-=80",
                        },
                    }
                );

                gsap.fromTo(
                    img_wrap,
                    { width: "100%", rotateZ: "-4deg" },
                    {
                        width: "300px",
                        height: "400px",
                        rotateZ: "-8deg",
                        immediateRender: false,
                        scrollTrigger: {
                            ...baseAnimation,
                            start: "center center-=40",
                            end: "bottom center",
                        },
                    }
                );
            }

            if (isRight) {
                gsap.fromTo(
                    img_wrap,
                    { width: "300px", rotateZ: "0deg" },
                    {
                        width: "100%",
                        height: "80vh",
                        rotateZ: "4deg",
                        scrollTrigger: {
                            ...baseAnimation,
                            start: "top center",
                            end: "center center",
                        },
                    }
                );

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

                gsap.fromTo(
                    tri_t,
                    { rotateZ: "-5deg" },
                    {
                        display: "block",
                        rotateZ: "-6deg",
                        scrollTrigger: {
                            ...baseAnimation,
                            start: "center center-=50",
                            end: "bottom center-=80",
                        },
                    }
                );

                gsap.fromTo(
                    img_wrap,
                    { width: "100%", rotateZ: "4deg" },
                    {
                        width: "300px",
                        height: "400px",
                        rotateZ: "8deg",
                        immediateRender: false,
                        scrollTrigger: {
                            ...baseAnimation,
                            start: "center center-=40",
                            end: "bottom center",
                            // markers: true,
                        },
                    }
                );
            }

            gsap.to(info, {
                marginTop: "100px",
                scrollTrigger: {
                    ...baseAnimation,
                    start: "top center",
                    end: "center center",
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            gsap.globalTimeline.clear();
        };
    }, []);
};

export default useProjectAnimations;
