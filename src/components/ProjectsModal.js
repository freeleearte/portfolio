import React, { useState } from "react";
import { projects } from "../data/ProjectsData";

const ProjectsModal = ({ initialIndex = 0 }) => {
    const artProjects = projects.filter((project) => project.type === "art");
    const [index, setIndex] = useState(initialIndex - 1);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % artProjects.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + artProjects.length) % artProjects.length);
    };

    const current = artProjects[index];

    const images = Object.keys(current)
        .filter(key => key.startsWith("artImg") && current[key])
        .map(key => current[key]);

    return (
        <section className="art-project" style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: "1vw" }}>
            <h2 style={{ fontFamily: "var(--suit)", fontSize: "30px", fontWeight: "500" }}>{current.title}</h2>
            <div className="img-wrap" style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                height: "80%",
            }}>
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`${current.alt} - ${i + 1}`}
                        style={{ maxHeight: "100%" }}
                    />
                ))}
            </div>
            <p><strong>Medium:</strong> {current.medium}</p>
            <p><strong>Description:</strong> {current.description}</p>
            <div className="buttons" style={{ display: "flex", alignSelf: "center", gap: "5vw" }}>
                <button onClick={handlePrev}>이전</button>
                <button onClick={handleNext}>다음</button>
            </div>
        </section>
    );
};

export default ProjectsModal;