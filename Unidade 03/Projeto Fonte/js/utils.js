export const formatCurrency = (value) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

export const getQueryParam = (key) =>
  new URLSearchParams(window.location.search).get(key);

export const normalizeText = (value = "") =>
  value
    .toString()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

export const buildBadgeList = (badges = []) =>
  badges
    .map((badge) => `<span class="badge">${badge}</span>`)
    .join("");

export const renderProductCard = (product, { showDescription = true } = {}) => {
  const description = showDescription
    ? `<p>${product.description}</p>`
    : "";
  return `
    <article class="product-card">
      <div class="product-image" style="background: ${product.image}">
        ${product.category}
      </div>
      <div>
        <h3>${product.name}</h3>
        ${description}
        <div class="product-meta">
          <span>${product.category}</span>
          <span>${formatCurrency(product.price)} · ${product.unit}</span>
        </div>
        <div class="badges">${buildBadgeList(product.badges)}</div>
      </div>
      <a class="ghost-button" href="produto.html?id=${product.id}">Ver detalhes</a>
    </article>
  `;
};

export const renderHighlightSlide = (highlight) => `
  <div class="carousel-slide">
    <div>
      <span class="carousel-badge">${highlight.type} · ${highlight.date}</span>
      <h3 class="carousel-title">${highlight.title}</h3>
      <p class="carousel-description">${highlight.subtitle}</p>
      <p class="carousel-description">${highlight.description}</p>
      <a class="primary-button" href="blog.html?post=${highlight.postId}">${highlight.cta}</a>
    </div>
    <div class="carousel-image" style="background: ${highlight.image}">
      ${highlight.title}
    </div>
  </div>
`;

export const renderCategoryCard = (category) => `
  <article class="category-card">
    <div class="category-icon">${category.icon}</div>
    <h3>${category.name}</h3>
    <p>${category.description}</p>
    <a class="ghost-button" href="produtos.html?category=${encodeURIComponent(category.name)}">
      Ver ${category.name}
    </a>
  </article>
`;

export const renderBlogCard = (post) => `
  <article class="blog-card">
    <div class="product-image" style="background: ${post.image}">
      ${post.category}
    </div>
    <div class="blog-meta">${post.category} · ${post.date}</div>
    <h3>${post.title}</h3>
    <p>${post.summary}</p>
    <a class="ghost-button" href="blog.html?post=${post.id}">Ler mais</a>
  </article>
`;
