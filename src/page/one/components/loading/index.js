import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Loading extends Component {

    render() {
        const {text, isFetching} = this.props;
        return (
            <div id="loadingToast" style={{display: (isFetching?'block':'none')}}>
                <div className="weui-mask_transparent"></div>
                <div className="weui-toast">
                    <i className="weui-loading weui-icon_toast"></i>
                    <p className="weui-toast__content">{text}</p>
                </div>
            </div>
        )
    }
}


// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default Loading