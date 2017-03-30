'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _suncalc = require('suncalc');

var _suncalc2 = _interopRequireDefault(_suncalc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calculator = {
  position: function position(lat, lng) {
    var t = new Date();
    return _suncalc2.default.getPosition(t, lat, lng);
  },
  azimuthTime: function azimuthTime(lat, lng, dayStart, azimuth) {
    // binary search between dayStart and dayStart + 24 hours
    // to find when the azimuth was close to the requested value

  },
  dumbAzimuth: function dumbAzimuth(degs) {
    // take degrees relative to 0, return radians relative to π
    return (degs - 180) * Math.PI / 180;
  },

  degreesFromNorth: function degreesFromNorth(dumbAzi) {
    // take radians relative to π, return degrees relative to 0
    return (dumbAzi + Math.PI) * 180 / Math.PI;
  },

  degrees: function degrees(radians) {
    return radians * 180 / Math.PI;
  }
};

exports.default = calculator;