import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/app';
import './index.css';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { userReducer } from './reducers.js'

const store = createStore(combineReducers({ 
  user: userReducer }),
  applyMiddleware(logger())
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
