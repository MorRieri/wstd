/* Header mobile menu */
$(".js-openHeader").click(function(){
  headerMenu()
});

function headerMenu() {
  $('html').toggleClass('noscroll');
  $('#header_mobile').toggleClass('active');
  $('.header').toggleClass('black');
};


/* Header scroll down */
if ($(window).width() > 993) {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll && !$('html').hasClass('noscroll')) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    let st = $(document).scrollTop();
    // Make scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
      return;
    if (st > lastScrollTop && st > navbarHeight) {
      // If scrolled down and past the navbar, add class .nav-up.
      $('.header__section-bottom').addClass('active');
    } else {
      // Scroll Up
      $('.header__section-bottom').removeClass('active');
    }
    lastScrollTop = st;
  };
};
