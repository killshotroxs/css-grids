const darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
const toggleTheme = () => {
  const themeStylesheet = document.querySelector('link[href="index-dark.css"]');
  if (darkThemeQuery.matches) {
    themeStylesheet.disabled = false; // Enable dark theme
  } else {
    themeStylesheet.disabled = true; // Enable light theme
  }
};

darkThemeQuery.addEventListener('change', toggleTheme);

toggleTheme();
