import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import moment from 'moment'
import pingpp from 'pingpp-js'

import config from '../../config/config'
import Loading from '../components/loading'
import {getCookie, changeTitle} from '../components/Common'

import {fetchOrderInfo, fetchToPay, fetchUniPayOpenid, fetchFinishOrder} from '../actions/order'
import { fetchLuggageOrderInfo } from '../actions/luggage'

import './uniPay.scss'


class UniPay extends Component {

    constructor (props) {
        super(props);

        this.handleOrderFinish = this.handleOrderFinish.bind(this);

        this.state = {
        }
    }

    handleOrderFinish(order_no, wx_order, price) {
        try {
            let {order, dispatch} = this.props, self = this;
            let info = {
                order_no: order_no,
                wx_order: wx_order,
                price: parseFloat(price)/100.0
            };
            dispatch(fetchFinishOrder(info)).then((json)=>{
                if (json.code == 200 || json.code == 407) {
                    alert("支付成功!");
                    browserHistory.replace('/cmsfont/paySuccess')
                }
                else {
                    alert("支付成功!");
                    browserHistory.replace('/cmsfont/paySuccess')                    
                }
            });
        }
        catch(e) {
            alert("handle order finish fail: "+ JSON.stringify(e));
            console.log(e);
        }
    }

    handleToPay(openid, data) {
        let {order, dispatch} = this.props, self = this;
        let info = {
            subject: data.team.name,
            body: data.room.name,
            amount: parseInt(order.pay.pay_price*100),
            order_no: data.order_no,
            channel: "wx_pub",
            currency: "cny",
            app: {id: config.ping_appid},
            extra: {open_id: openid}
        };

        dispatch(fetchToPay(info)).then((charge)=>{
            console.log("fetch to pay ret: ", charge);
            
            if(!charge) {
                alert('支付出错，请稍后再试一试')
                return
            }

            if (charge.code) {
                charge = charge.data
            }

            pingpp.createPayment(charge, function(result, err){
                console.log(result);
                console.log(err.msg);
                console.log(err.extra);
                if (result == "success") {
                    // 只有微信公众账号 wx_pub 支付成功的结果会在这里返回，其他的支付结果都会跳转到 extra 中对应的 URL
                    // alert。
                    alert('无忧行李支付成功')
                    browserHistory.push('/cmsfont/luggage')
                } else if (result == "fail") {
                    // charge 不正确或者微信公众账号支付失败时会在此处返回
                    alert("支付失败");
                } else if (result == "cancel") {
                    // 微信公众账号支付取消支付
                }
            });
        })
    }

    handleToPayLuggage(openid, data) { // 无忧行李支付
        let { dispatch } = this.props, self = this;
        let info = {
            subject: '无忧行李',
            body: '无忧行李订单' + data.inner_order,
            amount: parseInt(data.pay_price*100),
            order_no: data.inner_order,
            channel: "wx_pub",
            currency: "cny",
            app: {id: config.ping_appid},
            extra: {open_id: openid}
        };

        dispatch(fetchToPay(info)).then((charge)=>{
            console.log("fetch to pay ret: ", charge);
            if(!charge) {
                alert('支付出错，请稍后再试一试')
                return
            }

            if (charge.code) {
                charge = charge.data
            }

            pingpp.createPayment(charge, function(result, err){
                console.log(result);
                console.log(err.msg);
                console.log(err.extra);
                if (result == "success") {
                    // 只有微信公众账号 wx_pub 支付成功的结果会在这里返回，其他的支付结果都会跳转到 extra 中对应的 URL
                    // alert。
                    self.handleOrderFinish(charge.order_no, charge.id, charge.amount_settle);
                } else if (result == "fail") {
                    // charge 不正确或者微信公众账号支付失败时会在此处返回
                    alert("支付失败");
                } else if (result == "cancel") {
                    // 微信公众账号支付取消支付
                }
            });
        })
    }

    componentWillMount() {
        let order_no = this.props.params.order_no, self = this;
        let code = this.props.location.query.code;
        const {dispatch} = this.props;

        let info_uni = {
            code: code
        };
        dispatch(fetchUniPayOpenid(info_uni)).then((res)=>{
            if (/wuyou/.test(order_no)) {
                dispatch(fetchLuggageOrderInfo(order_no)).then((res_2) => {
                    console.log('wuyou', res_2)
                    self.handleToPayLuggage(res.openid, res_2.results);
                    changeTitle('无忧行李');
                })
            } else {
                dispatch(fetchOrderInfo(order_no)).then((res_2)=>{
                    self.handleToPay(res.openid, res_2.results);
                    changeTitle(res_2.results.team_name);
                })
            }
        });
        // self.handleOrderFinish('20170225132148799407913', '20170225132148799407913', 1);
    }




    render() {
        let {order} = this.props;
        return order.pay.openid_loading?(
            <Loading text="认证中..." isFetching={order.pay.openid_loading} />
        ):order.pay.pay_loading?(
            <Loading text="加载中..." isFetching={order.pay.pay_loading} />
        ):order.pay.finish_loading?(
            <Loading text="处理订单中..." isFetching={order.pay.finish_loading} />
        ):(
            <div className="uni-pay-container">
            </div>
        )
    }
}


function select(state) {
    return {
        order: state.order
    }
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(UniPay)