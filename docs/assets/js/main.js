"use strict";

// $('.js-header__menu_mobile').on('click', function(e) {
//   changeButton();
//   e.stopPropagation();
//   headerMenu();
// });
//
// $('.header__row_mobile-menu .nav__link').on('click', function(e) {
//   changeButton();
//   headerMenu();
// });
//
// function headerMenu() {
//   $('html').toggleClass('noscroll');
//   $('.header').removeClass('active');
//   $('.js-headerNav').toggleClass('display');
//   $('.js-headerMobileMenu').toggleClass('display');
//   $('.js-headerMobileBottom').toggleClass('display');
//   $('.js-headerTop').toggleClass('header__row_dark');
// };
// function changeButton() {
//   $('#burger').toggleClass('hidden');
//   $('#burgerClose').toggleClass('hidden');
// };
$(".js-openHeader").click(function () {
  headerMenu();
});

function headerMenu() {
  $('html').toggleClass('noscroll');
  $('#header_mobile').toggleClass('active');
  $('.header').toggleClass('black');
}

;
var sliderType = new Swiper('.js-slider-type', {
  loop: false,
  spaceBetween: 32,
  freeMode: true,
  slidesPerView: 'auto',
  observer: true,
  watchOverflow: true,
  navigation: {
    nextEl: '.js-slider-type .slider-type__nav--next',
    prevEl: '.js-slider-type .slider-type__nav--prev',
    hiddenClass: ".hidden"
  }
}); // sliderType.on('slideChange', function () {
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
var collapseButton = document.querySelectorAll('.js-collapse-button');
collapseButton.forEach(function (item) {
  var parentCollapseButton = item.parentNode.parentNode;
  if (!parentCollapseButton) return;
  item.addEventListener('click', function (e) {
    e.preventDefault();
    item.classList.toggle('rotated');
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
var tabs = document.querySelectorAll('.js-tabs');
tabs.forEach(function (item) {
  var tabs = item.querySelectorAll('.js-tabs-tab');
  var panels = item.querySelectorAll('.js-tabs-panel');
  if (!tabs && !panels) return;
  tabs.forEach(function (t, index) {
    t.addEventListener('click', function (e) {
      e.preventDefault();
      if (!panels[index]) return;
      tabs.forEach(function (tab) {
        if (t === tab) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
      panels.forEach(function (p, idx) {
        if (index === idx) {
          p.classList.remove('hide-tabs-panel');
        } else {
          p.classList.add('hide-tabs-panel');
        }
      });
    });
  });
  tabs[0].click();
});
var faqs = document.querySelectorAll('.js-faq');
faqs.forEach(function (faq) {
  var btns = faq.querySelectorAll('.js-faq-button');
  var isAccordion = faq.getAttribute('data-faq');
  btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      btn.classList.toggle('rotated');

      if (isAccordion && isAccordion === 'accordion') {
        btns.forEach(function (b) {
          if (b === btn) {
            b.nextElementSibling.classList.toggle('hide-faq');
          } else {
            b.nextElementSibling.classList.add('hide-faq');
          }
        });
      } else {
        btn.nextElementSibling.classList.toggle('hide-faq');
      }
    });
  });
});
var videos = document.querySelectorAll('.js-video');
videos.forEach(function (video) {
  var btns = video.querySelectorAll('.js-video-button');
  var iframe = video.querySelector('.js-video-iframe');
  if (!iframe) return;
  btns.forEach(function (btn) {
    var attr = btn.getAttribute('data-id');
    btn.children[0].src = "http://i3.ytimg.com/vi/".concat(attr, "/maxresdefault.jpg");
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      btns.forEach(function (b) {
        if (b === btn) {
          b.classList.add('active');
          iframe.src = "https://www.youtube.com/embed/".concat(attr, "?rel=0&amp;showinfo=0&amp;autoplay=0");
        } else {
          b.classList.remove('active');
        }
      });
    });
  });
  btns[0].click();
});
$('.js-openCase').click(function (e) {
  e.stopPropagation();
  $("#case").fadeToggle('fast');
  $('html').toggleClass('noscroll');
});
$('.js-closeCase').click(function () {
  closeCase();
});

function closeCase() {
  $("#case").fadeOut('fast');
  $('html').removeClass('noscroll');
  $('body').removeClass('noscroll');
}

;
$('.js-openNav').click(function (e) {
  e.stopPropagation();
  $(".case__nav-list").toggleClass('active');
});
$('.case__nav-link').click(function (e) {
  e.stopPropagation();
  $(".case__nav-list").toggleClass('active');
});
$(".js-openPopup").click(function (e) {
  e.stopPropagation();
  $("#popup").fadeToggle('fast');
  $('html').toggleClass('noscroll');
});
$('.popup .form_confirmation').click(function (e) {
  e.stopPropagation();
});
$('.popup .form').click(function (e) {
  e.stopPropagation();
});

function closePopup() {
  $(".popup").fadeOut('fast');
  $('html').removeClass('noscroll');
  $('body').removeClass('noscroll');
}

;
$(".js-closePopup").click(function (e) {
  e.preventDefault();
  closePopup();
});
$('body').click(function () {
  closePopup();
});
$('.js-submitButton').click(function (e) {
  if ($("#popup").display = "block") {
    $("#popup").fadeOut('fast');
  }

  ;
  $("#form_confirmation").fadeToggle('fast');
  $('html').toggleClass('noscroll');
  e.stopPropagation();
  e.preventDefault();
});
$(".form__tel").mask("+7 (999) 999-99-99");
/* Yandex Maps*/

var myMap;

function init() {
  myMap = new ymaps.Map('map', {
    center: [55.999017, 37.223832],
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  });
  var myPlacemark = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [55.999017, 37.223832]
    }
  });
  myMap.geoObjects.add(myPlacemark);
}

;
$('.card-type__filter-item').click(function () {
  $('.card-type__filter-list').css.display = "none";
});