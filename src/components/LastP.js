import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./LastP.css";
import me1 from '../asset/me1.jpg';
import me2 from '../asset/me2.jpg';
import me3 from '../asset/me3.jpg';
import me4 from '../asset/me4.jpg';
import me5 from '../asset/me5.jpg';
import me6 from '../asset/me6.jpg';

const LastP = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // THREE.js 큐브
        const cubeWrap = containerRef.current;
        const cube_width = cubeWrap.offsetWidth;
        const cube_height = cubeWrap.offsetHeight;

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(75, cube_width / cube_height, 0.1, 1000);
        camera.position.set(5, 5, 15);

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(cube_width, cube_height);
        cubeWrap.appendChild(renderer.domElement);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enablePan = false;
        controls.enableRotate = true;
        controls.enableZoom = false;

        // Lighting
        // const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        // scene.add(ambientLight);

        // Cube Materials
        const loader = new THREE.TextureLoader();
        const material = [
            me3,
            me2,
            me1,
            me4,
            me5,
            me6,
        ].map(pic => new THREE.MeshBasicMaterial({ map: loader.load(pic) }));

        // const loader = new THREE.TextureLoader();
        // const imageList = [me3, me2, me1, me4, me5, me6];

        // const material = imageList.map(img => {
        //     const texture = loader.load(img, (loadedTexture) => {
        //         loadedTexture.generateMipmaps = false;
        //         loadedTexture.minFilter = THREE.LinearFilter;
        //         loadedTexture.magFilter = THREE.LinearFilter;
        //     });
        //     return new THREE.MeshBasicMaterial({ map: texture });
        // });

        const geometry = new THREE.BoxGeometry(8, 8, 8);
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.y += 0.01;
            cube.rotation.x += 0.005;
            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            renderer.dispose();
            cubeWrap.removeChild(renderer.domElement);
        };
    }, [])
    return (
        <div className="last_p">
            <div className="black_bg"></div>
            <div className="last_f">
                <div className="txt_wrap">
                    <strong className="l_txt"><span>실패</span>를 <span>두려워</span>하지 <span>않으며</span>,</strong>
                    <strong className="l_txt">그 속에서 <span>배움</span>과 <span>성장</span>을</strong>
                    <b className="l_txt">이어가고 있습니다</b>
                </div>
            </div>
            <div className="last_s">
                <div ref={containerRef} className="p_cube_wrap">
                    <div id="myCanvasContainer">
                    </div>
                </div>
            </div>
            <div className="last_t inner">
                <div className="name">
                    <h4>Raphael Lee</h4>
                    <h4>이충호</h4>
                </div>
            </div>
        </div>
    );
}

export default LastP;