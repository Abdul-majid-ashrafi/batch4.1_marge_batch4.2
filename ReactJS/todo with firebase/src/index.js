import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCuhF5q-M1gKl-YLkmfapXOOqVBHPvfuV0",
    authDomain: "fir-adf99.firebaseapp.com",
    databaseURL: "https://fir-adf99.firebaseio.com",
    projectId: "fir-adf99",
    storageBucket: "fir-adf99.appspot.com",
    messagingSenderId: "862999688485"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
