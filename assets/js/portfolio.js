// Category data
const categories = {
  graphic: [
    { src: "/assets/images/graphic1.jpg", alt: "Graphic Design 1" },
    { src: "/assets/images/graphic2.jpg", alt: "Graphic Design 2" },
    { src: "/assets/images/graphic3.jpg", alt: "Graphic Design 3" },
  ],
  branding: [
    { src: "/assets/images/branding1.jpg", alt: "Branding 1" },
    { src: "/assets/images/branding2.jpg", alt: "Branding 2" },
    { src: "/assets/images/branding3.jpg", alt: "Branding 3" },
  ],
  dazzle: [
    { src: "/assets/images/dazzle1.jpg", alt: "Dazzle Special 1" },
    { src: "/assets/images/dazzle2.jpg", alt: "Dazzle Special 2" },
    { src: "/assets/images/dazzle3.jpg", alt: "Dazzle Special 3" },
  ],
};

// Function to display a category
function showCategory(category) {
  const contentDiv = document.getElementById("content");

  // Generate category-specific HTML
  const categoryImages = categories[category]
    .map(
      (item) => `
        <div class="image-item">
          <img src="${item.src}" alt="${item.alt}" />
          <p>${item.alt}</p>
        </div>
      `
    )
    .join("");

  // Add buttons to switch categories
  const categoryButtons = `
    <div class="category-buttons">
      <button data-category="graphic">Graphic Design</button>
      <button data-category="branding">Branding</button>
      <button data-category="dazzle">Dazzle’s Special</button>
    </div>
  `;

  // Update the content
  contentDiv.innerHTML =
    `<div class="portfolio-section">${categoryButtons}</div>` +
    `<div class="image-gallery">${categoryImages}</div>`;
}

// Event listener for category clicks (event delegation)
document.addEventListener("click", function (event) {
  const target = event.target;

  // Check if an image item was clicked and has a data-category attribute
  if (target.closest(".image-item")) {
    const category = target
      .closest(".image-item")
      .getAttribute("data-category");
    if (category) {
      showCategory(category);
    }
  }
});
