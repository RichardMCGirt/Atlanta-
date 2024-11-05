// Automatically close modal if open on page load
document.addEventListener("DOMContentLoaded", () => {
    closeModal();
  });
  
// Track current slide for each carousel
const currentSlides = {
    carousel1: 0,
    carousel2: 0
  };
  
  // Function to show the specified slide in a specific carousel
  function showSlide(carouselId, index) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) {
      console.error(`Carousel with ID ${carouselId} not found.`);
      return;
    }
  
    const slides = carousel.querySelectorAll('.carousel-item');
    const slideCount = slides.length;
  
    // Wrap around if index is out of bounds
    if (index >= slideCount) {
      currentSlides[carouselId] = 0;
    } else if (index < 0) {
      currentSlides[carouselId] = slideCount - 1;
    } else {
      currentSlides[carouselId] = index;
    }
  
    // Shift carousel inner to show the current slide
    carousel.querySelector('.carousel-inner').style.transform = `translateX(-${currentSlides[carouselId] * 100}%)`;
  }
  
  // Functions to move to the next or previous slide in a specific carousel
  function nextSlide(carouselId) {
    showSlide(carouselId, currentSlides[carouselId] + 1);
  }
  
  function prevSlide(carouselId) {
    showSlide(carouselId, currentSlides[carouselId] - 1);
  }
  
  // Initialize both carousels to show the first slide
  showSlide('carousel1', 0);
  showSlide('carousel2', 0);
  
  // Modal handling functions (unchanged)
  function openModal(element) {
    console.log("openModal triggered");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
  
    modalImg.src = element.src;
    modal.style.display = "flex";
    document.addEventListener("keydown", handleEscape);
  }
  
  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
    document.removeEventListener("keydown", handleEscape);
  }
  
  document.getElementById("imageModal").addEventListener("click", function (event) {
    const modalImg = document.getElementById("modalImage");
    if (event.target !== modalImg) {
      closeModal();
    }
  });
  
  function handleEscape(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }
  
  // Automatically close modal if open on page load
  document.addEventListener("DOMContentLoaded", () => {
    closeModal();
  });
  