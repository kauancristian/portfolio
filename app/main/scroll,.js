if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const scrollReveal = ScrollReveal({
        distance: "48px",
        duration: 900,
        easing: "cubic-bezier(.2, .7, .2, 1)",
        viewFactor: 0.15,
        reset: false
    });

    scrollReveal.reveal("#aboutMe", { origin: "bottom", delay: 50 });
    scrollReveal.reveal("#textAbout", { origin: "bottom", delay: 150 });
    scrollReveal.reveal("#boxsAbout > div", { origin: "left", delay: 150, interval: 180 });
    scrollReveal.reveal("#skillsBox .group", { origin: "bottom", delay: 100, interval: 75, scale: 0.92 });
    scrollReveal.reveal("#boxCode", { origin: "right", delay: 200, rotate: { x: 0, y: 8, z: 0 } });
    scrollReveal.reveal("#contactMe", { origin: "bottom", delay: 200 });
    scrollReveal.reveal("#pc", { origin: "left", delay: 100 });
}
