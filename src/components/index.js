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
    autoplay: true, // Optional
    name: "logo", // Name for future reference. Optional.

  });

$('.card-product__button-review').click(function(e) {
  e.stopPropagation()
});
