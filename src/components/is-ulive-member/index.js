import React from 'react'

import './index.scss'

export default class IsUliveMember extends React.Component {
    constructor (props) {
        super(props);

    }


    render () {
        return (
            <div className="is-ulive-member">
                <div className="top">
                    <div>住那儿旅行汇聚全国优质房源，</div>
                    <div>只卖最舒适的房间，</div>
                    <div>到点抢房，开心入住~</div>
                </div>

                <div className="middle" >
                    <button className="m-btn" onClick={()=>{window.location.href='http://www.hotelets.com/weixin/scan_in?snap_id='+this.props.teamId}}>立即抢房</button>
                </div>

                <div className="bottom">
                    微信可能会提醒您授权
                </div>
            </div>
        )
    }
}