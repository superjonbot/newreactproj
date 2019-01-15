import app from '../build/app';
import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
app.getResults('aetv').then(entries => {
  console.log('done:' + entries.length);
  ReactDOM.render(React.createElement("h1", null, "Hello"), document.getElementById('root'));
});
expect(app.hello()).toBe("hello");