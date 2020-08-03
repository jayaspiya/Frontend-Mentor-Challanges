const toggler = document.querySelector(".toggler");
const togglerCircle = document.querySelector(".toggler-circle");
const pricing1 = document.querySelector("#pricing1");
const pricing2 = document.querySelector("#pricing2");
const pricing3 = document.querySelector("#pricing3");
let showAnnually = false;

toggler.addEventListener("click", () => {
  if (showAnnually) {
    togglerCircle.style.transform = "translateX(0px)";
    pricing1.innerHTML = "199.99";
    pricing2.innerHTML = "249.99";
    pricing3.innerHTML = "399.99";

    showAnnually = false;
  } else {
    togglerCircle.style.transform = "translateX(20px)";
    pricing1.innerHTML = "19.99";
    pricing2.innerHTML = "24.99";
    pricing3.innerHTML = "39.99";

    showAnnually = true;
  }
});
