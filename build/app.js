"use strict";

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//html templates
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
  //AJAX EXAMPLE
  getResults: function () {
    var _getResults = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(brand) {
      var uri, response, post, results;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              uri = this.feedURI(brand);
              _context.next = 4;
              return (0, _nodeFetch.default)(uri);

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