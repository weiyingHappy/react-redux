import React from 'react'
import moment from 'moment'

import './index.css'

class CouponItem extends React.Component {
    constructor (props) {
        super(props);

        this.state = {

        };
    }

    expired(end, type) {
        let exp = moment(end);
        let now = moment();
        return exp.isBefore(now)||type=='choose-b';
    }


    render () {
        let {item, type} = this.props;
        return (
            <div className={(item.type==0?"coupon-item-orange ":"coupon-item-red ")+(this.expired(item.end,type)?'coupon-item-grey':'')}>
                <div className="ci-top">
                    <div className="circle-top">
                    </div>
                    <div className="circle-bottom">
                    </div>
                    <div className="cit-left">
                        <div className="citl-a">
                            {item.coupon_type==1?(item.desc.discount+' 折'):('￥'+item.desc.discount)}
                        </div>
                        <div className="citl-b">
                            {item.coupon_type==0?'抵用券':item.coupon_type==1?'折扣券':'满减券'}
                        </div>
                    </div>
                    <div className="cit-right">
                        <div className="citr-a">
                            {item.coupon_type==0?('通用'+item.desc.discount+'元抵值券'):item.coupon_type==1?(item.desc.discount+'折券'):('满'+item.desc.limit+'减'+item.desc.discount)}
                        </div>
                        {item.type==0?(
                            <div className="citr-b">
                                所有酒店通用 {item.coupon_type==1?(',最高可抵扣'+item.desc.max_discount+'元'):''}
                            </div>
                        ):(
                            <div>
                                <div className="citr-b">
                                    {item.team_name}适用
                                </div>
                                {item.coupon_type == 1 ?(
                                    <div className="citr-b">
                                        最高可抵扣 {item.desc.max_discount + '元'}
                                    </div>):''}
                            </div>
                        )}
                    </div>
                </div>
                <div className="ci-bottom">
                    <div className="cib-a">{item.end} 前有效</div>
                    {
                        item.type==0?(
                            <div className="cib-b" style={{display: ((type=='choose-a'||type=='choose-b')?'none':'block')}} onClick={()=>{window.location.href='room_finder'}}>去使用 &gt;</div>
                        ):(
                            <div className="cib-b" style={{display: ((type=='choose-a'||type=='choose-b')?'none':'block')}} onClick={()=>{!this.expired(item.end)?(window.location.href='hotel?id='+item.team_id):''}}>去使用 &gt;</div>
                        )
                    }
                </div>
            </div>
        )
    }
}


module.exports = CouponItem;

