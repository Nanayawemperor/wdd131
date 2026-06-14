let data = [
{ name: "AA Battery", type: "Microphone", price: 15 },
{ name: "UPS Battery", type: "UPS", price: 250 },
{ name: "Car Battery", type: "Vehicle", price: 800 },
{ name: "Generator Battery", type: "Generator", price: 400 }
];

const productsDiv = document.querySelector("#products");
const filter = document.querySelector("#filter");

function display(list) {
productsDiv.innerHTML = "";

list.forEach(p => {
productsDiv.innerHTML += `
<div class="card">
<h3>${p.name}</h3>
<p>${p.type}</p>
<p>GH₵${p.price}</p>
</div>
`;
});
}

display(data);

filter.addEventListener("change", () => {
if (filter.value === "all") {
display(data);
} else {
display(data.filter(p => p.type === filter.value));
}
});

const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});

document.querySelector("#lastModified").textContent =
document.lastModified;