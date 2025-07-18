
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

function displayCurrentYear() { document.getElementById("currentyear").innerHTML = new Date().getFullYear(); };
displayCurrentYear();

document.getElementById("lastModified").innerHTML = "Last Updated" + document.lastModified;
