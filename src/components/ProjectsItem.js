import React, { useState, useEffect, useRef } from "react";
import ProjectsModal from "./ProjectsModal";
import "./ProjectsItem.css";

const ProjectsItem = ({ index, title, image, alt, tags, visitLink, reviewLink, type }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const itemRef = useRef(null);

    const handleVisitClick = (e) => {
        if (type === "art") {
            e.preventDefault();
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className={`con${index} p_con ${type}`} ref={itemRef}>
                <div className="img_wrap">
                    <div className="triangle tri_t"></div>
                    <div className="img">
                        <img src={image} alt={alt} />
                    </div>
                    {/* <div className="triangle tri_b"></div> */}
                </div>
                <div className="info">
                    <div className="txt">
                        <h3>{title}</h3>
                        <ul className="hash">
                            {tags.map((tag, i) => (
                                <li key={i}>#{tag}</li>
                            ))}
                        </ul>
                    </div>
                    <ul className="btn">
                        <li className="visit">
                            <a href={visitLink} target={type === "art" ? undefined : "_blank"} rel="noopener noreferrer" onClick={handleVisitClick}>Visit</a>
                        </li>
                        {reviewLink && reviewLink.trim() !== "" && (
                            <li className="review">
                                <a href={reviewLink} target="_blank" rel="noopener noreferrer">Review</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="modal-overlay"
                    onClick={closeModal}
                    style={{
                        position: "fixed",
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: "rgba(0,0,0,0.6)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9999,
                    }}
                >
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭시 닫히지 않도록
                        style={{
                            backgroundColor: "#fff",
                            padding: "20px",
                            borderRadius: "10px",
                            width: "80%",
                            height: "80%",
                            position: "relative",
                        }}
                    >
                        <button
                            onClick={closeModal}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "15px",
                                cursor: "pointer",
                                fontSize: "16px",
                                border: "none",
                                background: "transparent",
                            }}
                            aria-label="Close modal"
                        >
                            ✕
                        </button>

                        {/* 모달 안에 보여줄 내용 */}
                        <ProjectsModal initialIndex={index} />
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectsItem;