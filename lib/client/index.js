'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _config = require('../shared/config');

var _calculator = require('../shared/calculator');

var _calculator2 = _interopRequireDefault(_calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//console.log(APP_CONTAINER_SELECTOR);

(0, _jquery2.default)(function () {
  console.log('hello world :o');
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Found your location \nLat : " + position.coords.latitude + " \nLang :" + position.coords.longitude);
      var pos = _calculator2.default.position(position.coords.latitude, position.coords.longitude);
      console.log('Azimuth: ' + _calculator2.default.degreesFromNorth(pos.azimuth) + '\xB0');
      console.log('Elevation: ' + _calculator2.default.degrees(pos.altitude) + '\xB0');
      console.log(pos);
      // $.post(
      //   '/position',
      //   JSON.stringify(
      //     {lat: position.coords.latitude,
      //      lng: position.coords.longitude}
      //   ), (e) => {
      //     console.log(e)
      //   });
    });
  }
});