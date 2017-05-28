import React from 'react'
import moment from 'moment'
import './index.scss'

import * as helper from '../Common'

class OrderPiece extends React.Component {
    constructor (props) {
        super(props);

        this.state = {

        }
    }

    render() {
        let {orders} = this.props;

        let id = 0;
        let dis = orders.map((item) => {
            let btn = helper.readyPay(item.state)?(
                <div className="item-btn-group-between">
                    <button className="item-btn-black item-btn" onClick={this.props.toCancel(id)}>取消订单</button>
                    <div className="item-btn-group">
                        <button className="item-btn-blue item-btn" onClick={this.props.toShowOrder(id)}>查看</button>
                        <button className="item-btn-red item-btn" onClick={this.props.toPay(id)} style={{display:item.type==3?'none':'block'}}>支付{item.type=='1'?'(5分钟内)':'(30分钟内)'}</button>
                    </div>
                </div>
            ): helper.hasPay(item.state)?(
                <div className="item-btn-group">
                    <button className="item-btn-black item-btn" onClick={this.props.toRefund(id)} style={{display:item.apply_refund>0?'none':'block'}}>退订房间</button>
                    <button className="item-btn-blue item-btn" onClick={this.props.toShowOrder(id)}>查看</button>
                </div>
            ): helper.isCancel(item.state)?(
                <div className="item-btn-group">
                    <button className="item-btn-blue item-btn" onClick={this.props.toShowOrder(id)}>查看</button>
                </div>
            ): (item.comment==0&&helper.isFinish(item.state))?(
                <div className="item-btn-group">
                    <button className="item-btn-red item-btn" onClick={this.props.toComment(id)}>评价</button>
                </div>
            ): (
                <div className="item-btn-group">
                    <button className="item-btn-blue item-btn" onClick={this.props.toShowOrder(id)}>查看</button>
                </div>
            );
            id += 1;
            return (
                <div key={item.order_no} className="order-item">
                    <div className="item-header">
                        {helper.readyPay(item.state)?'未支付':helper.hasPay(item.state)?
                            '已支付':helper.isFinish(item.state)?'已完成':helper.needRefund(item.state)?'申请退款':'已取消'}
                    </div>
                    <div className="item-body">
                        <div className="item-body-a">
                            {item.room.team_name} - {item.type=='1'?'抢房订单':item.type=='2'?'普通订单':'到付订单'}
                        </div>
                        <div className="item-body-b">
                            房型: {item.room.name}
                        </div>
                        <div className="item-body-c">
                            入离时间: {item.start} 至 {item.end} (共{moment(item.end).diff(moment(item.start), 'days')}晚)
                        </div>
                    </div>
                    <div className="item-tail">
                        {btn}
                    </div>
                </div>
            )
        });
        if (dis.length>0) {
            return (
                <div className="order-piece">
                    {dis}
                </div>
            )
        } else {
            return (
                <p className="nohave">暂无订单</p>
            )
        }
    }
}

module.exports = OrderPiece;