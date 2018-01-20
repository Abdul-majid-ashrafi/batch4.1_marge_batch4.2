import React from 'react';
import ReactDOM from 'react-dom';
import BasicRouting from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';


// Initialize Firebase
var config = {
  
  };
  firebase.initializeApp(config);



ReactDOM.render(<BasicRouting />, document.getElementById('root'));
registerServiceWorker();
