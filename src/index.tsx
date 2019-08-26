import './polyfill';
import { container } from './ioc';
import './dependencies';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './common/internationalization/i18n';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'inversify-react';

ReactDOM.render((
    <Provider container={container}>
        <App />
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
