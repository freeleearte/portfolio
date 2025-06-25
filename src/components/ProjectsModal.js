import React, { useState, useEffect } from "react";
import { projects } from "../data/ProjectsData";
import "./ProjectsModal.css";

const ProjectsModal = ({ filterType = "art", selectedProject }) => {
    const filteredProjects = projects.filter(p =>
        filterType === "all" ? true : p.type === filterType
    );

    const [currentProject, setCurrentProject] = useState(
        selectedProject || filteredProjects[0]
    );

    // 필터가 바뀌거나 selectedProject가 변경되었을 때
    useEffect(() => {
        if (!filteredProjects.includes(currentProject)) {
            setCurrentProject(filteredProjects[0]);
        }
    }, [filterType]);

    const currentIndex = filteredProjects.findIndex(
        (p) => p.title === currentProject?.title
    );

    const handleNext = () => {
        const next =
            filteredProjects[(currentIndex + 1) % filteredProjects.length];
        setCurrentProject(next);
    };

    const handlePrev = () => {
        const prev =
            filteredProjects[
            (currentIndex - 1 + filteredProjects.length) %
            filteredProjects.length
            ];
        setCurrentProject(prev);
    };

    const images = Object.keys(selectedProject)
    .filter(key => key.startsWith("artImg") && selectedProject[key])
    .sort() // artImg, artImg1, artImg2 순서 보장
    .map(key => selectedProject[key]);

    if (!currentProject) return <div>데이터가 없습니다.</div>;

    return (
        <section className="art-project">
            <h2>{currentProject.title}</h2>
            <div className="mid_i">
                <div className="img-wrap">
                    {images.length > 0 ? (
                        images.map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt={`${currentProject.alt} - ${i + 1}`}
                            />
                        ))
                    ) : (
                        <p>이미지가 없습니다.</p>
                    )}
                </div>
                <div className="txt_i">
                    {currentProject.medium && (
                        <p><strong>Medium:</strong> {currentProject.medium}</p>
                    )}
                    {currentProject.description && (
                        <p><strong>Description:</strong> {currentProject.description}</p>
                    )}
                </div>
            </div>
            <div className="buttons">
                <button onClick={handlePrev}>이전</button>
                <button onClick={handleNext}>다음</button>
            </div>
        </section>
    );
};

export default ProjectsModal;
