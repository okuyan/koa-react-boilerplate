import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import { Router, hashHistory } from 'react-router';
import reducer from './reducers';
import routes from './routes';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app-container')
);
