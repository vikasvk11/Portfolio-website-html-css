let darkModevar = localStorage.getItem("darkMode");
const btn = document.querySelector(".nav-brand");



function enableDarkMode() {
    document.body.classList.add('dark');
    localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
    document.body.classList.remove('dark');
    localStorage.setItem("darkMode", null);
}

if(darkModevar === 'enabled') {
    enableDarkMode();
}

btn.addEventListener('click', () => {
    darkModevar = localStorage.getItem("darkMode");
    if(darkModevar !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})

