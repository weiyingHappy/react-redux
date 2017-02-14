import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import Loading from '../components/loading'
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
                登录成功
                <Loading text="logging in..." isFetching={user.isFetching} />
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