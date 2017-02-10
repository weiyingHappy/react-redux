import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Route, hashHistory, browserHistory } from 'react-router'

import reducer from './reducers'
import Index from './containers/Index'

const loggerMiddleware = createLogger();
let store = createStore(
    reducer,
    compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
let dom2 = document.getElementById('main-container');

const requireAuth = (nextState, replace) => {
    let is_login = store.getState().login.is_login;
    if (!is_login) {
        replace({ pathname: '/login' });
        // browserHistory.push('/login');
    }
};
const loginOk = (nextState, replace) => {
    let is_login = store.getState().login.is_login;
    if (is_login) {
        replace({ pathname: '/' });
    }
};
render (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Index}></Route>
            
        </Router>
    </Provider>,
    dom2
);