const windChill = document.querySelector('#windChill');

let temp = 32;
let speed = 7.2;

if (temp <= 10, speed > 4.8) {
    windChill.textContent = 'N/A';
}

const chill = calculateWindChill(temp, speed);
windChill.textContent = chill.toFixed(1);

function calculateWindChill(temp, speed) {
    return 35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + (0.4275 * temp * (speed ** 0.16));
}

function displayCurrentYear() { document.getElementById("currentyear").innerHTML = new Date().getFullYear(); }
displayCurrentYear();

document.getElementById("lastModified").innerHTML = "Last Updated" + document.lastModified;

