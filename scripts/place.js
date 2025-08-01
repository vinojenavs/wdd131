function calculateWindChill(temp, speed) {return 35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + (0.4275 * temp * (speed ** 0.16)); }
let temp = 32;
let speed = 7.2;
if (temp <= 10 && speed > 4.8) {
    document.querySelector("#windChill").textContent = calculateWindChill(temp, speed).toFixed(1);
}

else {
    document.querySelector('#windChill').textContent = 'N/A';
}

function displayCurrentYear() { document.getElementById("currentyear").innerHTML = new Date().getFullYear(); }
displayCurrentYear();

document.getElementById("lastModified").innerHTML = "Last Updated" + document.lastModified;

