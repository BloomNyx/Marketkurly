document.addEventListener("DOMContentLoaded", function () {
  const sliderCon = document.querySelector('.slider-con');
  const slides = document.querySelectorAll('.slider-con li');
  const totalSlides = slides.length;
  const prevBtn = document.querySelector('.arrow.prev');
  const nextBtn = document.querySelector('.arrow.next');

  const currentEl = document.querySelector('.current');
  const totalEl = document.querySelector('.total');
  const playPauseBtn = document.querySelector('.play-pause-btn');

  let currentIndex = 0;
  let autoSlide = true;
  let interval;

  totalEl.textContent = totalSlides.toString().padStart(2, '0');

  function moveToSlide(index) {
    sliderCon.style.transform = `translateX(-${index * 100}%)`;
    currentEl.textContent = (index + 1).toString().padStart(2, '0');
  }

  function startAutoSlide() {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      moveToSlide(currentIndex);
    }, 5000);
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  playPauseBtn.addEventListener('click', () => {
    autoSlide = !autoSlide;
    if (autoSlide) {
      playPauseBtn.textContent = '⏸';
      startAutoSlide();
    } else {
      playPauseBtn.textContent = '▶';
      stopAutoSlide();
    }
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    moveToSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    moveToSlide(currentIndex);
  });

  moveToSlide(currentIndex);
  startAutoSlide();
});
