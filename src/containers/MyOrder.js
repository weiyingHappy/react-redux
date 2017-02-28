import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import moment from 'moment'
import pingpp from 'pingpp-js'

import config from '../../config/config'
import Loading from '../components/loading'
import OrderPiece from '../components/order-piece'
import OrderNav from '../components/order-nav'

import {fetchOrderInfo, fetchToCancel, fetchToUnPay, fetchMyOrder, fetchToRefund, STATE_ALL, STATE_ALREADY, STATE_FINISH, STATE_NO, setState,setPay, popOrder} from '../actions/order'

import './myOrder.scss'


class MyOrder extends Component {

    constructor (props) {
        super(props);

        this.toRefund = this.toRefund.bind(this);
        this.changeCat = this.changeCat.bind(this);
        this.toCancel = this.toCancel.bind(this);
        this.toPay = this.toPay.bind(this);
        this.toShowOrder = this.toShowOrder.bind(this);

        this.state = {
        }
    }



    componentWillMount() {
        const {dispatch, user, order} = this.props;
        let info = {
            state: order.cat,
            page: 1,
            team_id: user.teamId
        };
        dispatch(fetchMyOrder(info)).then((res)=>{
            console.log('fetch my order: ', res);
        })
    }
    changeCat(cat) {
        let {dispatch, user} = this.props;
        return () => {
            dispatch(setState({cat: cat}));

            let info = {
                state: cat,
                page: 1,
                team_id: user.teamId
            };
            dispatch(fetchMyOrder(info)).then((res)=>{
                console.log('fetch my order: ', res);
            })
        }
    }

    toRefund(id) {
        let self = this;
        return () => {
            console.log("退订: ", id);

            let {order, dispatch} = this.props, self = this;
            let item = order.con[order.cat].lists[id];
            console.log('item: ', item);
            let info = {
                id: item.pay.wx_order,
                amount: parseInt(item.price*100),
                description: "-退款-"
            };

            dispatch(fetchToRefund(info)).then((charge)=>{
                console.log("fetch to pay ret: ", charge);

                if (!charge.failure_msg) {
                    let info2 = {
                        order_no: charge.charge_order_no,
                        wx_order: charge.charge,
                        price: parseInt(charge.amount/100.0)
                    };
                    dispatch(fetchToUnPay(info2)).then((res)=>{
                        if (res.code == 200) {
                            alert("退款成功");
                            dispatch(popOrder({
                                cat: order.cat,
                                id: id
                            }));
                        }
                        else {
                            alert("取消订单成功, 退款将于1-3个工作日内返回支付账户");
                        }
                    })
                }
            })
        }
    }
    toCancel(id) {
        return () => {
            let {order, dispatch} = this.props, self = this;
            let item = order.con[order.cat].lists[id];
            let info = {
                order_no: item.order_no
            };
            dispatch(fetchToCancel(info)).then((res)=>{
                if (res.code == 200) {
                    alert("取消订单成功");

                    dispatch(popOrder({
                        cat: order.cat,
                        id: id
                    }));
                }
                else {
                    alert(res.msg);
                }
            });
        }
    }
    toShowOrder(id) {
        return () => {
            let {order, dispatch} = this.props, self = this;
            let item = order.con[order.cat].lists[id];
            dispatch(setPay({order_no: item.order_no}));
            browserHistory.push('/cmsfont/showOrder')
        }
    }
    toComment() {
        return () => {

        }
    }
    toPay(id) {
        return () => {
            let {order, dispatch} = this.props, self = this;
            let item = order.con[order.cat].lists[id];
            dispatch(setPay({order_no: item.order_no}));
            browserHistory.push('/cmsfont/payPage');
        }
    }

    render() {
        let {order} = this.props;
        return order.con_loading?(
            <Loading text="加载中..." isFetching={order.con_loading} />
        ):(
            <div className="my-order-container">
                <OrderNav cat={order.cat} changeCat={this.changeCat} />
                <OrderPiece toRefund={this.toRefund} orders={order.con[order.cat].lists||[]}
                        toCancel={this.toCancel} toShowOrder={this.toShowOrder} toComment={this.toComment} toPay={this.toPay}/>

                <Loading text="退款中..." isFetching={order.pay.refund_loading} />
                <Loading text="取消订单中..." isFetching={order.pay.unpay_loading} />
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