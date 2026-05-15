import { portfolioData } from "../model/portfolioModel.js";
import { PortfolioView } from "../view/portfolioView.js";

export class PortfolioController {
  constructor(appElement) {
    this.appElement = appElement;
    this.view = new PortfolioView();
    this.data = portfolioData;
  }

  init() {
    this.renderPortfolio();
    this.setupIntersectionObserver();
    this.setupCustomCursor();
    this.setupCarousel();
    this.setupHeaderScroll();
  }

  renderPortfolio() {
    this.appElement.innerHTML = this.view.renderApp(this.data);
  }

  setupCarousel() {
    const carousel = document.querySelector(".projects-carousel");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    if (!carousel || !prevBtn || !nextBtn) return;

    const scrollAmount = 412; // Card width (380) + gap (32)

    prevBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }

  setupCustomCursor() {
    const cursor = document.querySelector(".cursor-follower");
    if (!cursor) return;

    window.addEventListener("mousemove", (e) => {
      requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });
    });

    // Simple interaction: just change color on hover
    document.querySelectorAll("a, button, .btn").forEach(el => {
      el.addEventListener("mouseenter", () => cursor.classList.add("cursor-active"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("cursor-active"));
    });
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
  }

  setupHeaderScroll() {
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    }, { passive: true });
  }
}