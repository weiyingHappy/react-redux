import React, { Component, PropTypes } from 'react'
import './index.scss'


class Loading extends Component {

    render() {
        return (
            <div className="notfound-container">
                网页去外太空啦!
            </div>
        )
    }
}


// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default Loading