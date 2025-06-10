import Marquee from "react-fast-marquee";

const P_Marquee = ({
  text = "",
  repeat = 16,
  marqueeCount = 1,
  speed = 50,
  specialSpeed = 1,
  direction = "left",
  className = "",
  onClick = () => { },
}) => {
  return (
    <div className={`txtAniBox ${className}`}>
      {Array.from({ length: marqueeCount }).map((_, mIndex) => {
        // 기본 speed
        let currentSpeed = speed;

        // 3번째(mIndex === 2)와 4번째(mIndex === 3)만 specialSpeed 적용
        if (mIndex === 2 || mIndex === 3) {
          currentSpeed = specialSpeed;
        }

        return (
          <Marquee
            key={mIndex}
            speed={currentSpeed}
            gradient={false}
            direction={direction}
            className="scroll"
          >
            {Array.from({ length: repeat }).map((_, index) => (
              <span key={index} style={{ marginRight: "1rem" }} onClick={onClick}>
                {text}
              </span>
            ))}
          </Marquee>
        );
      })}
    </div>
  );
};

export default P_Marquee;
