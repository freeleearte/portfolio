import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "./ProjectsNav.css";

const ProjectsNav = ({ onFilter }) => {
    const [activeFilter, setActiveFilter] = useState("all");

    // useEffect(() => {
    //     gsap.fromTo(
    //         `.nav .${activeFilter}`,
    //         {
    //             scale: 0.8,
    //             opacity: 0.5,
    //         },
    //         {
    //             scale: 1,
    //             opacity: 1,
    //             duration: 0.5,
    //             ease: "back.out(1.7)",
    //         }
    //     );
    // }, [activeFilter]);

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        onFilter(filter);

        switch (filter) {
            case "all":
                moveBg(0);
                break;
            case "live":
                moveBg(-100);
                break;
            case "mock":
                moveBg(-200);
                break;
            case "art":
                moveBg(-300);
                break;
            default:
                moveBg(0);
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth", // 부드럽게 스크롤
        });
    };

    function moveBg(posX) {
        const boxWrap = document.querySelector('.box_wrap');
        if (boxWrap) {
            boxWrap.style.transition = 'left 0.8s ease';
            boxWrap.style.left = `${posX}%`;
        }
    }


    const filters = ["all", "live", "mock", "art"];

    return (
        <div className="nav_wrap">
            <ul className="nav">
                {filters.map((filter) => (
                    <li
                        key={filter}
                        className={`${filter} ${activeFilter === filter ? "on" : ""}`}
                        onClick={() => handleFilterClick(filter)}
                    >
                        <p>{filter.charAt(0).toUpperCase() + filter.slice(1)}</p>
                        <div className="progress_bar"></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectsNav;
