import { getProductById } from "./data.js";
import { buildBadgeList, formatCurrency, getQueryParam } from "./utils.js";

const container = document.querySelector("[data-product-detail]");
const productId = getQueryParam("id");
const product = productId ? getProductById(productId) : null;

const renderInfoList = (items) =>
  items
    .map(
      (item) => `
    <div class="info-item">
      <strong>${item.label}</strong>
      <span>${item.value}</span>
    </div>
  `
    )
    .join("");

if (!container) {
  throw new Error("Container de produto não encontrado.");
}

if (!product) {
  container.innerHTML = `
    <div class="detail-card">
      <h2>Produto não encontrado</h2>
      <p>Verifique o link ou retorne ao cardápio completo.</p>
      <a class="primary-button" href="produtos.html">Voltar aos produtos</a>
    </div>
  `;
} else {
  container.innerHTML = `
    <div class="detail-grid">
      <div class="detail-card">
        <div class="product-image" style="background: ${product.image}">
          ${product.category}
        </div>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <div class="badges">${buildBadgeList(product.badges)}</div>
        <div class="product-meta">
          <span>${formatCurrency(product.price)} · ${product.unit}</span>
          <span>${product.origin}</span>
        </div>
      </div>

      <div class="detail-card">
        <h3>Ingredientes e alergênicos</h3>
        <p><strong>Ingredientes:</strong> ${product.ingredients}</p>
        <p><strong>Alertas:</strong> ${product.allergens}</p>
        <p><strong>Armazenamento:</strong> ${product.storage}</p>
      </div>

      <div class="detail-card">
        <h3>Características da categoria</h3>
        <div class="info-list">
          ${renderInfoList(product.categoryDetails)}
        </div>
      </div>

      <div class="detail-card">
        <h3>Informações nutricionais</h3>
        <div class="info-list">${renderInfoList(product.nutrition)}</div>
      </div>
    </div>
  `;
}
