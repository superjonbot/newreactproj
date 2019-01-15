"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _redux = require("redux");

/*
let store = createStore((state = {testcount:0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign(state,{testcount:state.testcount+1})  // must return a new object
        case 'DECREMENT':
            return Object.assign(state,{testcount:state.testcount-1})
        default:
            return state
    }
}) //create test redux*/
var store = {}; //placeholder for redux
// const App = ({value, onIncrement, onDecrement})=>(
//     <div>
//         <h1>{value}</h1>
//         <button onClick={onIncrement}>[+]</button>
//         <button onClick={onDecrement}>[-]</button>
//     </div>
// )

var htmlTemplates = {
  App: function App(_ref) {
    var value = _ref.value,
        onIncrement = _ref.onIncrement,
        onDecrement = _ref.onDecrement;
    return _react.default.createElement("div", null, _react.default.createElement("h1", null, value), _react.default.createElement("button", {
      onClick: onIncrement
    }, "[+]"), _react.default.createElement("button", {
      onClick: onDecrement
    }, "[-]"));
  }
};
var App = htmlTemplates.App;
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
  }(),
  renderPage: function renderPage() {
    _reactDom.default.render(_react.default.createElement(App, {
      value: store.getState().testcount,
      onIncrement: function onIncrement() {
        return store.dispatch({
          type: 'INCREMENT'
        });
      },
      onDecrement: function onDecrement() {
        return store.dispatch({
          type: 'DECREMENT'
        });
      }
    }), document.getElementById('root'));
  },
  initStore: function initStore() {
    store = (0, _redux.createStore)(module.exports.reduxStore); //create test redux

    store.subscribe(function () {
      module.exports.renderPage();
      var status = store.getState();
      console.log(status.testcount);
    });
  },
  reduxStore: function reduxStore() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      testcount: 2
    };
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'INCREMENT':
        return Object.assign(state, {
          testcount: state.testcount + 1
        });
      // must return a new object

      case 'DECREMENT':
        return Object.assign(state, {
          testcount: state.testcount - 1
        });

      default:
        return state;
    }
  }
};
/*


let store = createStore(module.exports.reduxStore) //create test redux










store.subscribe(() =>
    {
        module.exports.renderPage();
        const status=store.getState();
        console.log(status.testcount)}
)
*/