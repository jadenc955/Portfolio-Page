const hamburger = document.querySelector(".hamburger");
const navContainer = document.querySelector(".navigation__container");
const navLinks = document.querySelectorAll(".link__name");
const resumeLink = document.querySelector(".resume__link");
const background = document.querySelector(".background");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navContainer.classList.toggle("active");
  background.classList.toggle("dim"); 
});

for (const navLink of navLinks) {
  navLink.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navContainer.classList.remove("active");
    background.classList.remove("dim");
  });
}

resumeLink.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navContainer.classList.remove("active");
  background.classList.remove("dim");
});
