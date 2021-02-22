"use strict";

var sliderType = new Swiper('.js-slider-type', {
  loop: false,
  spaceBetween: 32,
  freeMode: true,
  slidesPerView: 'auto',
  // Navigation arrows
  navigation: {
    nextEl: '.js-slider-type .slider-type__nav--next',
    prevEl: '.js-slider-type .slider-type__nav--prev'
  }
});
var collapseButton = document.querySelectorAll('.js-collapse-button');
collapseButton.forEach(function (item) {
  var parentCollapseButton = item.parentNode.parentNode;
  if (!parentCollapseButton) return;
  item.addEventListener('click', function (e) {
    e.preventDefault();
    parentCollapseButton.classList.toggle('hide-collapse');
  }, false);
});
var filters = document.querySelectorAll('.js-filters');
filters.forEach(function (f) {
  var fTabs = f.querySelectorAll('.js-filters-tab');
  var fElements = f.querySelectorAll('.js-filters-element');
  if (!fTabs && !fElements) return;
  fTabs.forEach(function (tab) {
    var tag = tab.getAttribute('data-filter');
    if (!tag) return;
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      fTabs.forEach(function (t) {
        if (t === tab) {
          t.classList.add('active');
        } else {
          t.classList.remove('active');
        }
      });
      fElements.forEach(function (el) {
        var tags = el.getAttribute('data-filter').split(',');

        if (tag === 'all') {
          el.classList.remove('hide-filter');
          return;
        }

        if (tags.includes(tag)) {
          el.classList.remove('hide-filter');
        } else {
          el.classList.add('hide-filter');
        }
      });
    });
  });
  fTabs[0].click();
});