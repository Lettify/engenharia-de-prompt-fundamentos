import {
  categories,
  getHighlights,
  getPosts,
  getProducts,
  saveHighlights,
  savePosts,
  saveProducts,
} from "./data.js";

const productForm = document.querySelector("[data-product-form]");
const highlightForm = document.querySelector("[data-highlight-form]");
const postForm = document.querySelector("[data-post-form]");
const productList = document.querySelector("[data-product-list]");
const highlightList = document.querySelector("[data-highlight-list]");
const postList = document.querySelector("[data-post-list]");
const categorySelect = document.querySelector("#product-category");
const categoryFieldsContainer = document.querySelector("[data-category-fields]");
const highlightPostSelect = document.querySelector("#highlight-post");

const gradientPalette = [
  "linear-gradient(135deg, #f4b144, #e58b3b)",
  "linear-gradient(135deg, #6cbf7f, #2f6f55)",
  "linear-gradient(135deg, #b6b3e6, #7386d4)",
  "linear-gradient(135deg, #d2a679, #9c6b3a)",
  "linear-gradient(135deg, #f0e8d9, #d6c5b1)",
];

const categoryFieldMap = {
  Biscoitos: [
    { label: "Tipo de farinha", name: "flourType", placeholder: "Aveia integral" },
    { label: "Textura", name: "texture", placeholder: "Crocante" },
    { label: "Adoçante", name: "sweetener", placeholder: "Mel" },
  ],
  Castanhas: [
    { label: "Tipo de torra", name: "roast", placeholder: "Leve" },
    { label: "Temperos", name: "seasoning", placeholder: "Sal rosa" },
    { label: "Textura", name: "texture", placeholder: "Crocante" },
  ],
  Queijos: [
    { label: "Maturação", name: "aging", placeholder: "Fresco" },
    { label: "Tipo de leite", name: "milk", placeholder: "Búfala" },
    { label: "Sabor", name: "flavor", placeholder: "Suave" },
  ],
  Temperos: [
    { label: "Uso ideal", name: "usage", placeholder: "Legumes" },
    { label: "Intensidade", name: "intensity", placeholder: "Aromático" },
    { label: "Tipo", name: "type", placeholder: "Ervas desidratadas" },
  ],
  "Chás & Infusões": [
    { label: "Benefício", name: "benefit", placeholder: "Relaxamento" },
    { label: "Aroma", name: "aroma", placeholder: "Floral" },
    { label: "Intensidade", name: "intensity", placeholder: "Suave" },
  ],
  Granolas: [
    { label: "Adoçante", name: "sweetener", placeholder: "Mel" },
    { label: "Textura", name: "texture", placeholder: "Crocante" },
    { label: "Destaque", name: "highlight", placeholder: "Frutas" },
  ],
};

const normalizeList = (value) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const pickGradient = () =>
  gradientPalette[Math.floor(Math.random() * gradientPalette.length)];

const renderCategoryOptions = () => {
  categorySelect.innerHTML = categories
    .map((category) => `<option value="${category.name}">${category.name}</option>`)
    .join("");
};

const renderCategoryFields = () => {
  const selectedCategory = categorySelect.value;
  const fields = categoryFieldMap[selectedCategory] || [];
  categoryFieldsContainer.innerHTML = fields
    .map(
      (field) => `
      <div>
        <label for="field-${field.name}">${field.label}</label>
        <input id="field-${field.name}" name="${field.name}" placeholder="${field.placeholder}" />
      </div>
    `
    )
    .join("");
};

const renderPostOptions = (posts) => {
  highlightPostSelect.innerHTML = posts
    .map((post) => `<option value="${post.id}">${post.title}</option>`)
    .join("");
};

const renderProductList = (products) => {
  productList.innerHTML = products
    .map(
      (product) => `
      <div class="admin-item">
        <div>
          <strong>${product.name}</strong>
          <div>${product.category} · R$ ${product.price.toFixed(2)}</div>
        </div>
        <button type="button" data-remove-product="${product.id}">Remover</button>
      </div>
    `
    )
    .join("");
};

const renderHighlightList = (highlights) => {
  highlightList.innerHTML = highlights
    .map(
      (highlight) => `
      <div class="admin-item">
        <div>
          <strong>${highlight.title}</strong>
          <div>${highlight.type} · ${highlight.date}</div>
        </div>
        <button type="button" data-remove-highlight="${highlight.id}">Remover</button>
      </div>
    `
    )
    .join("");
};

const renderPostList = (posts) => {
  postList.innerHTML = posts
    .map(
      (post) => `
      <div class="admin-item">
        <div>
          <strong>${post.title}</strong>
          <div>${post.category} · ${post.date}</div>
        </div>
        <button type="button" data-remove-post="${post.id}">Remover</button>
      </div>
    `
    )
    .join("");
};

const refreshLists = () => {
  const products = getProducts();
  const highlights = getHighlights();
  const posts = getPosts();

  renderProductList(products);
  renderHighlightList(highlights);
  renderPostList(posts);
  renderPostOptions(posts);
};

categorySelect?.addEventListener("change", renderCategoryFields);

productForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(productForm);
  const category = formData.get("category");
  const fields = categoryFieldMap[category] || [];

  const categoryDetails = fields.map((field) => ({
    label: field.label,
    value: formData.get(field.name) || "Informar na loja",
  }));

  const nutrition = [
    { label: "Porção", value: formData.get("portion") || "Informar na loja" },
    { label: "Calorias", value: formData.get("calories") || "Informar na loja" },
    {
      label: "Destaque",
      value: formData.get("nutritionHighlight") || "Informar na loja",
    },
  ];

  const newProduct = {
    id: `produto-${Date.now()}`,
    name: formData.get("name"),
    category,
    price: Number(formData.get("price")),
    unit: formData.get("unit"),
    description: formData.get("description"),
    ingredients: formData.get("ingredients"),
    allergens: formData.get("allergens"),
    origin: formData.get("origin"),
    storage: formData.get("storage"),
    badges: normalizeList(formData.get("badges") || ""),
    tags: normalizeList(formData.get("tags") || ""),
    categoryDetails,
    nutrition,
    image: pickGradient(),
  };

  const products = [newProduct, ...getProducts()];
  saveProducts(products);
  productForm.reset();
  renderCategoryFields();
  refreshLists();
});

highlightForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(highlightForm);
  const newHighlight = {
    id: `highlight-${Date.now()}`,
    type: formData.get("type"),
    title: formData.get("title"),
    subtitle: formData.get("subtitle"),
    description: formData.get("description"),
    cta: "Ver detalhes",
    postId: formData.get("postId"),
    date: formData.get("date"),
    image: pickGradient(),
  };

  const highlights = [newHighlight, ...getHighlights()];
  saveHighlights(highlights);
  highlightForm.reset();
  refreshLists();
});

postForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(postForm);
  const content = formData
    .get("content")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const newPost = {
    id: `post-${Date.now()}`,
    title: formData.get("title"),
    date: formData.get("date"),
    category: formData.get("category"),
    summary: formData.get("summary"),
    content,
    image: pickGradient(),
  };

  const posts = [newPost, ...getPosts()];
  savePosts(posts);
  postForm.reset();
  refreshLists();
});

productList?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-product]");
  if (!button) {
    return;
  }
  const id = button.dataset.removeProduct;
  const products = getProducts().filter((product) => product.id !== id);
  saveProducts(products);
  refreshLists();
});

highlightList?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-highlight]");
  if (!button) {
    return;
  }
  const id = button.dataset.removeHighlight;
  const highlights = getHighlights().filter((highlight) => highlight.id !== id);
  saveHighlights(highlights);
  refreshLists();
});

postList?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-post]");
  if (!button) {
    return;
  }
  const id = button.dataset.removePost;
  const posts = getPosts().filter((post) => post.id !== id);
  savePosts(posts);
  refreshLists();
});

renderCategoryOptions();
renderCategoryFields();
refreshLists();
