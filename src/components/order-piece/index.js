import React from 'react'
import moment from 'moment'
import './index.scss'

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
            let btn = item.state==0?(
                <div className="item-btn-group-between">
                    <button className="item-btn-black item-btn">取消订单</button>
                    <div className="item-btn-group">
                        <button className="item-btn-blue item-btn">查看</button>
                        <button className="item-btn-red item-btn">支付{item.type=='1'?'(5分钟内)':'(30分钟内)'}</button>
                    </div>
                </div>
            ): item.state==1?(
                <div className="item-btn-group">
                    <button className="item-btn-black item-btn" onClick={this.props.toRefund(id)}>退订房间</button>
                    <button className="item-btn-blue item-btn">查看</button>
                </div>
            ): item.state==3?(
                <div className="item-btn-group">
                    <button className="item-btn-blue item-btn">查看</button>
                </div>
            ): item.comment==0?(
                <div className="item-btn-group">
                    <button className="item-btn-red item-btn">评价</button>
                </div>
            ): (
                <div className="item-btn-group">
                    <button className="item-btn-blue item-btn">查看</button>
                </div>
            );
            id += 1;
            return (
                <div key={item.order_no} className="order-item">
                    <div className="item-header">
                        {item.state==0?'待支付':item.state==1?'已支付':item.state==2?'已完成':'已取消'}
                    </div>
                    <div className="item-body">
                        <div className="item-body-a">
                            {item.room.team_name} - {item.type=='1'?'抢房订单':'普通订单'}
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
        return (
            <div className="order-piece">
                {dis}
            </div>
        )
    }
}

module.exports = OrderPiece;