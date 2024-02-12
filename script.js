const hamburger = document.querySelector(".hamburger");
const navContainer = document.querySelector(".navigation__container");
const navLinks = document.querySelectorAll(".link__name");
const resumeLink = document.querySelector(".resume__link");
const background = document.querySelector(".background");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navContainer.classList.toggle("active");
  background.classList.toggle("dim"); 
})

function removeDropDown() {
  hamburger.classList.remove("active");
  navContainer.classList.remove("active");
  background.classList.remove("dim");
}

window.addEventListener("resize", removeDropDown);

for (const navLink of navLinks) {
  navLink.addEventListener("click", removeDropDown);
}

resumeLink.addEventListener("click", removeDropDown);

