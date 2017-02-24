import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import moment from 'moment'
import pingpp from 'pingpp-js'

import config from '../../config/config'
import Loading from '../components/loading'

import {fetchOrderInfo, fetchToPay, fetchUniPayOpenid} from '../actions/order'

import './uniPay.scss'


class UniPay extends Component {

    constructor (props) {
        super(props);

        this.state = {
        }
    }

    handleToPay(openid, data) {
        let {order, dispatch} = this.props;
        let info = {
            subject: data.team.name,
            body: data.room.name,
            amount: parseInt(order.pay.price*100),
            order_no: data.order_no,
            channel: "wx_pub",
            currency: "cny",
            app: {id: config.ping_appid},
            extra: {open_id: openid}
        };

        dispatch(fetchToPay(info)).then((charge)=>{
            console.log("fetch to pay ret: ", charge);

            pingpp.createPayment(charge, function(result, err){
                console.log(result);
                console.log(err.msg);
                console.log(err.extra);
                if (result == "success") {
                    // 只有微信公众账号 wx_pub 支付成功的结果会在这里返回，其他的支付结果都会跳转到 extra 中对应的 URL。
                    alert("支付成功-from 金刚芭比");
                } else if (result == "fail") {
                    // charge 不正确或者微信公众账号支付失败时会在此处返回
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
            dispatch(fetchOrderInfo(order_no)).then((res_2)=>{
                self.handleToPay(res.openid, res_2.results);
            })
        });
    }




    render() {
        let {order} = this.props;
        return order.pay.openid_loading?(
            <Loading text="认证中..." isFetching={order.pay.pay_loading} />
        ):order.pay.pay_loading?(
            <Loading text="加载中..." isFetching={order.pay.pay_loading} />
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