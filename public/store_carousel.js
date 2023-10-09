const btn_width = 200; //pixels
const item_margins = 20; // pixels

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const content = document.querySelector('.carousel-content');

let visibleItems = 3;
let currentSlide = 0;

document.documentElement.style.setProperty('--visibleItems', visibleItems);
document.documentElement.style.setProperty('--btn_width', btn_width);

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      // If already at the beginning, wrap around to the end.
      currentSlide = content.children.length - 1;
    }
    updateCarousel();
  });
  
  nextButton.addEventListener('click', () => {
    if (currentSlide < (content.children.length) - 1) {
      currentSlide++;
    } else {
      // If already at the end, wrap around to the beginning.
      currentSlide = 0;
    }
    updateCarousel();
  });
  
  function updateCarousel() {
    const flexboxWidth = window.innerWidth;
    const offset = -currentSlide*((flexboxWidth - 2*btn_width) / visibleItems + item_margins);
    content.style.transform = `translateX(${offset}px)`;
  }