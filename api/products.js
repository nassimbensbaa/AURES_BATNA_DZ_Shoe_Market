const GOOGLE_SCRIPT_URL = "PUT_YOUR_SCRIPT_URL_HERE";

const API = GOOGLE_SCRIPT_URL + "?action=products";

async function loadProducts() {
  const res = await fetch(API);
  const data = await res.json();

  const container = document.getElementById("products");
  container.innerHTML = "";

  data.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>اللون: ${p.color}</p>
        <p>المقاس: ${p.size}</p>
        <p>المخزون: ${p.stock}</p>

        <input type="number" id="q${p.id}" value="1" min="1">

        <button onclick="order(${p.id}, '${p.name}')">
          طلب
        </button>
      </div>
    `;
  });
}

loadProducts();
