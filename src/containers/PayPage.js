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
        let {dispatch, order} = this.props;
        let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe163c2e7ba565707&redirect_uri=http://www.lianwuyun.cn/cmsfont/uniPay/'+order.pay.order_no+'&response_type=code&scope=snsapi_base&state=123#wechat_redirect'
        window.location.href = url;
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