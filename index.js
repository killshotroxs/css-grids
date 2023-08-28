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
  scrollTrigger: ".box4 img",
  opacity: 0,
  scrub: true,
  x: 300,
  // normalizeScroll: true,
  duration: 3,
  start: "top top", // when the top of the trigger hits the top of the viewport
  end: "+=500",
});
