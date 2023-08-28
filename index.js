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

gsap.from(".box4 img",{
  opacity:0,
  x:100,
  duration:1,
  scrollTrigger:{
    trigger:".box4 .img",
    // start:"top 80%",
    // end:"top 30%",
    scrub:2,
    toggleActions:"restart none none none",
    markers:true,
  }
})