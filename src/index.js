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
import DatePicker from './containers/DatePicker'
import OrderGenerate from './containers/OrderGenerate'
import PayPage from './containers/PayPage'
import Setting from './containers/Setting'
import MyOrder from './containers/MyOrder'
import UniPay from './containers/UniPay'
import ShowOrder from './containers/ShowOrder'

const loggerMiddleware = createLogger();


let comp = config.debug?(
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
);
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
            <Route path="/cmsfont/chooseDate" component={DatePicker}></Route>
            <Route path="/cmsfont/orderGenerate" component={OrderGenerate}></Route>
            <Route path="/cmsfont/payPage" component={PayPage}></Route>
            <Route path="/cmsfont/uniPay/:order_no" component={UniPay}></Route>

            <Route path="/cmsfont/setting" component={Setting}></Route>
            <Route path="/cmsfont/MyOrder" component={MyOrder}></Route>
            <Route path="/cmsfont/ShowOrder" component={ShowOrder}></Route>


            <Route path="/cmsfont/error" component={ErrorPage} />
            <Route path='/cmsfont/404' component={NotFoundPage} />
            <Redirect from='*' to='/cmsfont/404' />
        </Router>

    </Provider>,
    dom2
);