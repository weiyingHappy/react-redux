import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import moment from 'moment'

import config from '../../config/config'
import Loading from '../components/loading'

import {fetchOrderInfo} from '../actions/order'

import './showOrder.scss'
import img_addr from '../static/images/three/icon-3.png'
import img_phone from '../static/images/three/icon-4.png'


class ShowOrder extends Component {

    constructor (props) {
        super(props);

        this.state = {
        }
    }



    componentWillMount() {
        let {dispatch, order} = this.props;

        dispatch(fetchOrderInfo(order.pay.order_no)).then((res)=>{
            console.log("order info res: ", res);
        })
    }


    render() {
        let {order} = this.props;
        let item = order.pay;
        return (order.pay.loading)?(
            <div className="show-order-container">
                <Loading text="加载中..." isFetching={order.pay.loading} />
            </div>
        ):(
            <div className="show-order-container">
                <div className="show-order">
                    <div className="so-top">
                        <div className="sot-a">
                            {item.team.name}
                        </div>
                        <div className="sot-b">
                            <div>
                                房型: {item.room.name}
                            </div>
                            <div>
                                间数: {item.num}间
                            </div>
                            <div>
                                入离时间: {item.start} 至 {item.end}
                            </div>
                        </div>
                        <div className="sot-c">
                            酒店地址: {item.team.address}
                        </div>
                        <div className="sot-d">
                            <a className="sotd-a">
                                <img src={img_addr} className="sotd-img"/>
                                酒店地图
                            </a>
                            <a className="sotd-b" href={"tel:"+item.team.telphone}>
                                <img src={img_phone} className="sotd-img"/>
                                酒店电话
                            </a>
                        </div>
                    </div>

                    <div className="so-middle">
                        <div className="som-a">
                            <div>订单状态:</div>
                            <div className="som-red">{item.state=='0'?'待支付':item.state=='1'?'已支付':item.state=='2'?'已完成':'已取消'}</div>
                        </div>
                        <div className="som-b">
                            <div>订单编号:</div>
                            <div>{item.order_no}</div>
                        </div>
                        <div className="som-c">
                            <div>下单时间:</div>
                            <div>{item.create_time}</div>
                        </div>
                        <div className="som-d">
                            <div>订单金额:</div>
                            <div className="som-red">￥{item.price}</div>
                        </div>
                    </div>

                    <div className="so-bottom">
                        <div className="sob-a">
                            <div>入住人:</div>
                            <div>{item.user_name}</div>
                        </div>
                        <div className="sob-b">
                            <div>联系手机:</div>
                            <div>{item.phone}</div>
                        </div>
                    </div>

                    <div className="so-tail">
                        <button className="sol-btn">返回</button>
                    </div>
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
export default connect(select)(ShowOrder)