'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _renderApp = require('./render-app');

var _renderApp2 = _interopRequireDefault(_renderApp);

var _calculator = require('../shared/calculator');

var _calculator2 = _interopRequireDefault(_calculator);

var _config = require('../shared/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var parser = _bodyParser2.default.json({ type: '*/*' });

app.use(_config.STATIC_PATH, _express2.default.static('public'));
app.use(_config.STATIC_PATH, _express2.default.static('dist'));

app.get("/", function (req, res) {
  res.send((0, _renderApp2.default)());
});

app.post("/position", parser, function (req, res) {
  res.send(_calculator2.default.position(req.body.lat, req.body.lng));
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});