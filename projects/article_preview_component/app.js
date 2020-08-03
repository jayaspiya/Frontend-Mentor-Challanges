const shareIcon = document.querySelector("#shareicon");
const popUp = document.querySelector(".pop-up");
const shareIcon2 = document.querySelector(".hidden__sharebtn");

shareIcon.addEventListener("click", () => {
  popUp.classList.toggle("pop-up-animation");
});

shareIcon2.addEventListener("click", () => {
  popUp.classList.toggle("pop-up-animation");
});
