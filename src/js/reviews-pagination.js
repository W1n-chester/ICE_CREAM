var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  var i;
  var sliderContainer = document.querySelector('#customer-reviews');

  var slides = sliderContainer.querySelectorAll('.slider__item');
  var dots = sliderContainer.querySelectorAll('.dots');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach(slide => (slide.style.display = 'none'));

  dots.forEach(dot => dot.classList.remove('active'));

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
}

var listElements = document.querySelectorAll('.slider-dots__item');

var sliderNext = document.querySelector('.sliderNext');
var sliderPrev = document.querySelector('.sliderPrev');

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

/* //supposed to hide part of pagination dots
Vue.component('pagination', {
  template: '#pagination',
  props: {
    total: {
      type: Number,
      default: 0,
    },
    current: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 4,
      coerce: function (limit) {
        return limit - 1;
      },
    },
  },
  data: function () {
    return {
      show: false,
    };
  },
  computed: {
    pages: function () {
      var pages = [];

      for (var i = 1; i <= this.total; i++) {
        pages.push(i);
      }

      return pages;
    },
    links: function () {
      var first = [1, '...'],
        last = ['...', this.total],
        range = [];

      if (this.current <= this.limit) {
        range = this.range(1, this.limit + 1);

        return this.current + range.length <= this.total
          ? range.concat(last)
          : range;
      } else if (this.current > this.total - this.limit) {
        range = this.range(this.total - this.limit, this.total);

        return this.current - range.length >= 1 ? first.concat(range) : range;
      } else {
        range = this.range(
          this.current - Math.ceil(this.limit / 2),
          this.current + Math.ceil(this.limit / 2)
        );

        return first.concat(range).concat(last);
      }
    },
    next: function () {
      var next = this.current + 1;

      return next <= this.total ? next : false;
    },
    prev: function () {
      return this.current - 1;
    },
    show: function () {
      return this.next || this.prev;
    },
  },
  methods: {
    range: function (start, end) {
      var pages = [];

      for (var i = start - 1; i < end; i++) {
        if (this.pages[i]) {
          pages.push(this.pages[i]);
        }
      }

      return pages;
    },
    go: function (page) {
      if (isNaN(page)) {
        return;
      }

      this.$dispatch('paginate:to', page);
    },
  },
});

new Vue({
  el: '#app',
  data: {
    total: 20,
    current: 1,
    limit: 4,
  },
  methods: {
    setCurrent: function (page) {
      this.current = page;
    },
  },
});
 */
