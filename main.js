document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.getElementById("menuIcon");
  const closeIcon = document.getElementById("closeIcon");
  const mobileLinks = mobileMenu.querySelectorAll(".mobile-link");

  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("translate-x-0");
    if (isOpen) {
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("-translate-x-full");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    } else {
      mobileMenu.classList.remove("-translate-x-full");
      mobileMenu.classList.add("translate-x-0");
      menuIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("-translate-x-full");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    });
  });
});

// IntersectionObserver for Coming Soon
/* const hero = document.getElementById("hero");
const comingSoon = document.getElementById("comingSoon");
const comingLink = comingSoon.querySelector("a");

if (hero && comingSoon) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          comingSoon.classList.remove("hidden");
          comingLink.classList.remove("opacity-0","-translate-y-3","pointer-events-none");
          comingLink.classList.add("opacity-100","translate-y-0");
        } else {
          comingSoon.classList.add("hidden");
          comingLink.classList.add("opacity-0","-translate-y-3","pointer-events-none");
          comingLink.classList.remove("opacity-100","translate-y-0");
        }
      });
    },
    { threshold: 0.5 }
  );
  observer.observe(hero);
}
 */