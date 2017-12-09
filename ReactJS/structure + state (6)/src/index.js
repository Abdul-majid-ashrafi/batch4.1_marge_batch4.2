import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from './container/appContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
