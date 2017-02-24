import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import {fetchHotelLists, changeRoom} from '../actions/hotel'
import {fetchLogin} from '../actions/user'

import config from '../../config/config.js'
import Tabber from '../components/tabber'
import Loading from '../components/loading'
import RoomPiece from '../components/room-piece'
import './rooms.scss'

class Rooms extends Component {

    constructor (props) {
        super(props);

        this.handleEnterRoom = this.handleEnterRoom.bind(this);
    }

    setCookie(name, value) {
        var exp = new Date();
        exp.setTime(exp.getTime() + 60 * 2000 * 10);//过期时间 2分钟
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }

    componentWillMount() {
        let token = this.props.params.token;
        let code = this.props.location.query.code;
        let self = this;
        const {user, hotel, dispatch} = this.props;

        // document.cookie = 'wechatToken='+token;
        // document.cookie = 'wechatCode='+code;
        this.setCookie('wechatToken', token);
        this.setCookie('wechatCode', code);

        if (user.isLogin) {
            dispatch(fetchHotelLists({teamId: user.teamId, page: 1}));
            return ;
        }
        dispatch(fetchLogin({token: token, code: code})).then((res)=>{

            if (res.code == 406) {
                browserHistory.push('/cmsfont/register');
            }
            else if (res.code!=200 && config.mid==config.production) {
                browserHistory.push('/cmsfont/error');
            }
            else {
                dispatch(fetchHotelLists({teamId: res.results.teamid, page: 1})).then((res_b)=>{
                    console.log('receive lists: ',hotel);
                })
            }
        });

    }

    handleEnterRoom(id) {
        let {dispatch, hotel} = this.props;
        return (e) => {
            console.log('choose id  ', id);
            dispatch(changeRoom(id));
            browserHistory.push('/cmsfont/roomInfo')
        }
    }

    render() {
        const {hotel, user } = this.props;

        let arr_id = 0;

        let lists = (hotel.lists||[]).map((item) => {
            arr_id += 1;
            return (
                <div className="room-piece-container" key={item.id} onClick={this.handleEnterRoom(arr_id-1)}>
                    <RoomPiece img_src={item.imgs?item.imgs[0]:''} name={item.name} info={(item.bed_num=='1'?'单床 ':'双床 ')+item.bed.toString() }/>
                    <div className="price-container">
                        <div className="pc-top">
                            <span className="price-sign>">￥</span>
                            <span className="price-price">{item.nowPrice.sprice}</span>
                        </div>
                        <div className="pc-bottom">
                            预订
                        </div>
                    </div>
                </div>
            )
        });


        return user.isFetching?(
            <div className="index-container">
                <Loading text="验证中..." isFetching={user.isFetching} />
            </div>
        ) : hotel.isFetching?(
            <div className="rooms-container">
                <Loading text="加载中..." isFetching={hotel.isFetching} />

                <Tabber highlight={4} token={user.wechatToken} code={user.wechatCode}/>
            </div>
        ):(
            <div className="rooms-container">

                <div className="date-container" onClick={this.chooseDate}>
                    <div className="start-date">
                        <div className="explain-text">入住</div>
                        <div className="date-ins">11月13日</div>
                    </div>
                    <div className="end-date">
                        <div className="explain-text">离店</div>
                        <div className="date-ins">11月14日</div>
                    </div>
                    <div className="num-date">
                        <div className="explain-text">共</div>
                        <div className="date-ins">1</div>
                        <div className="explain-text">晚</div>
                    </div>
                    <div className="sign">
                    </div>
                </div>

                {lists}

                <div style={{height:'100px'}}></div>
                <Tabber highlight={4} token={user.wechatToken} code={user.wechatCode}/>
            </div>
        )
    }
}


function select(state) {
    return {
        user: state.user,
        hotel: state.hotel
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Rooms)