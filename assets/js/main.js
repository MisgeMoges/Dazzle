// document.addEventListener("DOMContentLoaded", function () {
//   const hamburger = document.querySelector(".hamburger");
//   const menubar = document.querySelector(".menubar");
//   const overlay = document.querySelector(".overlay");

//   if (hamburger && menubar && overlay) {
//     hamburger.addEventListener("click", () => {
//       menubar.classList.toggle("active");
//       overlay.classList.toggle("active");
//       hamburger.classList.toggle("active"); // Optional: Add a class to change hamburger lines on click
//     });

//     overlay.addEventListener("click", () => {
//       menubar.classList.remove("active");
//       overlay.classList.remove("active");
//       hamburger.classList.remove("active");
//     });
//   } else {
//     console.error("Hamburger, menubar, or overlay element not found.");
//   }
// });

function toggleMenu() {
  const menubar = document.querySelector(".menubar");
  const overlay = document.querySelector(".overlay");
  const hamburger = document.querySelector(".hamburger");

  menubar.classList.toggle("active");
  overlay.classList.toggle("active");
  hamburger.setAttribute(
    "aria-expanded",
    hamburger.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );

  // Close menu when a link is clicked
  const links = document.querySelectorAll(".menubar ul li a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menubar.classList.remove("active");
      overlay.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}
