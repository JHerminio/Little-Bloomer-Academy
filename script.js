document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Hamburger Menu toggle Logic ---
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Open/Close menu when clicking the hamburger
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close menu automatically when clicking any link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // --- Scroll Reveal Logic ---
  const revealElements = document.querySelectorAll(".reveal");
  const safeReveal = () => {
    const bottomTrigger = window.innerHeight * 0.85;
    revealElements.forEach((el) => {
      if (el.getBoundingClientRect().top < bottomTrigger) {
        el.classList.add("active");
      }
    });
  };
  window.addEventListener("scroll", safeReveal);
  safeReveal(); // Run once initially


});
