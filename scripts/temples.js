// Footer Dates

const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();

lastModified.textContent = `Last Modified: ${document.lastModified}`;


// Hamburger Menu

const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("hide");

  if (menuButton.textContent === "☰") {
    menuButton.textContent = "✖";
  } else {
    menuButton.textContent = "☰";
  }
});


// Hide menu by default on mobile

navMenu.classList.add("hide");