let darkModevar1 = localStorage.getItem("darkMode");

if(darkModevar1 === 'enabled') {
    console.log(document.body.classList);
    document.body.classList.add('dark');
}