// Fitur Darkmode
const htmlTag = document.querySelector("html");
const toggleDarkMode = document.getElementById("dark-toggle");
let count = 1;

toggleDarkMode.addEventListener("click", () => {
  htmlTag.classList.toggle("dark");
  if (count % 2 == 1) {
    toggleDarkMode.setAttribute("class", "bx bxs-moon");
    count++;
  } else {
    toggleDarkMode.setAttribute("class", "bx bxs-sun");
    count--;
  }
});

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  if (count % 2 == 1) {
    toggleDarkMode.setAttribute("class", "bx bxs-moon");
    count++;
  } else {
    toggleDarkMode.setAttribute("class", "bx bxs-sun");
    count--;
  }
} else {
  document.documentElement.classList.remove("dark");
}

// Whenever the user explicitly chooses light mode
localStorage.theme = "light";

// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");

const githubBtn = document.querySelectorAll(".github");

githubBtn.forEach((github) => {
  github.addEventListener("click", () => {
    window.open("https://github.com/KarMint26");
  });
});

// Fitur Button back to top, ketika di click otomatis akan scroll ke paling atas
const buttonBackTop = document.querySelector(".button-backtop");
buttonBackTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Fitur Navigasi Bar ketika di scroll akan muncul shadow dibawahnya
const navigationBar = document.querySelector(".navbar");

function handleScroll() {
  if (window.innerWidth >= 1024) {
    if (window.scrollY > 30 || document.documentElement.scrollY > 30) {
      navigationBar.style.boxShadow = "0 0.5px 6px 0 rgba(0, 0, 0, 0.2)";
    } else {
      navigationBar.style.boxShadow = "0 0.5px 6px 0 rgba(0, 0, 0, 0)";
    }
  }
  if (window.scrollY > 30 || document.documentElement.scrollY > 30) {
    buttonBackTop.style.display = "block";
  } else {
    buttonBackTop.style.display = "none";
  }
}

window.addEventListener("scroll", handleScroll);

window.addEventListener("resize", handleScroll);

window.addEventListener("load", handleScroll);

// Navbar Behavior
const listNav = document.querySelectorAll(".list-nav");
const dropdownMenu = document.querySelector(".dropdown");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const bodyOfHtml = document.querySelector("body");

hamburgerMenu.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
  if (dropdownMenu.classList.contains("active")) {
    bodyOfHtml.style.overflow = "hidden";
  } else {
    bodyOfHtml.style.overflow = "visible";
  }
});

listNav.forEach((nav) => {
  nav.addEventListener("click", () => {
    dropdownMenu.classList.remove("active");
    hamburgerMenu.classList.remove("active");
    bodyOfHtml.style.overflow = "visible";
  });
});

// Form Event
const formContact = document.querySelector("#form-contact");
formContact.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Loading or Splash Screen
const loadingScreen = document.querySelector(".loading-screen");
const loadingContainer = document.querySelector(".loading-container");

const imagesToLoad = document.querySelectorAll("img");
let imagesLoaded = 0;
const totalImages = imagesToLoad.length;

function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    loadingContainer.classList.remove("active");
    bodyOfHtml.classList.remove("active");
  } else {
    bodyOfHtml.classList.toggle("active");
  }
  loadingContainer.classList.add("active");
}

imagesToLoad.forEach((img) => {
  img.addEventListener("load", imageLoaded);
});
