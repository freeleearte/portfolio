import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Side_nav from "../components/Side_nav";
import Header from "../components/Header";
import FirstP from "../components/FirstP";
import SecondP from "../components/SecondP";
import LastP from "../components/LastP";
import Bubbles from "../components/Bubbles";

gsap.registerPlugin(ScrollTrigger);

const Profile = () => {
    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".bot",
                start: "top center",
                end: "top 20%",
                scrub: true,
            }
        })
            .to(".hole", {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power1.out"
            });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".bot",
                start: "center center",
                end: "bottom center",
                scrub: true
            }
        })
            .to(".hole", {
                scale: 300,
                yPercent: 50,
                duration: 1,
                ease: "none"
            })
            .to(".last_p .black_bg", {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power1.out"
            })
            .to(".last_p .last_f", {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power1.out"
            })
            .to(".bot", {
                backgroundColor: "#000",
                duration: 1,
                ease: "none"
            }, "<");

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.last_f',
                start: 'top 20%',
                end: 'bottom bottom',
                scrub: true,
            }
        });

        tl.to('.last_f strong.l_txt', {
            backgroundSize: '100%',
            duration: 1,
            ease: 'none'
        }).to('.last_f b.l_txt', {
            backgroundSize: '100%',
            duration: 1,
            ease: 'none'
        }, '+=0.6');

        gsap.timeline({
            scrollTrigger: {
                trigger: ".last_s",
                start: "top center",
                end: "top 20%",
                scrub: true,
            }
        })
            .to(".p_cube_wrap", {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power1.out"
            });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".last_t",
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        })
            .to(".p_cube_wrap", {
                top: 150 + '%',
                left: 20 + '%',
                scale: 2,
                duration: 1,
                ease: "power1.out"
            });
        gsap.timeline({
            scrollTrigger: {
                trigger: ".last_t",
                start: "top center",
                end: "center center",
                scrub: true,
            }
        })
            .to(".last_p .last_t .name", {
                opacity: 1,
                paddingRight: 0,
                duration: 1,
                ease: "power1.out"
            });





        ScrollTrigger.refresh();
    }, []);

    return (
        <div className="ProfilePage">
            <Side_nav show={true} outActive="contact" inActive="projects" />

            <div className="inner">
                <Header Color={"#F5A623"} />
                <FirstP />
                <Bubbles />
                <SecondP />
            </div>
            <LastP />
        </div>
    );
};

export default Profile;
