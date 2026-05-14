// place.js – WDD 131 – Ghana Place Page
// Emmanuel Okyere

// --- Footer: current year ---
const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// --- Footer: last modified ---
document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;

// --- Wind Chill Calculation ---
// Static values matching page content
const temperature = 30;   // °C
const windSpeed = 15;     // km/h

/**
 * calculateWindChill
 * Metric formula (Environment Canada):
 * WC = 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
 * Valid for: T <= 10°C and V > 4.8 km/h
 * @param {number} T - Temperature in °C
 * @param {number} V - Wind speed in km/h
 * @returns {number} Wind chill in °C
 */
function calculateWindChill(T, V) {
  return 13.12 + 0.6215 * T - 11.37 * Math.pow(V, 0.16) + 0.3965 * T * Math.pow(V, 0.16);
}

// --- Display wind chill only if conditions are met ---
const windchillEl = document.getElementById("windchill");
if (windchillEl) {
  if (temperature <= 10 && windSpeed > 4.8) {
    const wc = calculateWindChill(temperature, windSpeed);
    windchillEl.textContent = wc.toFixed(1) + " °C";
  } else {
    windchillEl.textContent = "N/A";
  }
}