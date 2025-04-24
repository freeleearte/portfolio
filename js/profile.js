gsap.registerPlugin(ScrollTrigger);
const scrollContainer = document.querySelector("[data-scroll-container]");

ScrollTrigger.defaults({
    scroller: scrollContainer,
    scrub: 1
});

const locoScroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    lerp: 0.08,
});

// Locomotive Scroll과 ScrollTrigger 동기화
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(scrollContainer, {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }
});

// GSAP 애니메이션 설정
gsap.config({
    nullTargetWarn: false,
    trialWarn: false
});

ScrollTrigger.create({
    trigger: ".null"
});

var nodes = new vis.DataSet([
    { label: "Graphic Design" },
    {
        label: "Computer Science",
        size: 300
        // widthConstraint: { minimum: 800 },
    },
    {
        id: 1,
        shape: 'image',
        image: './asset/kr.png',
    },
    {
        id: 2,
        shape: 'image',
        image: './asset/us.png',
    },
    {
        id: 3,
        shape: 'image',
        image: './asset/css.png',
    },
    {
        id: 4,
        shape: 'image',
        image: './asset/figma.png',
    },
    {
        id: 5,
        shape: 'image',
        image: './asset/gpt.png',
    },
    {
        id: 6,
        shape: 'image',
        image: './asset/html.png',
    },
    {
        id: 7,
        shape: 'image',
        image: './asset/illust.png',
    },
    {
        id: 8,
        shape: 'image',
        image: './asset/js.png',
    },
    {
        id: 9,
        shape: 'image',
        image: './asset/ps.png',
    },
]);

/* 예시
nodes: {
    shape: 'circularImage',
    size: 30,
    image: 'https://yourdomain.com/pop.png',
    label: 'Pop',
    shadow: {
      enabled: true,
      color: '#F92C55',  // 원형 배경처럼 보이게
      size: 20,
      x: 0,
      y: 0
    },
    font: {
      color: '#fff',
      vadjust: 10
    }
  } */
let edges = new vis.DataSet();

let container = document.getElementById('bubbles_i');
let data = {
    nodes: nodes,
    edges: edges
};

let options = {
    nodes: { borderWidth: 0, shape: "circle", color: { background: '#F5A623', highlight: { background: '#F5A623', border: '#F5A623' } }, font: { color: '#fff' } },
    physics: {
        stabilization: false,
        minVelocity: 0.01,
        solver: "repulsion",
        repulsion: {
            nodeDistance: 40,
        }
    },
    interaction: {
        zoomView: false
    }
};
let network = new vis.Network(container, data, options);


// Events
network.on("click", function (e) {
    if (e.nodes.length) {
        var node = nodes.get(e.nodes[0]);
        // Do something
        nodes.update(node);
    }
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".second_p",
        start: "center center",
        end: "bottom center",
        scroller: scrollContainer,
        scrub: true,
    }
})
    .to("#bubbles_i", {
        top: 100 + '%',
        opacity: 0,
        scale: 2,
        duration: 1,
        ease: "power1.out",
    });

// hole 애니메이션 등장 트리거
gsap.timeline({
    scrollTrigger: {
        trigger: ".bot",
        start: "top center",
        end: "top 20%",
        scroller: scrollContainer,
        scrub: true,
    }
})
    .to(".hole", {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power1.out"
    });

// hole 확장 + 화면 어둡게
gsap.timeline({
    scrollTrigger: {
        trigger: ".bot",
        start: "center center",
        end: "bottom center",
        scroller: scrollContainer,
        scrub: true
    }
})
    .to(".hole", {
        scale: 5,
        background: "#000",
        duration: 1,
        ease: "none"
    })
    .to(".last_p .black_bg", {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power1.out"
    })
    .to(".last_p .last_f", {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power1.out"
    })
    .to(".bot", {
        backgroundColor: "#000",
        duration: 1,
        ease: "none"
    }, "<");

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.last_f',
        start: 'top 20%',
        end: 'bottom bottom',
        scrub: true,
    }
});

tl.to('.last_f strong.l_txt', {
    backgroundSize: '100%',
    duration: 1,
    ease: 'none'
}).to('.last_f b.l_txt', {
    backgroundSize: '100%',
    duration: 1,
    ease: 'none'
}, '+=0.6');

const cubeWrap = document.querySelector('.p_cube_wrap');
const cube_width = cubeWrap.offsetWidth;
const cube_height = cubeWrap.offsetHeight;

// 장면(Scene) 생성
let scene = new THREE.Scene();
// scene.background = new THREE.Color(0x4BCED2);

let camera = new THREE.PerspectiveCamera(
    75,
    cube_width / cube_height,
    0.1,
    1000
);

camera.position.set(5, 5, 15);

// 렌더러 생성 및 설정
let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(cube_width, cube_height);
document.getElementById("myCanvasContainer").appendChild(renderer.domElement);

// 컨트롤 추가
let controls = new THREE.OrbitControls(camera, renderer.domElement);

// 빛 추가
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

let loader = new THREE.TextureLoader();
let material = [
    './asset/me3.jpg',
    './asset/me2.jpg',
    './asset/me1.jpg',
    './asset/me4.jpg',
    './asset/me5.jpg',
    './asset/me6.jpg',
].map(pic => {
    return new THREE.MeshLambertMaterial({ map: loader.load(pic) });
});
const geometry = new THREE.BoxGeometry(8, 8, 8);
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

controls.enablePan = false;
controls.enableRotate = true;
controls.enableZoom = false;

// 애니메이션 루프
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.y += 0.01; // y축 기준 회전
    cube.rotation.x += 0.005; // x축도 살짝 회전
    controls.update();
    renderer.render(scene, camera);
}

animate();

gsap.timeline({
    scrollTrigger: {
        trigger: ".last_s",
        start: "top center",
        end: "top 20%",
        scroller: scrollContainer,
        scrub: true,
    }
})
    .to(".p_cube_wrap", {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power1.out"
    });

gsap.timeline({
    scrollTrigger: {
        trigger: ".last_t",
        start: "top center",
        end: "bottom center",
        scroller: scrollContainer,
        scrub: true,
    }
})
    .to(".p_cube_wrap", {
        top: 150 + '%',
        left: 20 + '%',
        scale: 2,
        duration: 1,
        ease: "power1.out"
    });
gsap.timeline({
    scrollTrigger: {
        trigger: ".last_t",
        start: "top center",
        end: "center center",
        scroller: scrollContainer,
        scrub: true,
    }
})
    .to(".last_p .last_t .name", {
        opacity: 1,
        paddingRight: 0,
        duration: 1,
        ease: "power1.out"
    });