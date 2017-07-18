import React from 'react'
import './index.scss'
import {Link} from 'react-router'

import {getCookie} from '../Common'
import cn from 'classnames'
import img_index from '../../images/two/icon-1.png'
import img_order from '../../images/two/icon-2.png'
import img_snap from '../../images/two/icon-3.png'
import img_my from '../../images/two/icon-4.png'

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
                            <span className={cn({
                                'tab_icon': true,
                                'hotel': true
                            })}></span>
                            <p className="weui-tabbar__label" style={{color: brr[0]}}>酒店介绍</p>
                        </Link>
                        <Link to={"/cmsfont/rooms"}className="weui-tabbar__item">
                            <span className={cn({
                                'tab_icon': true,
                                'order': true
                            })}></span>
                            <p className="weui-tabbar__label" style={{color: brr[1]}}>客房预订</p>
                        </Link>
                        <Link to="/cmsfont/snap" className="weui-tabbar__item">
                            <span className={cn({
                                'tab_icon': true,
                                'gifts': true
                            })}></span>
                            <p className="weui-tabbar__label" style={{color: brr[2]}}>最新活动</p>
                        </Link>
                        <Link to="/cmsfont/my" className="weui-tabbar__item">
                            <span className={cn({
                                'tab_icon': true,
                                'user': true
                            })}></span>
                            <p className="weui-tabbar__label" style={{color: brr[3]}}>账户中心</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Tabber;