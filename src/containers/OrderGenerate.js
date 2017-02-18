import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import './orderGenerate.scss'


class DatePicker extends Component {

    constructor (props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.odd = true;
    }

    componentWillMount() {
        
    }

    render() {
        let {storage} = this.props;
        return (
            <div className="order-generate-container">
                
            </div>
        )
    }
}


function select(state) {
    return {
        storage: state.storage
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(DatePicker)