gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
  x: 1000,
  scrollTrigger: {
    trigger: ".square2",
    start: "top 30%",
    end: 'top 10%',
    toggleActions:'restart none none none',
    //             onEnter onLeave onEnterBack onLeaveBack
    //             play pause resume reverse restart reset complete none
    markers: true,
    scrub : 2,
    pin : ".square",
    pinSpacing: false,
  },
});
