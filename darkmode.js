let darkModevar1 = localStorage.getItem("darkMode");
let style1 = document.getElementById('mystylesheet');

function enableDarkMode() {
    style1.href = 'dark.css'
    localStorage.setItem("darkMode", "enabled");
  
}

function disableDarkMode() {
    style1.href = 'styles.css'
    localStorage.setItem("darkMode", null);
}

if(darkModevar1 === 'enabled') {
    enableDarkMode();
}
