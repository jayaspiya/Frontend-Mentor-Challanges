const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const blanket = document.querySelector(".blanket");

const menuIcons = menu.children;


menu.addEventListener("click",menuToggler);

function menuToggler(){
    for (const iterator of menuIcons) {
        iterator.classList.toggle("menu--hide");
    }
    nav.classList.toggle("navigation--show");
    blanket.classList.toggle("blanket--active");
    document.body.classList.toggle("body--overflow")
}
