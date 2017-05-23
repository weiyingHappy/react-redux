/**
 * 无忧行李订单
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './LuggageOrders.scss'
import config from '../../config/config.js'
import InfiniteScroll from 'react-infinite-scroller'

class LuggageOrders extends React.Component {
    constructor () {
        super()
        this.state = {
            orders: [],
            page: 1,
            showinfo: false,
            showorder: undefined,
            showcancel: false,
            hasmore: false
        }
    }

    getCookie (c_name) {
        if (document.cookie.length>0)
        {
            try {
                var reg = new RegExp("(^|\\s)" + c_name + "=([^;]*)(;|$)");
                let res = document.cookie.match(reg);
                if (res) {
                    return res[2];
                }
                else {
                    return null;
                }
            }
            catch(e) {
                console.log(e);
            }
        }
        return ""
    }

    componentWillMount() {
        /*$.ajax({
            url: `${config.api_host}/FE/OrderExtra/wuoyouOrders/${this.state.page++}`,
            method: 'GET',
            dataType: 'JSON',
            beforeSend: (request) => request.setRequestHeader("Session-Token", this.getCookie('token')||config.admin_token),
            success: (res) => {
                if (res.code === 200) {
                    this.setState(Object.assign(this.state, {
                        orders: res.results.lists
                    }))
                }
                if (res.results.nowPage<res.results.totalPage) {
                    this.setState({
                        ...this.state,
                        hasmore: true
                    })
                } else {
                    this.setState({
                        ...this.state,
                        hasmore: false
                    })
                }
            }
        })*/
    }

    filterOrderState (state) {
        
        let text = '未知'
        let className = 'gray_bg'

        switch (state) {
            case 0:
                text = '待支付'
                className = "red_bg"
                break
            case 1:
                text = '确认中'
                className = "green_bg"
                break
            case 2:
                text = '派单中'
                className = "green_bg"
                break
            case 3:
                text = '已接单'
                className = "blue_bg"
                break
            case 4:
                text = '运送中'
                className = "blue_bg"
                break
            case 5:
                text = '已到达'
                className = "blue_bg"
                break
            case 6:
                text = '已完成'
                className = "orange_bg"
                break
            case 7:
                text = '已取消'
                className = "gray_bg"
                break
        }

        return (
            <div className={'state '+className}>{text}</div>
        )
    }

    handleOrderItemClick (value) {
        location.href = 'luggage_orderinfo?id='+value.id;
    }

    filterPaytype (type) {
        if (type == 0) {
            return '微信支付'
        }
        return '支付宝支付'
    }

    filterFlowuser (showorder) {
        if (showorder.extra.state===3||showorder.extra.state===4||showorder.extra.state===5) {
            return (
                <div>
                    <div className="flowuser">配送人员：{showorder.extra.user_name}</div>
                    <div className="flowuser flowphone">联系电话：{showorder.extra.phone}</div>
                </div>
            )
        }
    }

    toggaleCancelModal () {
        this.setState({
            ...this.state,
            showcancel: !this.state.showcancel
        })
    }

    cancelOrder () {
        $.ajax({
            url: `${config.api_host}/FE/OrderExtra/cancelWuyouOrder/${this.state.showorder.id}`,
            method: 'GET',
            dataType: 'JSON',
            beforeSend: (request) => request.setRequestHeader("Session-Token", this.getCookie('token')||config.admin_token),
            success: (res) => {
                if(res.code === 200) {
                    this.setState({
                        ...this.state,
                        showcancel: false
                    })
                    history.back()
                    setTimeout(()=>{location.reload()}, 10)
                }
            }
        })
    }

    cancelModal (showorder) {
        if (this.state.showcancel) {
            return (
                <div className="cancelmodal" onClick={this.toggaleCancelModal.bind(this)}>
                    <div className="modalpanel" onClick={(e)=>{e.stopPropagation()}}>
                        <div className="mpaneltitle">
                            取消订单
                        </div>
                        <div className="content">
                            <div className="mline">
                                <span className="mtitle">起点：</span>
                                <span className="mtext">{showorder.desc.start_address}</span>
                            </div>
                            <div className="mline">
                                <span className="mtitle">终点：</span>
                                <span className="mtext">{showorder.desc.end_address}</span>
                            </div>
                            <div className="mline">
                                <span className="mtitle">行李总数：</span>
                                <span className="mtext">{showorder.desc.num}</span>
                            </div>
                            <div className="wmsg">您的取消申请将发送至客服，确认取消后我们的客服 将第一时间和您核对情况</div>
                        </div>
                        <div className="btns">
                            <button onClick={this.toggaleCancelModal.bind(this)}>点错了</button>
                            <button className="primary" onClick={this.cancelOrder.bind(this)}>确认取消</button>
                        </div>
                    </div>
                </div> 
            )
        }
    }

    loadMore () {
        if (!this.state.hasmore) {
            return
        }
        $.ajax({
            url: `${config.api_host}/FE/OrderExtra/wuoyouOrders/${this.state.page++}`,
            method: 'GET',
            dataType: 'JSON',
            beforeSend: (request) => request.setRequestHeader("Session-Token", this.getCookie('token')||config.admin_token),
            success: (res) => {
                if (res.code === 200) {
                    this.setState(Object.assign(this.state, {
                        orders: this.state.orders.concat(res.results.lists)
                    }))
                }
                if (res.results.nowPage<res.results.totalPage) {
                    this.setState({
                        ...this.state,
                        hasmore: true
                    })
                } else {
                    this.setState({
                        ...this.state,
                        hasmore: false
                    })
                }
                console.log(this.state)
            }
        })
    }

    render () {

        if (this.state.showinfo) {
            const {showorder} = this.state
            return (
                <div className="page">
                    <div className="order">
                        {
                            showorder.extra.state != 7?
                            <div className="cancelorder">
                                <span onClick={this.toggaleCancelModal.bind(this)}>取消订单>></span>
                            </div>:''
                        }
                        
                        <div className="address panel">
                            <div className="start">
                                <span className="btitle">起</span>
                                <span className="title">{showorder.desc.start_address}</span>
                            </div>
                            <div className="end">
                                <span className="btitle">终</span>
                                <span className="title">{showorder.desc.end_address}</span>                                
                            </div>
                        </div>  
                        <div className="info panel">
                            <div className="infostate">
                                {
                                    this.filterOrderState(showorder.extra.state)
                                }
                            </div>
                            <div className="line">联系人：{showorder.user_name}</div>
                            <div className="line">联系电话：{showorder.phone}</div>
                            <div className="line">行李数量：{showorder.desc.num}</div>
                            <div className="line">费用：<span className="money">{showorder.price}元</span>{this.filterPaytype(showorder.pay_type)}</div>
                            <div className="line">订单编号：{showorder.order_no}</div>
                            <div className="line">下单时间：{showorder.create_time}</div>
                            <div className="line">到达时间：{showorder.desc.end_time}</div>
                        </div>  
                        <div className="flow panel">
                            {this.filterFlowuser(showorder)}
                            <div className="flowline">
                                <ul>
                                    <li className="end">
                                        <div className="msg">{showorder.extra.end_address}</div>
                                        <div className="time">{showorder.extra.end_time} 到达</div>
                                    </li>
                                    {
                                        showorder.extra.flow.map((value, index)=>{
                                            return (
                                                <li className={index===0?'active':''} key={index}>
                                                    <div className="msg">{value.event}</div>
                                                    <div className="time">{value.time}</div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>   
                     {this.cancelModal(showorder)}           
                </div>
            )
        }

        const { orders } = this.state
        
        if (orders.length===0) {
            return (
                <div className="page">
                    <div className="none">
                        暂无无忧行李订单
                    </div>
                    <div className="footer">
                        {/*联系客服：400-123-1234*/}
                    </div>
                </div>
            )
        }

        return (
            <div className="page">
                <InfiniteScroll pageStart={1} loadMore={this.loadMore.bind(this)} hasMore={this.state.hasmore} useWindow={false}>
                    <ul className="orders">
                        {
                            orders.map((value, key)=>{
                                return (
                                    <li className="item" key={key} onClick={()=>{this.handleOrderItemClick(value)}}>
                                        <div className="content">
                                            <div className="title">{value.desc.start_address}</div>
                                            <div className="title">—{value.desc.end_address}</div>
                                            <div className="graytext">行李数：{value.desc.num}件</div>
                                            <div className="graytext">时间：{value.desc.end_time} 到达</div>
                                            {
                                                this.filterOrderState(value.extra.state)
                                            }
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="footer">
                        {/*联系客服：400-123-1234*/}
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default connect()(LuggageOrders)