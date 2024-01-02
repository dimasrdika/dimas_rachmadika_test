document.addEventListener("DOMContentLoaded", function () {
  const totalSlides = 3;
  let currentSlideIndex = 0;

  function showSlide(index) {
    for (let i = 0; i < totalSlides; i++) {
      const slide = document.getElementById(`slide${i + 1}`);
      if (i === index) {
        slide.style.display = "flex";
      } else {
        slide.style.display = "none";
      }
    }
  }

  function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    showSlide(currentSlideIndex);
  }

  function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentSlideIndex);
  }

  // Set initial state
  showSlide(currentSlideIndex);

  // Add event listeners for next and previous slide buttons
  document.getElementById("slide-next").addEventListener("click", nextSlide);
  document.getElementById("slide-prev").addEventListener("click", prevSlide);
});
