import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers/index';
import Init from './components/init';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Init />
  </Provider>,
  document.getElementById('root'),
);