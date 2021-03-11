$(".js-openPopup").click(function (e) {
  e.stopPropagation();
  $("#popup").fadeToggle('fast');
  $('main').toggleClass('noscroll');
});

$('.popup .form_confirmation').click(function (e) {
  e.stopPropagation();
});

$('.popup .form').click(function (e) {
  e.stopPropagation();
});

function closePopup() {
  $(".popup").fadeOut('fast');
  $('main').removeClass('noscroll');
};

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
  };

  $("#form_confirmation").fadeToggle('fast');
  $('main').toggleClass('noscroll');
  e.stopPropagation();
  e.preventDefault();
});
