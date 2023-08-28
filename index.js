const darkThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
const toggleTheme = () => {
  const themeStylesheet = document.querySelector('link[href="index-dark.css"]');
  if (darkThemeQuery.matches) {
    themeStylesheet.disabled = false; // Enable dark theme
  } else {
    themeStylesheet.disabled = true; // Enable light theme
  }
};

darkThemeQuery.addEventListener("change", toggleTheme);

toggleTheme();

gsap.registerPlugin(ScrollTrigger);

gsap.from(".box3", { opacity: 0, y: 100, delay: 1, duration: 1 });

gsap.from(".box4 img", {
  opacity: 0,
  x: 300,
  duration: 3,
  scrollTrigger: {
    trigger: ".box4 .img",
    start: "70% 20% ",
    end: "top 80%",
    scrub: 1,
    toggleActions: "restart none none none",
    // markers: {
    //   startColor: "white",
    //   endColor: "white",
    //   fontSize: "18px",
    //   fontWeight: "bold",
    //   indent: 20,
    // },
  },
});

gsap.from(".box5 img", {
  opacity: 0,
  x: -300,
  duration: 3,
  scrollTrigger: {
    trigger: ".box5 .img",
    start: "80% 20% ",
    end: "top 80%",
    scrub: 1,
    toggleActions: "restart none none none",
    // markers: {
    //   startColor: "white",
    //   endColor: "white",
    //   fontSize: "18px",
    //   fontWeight: "bold",
    //   indent: 20,
    // },
  },
});

gsap.from(".box6 img", {
  opacity: 0,
  x: 300,
  duration: 3,
  scrollTrigger: {
    trigger: ".box6 .img",
    start: "80% 20% ",
    end: "top 80%",
    scrub: 1,
    toggleActions: "restart none none none",
    // markers: {
    //   startColor: "white",
    //   endColor: "white",
    //   fontSize: "18px",
    //   fontWeight: "bold",
    //   indent: 20,
    // },
  },
});

gsap.from(".box7 img", {
  opacity: 0,
  x: -300,
  duration: 3,
  scrollTrigger: {
    trigger: ".box7 .img",
    start: "80% 20% ",
    end: "top 80%",
    scrub: 1,
    toggleActions: "restart none none none",
    // markers: {
    //   startColor: "white",
    //   endColor: "white",
    //   fontSize: "18px",
    //   fontWeight: "bold",
    //   indent: 20,
    // },
  },
});
