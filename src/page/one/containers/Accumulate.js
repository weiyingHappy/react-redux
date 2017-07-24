import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import {fetchAccumulateMy} from '@/src/actions/user'

import './accumulate.scss'

class Accumulate extends Component {

    constructor (props) {
        super(props);

    }

    componentWillMount() {
        let {dispatch, user} = this.props;
        dispatch(fetchAccumulateMy({page: 1})).then((json)=>{
            console.log(json);
        })
    }


    render() {
        const { dispatch, user } = this.props;
        let lists = user.accumulate_my.lists.map((item) => {
            return (
                <div className="m-item">
                    <div className="mi-left">
                        <div className="mil-top">消费送积分</div>
                        <div className="mil-bottom">{item.create_time}</div>
                    </div>
                    <div className="mi-right">
                        +{item.point}
                    </div>
                </div>
            )
        });

        return (
            <div className="accumulate-container">
                <div className="top">
                    <span className="icon money"></span>
                    <div className="top-text">{user.accumulate_total}</div>
                </div>

                <div className="middle">
                    {
                        lists.length>0?
                            lists:
                            <p className="nohave">暂无积分记录</p>
                    }
                </div>
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
export default connect(select)(Accumulate)