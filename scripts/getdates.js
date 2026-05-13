// getdates.js – WDD 131 Dynamic Web Fundamentals

// Populate the current copyright year
const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Populate the last modified date
document.getElementById("lastModified").innerHTML =
  "Last Modified: " + document.lastModified;