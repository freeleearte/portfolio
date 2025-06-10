import { useRef } from "react";
import HomeBox from "./HomeBox";

const HomeBoxList = ({ hoveredBox, setHoveredBox, onBoxClick }) => {
    const box1Ref = useRef(null);
    const box2Ref = useRef(null);
    const box3Ref = useRef(null);

    return (
        <HomeBox
            refProp={box1Ref}
            boxName="box1"
            label="contact"
            hoveredBox={hoveredBox}
            setHoveredBox={setHoveredBox}
            onClick={onBoxClick}
        >
            <HomeBox
                refProp={box2Ref}
                boxName="box2"
                label="profile"
                hoveredBox={hoveredBox}
                setHoveredBox={setHoveredBox}
                onClick={onBoxClick}
                direction="right"
            >
                <HomeBox
                    refProp={box3Ref}
                    boxName="box3"
                    label="projects"
                    hoveredBox={hoveredBox}
                    setHoveredBox={setHoveredBox}
                    onClick={onBoxClick}
                />
            </HomeBox>
        </HomeBox>
    );
};

export default HomeBoxList;