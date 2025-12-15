import { initSectionObserver } from "./animations/sectionObserver.js";
import { initHeroAnimations } from "./animations/heroAnimations.js";
import { initSmoothScroll } from "./navigation/smoothScroll.js";
import { initLangSwitcher } from "./utils/langSwitcher.js";
import { initVideoCards } from "./video/video.js";

document.addEventListener("DOMContentLoaded", () => {
  initSectionObserver();
  initSmoothScroll();
  initLangSwitcher();
  initHeroAnimations();
  initVideoCards();
});

/* Testimonials scroll */
const wrapper = document.querySelector(".testimonials-wrapper");
const card = document.querySelector(".testimonial-card");

if (wrapper && card) {
  const cardWidth = card.offsetWidth + 24;

  document.querySelector(".scroll-left")?.addEventListener("click", () => {
    wrapper.scrollBy({ left: -cardWidth, behavior: "smooth" });
  });

  document.querySelector(".scroll-right")?.addEventListener("click", () => {
    wrapper.scrollBy({ left: cardWidth, behavior: "smooth" });
  });
}
