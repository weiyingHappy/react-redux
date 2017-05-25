import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { browserHistory } from 'react-router'


import EquArea from '../components/equ-area'
import Loading from '../components/loading'

import {fetchOrderNum, fetchOrderSubmit} from '../actions/storage'
import {setPay} from '../actions/order'
import {setUser} from '../actions/user'
import {fetchCouponLists} from '../actions/coupon'

import img_user from '../static/images/three/icon-5.png'
import './orderGenerate.scss'


class OrderGenerate extends Component {

    constructor (props) {
        super(props);
        this.handlePay = this.handlePay.bind(this);
        this.handleChooseNum = this.handleChooseNum.bind(this);
        this.state = {
            is_choosing_num: false,
            name: '',
            phone: ''
        }
    }

    componentWillMount() {
        let {dispatch, hotel, user, storage} = this.props, self = this;
        const room = hotel.lists[hotel.room_id];
        let from = moment(storage.from);
        let to = moment(storage.to);

        if (!user.isLogin) {
            dispatch(setUser({register_back_url: '/cmsfont/orderGenerate'}));
            browserHistory.push('/cmsfont/register');
            return ;
        }
        else {
            self.setState({
                phone: user.phone
            });

            let info = {
                roomId: room.id,
                start: moment(from).format('YYYY-MM-DD'),
                days: moment(to).diff(from, 'days'),
                num: 1
            };
            let fetchOrderNumReq = fetchOrderNum(info)
            dispatch(fetchOrderNumReq).then((data) => {
                dispatch(fetchCouponLists({
                    price: data.results,
                    team_id: hotel.intro.id
                }))
            })
        }

    }

    handleChooseNum (val) {
        let self = this;
        return ()=>{
            let {dispatch, hotel, user, storage} = self.props;
            const room = hotel.lists[hotel.room_id];
            let from = moment(storage.from);
            let to = moment(storage.to);

            if (storage.inventory < val) {
                return ;
            }

            self.setState({
                is_choosing_num: false
            });

            let info = {
                roomId: room.id,
                start: moment(from).format('YYYY-MM-DD'),
                days: moment(to).diff(from, 'days'),
                num: val
            };
            dispatch(fetchOrderNum(info)).then((data) => {
                fetchCouponLists({
                    price: data.results,
                    team_id: hotel.intro.id
                })
            })
        }
    }

    handleChooseCoupon () {
        browserHistory.push('/cmsfont/chooseCoupon')
    }

    // 获取金额
    convertPrice () {
        const { available, choose } = this.props.coupon
        const { order } = this.props.storage

        return available.length == 0 ?
            order.price :
            order.price - (choose.coupon_type == 1 ?
                Math.min(((10-choose.desc.discount) * order.price / 10.0).toFixed(2), choose.desc.max_discount):
                parseFloat(choose.desc.discount))
    }

    handlePay () {
        let {dispatch, hotel, user, storage, coupon} = this.props, self = this;
        const room = hotel.lists[hotel.room_id];

        if (self.state.name=='' || self.state.phone=='') {
            alert("姓名或手机号不能为空");
            return ;
        }

        let reg = /^1[34578]\d{9}$/;

        if (!reg.test(self.state.phone)) {
            alert("手机号不合法");
            return ;
        }

        let info = {
            room_id: room.id,
            num: storage.order.num,
            user_name: self.state.name,
            phone: self.state.phone,
            start: storage.from,
            end: storage.to
        };

        console.log(coupon)
        if (coupon.recommend) {
            info.coupon_id = coupon.recommend.id
        }

        if (coupon.choose) {
            info.coupon_id = coupon.choose.id            
        }

        dispatch(fetchOrderSubmit(info)).then((res) => {
            if (res.code == 200) {
                dispatch(setPay({order_no: res.results.order_no}));
                browserHistory.push('/cmsfont/payPage')
            }
            else {
                alert(res.code+'---'+res.msg);
            }
        });
    }

    render() {
        let {storage, hotel, user, coupon} = this.props;
        let {recommend,disable,available,choose} = coupon;

        let usagecoupon = recommend

        if (choose) {
            usagecoupon = choose
        }
        
        const room = hotel.lists[hotel.room_id];
        let from = moment(storage.from);
        let to = moment(storage.to);
        return (
            <div className="order-generate-container">
                <div className="top">
                    <div className="top-a">
                        <div className="top-a-title">
                            {hotel.intro.name}
                        </div>
                        <div className="top-a-date">
                            <div className="top-a-date-a">
                                <span className="date-delight">入住: </span>
                                <span className="date-highlight">{from.get('month')+1}月{from.get('date')}日</span>
                            </div>
                            <div className="top-a-date-b">
                                <span className="date-delight">共</span>
                                <span className="date-highlight">{moment(to).diff(from, 'days')}</span>
                                <span className="date-delight">晚</span>
                            </div>
                            <div className="top-a-date-c">
                                <span className="date-delight">离店: </span>
                                <span className="date-highlight">{to.get('month')+1}月{to.get('date')}日</span>
                            </div>
                        </div>
                    </div>
                    <div className="top-b">
                        <div className="top-b-a">
                            {room.name}
                        </div>
                        <div className="top-b-b">
                            <EquArea lists={room.equipments}/>
                        </div>
                    </div>
                </div>

                <div className="middle">
                    <div className="middle-a" onClick={()=>this.setState({ is_choosing_num: true })}>
                        <div className="input-head">房间数</div>
                        <input type="text" disabled value={storage.order.num+'间'} className="input-body"/>
                        <div className="sign">
                        </div>
                    </div>
                    <div className="mbc-container">
                        <div className="mbc-left">
                            <div className="middle-b">
                                <div className="input-head">入住人 &nbsp;</div>
                                <input type="text" value={this.state.name} placeholder="姓名" className="input-body"
                                onChange={(e)=>{this.setState({name:e.target.value})}}/>
                            </div>
                            <div className="middle-c">
                                <div className="input-head">手机号</div>
                                <input type="tel" value={this.state.phone} placeholder="用于接收确认短信" className="input-body"
                                onChange={(e)=>{this.setState({phone:e.target.value})}}/>
                            </div>
                        </div>
                        <div className="mbc-right">
                            <img className="mbcr-img" src={img_user} />
                        </div>
                    </div>
                </div>

                <div className="coupon" onClick={this.handleChooseCoupon.bind(this)}>
                    <div className="cp-left">
                        <div className="cpl-a">
                            <div className="cpla-a">优惠券</div>
                            <div className="cpla-b">{available.length}张可用</div>
                        </div>
                        <div className="cpl-b">
                            {available.length==0?'暂无可用优惠券':usagecoupon.coupon_type==0?(usagecoupon.desc.discount+'元优惠券'):
                            usagecoupon.coupon_type==1?(usagecoupon.desc.discount+'折券'):('满'+usagecoupon.desc.limit+'减'+usagecoupon.desc.discount+'券')}
                        </div>
                    </div>
                    <div className="cp-right">
                        <div className="cpr-a">
                            {
                                (available.length==0?'':'-￥')
                                +
                                (usagecoupon.coupon_type==1?
                                    Math.min(((10-usagecoupon.desc.discount)*storage.order.price/10.0).toFixed(2),usagecoupon.desc.max_discount):
                                    (usagecoupon.desc.discount?usagecoupon.desc.discount:''))
                            }
                        </div>
                        <div className="cpr-b">
                        </div>
                    </div>
                </div>

                <div className="bottom">
                    <div className="bottom-a">
                        温馨提示:
                    </div>
                    <div className="bottom-res">1、需在30分钟内支付，支付成功后，房间预订成功。 </div>
                    <div className="bottom-res">2、在入住18：00可取消订单，无条件退全款。款金额将原路返回支付账户。 </div>
                    <div className="bottom-res">3、在当日18：00后预订房间，下单后半小时内可取消订单。 </div>
                    <div className="bottom-res">4、因自身原因未能入住，请与酒店方协商退款。</div>
                </div>

                <div style={{height:'80px'}}></div>

                {storage.order.loading?(
                    <div className="tail">
                        <div className="tail-a">订单金额:￥<div className="weui-loading"></div></div>
                        <button className="tail-b" disabled><div className="weui-loading"></div></button>
                    </div>
                ):(
                    <div className="tail">
                        <div className="tail-a">订单金额:<span className="tail-highlight">￥{this.convertPrice()}</span></div>
                        <button className="tail-b" onClick={this.handlePay}>提交订单</button>
                    </div>
                )}

                <Loading text="提交订单中..." isFetching={storage.order.submitting} />

                <div style={{display: this.state.is_choosing_num?'block':'none'}}>
                    <div className="weui-mask" style={{opacity: "1"}}></div>
                    <div className="weui-actionsheet weui-actionsheet_toggle" id="iosActionsheet">
                        <div className="weui-actionsheet__menu choose-room-num">
                            <div className={"room-num-item "+(storage.order.num==1?'num-item-highlight':'')+(storage.inventory<1?' room-num-item-disabled':'')} onClick={this.handleChooseNum(1)}>1间</div>
                            <div className={"room-num-item "+(storage.order.num==2?'num-item-highlight':'')+(storage.inventory<2?' room-num-item-disabled':'')} onClick={this.handleChooseNum(2)}>2间</div>
                            <div className={"room-num-item "+(storage.order.num==3?'num-item-highlight':'')+(storage.inventory<3?' room-num-item-disabled':'')} onClick={this.handleChooseNum(3)}>3间</div>
                            <div className={"room-num-item "+(storage.order.num==4?'num-item-highlight':'')+(storage.inventory<4?' room-num-item-disabled':'')} onClick={this.handleChooseNum(4)}>4间</div>
                            <div className={"room-num-item "+(storage.order.num==5?'num-item-highlight':'')+(storage.inventory<5?' room-num-item-disabled':'')} onClick={this.handleChooseNum(5)}>5间</div>
                            <div className={"room-num-item "+(storage.order.num==6?'num-item-highlight':'')+(storage.inventory<6?' room-num-item-disabled':'')} onClick={this.handleChooseNum(6)}>6间</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function select(state) {
    return {
        storage: state.storage,
        hotel: state.hotel,
        user: state.user,
        coupon: state.coupon
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(OrderGenerate)