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
import Rooms from './containers/Rooms'

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
        <Router history={browserHistory}>
            <Route path="/cmsfont/index/:token" component={Index}></Route>
            <Route path="/cmsfont/rooms/:token" component={Rooms}></Route>

            <Route path='/cmsfont/404' component={NotFoundPage} />
            <Redirect from='*' to='/cmsfont/404' />
        </Router>

    </Provider>,
    dom2
);