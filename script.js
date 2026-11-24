
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
