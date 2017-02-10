import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Route, IndexRoute, Redirect, hashHistory, browserHistory } from 'react-router'

import reducer from './reducers'
import Index from './containers/Index'
import NotFoundPage from './containers/NotFoundPage'

const loggerMiddleware = createLogger();

let store = createStore(
    reducer,
    compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

let dom2 = document.getElementById('main-container');


render (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Index}>
            </Route>

            <Route path='/404' component={NotFoundPage} />
            <Redirect from='*' to='/404' />
        </Router>

    </Provider>,
    dom2
);