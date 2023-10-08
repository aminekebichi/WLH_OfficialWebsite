const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const content = document.querySelector('.carousel-content');

let currentSlide = 0;

prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarousel();
  }
});

nextButton.addEventListener('click', () => {
  if (currentSlide < (content.children.length / 2) - 1) {
    currentSlide++;
    updateCarousel();
  }
});

function updateCarousel() {
  const offset = -currentSlide * 50; // 50vw per 2 items
  content.style.transform = `translateX(${offset}vw)`;
}