/* Yandex Maps*/
var myMap;

function init () {
  myMap = new ymaps.Map('map', {
    center: [55.999017, 37.223832],
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  });
  let myPlacemark = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [55.999017, 37.223832],
    }
  });
  myMap.geoObjects.add(myPlacemark);
};
