const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const content = document.querySelector('.carousel-content');

let currentSlide = 0;

prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    // If already at the beginning, wrap around to the end.
    currentSlide = (content.children.length / 2) - 1;
  }
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  if (currentSlide < (content.children.length / 2) - 1) {
    currentSlide++;
  } else {
    // If already at the end, wrap around to the beginning.
    currentSlide = 0;
  }
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentSlide * 50; // 50vw per 2 items
  content.style.transform = `translateX(${offset}vw)`;
}
