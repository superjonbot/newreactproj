"use strict";

var _app = _interopRequireDefault(require("../build/app"));

var _expect = _interopRequireDefault(require("expect"));

var _react = _interopRequireDefault(require("react"));

var _redux = require("redux");

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//REDUX REDUCER
var store = (0, _redux.createStore)(function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    testcount: 2
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        testcount: state.testcount + 1
      });
    // must return a new object

    case 'DECREMENT':
      return Object.assign({}, state, {
        testcount: state.testcount - 1
      });

    default:
      return state;
  }
}); // store.subscribe(() =>
//     {
//         renderPage();
//         const status=store.getState();
//         console.log(status.testcount)}
// )

var Valuedisplay =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Valuedisplay, _React$Component);

  function Valuedisplay() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Valuedisplay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Valuedisplay)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: _this.props.value
    });

    return _this;
  }

  _createClass(Valuedisplay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log('Mounted');
      store.subscribe(function () {
        _this2.forceUpdate();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          onIncrement = _this$props.onIncrement,
          onDecrement = _this$props.onDecrement; //let {testcount}=store.getState()

      return _react.default.createElement("h1", null, value);
    }
  }]);

  return Valuedisplay;
}(_react.default.Component);

var App =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          value = _this$props2.value,
          onIncrement = _this$props2.onIncrement,
          onDecrement = _this$props2.onDecrement;
      return _react.default.createElement("div", null, _react.default.createElement(Valuedisplay, this.props), _react.default.createElement("button", {
        onClick: onIncrement
      }, "[+]x"), _react.default.createElement("button", {
        onClick: onDecrement
      }, "[-]2"));
    }
  }]);

  return App;
}(_react.default.Component);

var renderPage = function renderPage() {
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
};

_app.default.getResults('aetv').then(function (entries) {
  console.log('done:' + entries.length);
}); //quick error check


(0, _expect.default)(_app.default.hello()).toBe("hello");
renderPage();