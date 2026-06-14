const form = document.querySelector("#calcForm");
const result = document.querySelector("#result");

form.addEventListener("submit", (e) => {
e.preventDefault();

const voltage = Number(document.querySelector("#voltage").value);
const capacity = Number(document.querySelector("#capacity").value);
const watts = Number(document.querySelector("#watts").value);

let hours = (voltage * capacity) / watts;

if (hours > 0) {
result.textContent = `Estimated Battery Life: ${hours.toFixed(1)} hours`;
} else {
result.textContent = "Enter valid values";
}
});

const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});

document.querySelector("#lastModified").textContent =
document.lastModified;