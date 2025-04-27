const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-in-section').forEach(section => {
  observer.observe(section);
});

(function() {
  const slidesEl = document.querySelector('.slider .slides');
  const slides   = Array.from(slidesEl.children);
  const prevBtn  = document.querySelector('.slider .prev');
  const nextBtn  = document.querySelector('.slider .next');
  let   index    = 0;
  const total    = slides.length;
  const interval = 5000;

  function goToSlide(i) {
    index = (i + total) % total;
    slidesEl.style.transform = `translateX(-${index * 100}%)`;
  }

  // auto-advance
  let timer = setInterval(() => goToSlide(index + 1), interval);

  // arrow controls
  prevBtn.addEventListener('click', () => {
    clearInterval(timer);
    goToSlide(index - 1);
    timer = setInterval(() => goToSlide(index + 1), interval);
  });
  nextBtn.addEventListener('click', () => {
    clearInterval(timer);
    goToSlide(index + 1);
    timer = setInterval(() => goToSlide(index + 1), interval);
  });
})();