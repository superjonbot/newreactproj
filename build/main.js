"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("../build/app"));

var _expect = _interopRequireDefault(require("expect"));

var _redux = require("redux");

_app.default.getResults('aetv').then(function (entries) {
  console.log('done:' + entries.length);

  _app.default.renderPage(); //test react
  // function counter(state = 0, action) {
  //     switch (action.type) {
  //         case 'INCREMENT':
  //             return state + 1
  //         case 'DECREMENT':
  //             return state - 1
  //         default:
  //             return state
  //     }
  // }
  // Create a Redux store holding the state of your app.
  // Its API is { subscribe, dispatch, getState }.


  var store = (0, _redux.createStore)(_app.default.reduxStore); // You can use subscribe() to update the UI in response to state changes.
  // Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
  // However it can also be handy to persist the current state in the localStorage.

  store.subscribe(function () {
    return console.log(store.getState());
  }); // The only way to mutate the internal state is to dispatch an action.
  // The actions can be serialized, logged or stored and later replayed.

  store.dispatch({
    type: 'INCREMENT'
  }); // 1

  store.dispatch({
    type: 'INCREMENT'
  }); // 2

  store.dispatch({
    type: 'DECREMENT'
  }); // 1
});

(0, _expect.default)(_app.default.hello()).toBe("hello");