import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import moment from 'moment'
import pingpp from 'pingpp-js'

import config from '../../config/config'
import EquArea from '../components/equ-area'
import Loading from '../components/loading'

import {fetchOrderInfo, fetchToPay} from '../actions/order'

import './payPage.scss'
import img_top from '../static/images/three/icon-6.png'


class PayPage extends Component {

    constructor (props) {
        super(props);

        this.handlePay = this.handlePay.bind(this);

        this.state = {
        }
    }

    componentWillMount() {
        let {dispatch, order} = this.props;

        dispatch(fetchOrderInfo(order.pay.order_no)).then((res)=>{
            console.log("order info res: ", res);
        })
    }

    handlePay() {
        let {dispatch, order, user} = this.props, self = this;

        let info = {
            subject: order.pay.team.name,
            body: order.pay.room.name,
            amount: parseInt(order.pay.price*100),
            order_no: order.pay.order_no,
            channel: "wx",
            currency: "cny",
            app: {id: config.ping_appid},
            extra: {open_id: 'okELCtxrJQeVySm6KTJ_5mAnbdy0'}
        };

        dispatch(fetchToPay(info)).then((charge)=>{
            console.log("fetch to pay ret: ", charge);

            pingpp.createPayment(charge, function(result, err){
                console.log(result);
                console.log(err.msg);
                console.log(err.extra);
                if (result == "success") {
                    // 只有微信公众账号 wx_pub 支付成功的结果会在这里返回，其他的支付结果都会跳转到 extra 中对应的 URL。
                    alert("支付成功");
                } else if (result == "fail") {
                    // charge 不正确或者微信公众账号支付失败时会在此处返回
                } else if (result == "cancel") {
                    // 微信公众账号支付取消支付
                }
            });
        })
    }



    render() {
        let {order} = this.props;
        let pay = order.pay;
        return (order.pay.loading)?(
            <div className="pay-page-container">
                <Loading text="加载中..." isFetching={order.pay.loading} />
            </div>
        ):(
            <div className="pay-page-container">
                <div className="top">
                    <div className="top-a">
                        <img src={img_top} className="ta-img"/>
                    </div>
                    <div className="top-b">
                        订单已提交, 等待付款!
                    </div>
                </div>

                <div className="middle">
                    <div className="middle-top">
                        <div className="middle-top-a">{pay.team.name}</div>
                        <div className="middle-top-b">
                            <div className="date-a">
                                <span >入住: </span>
                                <span>{moment(pay.start).get('month')+1}月{moment(pay.start).get('date')}日</span>
                            </div>
                            <div className="date-b">
                                <span >共</span>
                                <span >{moment(pay.end).diff(moment(pay.start),'days')}</span>
                                <span >晚</span>
                            </div>
                            <div className="date-c">
                                <span >离店: </span>
                                <span >{moment(pay.end).get('month')+1}月{moment(pay.end).get('date')}日</span>
                            </div>
                        </div>
                        <div className="middle-top-c">
                            <div className="equ-head">
                                {pay.room.name}
                            </div>
                            <EquArea lists={pay.room.equipments||[]}/>
                        </div>
                    </div>
                    <div className="middle-bottom">
                        <div className="price-head">
                            订单金额:
                        </div>
                        <div className="price-body">
                            ￥{pay.price}
                        </div>
                    </div>
                </div>
                <Loading text="加载中..." isFetching={order.pay.pay_loading} />

                <div className="bottom" onClick={this.handlePay}>
                    <button className="bottom-button">支付</button>
                </div>
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
export default connect(select)(PayPage)