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
$(".js-openHeader").click(function(){
  headerMenu()
});

function headerMenu() {
  $('html').toggleClass('noscroll');
  $('#header_mobile').toggleClass('active');
  $('.header').toggleClass('black');
};

