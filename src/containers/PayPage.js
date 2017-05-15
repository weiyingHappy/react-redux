import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import moment from 'moment'
import pingpp from 'pingpp-js'

import config from '../../config/config'
import EquArea from '../components/equ-area'
import Loading from '../components/loading'
import {getCookie} from '../components/Common'

import {fetchOrderInfo, fetchToPay, fetchArrivePay} from '../actions/order'

import './payPage.scss'
import img_top from '../static/images/three/icon-6.png'

import img_a from '../static/images/four/icon-1.png'
import img_b from '../static/images/four/icon-2.png'
import img_c from '../static/images/four/icon-3.png'
import img_d from '../static/images/four/icon-4.png'


class PayPage extends Component {

    constructor (props) {
        super(props);

        this.handlePay = this.handlePay.bind(this);
        this.handlePayClick = this.handlePayClick.bind(this);
        this.handleArrive = this.handleArrive.bind(this);

        this.state = {
            pay_type: 1
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

        let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+config.pay_appid+'&redirect_uri='+config.ru+order.pay.order_no+'&response_type=code&scope=snsapi_base&state=123#wechat_redirect'
        window.location.href = url;
    }

    handleArrive() {
        let {dispatch, order} = this.props;
        let self = this;

        let info = {
            order_no: order.pay.order_no,
            wx_order: 'daofu',
            price: 1
        };
        dispatch(fetchArrivePay(info)).then((json)=>{
            if (json.code == 200 || json.code == 407) {
                browserHistory.push('/cmsfont/MyOrder/'+getCookie('wechatToken', ''));
            }
            else {
                alert("下单失败,请稍后再试!");
            }
        });
    }

    handlePayClick() {
        console.log("click: "+this.state.pay_type);
        if (this.state.pay_type==1) {
            this.handlePay();
        }
        else {
            this.handleArrive();
        }
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
                </div>
                <div className="we-pay-middle-bottom">
                    <div className="wpmb-a">
                        订单金额: ￥{pay.price}-{pay.price-pay.pay_price}=￥{pay.pay_price}
                    </div>
                    <div className="wpmb-b">
                        <div className="price-head">
                            支付金额:
                        </div>
                        <div className="price-body">
                            ￥{pay.pay_price}
                        </div>
                    </div>
                </div>
                <Loading text="加载中..." isFetching={order.pay.pay_loading} />
                <Loading text="提交中..." isFetching={order.pay.finish_loading} />

                <div className="bottom-a">
                    <div className="ba-a">
                        请选择支付方式
                    </div>
                    <div className="pay-item">
                        <div className="pi-left">
                            <img src={img_a} className="pay-icon"/>
                            <div>微信支付</div>
                        </div>
                        <img className="pi-right" src={this.state.pay_type==1?img_c:img_d}
                             onClick={()=>{this.setState({pay_type:1})}}/>
                    </div>
                    <div className="pay-item" style={{borderBottom: '1px solid #DCDCDC'}}>
                        <div className="pi-left">
                            <img src={img_b} className="pay-icon"/>
                            <div>到店支付</div>
                        </div>
                        <img className="pi-right" src={this.state.pay_type==0?img_c:img_d}
                             onClick={()=>{this.setState({pay_type:0})}}/>
                    </div>
                </div>
                <div style={{height: '30px'}}></div>
                <div className="bottom" onClick={this.handlePayClick}>
                    <button className="bottom-button">立即支付</button>
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