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

function findVideos() {
  var videos = document.querySelectorAll('.video-content__video');

  for (var i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  var link = video.querySelector('.video-content__video-link');
  var media = video.querySelector('.video-content__video-media');
  var button = video.querySelector('.video-content__video-button');
  var id = parseMediaURL(media);
  video.addEventListener('click', function () {
    var iframe = createIframe(id);
    link.remove();
    button.remove();
    video.appendChild(iframe);
  });
  link.removeAttribute('href');
  video.classList.add('video-content__video--enabled');
}

function parseMediaURL(media) {
  var regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  var url = media.src;
  var match = url.match(regexp);
  return match[1];
}

function createIframe(id) {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');
  return iframe;
}

function generateURL(id) {
  var query = '?rel=0&showinfo=0&autoplay=1';
  return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();