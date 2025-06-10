import { useEffect } from "react";
import { DataSet, Network } from "vis-network/standalone";
import "./SecondP.css";
import hole from "../asset/Ellipse.png"

const SecondP = () => {
    useEffect(() => {
        // vis.js 그래프
        var nodes = new DataSet([
            { label: "Graphic Design" },
            {
                label: "Computer Science",
                size: 300
                // widthConstraint: { minimum: 800 },
            },
            {
                id: 1,
                shape: 'image',
                image: '../asset/kr.png',
            },
            {
                id: 2,
                shape: 'image',
                image: '../asset/us.png',
            },
            {
                id: 3,
                shape: 'image',
                image: '../asset/css.png',
            },
            {
                id: 4,
                shape: 'image',
                image: '../asset/figma.png',
            },
            {
                id: 5,
                shape: 'image',
                image: '../asset/gpt.png',
            },
            {
                id: 6,
                shape: 'image',
                image: '../asset/html.png',
            },
            {
                id: 7,
                shape: 'image',
                image: '../asset/illust.png',
            },
            {
                id: 8,
                shape: 'image',
                image: '../asset/js.png',
            },
            {
                id: 9,
                shape: 'image',
                image: '../asset/ps.png',
                shadow: {
                    enabled: true,
                    color: '#F5A623',  // 원형 배경처럼 보이게
                    size: 30,
                    x: 0,
                    y: 0
                },
            },
        ]);

        const container = document.getElementById("bubbles_i");
        if (container) {
            new Network(container, { nodes }, {
                nodes: {
                    shape: "dot",
                    size: 16,
                    font: { size: 14, color: "#fff" },
                    color: { background: "#FF5B5B" },
                },
                edges: {
                    width: 2,
                    color: "#FF5B5B",
                },
                physics: {
                    enabled: true,
                    stabilization: false,
                    barnesHut: {
                        gravitationalConstant: -2000,
                        springConstant: 0.04,
                        springLength: 95,
                    },
                },
            });
        }
    }, []);

    return (
        <div className="second_p">
            <div className="top">
                <p>저는 디자인을 통해 의미 있는 경험을 만들고자 하는 디자이너입니다.</p>
                {/* <div id="bubbles_i"></div> */}
            </div>
            <div className="bot">
                <div className="hole"><img src={hole} alt="hole" /></div>
            </div>
        </div>
    );
}

export default SecondP;