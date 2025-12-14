const gallery = document.querySelector(".gallery");
const modal = document.querySelector("dialog");
const modalImage = document.querySelector("dialog img");
const closeButton = document.querySelector(".close-viewer");

function manageMenu() {
    const menu = document.querySelector(".menu");

    menu.classList.toggle("hide");
}

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

function showModal(event) {

}

document.querySelector(".menuButton").addEventListener("click", manageMenu);
window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);
gallery.target.closest("img").addEventListener("click", showModal);

// Stuck on step '04 Make it work!'  https://wdd131.netlify.app/prove/cool-pics-2/