import React, { useEffect, useRef } from "react";
import "./ProjectsItem.css";

const ProjectsItem = ({ index, title, image, alt, tags, visitLink, reviewLink, type }) => {
    const itemRef = useRef(null);

    return (
        <div className={`con${index} p_con ${type}`}>
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
                        <a href={visitLink} target="_blank" rel="noopener noreferrer">Visit</a>
                    </li>
                    {reviewLink && reviewLink.trim() !== "" && (
                        <li className="review">
                            <a href={reviewLink} target="_blank" rel="noopener noreferrer">Review</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ProjectsItem;