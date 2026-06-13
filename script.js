let lightmode = localStorage.getItem("dark-mode");
const themeSwitch = document.getElementById("theme-switch");

const enableLightMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("dark-mode", "active");
};

const disableLightMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("dark-mode", null);
};
themeSwitch.addEventListener("click", () => {
  lightmode = localStorage.getItem("dark-mode");
  lightmode !== "active" ? enableLightMode() : disableLightMode();
});

if (lightmode === "active") enableLightMode();
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

// Clear form after successful submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    const form = this;
    setTimeout(() => {
      form.reset();
    }, 500);
  });
}

let menu = document.querySelector(".menu-icon");
let navigationlist = document.querySelector(".navigation-list");

menu.addEventListener("click", () => {
  navigationlist.classList.toggle("open");
  // menu.classList.toggle("fa-bars");
  // menu.classList.toggle("fa-solid fa-xmark");
  // if (navigationlist.classList.contains("open")) {
  //   menu.className = "fa-solid fa xmark";
  // } else {
  //   menu.className = "fa-solid fa bars";
  // }
  if (navigationlist.classList.contains("open")) {
    menu.classList.remove("fa-bars");
    menu.classList.add("fa-xmark");
  } else {
    menu.classList.remove("fa-xmark");
    menu.classList.add("fa-bars");
  }
});
window.onscroll = () => {
  menu.classList.remove("fa-xmark");
  navigationlist.classList.remove("open");
  menu.classList.add("fa-bars");
};
