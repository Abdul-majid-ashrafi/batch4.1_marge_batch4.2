import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import * as firebase from 'firebase';
import Routing from './config/routing';

import store from './store'

 // Initialize Firebase
 var config = {
    apiKey: "",
    authDomain: "batch4-8034f.firebaseapp.com",
    databaseURL: "https://batch4-8034f.firebaseio.com",
    projectId: ""
  };
  firebase.initializeApp(config);

ReactDOM.render(
    <Provider store={store}>
        <Routing />
    </Provider>,
    document.getElementById('root')
);
