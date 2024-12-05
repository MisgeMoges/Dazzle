// Select carousel and dots
const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');

// Initialize the current index
let currentIndex = 0;

// Function to update the carousel position and active dot
function updateCarousel(index) {
  const offset = -index * 100; // Each slide takes 100% of the container width
  carousel.style.transform = `translateX(${offset}%)`;

  // Update dot states
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Event listeners for dots
dots.forEach((dot, index) => {
  // On hover, update the carousel
  dot.addEventListener('mouseover', () => {
    currentIndex = index;
    updateCarousel(index);
  });

  // On click, also update the carousel
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel(index);
  });
});

// Optional: Auto-slide functionality
setInterval(() => {
  currentIndex = (currentIndex + 1) % dots.length; // Loop through slides
  updateCarousel(currentIndex);
}, 5000); // Slide every 5 seconds
