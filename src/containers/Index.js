import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import './index.scss'
import Loading from '../components/loading'
import {fetchLogin, fetchIndexImg} from '../actions/user'
import config from '../../config/config'
import Tabber from '../components/tabber'
import Scroll from '../components/scroll'

class Index extends Component {

    constructor (props) {
        super(props);
    }

    componentWillMount() {
        let token = this.props.params.token;
        let code = this.props.location.query.code;
        let self = this;
        this.props.dispatch(fetchLogin({token: token, code: code})).then((res)=>{
            console.log('dispatch res: ', res);
            if (res.code != 200 && config.mid==config.production) {
                browserHistory.push('/cmsfont/error');
            }
            self.props.dispatch(fetchIndexImg({token: token})).then((res_b)=>{
                console.log('receive img: ',res_b);
            })
        });
    }




    render() {
        const { dispatch, user } = this.props;
        return user.isFetching?(
            <div className="index-container">
                <Loading text="验证中..." isFetching={user.isFetching} />
            </div>
        ) : user.isLoading?(
            <div className="index-container">
                <Loading text="加载数据中..." isFetching={user.isLoading} />
                <Tabber highlight={4} />
            </div>
        ):(
            <div className="index-container">
                <Loading text="加载数据中..." isFetching={user.isLoading} />
                <Scroll img_lists = {user.indexImgs}/>
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
export default connect(select)(Index)