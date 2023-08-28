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

gsap.from(".box3", { opacity: 0, y: 100, delay: 1, duration: 1, });

gsap.from(".box4 img", {
  opacity: 0,
  x: 300,
  duration: 3,
  scrollTrigger: {
    trigger: ".box4 .img",
    start: "30% 20% ",
    end: "top 80%",
    scrub: 1,  },
});

gsap.from(".box5 img", {
  opacity: 0,
  x: -300,
  duration: 3,
  scrollTrigger: {
    trigger: ".box5 img",
  },
});

gsap.from(".box6 img", {
  opacity: 0,
  x: 300,
  duration: 3,
  scrollTrigger: {
    trigger: ".box6 img",
  
  },
});

gsap.from(".box7 img", {
  opacity: 0,
  x: -300,
  duration: 3,
  scrollTrigger: {
    trigger: ".box7 img",
    
  },
});
