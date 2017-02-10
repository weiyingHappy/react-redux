import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'



class Index extends Component {

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
            <div className="NotFoundPage-container">
                您找的网页走丢了
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
export default connect(select)(Index)