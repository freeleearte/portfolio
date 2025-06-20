import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import P_Marquee from '../components/P_Marquee';
import Tab_menu from '../components/Tab_menu';
import "../components/Home.css"

const Home = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [hoveredBox, setHoveredBox] = useState(null);
    const [isIconVisible, setIsIconVisible] = useState(true);
    const prevHoveredBoxRef = useRef(null);

    const box1Ref = useRef(null);
    const box2Ref = useRef(null);
    const box3Ref = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        const handleMouseMove = (e) => {
            const posX = e.pageX;
            const posY = e.pageY;
            const moveX = (posX - window.innerWidth / 2) / 50;
            const moveY = (posY - window.innerHeight / 2) / 50;

            if (box1Ref.current) {
                box1Ref.current.style.transform = `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
            }
            if (box2Ref.current) {
                box2Ref.current.style.transform = `translate(${moveX * 0.7}px, ${moveY * 0.7}px)`;
            }
            if (box3Ref.current) {
                box3Ref.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        };

        const startArea = document.querySelector('.start');
        if (startArea) {
            startArea.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (startArea) {
                startArea.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    useEffect(() => {
        prevHoveredBoxRef.current = hoveredBox;
    }, [hoveredBox]);

    const handleBoxClick = (target) => {
        if (isFlipped) return;
        setIsFlipped(true);

        // 박스 애니메이션 처리
        box1Ref.current?.classList.add('rotate-shrink-expand');
        box2Ref.current?.classList.add('rotate-shrink-expand');
        box3Ref.current?.classList.add('rotate-shrink-expand');

        setTimeout(() => {
            setIsIconVisible(false);
        }, 500); // 1초 후 사라짐

        // 2초 후 배경색 변경
        setTimeout(() => {
            document.querySelector('.start').classList.add('white-background');
        }, 2000);

        // 3초 후 콘텐츠 표시
        setTimeout(() => {
            box1Ref.current?.classList.add('hide-box');
            box2Ref.current?.classList.add('hide-box');
            box3Ref.current?.classList.add('hide-box');

            document.querySelector(`.${target}_c`)?.classList.add('show-content');
            document.querySelectorAll('.f_left, .f_right').forEach(el => el.classList.add('show-content'));
        }, 3000);

        // 3.5초 후 페이지 이동
        setTimeout(() => {
            navigate(`/${target}`);
        }, 3500);
    };

    /* 마우스가 없는 디바이스일 경우 box3가 먼저 보이게 */
    useEffect(() => {
        const isTouchDevice = () =>
            'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (isTouchDevice()) {
            setHoveredBox('box3');
        }
    }, []);


    return (
        <div className="start">
            <Tab_menu fadeOut={`${!isIconVisible ? 'i-fade-out' : ''}`} />
            <div ref={box1Ref} className="box1">
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        handleBoxClick('contact');
                    }}
                    onMouseEnter={() => setHoveredBox('box1')}
                    onMouseLeave={() => setHoveredBox(null)}
                    className="delayed-link"
                >
                    <div className="txt" style={{ display: hoveredBox === 'box1' ? 'flex' : 'none' }}>
                        <h2>Raphael</h2>
                        <h3>contact</h3>
                    </div>
                    <P_Marquee text="contact" marqueeCount={4} className="contact" />
                    <div ref={box2Ref} className="box2">
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                handleBoxClick('profile');
                            }}
                            onMouseEnter={() => setHoveredBox('box2')}
                            onMouseLeave={() => setHoveredBox('box1')}
                            className="delayed-link"
                        >
                            <div className="txt" style={{ display: hoveredBox === 'box2' ? 'flex' : 'none' }}>
                                <h2>Raphael</h2>
                                <h3>profile</h3>
                            </div>
                            <P_Marquee text="profile" marqueeCount={4} className="profile" direction="right" />
                            <div ref={box3Ref} className="box3">
                                <div
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleBoxClick('projects');
                                    }}
                                    onMouseEnter={() => setHoveredBox('box3')}
                                    onMouseLeave={() => setHoveredBox('box2')}
                                    className="delayed-link"
                                >
                                    <div className="txt" style={{ display: hoveredBox === 'box3' ? 'flex' : 'none' }}>
                                        <h2>Raphael</h2>
                                        <h3>projects</h3>
                                    </div>
                                    <P_Marquee text="projects" marqueeCount={4} className="projects" />
                                </div></div>
                        </div></div>
                </div>
            </div>
        </div>
    );
}

export default Home;

// import { useEffect, useState, useRef } from 'react';
// import Tab_menu from '../components/Tab_menu';
// import HomeBoxList from '../components/HomeBoxList';
// import useMouseParallax from '../actions/useMouseParallax';
// import "../components/Home.css";

// const Home = () => {
//     const [isFlipped, setIsFlipped] = useState(false);
//     const [hoveredBox, setHoveredBox] = useState(null);
//     const [isIconVisible, setIsIconVisible] = useState(true);
//     const prevHoveredBoxRef = useRef(null);

//     const boxRefs = [useRef(null), useRef(null), useRef(null)];
//     useMouseParallax(boxRefs);

//     useEffect(() => {
//         prevHoveredBoxRef.current = hoveredBox;
//     }, [hoveredBox]);

//     const handleBoxClick = (target) => {
//         if (isFlipped) return;
//         setIsFlipped(true);

//         boxRefs.forEach(ref => ref.current?.classList.add('rotate-shrink-expand'));
//         setTimeout(() => setIsIconVisible(false), 500);
//         setTimeout(() => document.querySelector('.start')?.classList.add('white-background'), 2000);
//         setTimeout(() => {
//             boxRefs.forEach(ref => ref.current?.classList.add('hide-box'));
//             document.querySelector(`.${target}_c`)?.classList.add('show-content');
//             document.querySelectorAll('.f_left, .f_right').forEach(el => el.classList.add('show-content'));
//         }, 3000);
//         setTimeout(() => {
//             window.location.href = `/${target}`;
//         }, 3500);
//     };

//     return (
//         <div className="start">
//             <Tab_menu fadeOut={`${!isIconVisible ? 'i-fade-out' : ''}`} />
//             <HomeBoxList
//                 hoveredBox={hoveredBox}
//                 setHoveredBox={setHoveredBox}
//                 onBoxClick={handleBoxClick}
//             />
//         </div>
//     );
// };

// export default Home;
