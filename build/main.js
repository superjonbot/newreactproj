"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("../build/app"));

var _expect = _interopRequireDefault(require("expect"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

_app.default.getResults('aetv').then(function (entries) {
  console.log('done:' + entries.length);

  _reactDom.default.render(_react.default.createElement("h1", null, "react inject test"), document.getElementById('root'));
});

(0, _expect.default)(_app.default.hello()).toBe("hello");