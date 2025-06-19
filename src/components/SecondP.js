import { useEffect } from "react";
import { DataSet, Network } from "vis-network/standalone";
import "./SecondP.css";
import hole from "../asset/Ellipse.png";
import krImg from "../asset/kr.png";
import usImg from "../asset/us.png";
import cssImg from "../asset/css.png";
import figmaImg from "../asset/figma.png";
import gptImg from "../asset/gpt.png";
import htmlImg from "../asset/html.png";
import illustImg from "../asset/illust.png";
import jsImg from "../asset/js.png";
import psImg from "../asset/ps.png";

const SecondP = () => {
    useEffect(() => {
        // vis.js 그래프
        var nodes = new DataSet([
            {
                label: "Graphic Design",
                font: { size: 16, color: "#fff", face: "Bungee", vadjust: 0 },
            },
            {
                label: "Computer Science",
                font: { size: 30, color: "#fff", face: "Bungee", vadjust: 0 },
            },
            {
                id: 1,
                shape: 'image',
                image: krImg,
            },
            {
                id: 2,
                shape: 'image',
                image: usImg,
            },
            {
                id: 3,
                shape: 'image',
                image: cssImg,
            },
            {
                id: 4,
                shape: 'image',
                image: figmaImg,
            },
            {
                id: 5,
                shape: 'image',
                image: gptImg,
            },
            {
                id: 6,
                shape: 'image',
                image: htmlImg,
            },
            {
                id: 7,
                shape: 'image',
                image: illustImg,
            },
            {
                id: 8,
                shape: 'image',
                image: jsImg,
            },
            {
                id: 9,
                shape: 'image',
                image: psImg,
            },
        ]);

        const container = document.getElementById("bubbles_i");
        if (container) {
            const network = new Network(container, { nodes }, {
                nodes: {
                    shape: "box",
                    size: 30,
                    font: { size: 16, color: "#fff", face: "Arial Black", vadjust: 0 },
                    borderWidth: 20, // 테두리 두께
                    shadow: {
                        enabled: true,
                        color: 'rgba(255, 91, 91, 0.4)', // 유사한 그림자 느낌
                        size: 25,
                        x: 0,
                        y: 0,
                    },
                    color: {
                        background: "#FF5B5B30",
                        border: "#FF5B5B30",
                        highlight: {
                            background: "#FF5B5B30",
                            border: "#FF5B5B30",
                        },
                    },
                    shapeProperties: {
                        useBorderWithImage: true,  // 이미지 뒤에 배경 원형 보여줌
                        borderRadius: 0
                    }
                },
                edges: {
                    width: 2,
                    color: "#FF5B5B",
                },
                physics: {
                    enabled: true,
                    stabilization: false,
                    solver: "forceAtlas2Based",
                    forceAtlas2Based: {
                        gravitationalConstant: -100,   // 더 세게 끌어당김
                        centralGravity: 0.01,          // 중앙 집중력 낮춤 (더 멀리 퍼짐)
                        springLength: 100,             // 💡 간격 늘리기
                        springConstant: 0.01
                    },
                    timestep: 0.3
                },
                interaction: {
                    selectable: false,
                    zoomView: false,
                    dragView: false,
                    hover: false,
                },
            });

            network.on("click", (params) => {
                if (params.nodes.length > 0) {
                    network.unselectAll(); // 선택된 노드 해제
                }
            });

            network.on("dragEnd", () => {
                network.unselectAll();
            });
        }
    }, []);

    return (
        <div className="second_p">
            <div className="top">
                <p>저는 디자인을 통해 의미 있는 경험을 만들고자 하는 디자이너입니다.</p>
                <div id="bubbles_i"></div>
            </div>
            <div className="bot">
                <div className="hole"><img src={hole} alt="hole" /></div>
            </div>
        </div>
    );
}

export default SecondP;