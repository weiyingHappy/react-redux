import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import {fetchAccumulateTotal} from '../actions/user'
import {setUser} from '../actions/user'

import Tabber from '../components/tabber'
import './my.scss'
import ItemCell from '../components/item-cell'

import img_order from '../static/images/three/icon-7.png'
import img_setting from '../static/images/three/icon-8.png'
import img_accumulate from '../static/images/three/icon-11.png'
import {getCookie, changeTitle} from '../components/Common'

class My extends Component {

    constructor (props) {
        super(props);
    }

    componentWillMount() {
        let {dispatch, user} = this.props;

        if (!user.isLogin) {
            dispatch(setUser({register_back_url: '/cmsfont/my'}));
            browserHistory.push('/cmsfont/register');
            return ;
        }
        else {
            dispatch(fetchAccumulateTotal()).then((json)=>{
                console.log(json);
            })
        }

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
        }, {
            icon: img_accumulate,
            title: (<div>住那儿旅行积分: &nbsp;&nbsp;<span style={{color: '#FF0000'}}>{user.accumulate_loading?(
                <div className="weui-loading"></div>
            ):user.accumulate_total}</span></div>),
            url: '/cmsfont/accumulate'
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

                    <div className="middle-c">
                        <ItemCell {...item_data[2]} />
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