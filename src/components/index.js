//=./Header/index.js
//=./SliderType/index.js
//=./ProductsList/index.js
//=./Filters/index.js
//=./Tabs/index.js
//=./Faq/index.js
//=./VideoContent/index.js
//=./Article/index.js
//=./Case/case.js
//=./Popup/popup.js
//=./Form/index.js
//=./Contacts/index.js
//=./CardType/index.js
let logo = document.getElementById('image_0'),

  test = lottie.loadAnimation({
    container: logo, // Required
    path: '../assets/js/Test2.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "logo", // Name for future reference. Optional.

  });
window.onload = function() {
  setTimeout( function (){test.play()}, 1100)
};

$('.card-product__button-review').click(function(e) {
  e.stopPropagation()
});

$(".card-product__button-review").click(function() {
    $(this).children(".card-product__button-review-content").toggleClass("active");
});
