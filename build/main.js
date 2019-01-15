"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("../build/app"));

var _expect = _interopRequireDefault(require("expect"));

_app.default.initStore();

_app.default.renderPage(); //test react


_app.default.getResults('aetv').then(function (entries) {
  console.log('done:' + entries.length);
});

(0, _expect.default)(_app.default.hello()).toBe("hello");