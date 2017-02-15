import React from 'react'
import './index.scss'
import {Link} from 'react-router'

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
                            <p className="weui-tabbar__label" style={{color: brr[0]}}>首页</p>
                        </Link>
                        <Link to={"/cmsfont/rooms/"+this.props.token+"?code="+this.props.code}className="weui-tabbar__item">
                            <img src={img_order} alt="" className="weui-tabbar__icon" />
                            <p className="weui-tabbar__label" style={{color: brr[1]}}>订房</p>
                        </Link>
                        <Link to="/cmsfont/snap" className="weui-tabbar__item">
                            <img src={img_snap} alt="" className="weui-tabbar__icon" />
                            <p className="weui-tabbar__label" style={{color: brr[2]}}>抢房</p>
                        </Link>
                        <Link to="/cmsfont/my" className="weui-tabbar__item">
                            <img src={img_my} alt="" className="weui-tabbar__icon" />
                            <p className="weui-tabbar__label" style={{color: brr[3]}}>我的</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Tabber;