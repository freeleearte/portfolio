import React, { useEffect } from "react";
import ProjectsItem from "./ProjectsItem";
import "./ProjectsList.css"
import { projects } from "../data/ProjectsData";

const ProjectList = ({ filter }) => {

    // 필터링된 프로젝트
    const filteredProjects = projects.filter(
        (project) => filter === "all" || project.type === filter
    );

    // 필터링된 프로젝트에 대해 l_con, r_con 클래스 적용
    useEffect(() => {
        document.querySelectorAll('.p_con').forEach((el, index) => {
            el.classList.remove('l_con', 'r_con'); // 기존 클래스 제거
            el.classList.add(index % 2 === 0 ? "l_con" : "r_con");
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
