// Automatically close modal if open on page load
document.addEventListener("DOMContentLoaded", () => {
    closeModal();
  });
  

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
  // Wrap around if index is out of bounds
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  
  // Shift carousel inner to show the current slide
  document.querySelector('.carousel-inner').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Functions to move to the next or previous slide
function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Open the modal and set the image source
function openModal(element) {
    console.log("openModal triggered");  // Debugging line
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
  
    modalImg.src = element.src;
    modal.style.display = "flex";
  
    document.addEventListener("keydown", handleEscape);
  }
  
  
  // Close the modal
  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
  
    // Remove the Escape key listener
    document.removeEventListener("keydown", handleEscape);
  }
  
  // Close modal when clicking outside the image
  document.getElementById("imageModal").addEventListener("click", function (event) {
    const modalImg = document.getElementById("modalImage");
    if (event.target !== modalImg) {
      closeModal();
    }
  });
  
  // Handle Escape key to close modal
  function handleEscape(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }
  
  
  

// Initialize the first slide
showSlide(currentSlide);


