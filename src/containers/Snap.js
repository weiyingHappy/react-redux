import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import Tabber from '../components/tabber'


class Snap extends Component {

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
        return (
            <div className="index-container">
                欢迎来到抢房
                <Tabber highlight={4} />
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
export default connect(select)(Snap)