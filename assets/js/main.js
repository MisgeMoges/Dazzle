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

const slider = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".dot");
const sliderContainer = document.querySelector(".carousel-container");

let currentIndex = 0; // Tracks the current slide index
let autoSlideInterval; // Will hold the interval ID for auto-sliding

// Function to update the active dot indicator
function updateDots() {
  dots.forEach((dot, index) => {
    console.log(dot, index);
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Function to display a specific slide based on the index
function showSlides(index) {
  if (index >= slides.length) {
    currentIndex = 0; // Reset to first slide if at the end
  } else if (index < 0) {
    currentIndex = slides.length - 1; // Go to last slide if at the beginning
  } else {
    currentIndex = index; // Otherwise, set to the provided index
  }
  slider.style.transform = `translateX(-${currentIndex * 100}%)`; // Slide transition
  updateDots(); // Update the dots to reflect the current slide
}

// Function to move to the next slide
function nextSlide() {
  showSlides(currentIndex + 1);
}

// Function to move to the previous slide
function prevSlide() {
  showSlides(currentIndex - 1);
}

// Start the automatic sliding of images
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 4000); // Slide every 4 seconds
}

// Stop the automatic sliding
function stopAutoSlide() {
  clearInterval(autoSlideInterval); // Clear the interval
}

// Add click event listeners to dots for direct slide navigation
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    stopAutoSlide(); // Stop auto-slide when manually selecting a slide
    showSlides(parseInt(dot.dataset.index)); // Show the selected slide
    startAutoSlide(); // Restart auto-slide
  });
});

// Add event listeners for navigation buttons
// nextBtn.addEventListener("click", nextSlide);
// prevBtn.addEventListener("click", prevSlide);

// Stop auto-slide when the mouse enters the slider container
// sliderContainer.addEventListener("mouseover", stopAutoSlide);

// Restart auto-slide when the mouse leaves the slider container
// sliderContainer.addEventListener("mouseout", startAutoSlide);

// Start auto-slide when the page loads
startAutoSlide();
updateDots(); //

// Category data
const categories = {
  graphic: [
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/01 PRINT DESIGN/01 Roll_up_Mockup Print_.jpg",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/01 PRINT DESIGN/02 Banner_Frame_Stand_Mockup_.jpg",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/01 PRINT DESIGN/03 Roll_up_Mockup_.png",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/01 PRINT DESIGN/04 Billboard_Mockup.png",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/01 PRINT DESIGN/05 Book_Mockup_A.jpg",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/01 PRINT DESIGN/06 Book_Mockup_A Inside.jpg",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/01 PRINT DESIGN/07 Magazine Mockup.jpg",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/01 PRINT DESIGN/08 Magazine Mockup B.jpg",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/02 DIGITAL DESIGN/01 Raise Your Glass!.png",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/02 DIGITAL DESIGN/Float With Smile.png",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/02 DIGITAL DESIGN/Tolip- African Event SM (2).png",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/02 DIGITAL DESIGN/when was your last trip.png",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/03 STATIONERY DESIGN/01 Desk_Calendar_Mockup_1.jpg",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/03 STATIONERY DESIGN/03 Mousepad_Mockup_1.jpg",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/03 STATIONERY DESIGN/04 Folder_Mockup_2.jpg",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/03 STATIONERY DESIGN/05 Folder_Mockup_1.jpg",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/03 STATIONERY DESIGN/06 Coaster_Mockup_1.jpg",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/04 MARKETING COLLATERAL DESIGN/01 Total Brochure_Mockup cover.png",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/04 MARKETING COLLATERAL DESIGN/02 Total Brochure_Mockup inside.png",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/04 MARKETING COLLATERAL DESIGN/03 Brochure-Mockup Marketing.jpg",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/04 MARKETING COLLATERAL DESIGN/04 Square_Trifold_Brochure_Mockup_1.jpg",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/04 MARKETING COLLATERAL DESIGN/05 Flyer_Mockup_A.jpg",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/04 MARKETING COLLATERAL DESIGN/06 Flyer_Mockup_B.jpg",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/04 MARKETING COLLATERAL DESIGN/07 Flyer_Mockup.png",
      alt: "Graphic Design 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/01 GRAPHIC DESIGN/04 MARKETING COLLATERAL DESIGN/08 Door_Hanger Menu_Mockup.png",
      alt: "Graphic Design 1",
    },
  ],
  branding: [
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/01 LOGO DESIGN/BRANDING-01.png",
      alt: "Branding 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/01 LOGO DESIGN/BRANDING-02.png",
      alt: "Branding 2",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/01 LOGO DESIGN/BRANDING-03.png",
      alt: "Branding 2",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/01 LOGO DESIGN/BRANDING-04.png",
      alt: "Branding 2",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/02 EVENT COLLATERAL/01 Roll_up_Mockup_.jpg",
      alt: "Branding 2",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/02 EVENT COLLATERAL/02 SM.png",
      alt: "Branding 2",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/02 EVENT COLLATERAL/03 Brochure-Mockup.jpg",
      alt: "Branding 2",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/02 EVENT COLLATERAL/04 Pen Mockup.png",
      alt: "Branding 2",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/02 EVENT COLLATERAL/05 T-Shirt_Mockup_1.jpg",
      alt: "Branding 2",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/02 EVENT COLLATERAL/06 Maleda Award-01.png",
      alt: "Branding 2",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/03 PACKAGING DESIGN/01 Paint_Can_Mockup_1.jpg",
      alt: "Branding 2",
    },
    {
      src: "/assets/images/02 PORTFOLIO/02 BRANDING/03 PACKAGING DESIGN/02 ELGEL Cake Box Mockup B Updated.jpg",
      alt: "Branding 2",
    },
  ],
  dazzle: [
    {
      src: "/assets/images/02 PORTFOLIO/03 DAZZLE’S SPECIAL/01 Anniversary Digital Postcard 1.png",
      alt: "Dazzle Special 1",
    },
    {
      src: "/assets/images/02 PORTFOLIO/03 DAZZLE’S SPECIAL/02 Birthday Digital Postcard 1.png",
      alt: "Dazzle Special 2",
    },
    {
      src: "/assets/images/02 PORTFOLIO/03 DAZZLE’S SPECIAL/03 Anniversary Digital Postcard 1.png",
      alt: "Dazzle Special 3",
    },
    {
      src: "/assets/images/02 PORTFOLIO/03 DAZZLE’S SPECIAL/04 Amh Birthday Digital Postcard 1.png",
      alt: "Dazzle Special 3",
    },
  ],
};

// Function to display a category
function showCategory(category) {
  const contentDiv = document.getElementById("content");
  const headerDiv = document.getElementById("header");
  // Generate category-specific HTML
  const categoryImages = categories[category]
    .map(
      (item) => `
        <div class="image-item">
          <img src="${item.src}" alt="${item.alt}" />
        </div>
      `
    )
    .join("");

  // Add buttons to switch categories
 const categoryButtons = `
  <div class="category-buttons">
    <span data-category="graphic" class="button">Graphic Design</span>
    <span class="vertical-bar"></span>
    <span data-category="branding" class="button">Branding</span>
    <span class="vertical-bar"></span>
    <span data-category="dazzle" class="button">Dazzle’s Special</span>
  </div>
`;
let categoryTitle = "";
  if (category === "graphic") {
    categoryTitle = "Graphic Design";
  } else if (category === "branding") {
    categoryTitle = "Branding";
  } else if (category === "dazzle") {
    categoryTitle = "Dazzle Special";
  }

  // Generate the title and category-specific HTML
  const title = `<div class="category-title"><h1>${categoryTitle}</h1></div>`;
  headerDiv.innerHTML = `<div class="portfolio-section">${categoryButtons}</div>`;
  // Update the content
    contentDiv.innerHTML = `
    <div class="image-section">
      ${title}
      <div class="image-gallery">${categoryImages}</div>
    </div>
  `;

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
   if (target.closest(".button")) {
     const category = target
       .closest(".button")
       .getAttribute("data-category");
     if (category) {
       showCategory(category);
     }
   }
});
