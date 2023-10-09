const btn_width = 200; //pixels
const margin_width = 20; //pixels

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
    const flexboxWidth = window.innerWidth;
    // Calculate the total margin which is 2 (left and right) * 20px * number of elements
    const totalMargin = 2 * 20 * content.children.length;

    const offset = -currentSlide*((flexboxWidth - totalMargin) / content.children.length);
    content.style.transform = `translateX(${offset}px)`;
  }