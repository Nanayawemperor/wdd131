const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    year: 2005,
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    year: 1888,
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    year: 2015,
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    year: 2020,
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    year: 1974,
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    year: 1986,
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    year: 1983,
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    year: 2004,
    area: 17000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/7cf8e8b9e5a5a1f379d4e2c9bc2166f9c6007aca/full/640%2C/0/default"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    year: 1893,
    area: 253000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/64de5983126b11eca393eeeeac1e50dfc2db6c7e/full/640%2C/0/default"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    year: 2019,
    area: 41010,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/640%2C/0/default"
  }
];


// CREATE TEMPLE CARD
function createTempleCard(temple) {
  const card = document.createElement("figure");

  card.innerHTML = `
    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    <figcaption>
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
    </figcaption>
  `;

  return card;
}


// DISPLAY FUNCTION
const container = document.querySelector("#temple-container");

function displayTemples(list) {
  container.innerHTML = "";

  list.forEach((temple) => {
    container.appendChild(createTempleCard(temple));
  });
}

// INITIAL LOAD
displayTemples(temples);


// FOOTER
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent =
  `Last Modified: ${document.lastModified}`;


// MENU TOGGLE (FIXED + ACCESSIBLE)
const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

// default hidden on mobile
navMenu.classList.add("hide");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("hide");

  const isHidden = navMenu.classList.contains("hide");

  menuButton.textContent = isHidden ? "☰" : "✖";
  menuButton.setAttribute("aria-expanded", !isHidden);
});


// FILTER NAVIGATION
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const text = e.target.textContent;

    // HOME RESET
    if (text === "Home") {
      displayTemples(temples);
      return;
    }

    let filtered = temples;

    if (text === "Old") {
      filtered = temples.filter((t) => t.year < 1900);
    } 
    else if (text === "New") {
      filtered = temples.filter((t) => t.year > 2000);
    } 
    else if (text === "Large") {
      filtered = temples.filter((t) => t.area > 90000);
    } 
    else if (text === "Small") {
      filtered = temples.filter((t) => t.area < 10000);
    }

    displayTemples(filtered);
  });
});