const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

const fountainButton = document.querySelector('#fountain');
const gateButton = document.querySelector('#gates');
const paintButton = document.querySelector('#paint')
const poolButton = document.querySelector('#pool');
const homeLink = document.querySelector('#service');

const services = [
    {
        service: "fountain",
        imageUrl: "images/fountain.jpg",
    },
    {
        service: "fountain",
        imageUrl: "images/fountain1.jpg"
    },
    {
        service: "fountain",
        imageUrl: "images/fountainsafter.jpg"
    },
    {
        service: "gate",
        imageUrl: "images/gates.jpg"
    },
    {
        service: "gate",
        imageUrl: "images/gates1.jpg"
    },
    {
        service: "paint",
        imageUrl: "images/paint.jpg"
    },
    {
        service: "paint",
        imageUrl: "images/paintafter.jpg"
    },
    {
        service: "pool",
        imageUrl: "images/pool.jpg"
    },
    {
        service: "pool",
        imageUrl: "images/swiming.jpg"
    }
];

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


function createSection(section) {
    return `<section>
    <img src="${section.imageUrl}" alt="${section.service}">
    </section>`
};

function creatServiceCard(services) {
    const html = services.map(createSection);
    document.querySelector(".Services").innerHTML = html.join("");
};

creatServiceCard(services);

function filterItemsByText(array, searchText) {
  return array.filter(item =>
    item.service.toLowerCase().includes(searchText.toLowerCase())
  );
};

fountainButton.addEventListener('click', () => {
    document.querySelector('.Services').innerHTML = "";
    let fountain = filterItemsByText(services, "fountain");
    creatServiceCard(fountain);
});

gateButton.addEventListener('click', () => {
    document.querySelector('.Services').innerHTML = "";
    let gate = filterItemsByText(services, "gate");
    creatServiceCard(gate);
});

paintButton.addEventListener('click', () => {
    document.querySelector('.Services').innerHTML = "";
    let paint = filterItemsByText(services, "paint");
    creatServiceCard(paint);
});

poolButton.addEventListener('click', () => {
    document.querySelector('.Services').innerHTML = "";
    let pool = filterItemsByText(services, "pool");
    creatServiceCard(pool);
});

homeLink.addEventListener('click', () => {
    creatTempleCard(services);
});

function displayCurrentYear() { document.getElementById("currentyear").innerHTML = new Date().getFullYear(); }
displayCurrentYear();

document.getElementById("lastModified").innerHTML = "Last Updated" + document.lastModified;

