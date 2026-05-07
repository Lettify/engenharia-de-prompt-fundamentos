import { categories, getFeaturedProducts, getHighlights } from "./data.js";
import {
  renderCategoryCard,
  renderHighlightSlide,
  renderProductCard,
} from "./utils.js";

const highlightTrack = document.querySelector("[data-carousel-track]");
const prevButton = document.querySelector("[data-carousel-prev]");
const nextButton = document.querySelector("[data-carousel-next]");
const categoryContainer = document.querySelector("[data-categories]");
const featuredContainer = document.querySelector("[data-featured-products]");

const highlights = getHighlights();
let activeIndex = 0;
let carouselTimer = null;

const renderCarousel = () => {
  if (!highlightTrack) {
    return;
  }
  highlightTrack.innerHTML = highlights.map(renderHighlightSlide).join("");
  updateCarousel();
  startCarousel();
};

const updateCarousel = () => {
  highlightTrack.style.transform = `translateX(-${activeIndex * 100}%)`;
};

const startCarousel = () => {
  if (carouselTimer) {
    clearInterval(carouselTimer);
  }
  carouselTimer = setInterval(() => {
    activeIndex = (activeIndex + 1) % highlights.length;
    updateCarousel();
  }, 6000);
};

prevButton?.addEventListener("click", () => {
  activeIndex = (activeIndex - 1 + highlights.length) % highlights.length;
  updateCarousel();
  startCarousel();
});

nextButton?.addEventListener("click", () => {
  activeIndex = (activeIndex + 1) % highlights.length;
  updateCarousel();
  startCarousel();
});

if (categoryContainer) {
  categoryContainer.innerHTML = categories.map(renderCategoryCard).join("");
}

if (featuredContainer) {
  featuredContainer.innerHTML = getFeaturedProducts()
    .map((product) => renderProductCard(product, { showDescription: false }))
    .join("");
}

if (highlights.length) {
  renderCarousel();
}
