import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/styles.css';

const composeEnhancers = composeWithDevTools({
    trace: true
});

let middlewares: any = [];
if (process.env.NODE_ENV === 'development') {
    middlewares = [reduxThunk, logger];
} else {
    middlewares = [reduxThunk];
}


const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(...middlewares)));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
