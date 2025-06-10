import React, { useState, useEffect } from "react";
import ProjectsItem from "./ProjectsItem";
import "./ProjectsList.css"
import edmImg from '../asset/edm_2.png';
import namsanImg from '../asset/namsan_2.png';
import companyImg from '../asset/company.png';
import vocapetImg from '../asset/vocapet-2.png';

const projects = [
    {
        title: "EDM",
        image: edmImg,
        alt: "EDM 웹사이트",
        tags: ["clone", "adaptive", "css", "swiper", "renewal"],
        visitLink: "./edm/index.html",
        reviewLink: "https://www.figma.com/proto/oHIfuqpiW8oeAjy0pjLLqH/%EC%9D%B4%EC%B6%A9%ED%98%B8?page-id=&node-id=916-455&viewport=-1264%2C378%2C0.13&t=zU4fqtlwrh5RVJOr-1&scaling=min-zoom&content-scaling=fixed",
        type: "live",
    },
    {
        title: "Namsan",
        image: namsanImg,
        alt: "남산 리뉴얼 웹사이트",
        tags: ["clone", "adaptive", "css", "swiper", "renewal"],
        visitLink: "#",
        reviewLink: "#",
        type: "live",
    },
    {
        title: "Vocapet",
        image: vocapetImg,
        alt: "Vocapet 앱",
        tags: ["clone", "adaptive", "css", "swiper", "renewal"],
        visitLink: "#",
        reviewLink: "#",
        type: "live",
    },
    {
        title: "SK Innovation",
        image: companyImg,
        alt: "SK 이노베이션 웹사이트",
        tags: ["clone", "adaptive", "css", "swiper", "renewal"],
        visitLink: "./company/index.html",
        reviewLink: "#",
        type: "mock",
    },
    {
        title: "Vocapet",
        image: vocapetImg,
        alt: "Vocapet 앱",
        tags: ["clone", "adaptive", "css", "swiper", "renewal"],
        visitLink: "#",
        reviewLink: "#",
        type: "art",
    },
    {
        title: "Vocapet",
        image: vocapetImg,
        alt: "Vocapet 앱",
        tags: ["clone", "adaptive", "css", "swiper", "renewal"],
        visitLink: "#",
        reviewLink: "#",
        type: "mock",
    },
];

const ProjectList = ({ filter }) => {

    // 필터링된 프로젝트
    const filteredProjects = projects.filter(project =>
        filter === "all" || project.type === filter
    );

    // 필터링된 프로젝트에 대해 l_con, r_con 클래스 적용
    useEffect(() => {
        document.querySelectorAll('.p_con').forEach((el, index) => {
            el.classList.remove('l_con', 'r_con'); // 기존 클래스 제거
            if (index % 2 === 0) {
                el.classList.add('l_con');
            } else {
                el.classList.add('r_con');
            }
        });
    }, [filteredProjects]); // filteredProjects가 바뀔 때마다 클래스 적용

    return (
        <div className="project_list">
            {filteredProjects.map((project, index) => (
                <ProjectsItem key={index} index={index + 1} {...project} />
            ))}
        </div>
    );
};

export default ProjectList;
