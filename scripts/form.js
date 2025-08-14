function displayCurrentYear() { document.getElementById("currentyear").innerHTML = new Date().getFullYear(); }
displayCurrentYear();

document.getElementById("lastModified").innerHTML = "Last Updated" + document.lastModified;

const products = [
  { id: "p1", name: "Iphone" },
  { id: "p2", name: "Samsung" },
  { id: "p3", name: "Infinix" },
  { id: "p4", name: "Vivo" }
];

document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("productname");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
});

let reviewCount = localStorage.getItem('reviewCount');
reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
localStorage.setItem('reviewCount', reviewCount);
document.getElementById('review-count').textContent = reviewCount;