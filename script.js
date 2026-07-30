/* =======================================================
   LOUP-GAROU MINECRAFT
   Script.js
======================================================= */

/* ================= THEME ================= */

const themeButton = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");

  if (themeButton) {
    themeButton.textContent = "☀️";
  }
}

themeButton?.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  themeButton.textContent = isDark ? "☀️" : "🌙";

  localStorage.setItem("theme", isDark ? "dark" : "light");
});

/* ================= SCROLL ANIMATION ================= */

const animatedElements = document.querySelectorAll(
  ".fade, .slide-left, .slide-right",
);

const animationObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        animationObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

animatedElements.forEach((element) => {
  animationObserver.observe(element);
});

/* ================= HEADER SCROLL ================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header?.classList.add("scrolled");
  } else {
    header?.classList.remove("scrolled");
  }
});

/* ================= COPY IP ================= */

const copyButton = document.querySelector(".copy-ip");

copyButton?.addEventListener("click", () => {
  const ip = copyButton.dataset.ip;

  navigator.clipboard.writeText(ip).then(() => {
    const oldText = copyButton.textContent;

    copyButton.textContent = "Copié !";

    setTimeout(() => {
      copyButton.textContent = oldText;
    }, 1500);
  });
});

/* ================= BACK TO TOP ================= */

const backTop = document.getElementById("back-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backTop?.classList.add("show");
  } else {
    backTop?.classList.remove("show");
  }
});

backTop?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

/* ================= SYSTEM THEME ================= */

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

if (!localStorage.getItem("theme") && systemTheme.matches) {
  document.body.classList.add("dark");

  if (themeButton) {
    themeButton.textContent = "☀️";
  }
}

/* ================= IMAGE LAZY LOAD ================= */

document.querySelectorAll("img").forEach((img) => {
  img.loading = "lazy";
});

/* ================= SMOOTH LINKS ================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const menuButton = document.querySelector(".menu-toggle");

const nav = document.querySelector("nav");

menuButton?.addEventListener("click", () => {
  nav.classList.toggle("active");

  menuButton.textContent = nav.classList.contains("active") ? "✕" : "☰";
});

// Fermer le menu après avoir cliqué

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");

    menuButton.textContent = "☰";
  });
});
