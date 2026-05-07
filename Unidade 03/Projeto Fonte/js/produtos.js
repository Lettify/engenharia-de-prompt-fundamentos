import { getProducts } from "./data.js";
import { getQueryParam, normalizeText, renderProductCard } from "./utils.js";

const searchInput = document.querySelector("[data-search]");
const productList = document.querySelector("[data-product-list]");
const filterInfo = document.querySelector("[data-filter-info]");
const viewButtons = document.querySelectorAll("[data-view]");

const allProducts = getProducts();
const categoryFilter = getQueryParam("category");
let currentView = "grid";

const getSearchText = (product) =>
  normalizeText(
    [
      product.name,
      product.category,
      product.description,
      product.ingredients,
      product.allergens,
      product.origin,
      product.storage,
      product.badges?.join(" "),
      product.tags?.join(" "),
      product.categoryDetails?.map((item) => item.value).join(" "),
      product.nutrition?.map((item) => item.value).join(" "),
    ].join(" ")
  );

const renderList = (items) => {
  if (!productList) {
    return;
  }

  productList.dataset.view = currentView;

  if (!items.length) {
    productList.innerHTML =
      "<p>Nenhum produto encontrado com esses filtros.</p>";
    return;
  }

  productList.innerHTML = items
    .map((product) => renderProductCard(product))
    .join("");
};

const applyFilters = () => {
  const query = normalizeText(searchInput?.value || "");
  const filtered = allProducts.filter((product) => {
    const matchesCategory = categoryFilter
      ? product.category === categoryFilter
      : true;
    const matchesQuery = query
      ? getSearchText(product).includes(query)
      : true;
    return matchesCategory && matchesQuery;
  });

  if (filterInfo) {
    const categoryText = categoryFilter
      ? `Categoria selecionada: ${categoryFilter}. `
      : "";
    filterInfo.textContent = `${categoryText}${filtered.length} produto(s) encontrados.`;
  }

  renderList(filtered);
};

searchInput?.addEventListener("input", applyFilters);

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentView = button.dataset.view;
    viewButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    applyFilters();
  });
});

applyFilters();
