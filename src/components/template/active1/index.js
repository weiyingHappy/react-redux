import React, { Component } from 'react'
import './index.scss'
import bgimg from './imgs/bg.png'
import title from './imgs/title.png'
import top from './imgs/top.png'
import end from './imgs/end.png'
import coupon from './imgs/coupon.png'
import buttonbg from './imgs/button.png'
import titlebg from './imgs/title_bg.png'
import request from '../../../utils/request'
import config from '../../../../config/config'


class Page extends Component {
    
    constructor (props) {
        super(props)
    }

    componentWillMount () {
        request(config.api_host+config.remote_path.activityInfo+'/1').then((data)=>{
            console.log(data)
        })
    }

    render () {
        return (
            <div className="active_bg" style={{backgroundImage: 'url('+bgimg+')'}}>
                <div className="bg_top">
                    <img src={top} alt=""/>
                </div>
                <div className="bg_bottom">
                    <img src={end} alt=""/>                    
                </div>
                <div className="container">
                    <div className="slogan">
                        <img src={title} alt=""/>
                    </div>
                    <div className="couponlist">
                        <ul>
                            <li>
                                <div className="couponItem" style={{backgroundImage: 'url('+coupon+')'}}>
                                    <div className="isReceive"></div>
                                    <div className="text">
                                        <div className="money">10元</div>
                                        <div className="info">
                                            <div className="time">使用时间: 5.1-5.31</div>
                                            <div className="bewrite">满100减10</div>
                                        </div>
                                    </div>
                                    <div className="receive">
                                        <button style={{backgroundImage: 'url('+buttonbg+')'}}>立即领取</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bewrite">
                        <div className="title" style={{backgroundImage: 'url('+titlebg+')'}}>活动描述</div>
                        <div className="text">1.优惠券满减：凡是端午节活动期间购买指定商品，价格满 200元即可减20元 2.优惠券折扣：首次购买该门店房型，即送9折优惠券，可 用于下次购房使用</div>
                    </div>
                    <div className="rule">
                        <div className="title" style={{backgroundImage: 'url('+titlebg+')'}}>活动规则</div>                        
                        <div className="text">1.此活动优惠券仅供端午节期间2017年5月28日-2017 年5月30日使用 2.单笔订单优惠券不可叠加使用 3.优惠券仅限购买指定房型使用 4.仅支持活动进行相应优惠券免减，如订单中含有非活动房 型，无法享受优惠 5.优惠券领取及使用时间是2017/5/28-2017/5/30；具体 使用范围及使用规则以活动优惠券信息为准。</div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Page