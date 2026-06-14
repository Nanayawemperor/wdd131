const form = document.querySelector("#contactForm");
const msg = document.querySelector("#msg");

form.addEventListener("submit", (e) => {
e.preventDefault();

let count = Number(localStorage.getItem("count")) || 0;
count++;

localStorage.setItem("count", count);

msg.textContent =
`Thank you! Your request has been received. (#${count})`;
});

const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});

document.querySelector("#lastModified").textContent =
document.lastModified;