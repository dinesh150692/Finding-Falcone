/* Library Imports */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/* Style Imports */
import './index.css';

/* Component Imports */
import App from './App';
import configureStore from './redux/store';
import * as serviceWorker from './serviceWorker';

const store = configureStore({});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
