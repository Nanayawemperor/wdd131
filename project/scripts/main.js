const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
document.lastModified;

const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});

const featured = [
{ name: "AA Battery", price: 15 },
{ name: "UPS Battery", price: 250 }
];

const container = document.querySelector("#featured");

featured.forEach(item => {
container.innerHTML += `
<div class="card">
<h3>${item.name}</h3>
<p>GH₵${item.price}</p>
</div>
`;
});