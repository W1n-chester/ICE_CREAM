var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  var i;
  var sliderContainer = document.querySelector('#gallery');

  var slides = sliderContainer.querySelectorAll('.galery__slide');
  var lines = sliderContainer.querySelectorAll('.galery__bar');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach(slide => (slide.style.display = 'none'));

  lines.forEach(line => line.classList.remove('checked'));

  slides[slideIndex - 1].style.display = 'block';
  lines[slideIndex - 1].classList.add('checked');
}

var listElements = document.querySelectorAll('.galery__bar');

var sliderNext = document.querySelector('.sliderAfter');
var sliderPrev = document.querySelector('.sliderBefore');

listElements.forEach(function (item) {
  item.addEventListener('click', function (event) {
    let num = Number(event.currentTarget.getAttribute('data-number'));
    if (isNaN(num)) num = 1;
    showSlides((slideIndex = num));
  });
});

sliderNext.addEventListener('click', function (event) {
  showSlides((slideIndex = slideIndex + 1));
});

sliderPrev.addEventListener('click', function (event) {
  showSlides((slideIndex = slideIndex - 1));
});

//add auto turn over slides
setTimeout(function turnNext() {
  showSlides((slideIndex += 1));
  setTimeout(turnNext, 10000);
}, 10000);
