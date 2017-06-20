import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import React from 'react'

import config from '../config/config'


import { Router, Route, IndexRoute, Redirect, hashHistory, browserHistory } from 'react-router'
import reducer from './reducers'



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





function errorLoading(error) {
    throw new Error(`Dynamic page loading failed: ${error}`);
}


function loadRoute(cb) {
    return module => cb(null, module.default);
}

const test = () => {
    return (
        <div>hello</div>
    )
};
import {NotFoundPage} from './components/NotFoundPage'
const Root = () => {
    return (
        <Provider store={store}>
            <Router history={browserHistory}>

                <Route path="/cmsfont/index/:token" getComponent = {(location, cb)=>{
                        System.import('./containers/Index')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>

                <Route path="/cmsfont/rooms/:token" getComponent = {(location, cb)=>{
                        System.import('./containers/Rooms')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/register" getComponent = {(location, cb)=>{
                        System.import('./containers/Register')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/intro" getComponent = {(location, cb)=>{
                        System.import('./containers/Intro')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/snap" getComponent = {(location, cb)=>{
                        System.import('./containers/Snap')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/my" getComponent = {(location, cb)=>{
                        System.import('./containers/My')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/roomInfo" getComponent = {(location, cb)=>{
                        System.import('./containers/RoomInfo')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/chooseDate" getComponent = {(location, cb)=>{
                        System.import('./containers/DatePicker')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/orderGenerate" getComponent = {(location, cb)=>{
                        System.import('./containers/OrderGenerate')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/payPage" getComponent = {(location, cb)=>{
                        System.import('./containers/PayPage')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/paySuccess" getComponent = {(location, cb)=>{
                        System.import('./containers/paySuccess')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/uniPay/:order_no" getComponent = {(location, cb)=>{
                        System.import('./containers/UniPay')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/setting" getComponent = {(location, cb)=>{
                        System.import('./containers/Setting')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/MyOrder/:token" getComponent = {(location, cb)=>{
                        System.import('./containers/MyOrder')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/ShowOrder" getComponent = {(location, cb)=>{
                        System.import('./containers/ShowOrder')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/CommentOrder" getComponent = {(location, cb)=>{
                        System.import('./containers/CommentOrder')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/ShowComment" getComponent = {(location, cb)=>{
                        System.import('./components/show-comment')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/Accumulate" getComponent = {(location, cb)=>{
                        System.import('./containers/Accumulate')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/toYouZhu/:token" getComponent = {(location, cb)=>{
                        System.import('./containers/ToYouZhu')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/refundProgress" getComponent = {(location, cb)=>{
                        System.import('./containers/RefundProgress')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/chooseCoupon" getComponent = {(location, cb)=>{
                        System.import('./containers/ChooseCoupon')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/luggage" getComponent = {(location, cb) => {
                    System.import('./containers/Luggage')
                        .then(loadRoute(cb))
                        .catch(errorLoading)
                }} />
                <Route path="/cmsfont/choose_wuyou_order" getComponent = {(location, cb) => {
                    System.import('./containers/ChooseOrderForLuggage')
                        .then(loadRoute(cb))
                        .catch(errorLoading)
                }} />
                <Route path="/cmsfont/template/:type/:id" getComponent = {(location, cb) => {
                    System.import('./containers/Template')
                        .then(loadRoute(cb))
                        .catch(errorLoading)
                }} />
                <Route path="/cmsfont/luggageOrders" getComponent = {(location, cb) => {
                    System.import('./containers/LuggageOrders')
                        .then(loadRoute(cb))
                        .catch(errorLoading)
                }} />
                <Route path="/cmsfont/luggageOrderInfo/:id" getComponent = {(location, cb) => {
                    System.import('./containers/LuggageOrderInfo')
                        .then(loadRoute(cb))
                        .catch(errorLoading)
                }} />
                <Route path="/cmsfont/error" getComponent = {(location, cb)=>{
                        System.import('./components/ErrorPage')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/404" getComponent = {(location, cb)=>{
                        System.import('./components/NotFoundPage')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/coupon" getComponent = {(location, cb)=>{
                        System.import('./containers/Coupon')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/chooseCoupon" getComponent = {(location, cb)=>{
                        System.import('./containers/ChooseCoupon')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>
                <Route path="/cmsfont/exchangeCoupon" getComponent = {(location, cb)=>{
                        System.import('./containers/ExchangeCoupon')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>


                <Route path="*" getComponent = {(location, cb)=>{
                        System.import('./components/NotFoundPage')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    } }/>

            </Router>
        </Provider>
    )
};



export default Root;