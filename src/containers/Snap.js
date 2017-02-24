import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import {fetchSnap, setSrc} from '../actions/snap'

import Loading from '../components/loading'
import Tabber from '../components/tabber'
import './snap.scss'


class Snap extends Component {

    constructor (props) {
        super(props);
        this.handleSnapClick = this.handleSnapClick.bind(this);
        this.state = {
        }
    }

    componentWillMount() {
        let {snap, user, dispatch} = this.props;
        if (snap.loading) {
            dispatch(fetchSnap(user.teamId)).then((res)=>{
                console.log('snap res: ', res);
            })
        }
        alert(document.cookie);
    }

    handleSnapClick(src) {
        let self = this;
        return () => {
            // self.props.dispatch(setSrc(src));
            // browserHistory.push('/cmsfont/iframe');
            window.location.href = src;
        }
    }

    render() {
        let {snap, user} = this.props;

        let id = 0;
        let lists = snap.lists.map((item) => {
            id+=1;
            return (
                <div className="activity_item" key={id} onClick={this.handleSnapClick(item.href)}>
                    <img src={item.cover} className="ai-img"/>
                    <p>
                        {item.title}
                    </p>
                </div>
            )
        });
        return snap.loading?(
            <Loading text="加载中..." isFetching={snap.loading} />
        ):(
            <div className="snap-container">
                {lists}

                <div style={{height:'100px'}}></div>
                <Tabber highlight={4} token={user.wechatToken} code={user.wechatCode}/>
            </div>
        )
    }
}


function select(state) {
    return {
        snap: state.snap,
        user: state.user
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Snap)