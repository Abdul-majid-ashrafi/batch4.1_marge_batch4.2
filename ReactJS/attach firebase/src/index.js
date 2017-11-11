import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDbgY2r7bKa3p5ohND9b0SI3j306MLhK7k",
    authDomain: "learn-react-3448f.firebaseapp.com",
    databaseURL: "https://learn-react-3448f.firebaseio.com",
    projectId: "learn-react-3448f",
    storageBucket: "learn-react-3448f.appspot.com",
    messagingSenderId: "443603260088"
  };
  firebase.initializeApp(config);



ReactDOM.render(<App abc="Majid ashraf" />, document.getElementById('root'));
registerServiceWorker();
