import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import Tabber from '../components/tabber'

class MyOrder extends Component {

    constructor (props) {
        super(props);

    }

    componentWillMount() {

    }

    render() {
        const { dispatch, user } = this.props;

        return (
            <div className="my-order-container">
                
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
export default connect(select)(MyOrder)