import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Side_nav from "../components/Side_nav";
import Header from "../components/Header";
import BoxBg from "../components/BoxBg";
import ProjectsNav from "../components/ProjectsNav";
import ProjectList from "../components/ProjectsList";
import useProjectAnimations from "../actions/useProjectAnimations";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const [filter, setFilter] = useState("all");

    const handleFilter = (filter) => {
        // 필터링된 내용으로 프로젝트 리스트 갱신
        console.log("필터가 선택되었습니다:", filter);
        setFilter(filter);
    };

    useEffect(() => {
        gsap.config({
            nullTargetWarn: false,
            trialWarn: false,
        });

        ScrollTrigger.create({
            trigger: ".null", // 기본 트리거 (불필요하면 제거 가능)
        });

        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    useEffect(() => {
        // 필터 적용 후
        ScrollTrigger.refresh();
    }, [filter]);


    useProjectAnimations([filter]);

    return (
        <div className="ProjectsPage">
            <Side_nav
                show={true}
                outActive="contact"
                inActive="profile"
            />

            <BoxBg />
            <div className="inner">
                <Header
                    title={'Projects'}
                    Color={'#269210'}
                >
                    <ProjectsNav onFilter={handleFilter} />
                </Header>
                <div className="wrap">
                    <ProjectList filter={filter} />
                </div>
            </div>
        </div>

    );
}

export default Projects;