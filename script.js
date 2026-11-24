
/* =========================================
   GTA VI PC WEBSITE
   JavaScript Functionality
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  // 01. NAVIGATION SCROLL EFFECT

  const header = document.querySelector(".site-header");

  function handleHeaderScroll() {
    if (!header) return;

    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleHeaderScroll, {
    passive: true
  });

  handleHeaderScroll();


  // 02. SCROLL REVEAL ANIMATIONS

  const revealElements = document.querySelectorAll(
    ".hero-content, .hero-image, .about-section, .features-section, .feature-card"
  );

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach(element => {
      element.classList.add("reveal");
      observer.observe(element);
    });

  } else {

    revealElements.forEach(element => {
      element.classList.add("visible");
    });

  }


  // 03. BACK TO TOP BUTTON

  const topButton = document.createElement("button");

  topButton.className = "back-to-top";
  topButton.type = "button";
  topButton.textContent = "↑";
  topButton.setAttribute("aria-label", "Back to top");

  document.body.appendChild(topButton);

  function handleTopButton() {

    topButton.classList.toggle(
      "show",
      window.scrollY > 400
    );

  }

  window.addEventListener("scroll", handleTopButton, {
    passive: true
  });

  handleTopButton();

  topButton.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });


  // 04. CURRENT YEAR

  const yearElements = document.querySelectorAll("[data-current-year]");

  yearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
  });


  console.log("GTA VI PC website initialized successfully.");

});


/* =========================================
   20. RESPONSIVE MOBILE NAVIGATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.querySelector(
    ".mobile-menu-toggle"
  );

  const primaryNav = document.querySelector(
    "#primary-navigation"
  );

  if (!menuToggle || !primaryNav) return;

  function closeMenu() {
    primaryNav.classList.remove("is-open");
    menuToggle.classList.remove("is-active");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      "Open navigation menu"
    );
  }

  menuToggle.addEventListener("click", function () {

    const isOpen = primaryNav.classList.toggle("is-open");

    menuToggle.classList.toggle(
      "is-active",
      isOpen
    );

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen
        ? "Close navigation menu"
        : "Open navigation menu"
    );

  });

  // Close menu after clicking a navigation link

  primaryNav.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", closeMenu);

  });

  // Close menu with Escape key

  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
      closeMenu();
    }

  });

  // Close menu when returning to desktop layout

  window.addEventListener("resize", function () {

    if (window.innerWidth > 700) {
      closeMenu();
    }

  });

});
