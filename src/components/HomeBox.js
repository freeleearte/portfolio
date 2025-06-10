import P_Marquee from "./P_Marquee";

const HomeBox = ({
    refProp,
    boxName,
    label,
    hoveredBox,
    setHoveredBox,
    onClick,
    direction,
    children
}) => (
    <div ref={refProp} className={boxName}>
        <div
            onClick={(e) => {
                e.stopPropagation();
                onClick(label);
            }}
            onMouseEnter={() => setHoveredBox(boxName)}
            onMouseLeave={() => setHoveredBox(null)}
            className="delayed-link"
        >
            <div
                className="txt"
                style={{
                    display:
                        hoveredBox === boxName ||
                            (!hoveredBox &&
                                (boxName === "box1"
                                    ? false
                                    : boxName === "box2"
                                        ? hoveredBox === null
                                        : true))
                            ? "flex"
                            : "none",
                }}
            >
                <h2>Raphael</h2>
                <h3>{label}</h3>
            </div>
            <P_Marquee text={label} marqueeCount={4} className={label} direction={direction} />
            {children}
        </div>
    </div>
);

export default HomeBox;
