import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import moment from 'moment'
import pingpp from 'pingpp-js'

import config from '../../config/config'
import Loading from '../components/loading'
import OrderPiece from '../components/order-piece'
import OrderNav from '../components/order-nav'

import {fetchOrderInfo, fetchMyOrder, fetchToRefund, STATE_ALL, STATE_ALREADY, STATE_FINISH, STATE_NO, setState} from '../actions/order'

import './myOrder.scss'


class MyOrder extends Component {

    constructor (props) {
        super(props);

        this.toRefund = this.toRefund.bind(this);
        this.changeCat = this.changeCat.bind(this);

        this.state = {
        }
    }



    componentWillMount() {
        const {dispatch, user} = this.props;
        let info = {
            state: STATE_ALREADY,
            page: 1,
            team_id: user.teamId
        };
        dispatch(fetchMyOrder(info)).then((res)=>{
            console.log('fetch my order: ', res);
        })
    }
    changeCat(cat) {
        let {dispatch} = this.props;
        return () => {
            dispatch(setState({cat: cat}));
        }
    }

    toRefund(id) {
        let self = this;
        return () => {
            console.log("退订: ", id);

            let {order, dispatch} = this.props, self = this;
            let item = order.con[STATE_ALREADY].lists[id];
            console.log('item: ', item);
            let info = {
                id: item.pay.wx_order,
                amount: parseInt(item.price*100),
                description: "-退款-"
            };

            dispatch(fetchToRefund(info)).then((charge)=>{
                console.log("fetch to pay ret: ", charge);

                if (!charge.failure_msg) {
                    alert("取消订单成功, money将于1-3个工作日内返回支付账户");
                }
            })
        }
    }

    render() {
        let {order} = this.props;
        return order.con_loading?(
            <Loading text="加载中..." isFetching={order.con_loading} />
        ):(
            <div className="my-order-container">
                <OrderNav cat={order.cat} changeCat={this.changeCat} />
                <OrderPiece toRefund={this.toRefund} orders={order.con[order.cat].lists||[]}/>

                <Loading text="退款中..." isFetching={order.pay.refund_loading} />
            </div>
        )
    }
}


function select(state) {
    return {
        order: state.order,
        user: state.user
    }
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(MyOrder)