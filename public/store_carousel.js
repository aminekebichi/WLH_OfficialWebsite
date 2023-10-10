const btn_width = 200; //pixels
const item_margins = 40; // pixels
const carouselPadding = 80; //pixels

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const content = document.querySelector('.carousel-content');

let visibleItems = 3;
let currentSlide = 0;

updateCarousel();

document.documentElement.style.setProperty('--visibleItems', visibleItems);
document.documentElement.style.setProperty('--btn_width', btn_width);
document.documentElement.style.setProperty('--item_margins', item_margins);

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
    const flexboxWidth = window.innerWidth - carouselPadding;
    const itemWidth = (flexboxWidth - 2 * btn_width) / visibleItems;
    const offset = -currentSlide * itemWidth;

    // Apply the transform with a smooth transition
    content.style.transition = 'transform 0.3s ease';
    content.style.transform = `translateX(${offset}px)`;

    // Check if we've reached the end of the carousel (right side)
    if (currentSlide >= content.children.length - visibleItems) {
        nextButton.disabled = true; // Disable "next" button
    } else {
        nextButton.disabled = false; // Enable "next" button
    }

    // Check if we've reached the beginning of the carousel (left side)
    if (currentSlide <= 0) {
        prevButton.disabled = true; // Disable "prev" button
    } else {
        prevButton.disabled = false; // Enable "prev" button
    }
}

const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.addEventListener('mouseenter', () => {
    // Enable scrolling when mouse enters the carousel container
    enableCarouselScrolling();
});

carouselContainer.addEventListener('mouseleave', () => {
    // Disable scrolling when mouse leaves the carousel container
    disableCarouselScrolling();
});

let isScrollingEnabled = false;

function enableCarouselScrolling() {
    isScrollingEnabled = true;
}

function disableCarouselScrolling() {
    isScrollingEnabled = false;
}

carouselContainer.addEventListener('wheel', (event) => {
  if (isScrollingEnabled) {
      event.preventDefault();
      if (event.deltaY > 0) {
          // Scroll down
          scrollNext();
      } else {
          // Scroll up
          scrollPrev();
      }
  }
  
  // Capture scroll velocity for momentum
  scrollingVelocity = event.deltaY;
  isScrolling = true;
});

// Add an animation frame to handle momentum scrolling
function animateMomentumScroll() {
  if (isScrolling && Math.abs(scrollingVelocity) > 0.01) {
      currentSlide += (scrollingVelocity / 100); // Adjust the divisor to control momentum speed
      updateCarousel();
      scrollingVelocity *= 0.9; // Adjust this value to control momentum decay
      requestAnimationFrame(animateMomentumScroll);
  } else {
      isScrolling = false;
  }
}

const scrollSpeed = 0.25; // Adjust this value to control initial scroll speed
let scrollingVelocity = 0;
let isScrolling = false;

function scrollNext() {
    if (currentSlide < content.children.length - visibleItems) {
        currentSlide += scrollSpeed; // Increment by scrollSpeed
        updateCarousel();
    }
}

function scrollPrev() {
    if (currentSlide > 0) {
        currentSlide -= scrollSpeed; // Decrement by scrollSpeed
        updateCarousel();
    }
}