const sliderType = new Swiper('.js-slider-type', {
  loop: false,
  spaceBetween: 32,
  freeMode: true,
  slidesPerView: 'auto',
  observer: true,
  watchOverflow: true,

  navigation: {
    nextEl: '.js-slider-type .slider-type__nav--next',
    prevEl: '.js-slider-type .slider-type__nav--prev',
    hiddenClass: ".hidden",
  },
});

// sliderType.on('slideChange', function () {
//   sliderType.navigation.nextEl.classList.remove('hidden');
//   sliderType.navigation.prevEl.classList.remove('hidden');
// });
sliderType.on('reachEnd', function () {
  sliderType.navigation.nextEl.classList.add('hidden');
  sliderType.navigation.prevEl.classList.remove('hidden');
});

sliderType.on('reachBeginning', function () {
  sliderType.navigation.prevEl.classList.add('hidden');
  sliderType.navigation.nextEl.classList.remove('hidden');
});

