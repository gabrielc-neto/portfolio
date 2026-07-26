/* ==========================================================================
   Portfólio de Gabriel Corrêa
   ========================================================================== */

(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var isSmallScreen = window.matchMedia("(max-width: 640px)").matches;

  /* ------------------------------------------------------ menu mobile -- */

  var menuBtn = document.getElementById("menu-button");
  var mobileMenu = document.getElementById("mobile-menu");

  function closeMenu() {
    if (!mobileMenu || !menuBtn) return;
    mobileMenu.hidden = true;
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Abrir menu");
  }

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      var open = mobileMenu.hidden;
      mobileMenu.hidden = !open;
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });

    mobileMenu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* -------------------------------------- header sólido + botão topo -- */

  var header = document.getElementById("site-header");
  var toTop = document.getElementById("to-top");

  function onScroll() {
    var y = window.scrollY;
    if (header) header.classList.toggle("is-stuck", y > 24);
    if (toTop) toTop.classList.toggle("is-visible", y > 500);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    });
  }

  /* ------------------------------------------- link ativo na navegação -- */

  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  var sections = navLinks
    .map(function (a) {
      return document.querySelector(a.getAttribute("href"));
    })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (a) {
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) {
      spy.observe(s);
    });
  }

  /* -------------------------------------------- animação de entrada --- */

  var revealables = document.querySelectorAll(".reveal");

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealables.forEach(function (el) {
      el.classList.add("is-in");
    });
  } else {
    var revealer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry, i) {
          if (!entry.isIntersecting) return;
          setTimeout(function () {
            entry.target.classList.add("is-in");
          }, i * 70);
          obs.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
    );
    revealables.forEach(function (el) {
      revealer.observe(el);
    });
  }

  /* ------------------------------------------- filtro dos projetos ---- */

  var filters = document.querySelectorAll(".filter");
  var cards = document.querySelectorAll("#projects-grid .card");

  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var value = btn.dataset.filter;

      filters.forEach(function (b) {
        b.setAttribute("aria-pressed", String(b === btn));
      });

      cards.forEach(function (card) {
        var cats = (card.dataset.cat || "").split(" ");
        card.hidden = value !== "all" && cats.indexOf(value) === -1;
      });
    });
  });

  /* --------------------------------------------- virada dos cards ----- */
  /* Em telas de toque não existe hover, então o clique alterna o lado.
     Links do verso precisam abrir normalmente, sem virar o card de volta. */

  cards.forEach(function (card) {
    card.addEventListener("click", function (e) {
      if (e.target.closest("a")) return;
      card.classList.toggle("esta-virado");
    });
  });

  /* ------------------------------------------------- ano no rodapé ---- */

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* --------------------------------------------- fundo de partículas -- */
  /* Discreto de propósito: desligado em telas pequenas e com movimento
     reduzido, porque o custo de render não compensa nesses casos.         */

  function initParticles() {
    if (reducedMotion || isSmallScreen || typeof window.particlesJS !== "function") return;

    window.particlesJS("particles-js", {
      particles: {
        number: { value: 70, density: { enable: true, value_area: 900 } },
        color: { value: "#4ade80" },
        shape: { type: "circle" },
        opacity: { value: 0.7, random: true, anim: { enable: false } },
        size: { value: 2.4, random: true, anim: { enable: false } },
        line_linked: {
          enable: true,
          distance: 150,
          // Verde da marca em vez do cinza-azulado: sobre #030712 o cinza
          // praticamente desaparecia.
          color: "#4ade80",
          opacity: 0.25,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.7,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: false },
          resize: true
        },
        modes: { grab: { distance: 160, line_linked: { opacity: 0.6 } } }
      },
      retina_detect: true
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initParticles);
  } else {
    initParticles();
  }
})();
