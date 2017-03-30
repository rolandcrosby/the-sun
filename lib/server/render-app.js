'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../shared/config');

var renderApp = function renderApp() {
  return '<!DOCTYPE html>\n<html>\n  <head>\n    <title>Welcome to Glitch!</title>\n    <meta name="description" content="A cool thing made with Glitch">\n    <link id="favicon" rel="icon" href="' + _config.FAVICON_URL + '" type="image/x-icon">\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <link rel="stylesheet" href="' + _config.STATIC_PATH + '/style.css">\n  </head>\n  <body>\n    <header>\n      <h1>\n        let\'s stare at the sun\n      </h1>\n    </header>\n\n    <main>\n      <div class="' + _config.APP_CONTAINER_CLASSNAME + '"></div>\n    </main>\n\n    <footer>\n    </footer>\n\n    <script src="' + _config.STATIC_PATH + '/js/bundle.js"></script>\n\n  </body>\n</html>\n';
};

exports.default = renderApp;