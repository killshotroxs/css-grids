const darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
const toggleTheme = () => {
  const themeStylesheet = document.querySelector('link[href="index-dark.css"]');
  if (darkThemeQuery.matches) {
    themeStylesheet.disabled = false; // Enable dark theme
  } else {
    themeStylesheet.disabled = true; // Enable light theme
  }
};

// Add the event listener using .addEventListener instead of .addListener
darkThemeQuery.addEventListener('change', toggleTheme);

// Call toggleTheme initially to set up the theme based on user preference
toggleTheme();
