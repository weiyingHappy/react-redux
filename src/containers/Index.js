import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import {fetchLogin} from '../actions/user'


class Index extends Component {

    constructor (props) {
        super(props);

    }

    componentWillMount() {
        let token = this.props.params.token;
        let code = this.props.location.query.code;
        this.props.dispatch(fetchLogin({token: token, code: code}));
        console.log(token);
    }


    render() {
        const { dispatch, user } = this.props;
        return (
            <div className="index-container">
                <div id="loadingToast" style={{display: (user.isFetching?'block':'none')}}>
                    <div className="weui-mask_transparent"></div>
                    <div className="weui-toast">
                        <i className="weui-loading weui-icon_toast"></i>
                        <p className="weui-toast__content">logging in...</p>
                    </div>
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
export default connect(select)(Index)