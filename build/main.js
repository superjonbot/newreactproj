"use strict";

var _app = _interopRequireDefault(require("../build/app"));

var _expect = _interopRequireDefault(require("expect"));

var _react = _interopRequireDefault(require("react"));

var _redux = require("redux");

var _remoteReduxDevtools = _interopRequireDefault(require("remote-redux-devtools"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _deepFreeze = _interopRequireDefault(require("deep-freeze"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

console.log('react debugging: $>react-devtools &  redux debugging: http://remotedev.io/local/'); //REDUX REDUCER (all in one)

var allinoneReducer = function allinoneReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    counter: 1000,
    testcount: 200
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  (0, _deepFreeze.default)(state, action);

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

    case 'COUNTER':
      return Object.assign({}, state, {
        counter: state.counter + 1
      });

    default:
      return state;
  }
}; //REDUX REDUCER (split)


var counter_rdc = function counter_rdc() {
  var counter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'COUNTER':
      return counter + 1;
    // must return a new object

    default:
      return counter;
  }
};

var testcount_rdc = function testcount_rdc() {
  var testcount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'INCREMENT':
      return testcount + 1;
    // must return a new object

    case 'DECREMENT':
      return testcount - 1;
    // case 'COUNTER':
    //     return reduxReducer_counter(state,action)//Object.assign({},state,{counter:state.counter+1})

    default:
      return testcount;
  }
};

var combinedReducers = (0, _redux.combineReducers)({
  counter: counter_rdc,
  testcount: testcount_rdc
}); //CREATE STORE
//let store = createStore(allinoneReducer,devToolsEnhancer()) //remove devToolsEnhancer if not debugging redux

var store = (0, _redux.createStore)(combinedReducers, (0, _remoteReduxDevtools.default)()); //remove devToolsEnhancer if not debugging redux
//SET SUBSCRIBE

store.subscribe(function () {
  console.log("State: ", store.getState());
  renderPage();
}); //console.log('Initial State');
//START COMPONENTS

var Valuedisplay =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Valuedisplay, _React$Component);

  function Valuedisplay() {
    _classCallCheck(this, Valuedisplay);

    return _possibleConstructorReturn(this, _getPrototypeOf(Valuedisplay).apply(this, arguments));
  }

  _createClass(Valuedisplay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('Mounted' + new Date());
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.props.value;
      return _react.default.createElement("h1", null, value);
    }
  }]);

  return Valuedisplay;
}(_react.default.Component);

var App =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleI", function () {
      var vArr = _this.state.vArr;

      _this.setState({
        vArr: vArr + 1
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleD", function () {
      var vArr = _this.state.vArr;

      _this.setState({
        vArr: vArr - 1
      });
    });

    _this.state = {
      vArr: 100
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('Mounted' + new Date());
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          counter = _this$props.counter,
          value = _this$props.value,
          onIncrement = _this$props.onIncrement,
          onDecrement = _this$props.onDecrement;
      var vArr = this.state.vArr;
      return _react.default.createElement("div", null, _react.default.createElement(Valuedisplay, {
        value: value
      }), _react.default.createElement(Valuedisplay, {
        value: counter
      }), _react.default.createElement(Valuedisplay, {
        value: vArr
      }), _react.default.createElement("button", {
        onClick: this.handleI
      }, "[+]x"), _react.default.createElement("button", {
        onClick: this.handleD
      }, "[-]x"), _react.default.createElement("button", {
        onClick: onIncrement
      }, "[+]b"), _react.default.createElement("button", {
        onClick: onDecrement
      }, "[-]"));
    }
  }]);

  return App;
}(_react.default.Component);

var renderPage = function renderPage() {
  _reactDom.default.render(_react.default.createElement(App, {
    counter: store.getState().counter,
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

setInterval(function () {
  store.dispatch({
    type: 'COUNTER'
  });
}, 1000); //test ajax

_app.default.getResults('aetv').then(function (entries) {
  console.log('done:' + entries.length);
}); //quick error check


(0, _expect.default)(_app.default.hello()).toBe("hello"); //start

renderPage();