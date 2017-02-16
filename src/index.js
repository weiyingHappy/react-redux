import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Route, IndexRoute, Redirect, hashHistory, browserHistory } from 'react-router'
import config from '../config/config'

import reducer from './reducers'
import Index from './containers/Index'
import NotFoundPage from './components/NotFoundPage'
import ErrorPage from './components/ErrorPage'
import Rooms from './containers/Rooms'
import Register from './containers/Register'
import Intro from './containers/Intro'
import Snap from './containers/Snap'
import My from './containers/My'
import RoomInfo from './containers/RoomInfo'

const loggerMiddleware = createLogger();


let comp = (config.mid==config.development?(
    compose(
        applyMiddleware(
            thunkMiddleware
            // loggerMiddleware
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
):(
    compose(
        applyMiddleware(
            thunkMiddleware
            // loggerMiddleware
        ),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
));
let store = createStore(
    reducer,
    comp
);

let dom2 = document.getElementById('main-container');


render (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/cmsfont/index/:token" component={Index}></Route>
            <Route path="/cmsfont/rooms/:token" component={Rooms}></Route>
            <Route path="/cmsfont/register" component={Register}></Route>
            <Route path="/cmsfont/intro" component={Intro}></Route>
            <Route path="/cmsfont/snap" component={Snap}></Route>
            <Route path="/cmsfont/my" component={My}></Route>

            <Route path="/cmsfont/roomInfo" component={RoomInfo}></Route>

            <Route path="/cmsfont/error" component={ErrorPage} />
            <Route path='/cmsfont/404' component={NotFoundPage} />
            <Redirect from='*' to='/cmsfont/404' />
        </Router>

    </Provider>,
    dom2
);