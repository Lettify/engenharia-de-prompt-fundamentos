import { getPostById, getPosts } from "./data.js";
import { getQueryParam, renderBlogCard } from "./utils.js";

const container = document.querySelector("[data-blog-content]");
const postId = getQueryParam("post");

if (!container) {
  throw new Error("Container do blog não encontrado.");
}

if (postId) {
  const post = getPostById(postId);

  if (!post) {
    container.innerHTML = `
      <div class="detail-card">
        <h2>Post não encontrado</h2>
        <p>Não encontramos este conteúdo. Veja outras novidades abaixo.</p>
        <a class="primary-button" href="blog.html">Voltar ao blog</a>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="blog-detail">
        <div class="product-image" style="background: ${post.image}">
          ${post.category}
        </div>
        <div class="blog-meta">${post.category} · ${post.date}</div>
        <h2>${post.title}</h2>
        ${post.content.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        <a class="ghost-button" href="blog.html">Ver todas as publicações</a>
      </div>
    `;
  }
} else {
  const posts = getPosts();
  container.innerHTML = `
    <h1 class="section-title">Blog Império Natural</h1>
    <p class="section-subtitle">
      Confira detalhes dos destaques, eventos e dicas selecionadas pela nossa equipe.
    </p>
    <div class="blog-grid">
      ${posts.map(renderBlogCard).join("")}
    </div>
  `;
}
