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
};

$('.js-openNav').click(function(e) {
  e.stopPropagation();
  $(".case__nav-list").toggleClass('active');
});

$('.case__nav-link').click(function (e) {
  e.stopPropagation();
  $(".case__nav-list").toggleClass('active');
});
