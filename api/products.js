function getAPI() {
  return document.getElementById("app").dataset.api;
}

async function loadProducts() {
  try {
    const API = getAPI() + "?action=products";

    const res = await fetch(API);
    const products = await res.json();

    const container = document.getElementById("products");
    container.innerHTML = "";

    products.forEach(p => {
      container.innerHTML += createCard(p);
    });

  } catch (error) {
    console.error("Error loading products:", error);
  }
}

function createCard(p) {
  return `
    <div class="card">
      <img src="${p.image}" alt="${p.name}">

      <h3>${p.name}</h3>

      <p>🎨 اللون: ${p.color}</p>
      <p>📏 المقاس: ${p.size}</p>
      <p>📦 المتوفر: ${p.stock}</p>

      <input type="number" id="q${p.id}" value="1" min="1">

      <button onclick="order(${p.id}, '${p.name}')">
        طلب الآن
      </button>
    </div>
  `;
}

window.onload = loadProducts;
