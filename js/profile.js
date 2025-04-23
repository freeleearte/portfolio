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
var edges = new vis.DataSet();

var container = document.getElementById('bubbles_i');
var data = {
    nodes: nodes,
    edges: edges
};

var options = {
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
var network = new vis.Network(container, data, options);


// Events
network.on("click", function (e) {
    if (e.nodes.length) {
        var node = nodes.get(e.nodes[0]);
        // Do something
        nodes.update(node);
    }
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