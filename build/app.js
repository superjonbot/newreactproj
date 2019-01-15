"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var fetch = require('node-fetch'); // let settings={
//     _feedURL:'https://feeds.video.aetnd.com/api/${brand}/videos?filter%5BvideoType%5D=Episode&filter%5BisBehindWall%5D=false&perpage=500',
//     _endPoint: 'http://sandbox-cloudapi.imrworldwide.com/nmapi/v2/{{appid}}/{{sessionID}}/a?b=',
//     _sessionID: Date.now() + String(Math.random() * 1000000 >> 0),
//     _brands:['aetv','history','lifetime','fyi']
// }


module.exports = {
  defaults: {
    _feedURL: 'https://feeds.video.aetnd.com/api/${brand}/videos?filter%5BvideoType%5D=Episode&filter%5BisBehindWall%5D=false&perpage=500',
    _endPoint: 'http://sandbox-cloudapi.imrworldwide.com/nmapi/v2/{{appid}}/{{sessionID}}/a?b=',
    _sessionID: Date.now() + String(Math.random() * 1000000 >> 0),
    _brands: ['aetv', 'history', 'lifetime', 'fyi']
  },
  hello: function hello() {
    return 'hello';
  },
  feedURI: function feedURI(brand) {
    return eval('`' + module.exports.defaults._feedURL + '`');
  },
  getResults: function () {
    var _getResults = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(brand) {
      var uri, response, post, results;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              uri = this.feedURI(brand);
              _context.next = 4;
              return fetch(uri);

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              post = _context.sent;
              results = post.results; //console.log(results.length)

              return _context.abrupt("return", results);

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 12]]);
    }));

    return function getResults(_x) {
      return _getResults.apply(this, arguments);
    };
  }()
};