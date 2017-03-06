import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import moment from 'moment'

import {fetchHotelLists, changeRoom} from '../actions/hotel'
import {fetchLogin} from '../actions/user'
import {setDatePicker} from '../actions/storage'

import config from '../../config/config.js'
import Tabber from '../components/tabber'
import Loading from '../components/loading'
import RoomPiece from '../components/room-piece'
import {getCookie, changeTitle} from '../components/Common'
import LoaderMore from '../components/load-more'
import './rooms.scss'

class Rooms extends Component {

    constructor (props) {
        super(props);

        this.chooseStart = this.chooseStart.bind(this);
        this.chooseEnd = this.chooseEnd.bind(this);
        this.handleEnterRoom = this.handleEnterRoom.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentWillMount() {
        let token = this.props.params.token;
        let code = this.props.location.query.code;
        let self = this;
        const {user, hotel, dispatch} = this.props;

        if (user.isLogin) {
            dispatch(fetchHotelLists({teamId: user.teamId, page: 1}));
        }
        else {
            dispatch(fetchLogin({token: token, code: code})).then((res)=>{
                changeTitle(getCookie('wechatName','')||'住那儿旅行');
                if (res.code == 406) {
                    browserHistory.push('/cmsfont/register');
                }
                else if (res.code!=200 && !config.debug) {
                    browserHistory.push('/cmsfont/error');
                }
                else {
                    dispatch(fetchHotelLists({teamId: res.results.teamid, page: 1})).then((res_b)=>{
                        console.log('receive lists: ',hotel);
                    })
                }
            });
        }
        window.addEventListener('scroll',self.handleScroll,false);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll, false);
    }

    handleScroll() {
        let h1 = document.body.scrollHeight;
        let h2 = window.innerHeight;
        let h3 = document.body.scrollTop;
        const {user, hotel, dispatch} = this.props;
        let self = this;

        console.log("document: "+h1+"; window: "+h2+" scroll:"+h3+" h2+h3:"+(h2+h3));

        if (h1 <= h2 + h3 && hotel.nowPage < hotel.totalPage) {
            console.log("加载下一页");
            dispatch(fetchHotelLists({teamId: user.teamId, page: hotel.nowPage+1}));
        }
    }

    chooseStart() {
        this.props.dispatch(setDatePicker(1));
        browserHistory.push('/cmsfont/chooseDate')
    }

    chooseEnd() {
        this.props.dispatch(setDatePicker(2));
        browserHistory.push('/cmsfont/chooseDate')
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
        const {hotel, user, storage } = this.props;
        let from = moment(storage.from);
        let to = moment(storage.to);

        let arr_id = 0;

        let lists = (hotel.lists||[]).map((item) => {
            arr_id += 1;
            return (
                <div className="room-piece-container" key={item.id} onClick={this.handleEnterRoom(arr_id-1)}>
                    <RoomPiece img_src={item.imgs?item.imgs[0]:''} name={item.name}  score={item.score} info={(item.bed_num=='1'?'单床 ':'双床 ')+item.bed.toString()}/>
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
                <Loading text="验证中...." isFetching={user.isFetching} />
            </div>
        ) : hotel.isFetching?(
            <div className="rooms-container">
                <Loading text="加载中..." isFetching={hotel.isFetching} />

                <Tabber highlight={4} token={user.wechatToken} code={user.wechatCode}/>
            </div>
        ):(
            <div className="rooms-container">

                <div className="date-container">
                    <div className="start-date" onClick={this.chooseStart}>
                        <div className="explain-text">入住</div>
                        <div className="date-ins">{from.get('month')+1}月{from.get('date')}日</div>
                    </div>
                    <div className="end-date" onClick={this.chooseEnd}>
                        <div className="explain-text">离店</div>
                        <div className="date-ins">{to.get('month')+1}月{to.get('date')}日</div>
                    </div>
                    <div className="num-date">
                        <div className="explain-text">共</div>
                        <div className="date-ins">{moment(to).diff(moment(from), 'days')}</div>
                        <div className="explain-text">晚</div>
                    </div>
                    <div className="sign">
                    </div>
                </div>

                {lists}
                <LoaderMore nowPage={hotel.nowPage} totalPage={hotel.totalPage} />

                <div style={{height:'80px'}}></div>
                <Tabber highlight={4} token={user.wechatToken} code={user.wechatCode}/>
            </div>
        )
    }
}


function select(state) {
    return {
        user: state.user,
        hotel: state.hotel,
        storage: state.storage
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Rooms)