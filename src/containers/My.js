import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import Tabber from '../components/tabber'
import './my.scss'
import ItemCell from '../components/item-cell'

import img_order from '../static/images/three/icon-7.png'
import img_setting from '../static/images/three/icon-8.png'
import {getCookie, changeTitle} from '../components/Common'

class My extends Component {

    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            current: '1'
        }
    }

    componentWillMount() {

    }

    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    }

    render() {
        const { dispatch, user } = this.props;

        let item_data = [{
            icon: img_order,
            title: '我的订单',
            url: "/cmsfont/myOrder/"+(getCookie('wechatToken', ''))+"?code="+(getCookie('wechatCode',''))
        }, {
            icon: img_setting,
            title: '个人设置',
            url: '/cmsfont/setting'
        }];

        return (
            <div className="my-container">
                <div className="top">
                    <div className="top-b">
                        <div className="tb-a">
                            <img className="tba-img" src={user.avatar}></img>
                        </div>
                        <div className="tb-b">
                            {user.nickname||'calmeii'}
                        </div>
                    </div>
                </div>

                <div className="middle">
                    <div className="middle-a">
                        <ItemCell {...item_data[0]}/>
                    </div>

                    <div className="middle-b">
                        <ItemCell {...item_data[1]} />
                    </div>
                </div>



                <Tabber highlight={4} token={user.wechatToken} code={user.wechatCode}/>
            </div>
        )
    }
}


function select(state) {
    return {
        user: state.user
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(My)