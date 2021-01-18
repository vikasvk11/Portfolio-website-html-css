let darkModevar = localStorage.getItem("darkMode");
let style = document.getElementById('mystylesheet');
const btn = document.querySelector(".nav-brand");


function enableDarkMode() {
    style.href = 'dark.css'
    localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
    style.href = 'styles.css'
    localStorage.setItem("darkMode", null);
}

if(darkModevar === 'enabled') {
    //enableDarkMode();
} else {
    disableDarkMode();
}

btn.addEventListener('click', () => {
    darkModevar = localStorage.getItem("darkMode");
    if(darkModevar !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})