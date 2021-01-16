var btn = document.querySelector('.nav-brand');

function clickHandler() {
    document.body.classList.toggle('dark');
}

btn.addEventListener("click", clickHandler);