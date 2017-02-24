import React from 'react'
import './index.scss'
import {Link} from 'react-router'

import {getCookie} from '../../components/Common'
import img_index from '../../static/images/two/icon-1.png'
import img_order from '../../static/images/two/icon-2.png'
import img_snap from '../../static/images/two/icon-3.png'
import img_my from '../../static/images/two/icon-4.png'

class Tabber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let arr = ['normal','normal','normal','normal','normal'];
        let brr = ['#000', '#000', '#000', '#000'];
        arr[this.props.highlight] = 'highlight';
        brr[this.props.highlight] = '#D21727';
        return (
            <div className="tabber">
                <div className="weui-tab">
                    <div className="weui-tab__panel">
                    </div>
                    <div className="weui-tabbar" style={{backgroundColor:'#fff'}}>
                        <Link to="/cmsfont/intro" className="weui-tabbar__item weui-bar__item_on">
                            <img src={img_index} alt="" className="weui-tabbar__icon" />
                            <p className="weui-tabbar__label" style={{color: brr[0]}}>酒店介绍</p>
                        </Link>
                        <Link to={"/cmsfont/rooms/"+(getCookie('wechatToken', ''))+"?code="+(getCookie('wechatCode',''))}className="weui-tabbar__item">
                            <img src={img_order} alt="" className="weui-tabbar__icon" />
                            <p className="weui-tabbar__label" style={{color: brr[1]}}>客房预订</p>
                        </Link>
                        <Link to="/cmsfont/snap" className="weui-tabbar__item">
                            <img src={img_snap} alt="" className="weui-tabbar__icon" />
                            <p className="weui-tabbar__label" style={{color: brr[2]}}>最新活动</p>
                        </Link>
                        <Link to="/cmsfont/my" className="weui-tabbar__item">
                            <img src={img_my} alt="" className="weui-tabbar__icon" />
                            <p className="weui-tabbar__label" style={{color: brr[3]}}>账户中心</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Tabber;