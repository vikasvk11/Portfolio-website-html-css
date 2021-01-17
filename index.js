/*
var btn = document.querySelector('.nav-brand');

function clickHandler() {
    document.body.classList.toggle('dark');
}

btn.addEventListener("click", clickHandler);
*/

let darkModevar = localStorage.getItem("darkMode");
const btn = document.querySelector(".nav-brand");

console.log(darkModevar);

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
    console.log(darkModevar);
})

