const carouselContainer = document.querySelector('.carousel-container');
const indicators = document.querySelectorAll('.indicator');
const prevArrow = document.querySelector('.carousel-arrow.prev');
const nextArrow = document.querySelector('.carousel-arrow.next');

let currentIndex = 0;

function goToSlide(index) {
  carouselContainer.style.transform = `translateX(-${index * 100}%)`;
}

function setActiveIndicator(index) {
  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function goToPrevSlide() {
  currentIndex = (currentIndex - 1 + indicators.length) % indicators.length;
  goToSlide(currentIndex);
  setActiveIndicator(currentIndex);
}

function goToNextSlide() {
  currentIndex = (currentIndex + 1) % indicators.length;
  goToSlide(currentIndex);
  setActiveIndicator(currentIndex);
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    goToSlide(currentIndex);
    setActiveIndicator(currentIndex);
  });
});

prevArrow.addEventListener('click', goToPrevSlide);
nextArrow.addEventListener('click', goToNextSlide);

setActiveIndicator(currentIndex);


