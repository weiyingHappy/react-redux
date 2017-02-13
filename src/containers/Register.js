import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'



class Register extends Component {

    constructor (props) {
        super(props);

    }

    componentWillMount() {

    }


    render() {
        const { dispatch, user } = this.props;
        return (
            <div className="register-container">
                welcome to register page !
            </div>
        )
    }
}


function select(state) {
    return {
        user: state.login
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Register)