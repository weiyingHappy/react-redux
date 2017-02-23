import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import './iframe.scss'

class Iframe extends Component {

    constructor (props) {
        super(props);

        this.state = {
        }
    }

    componentWillMount() {

    }
    componentDidMount() {
        document.getElementById('iframeId').height="100%";
    }



    render() {
        let {snap} = this.props;
        return (
            <div className="iframe-container">
                <iframe width="100%"
                        height="800"
                        frameborder="0"
                        src={snap.src}>
                </iframe>
            </div>
        )
    }
}


function select(state) {
    return {
        snap: state.snap
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Iframe)