
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

const oldLink = document.querySelector('#oldTemples');
const newLink = document.querySelector('#newTemples');
const largeLink = document.querySelector('#largeTemples');
const smallLink = document.querySelector('#smallTemples');
const homeLink = document.querySelector('#home')

const temples = [
    {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: [2005, " August, 7"],
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: [1888, " May, 21"],
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: [2015, " June, 7"],
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: [2020, " May, 2"],
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: [1974, " November, 19"],
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: [1986, " January, 10"],
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: [1983, " December, 2"],
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Abidjan Ivory Coast",
    location: "Abidjan, Cote d'Ivoire",
    dedicated: [2025, " May, 25"],
    area: 17362,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58993-main.jpg",
    },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: [2004, " January, 11"],
    area: 17500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg",
    },
  {
    templeName: "Johannesberg South Africa",
    location: "Johannesberg, South Africa",
    dedicated: [1985, " August, 24"],
    area: 19184,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg",
  },
];

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

function displayCurrentYear() { document.getElementById("currentyear").innerHTML = new Date().getFullYear(); };
displayCurrentYear();

document.getElementById("lastModified").innerHTML = "Last Updated" + document.lastModified;


function createSection(section) {
    return `<section>
      <h2>${section.templeName}</h2>
      <p>LOCATION: ${section.location}</p>
      <p>DEDICATED: ${section.dedicated}</p>
      <p>SIZE: ${section.area}sq ft</p>
      <img src="${section.imageUrl}" alt="${section.templeName}" loading="lazy">
      </section>`
}

function creatTempleCard(temples) {
    const html = temples.map(createSection);
    document.querySelector(".temples").innerHTML = html.join("");
}

creatTempleCard(temples);


oldLink.addEventListener('click', () => {
    document.querySelector('.temples').innerHTML = "";
    let oldTemple = temples.filter(temple => temple.dedicated[0] < 1900);
    creatTempleCard(oldTemple);
});

newLink.addEventListener('click', () => {
    document.querySelector('.temples').innerHTML = "";
    let newTemple = temples.filter(temple => temple.dedicated[0] > 1999);
    creatTempleCard(newTemple);
});

largeLink.addEventListener('click', () => {
    document.querySelector('.temples').innerHTML = "";
    let largeTemple = temples.filter(temple => temple.area > 90000);
    creatTempleCard(largeTemple);
});

smallLink.addEventListener('click', () => {
    document.querySelector('.temples').innerHTML = "";
    let smallTemple = temples.filter(temple => temple.area < 10000);
    creatTempleCard(smallTemple);
});

homeLink.addEventListener('click', () => {
    creatTempleCard(temples);
})