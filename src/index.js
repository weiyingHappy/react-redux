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
import CommentOrder from './containers/CommentOrder'
import ShowComment from './components/show-comment'
import Accumulate from './containers/Accumulate'
import ToYouZhu from './containers/ToYouZhu'
import RefundProgress from './containers/RefundProgress'

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
            <Route path="/">

                <Route path="cmsfont/index/:token" getComponent={
                                    (nextState,callback)=>{
                                        require.ensure([],(require)=>{
                                            callback(null,require("./containers/Index").default)
                                        },"index")
                                    }}></Route>

                <Route path="cmsfont/rooms/:token" getComponent={
                                    (nextState,callback)=>{
                                        require.ensure([],(require)=>{
                                            callback(null,require("./containers/Rooms").default)
                                        },"rooms")
                                    }}></Route>
                <Route path="cmsfont/register" getComponent={
                                    (nextState,callback)=>{
                                        require.ensure([],(require)=>{
                                            callback(null,require("./containers/Register").default)
                                        },"register")
                                    }}></Route>
                <Route path="cmsfont/intro" getComponent={
                                    (nextState,callback)=>{
                                        require.ensure([],(require)=>{
                                            callback(null,require("./containers/Intro").default)
                                        },"intro")
                                    }}></Route>
                <Route path="cmsfont/snap" getComponent={
                                    (nextState,callback)=>{
                                        require.ensure([],(require)=>{
                                            callback(null,require("./containers/Snap").default)
                                        },"router_one")
                                    }}></Route>
                <Route path="cmsfont/my" getComponent={
                                    (nextState,callback)=>{
                                        require.ensure([],(require)=>{
                                            callback(null,require("./containers/My").default)
                                        },"my")
                                    }}></Route>

                <Route path="cmsfont/roomInfo" getComponent={
                                    (nextState,callback)=>{
                                        require.ensure([],(require)=>{
                                            callback(null,require("./containers/RoomInfo").default)
                                        },"roomInfo")
                                    }}></Route>
                <Route path="cmsfont/chooseDate" getComponent={
                                    (nextState,callback)=>{
                                        require.ensure([],(require)=>{
                                            callback(null,require("./containers/DatePicker").default)
                                        },"datePicker")
                                    }}></Route>
                <Route path="cmsfont/orderGenerate" getComponent={
                                    (nextState,callback)=>{
                                        require.ensure([],(require)=>{
                                            callback(null,require("./containers/OrderGenerate").default)
                                        },"orderGenerate")
                                    }}></Route>
                <Route path="cmsfont/payPage" getComponent={
                                    (nextState,callback)=>{
                                        require.ensure([],(require)=>{
                                            callback(null,require("./containers/PayPage").default)
                                        },"payPage")
                                    }}></Route>
                <Route path="cmsfont/uniPay/:order_no" getComponent={
                                    (nextState,callback)=>{
                                        require.ensure([],(require)=>{
                                            callback(null,require("./containers/UniPay").default)
                                        },"unipay")
                                    }}></Route>

                <Route path="cmsfont/setting" getComponent={
                                    (nextState,callback)=>{
                                        require.ensure([],(require)=>{
                                            callback(null,require("./containers/Setting").default)
                                        },"setting")
                                    }}></Route>
                <Route path="cmsfont/MyOrder/:token" getComponent={
                                    (nextState,callback)=>{
                                        require.ensure([],(require)=>{
                                            callback(null,require("./containers/MyOrder").default)
                                        },"myOrder")
                                    }}></Route>
                <Route path="cmsfont/ShowOrder" getComponent={
                                    (nextState,callback)=>{
                                        require.ensure([],(require)=>{
                                            callback(null,require("./containers/ShowOrder").default)
                                        },"showOrder")
                                    }}></Route>
                <Route path="cmsfont/CommentOrder" getComponent={
                                    (nextState,callback)=>{
                                        require.ensure([],(require)=>{
                                            callback(null,require("./containers/CommentOrder").default)
                                        },"commentOrder")
                                    }}></Route>
                <Route path="cmsfont/ShowComment" getComponent={
                                    (nextState,callback)=>{
                                        require.ensure([],(require)=>{
                                            callback(null,require("./components/show-comment").default)
                                        },"showComment")
                                    }}></Route>
                <Route path="cmsfont/accumulate" getComponent={
                                    (nextState,callback)=>{
                                        require.ensure([],(require)=>{
                                            callback(null,require("./containers/Accumulate").default)
                                        },"accumulate")
                                    }}></Route>
                <Route path="cmsfont/toYouZhu/:token" getComponent={
                                    (nextState,callback)=>{
                                        require.ensure([],(require)=>{
                                            callback(null,require("./containers/ToYouZhu").default)
                                        },"toYouZhu")
                                    }}></Route>
                <Route path="cmsfont/refundProgress" getComponent={
                                    (nextState,callback)=>{
                                        require.ensure([],(require)=>{
                                            callback(null,require("./containers/RefundProgress").default)
                                        },"refundProgress")
                                    }}></Route>


                <Route path="/cmsfont/error" component={ErrorPage} />
                <Route path='/cmsfont/404' component={NotFoundPage} />
            </Route>

            <Redirect from='*' to='/cmsfont/404' />
        </Router>

    </Provider>,
    dom2
);