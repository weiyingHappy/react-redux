import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'
import moment from 'moment'
import ImageGallery from 'react-image-gallery'
import cn from 'classnames'

import {fetchHotelLists, changeRoom} from '@/src/actions/hotel'
import {fetchLogin} from '@/src/actions/user'
import {setDatePicker} from '@/src/actions/storage'

import config from '@/config/config.js'
import NavBar from '../components/NavBar'
import Tabber from '../components/tabber'
import Loading from '../components/loading'
import RoomPiece from '../components/room-piece'
import {getCookie, changeTitle} from '../components/Common'
import LoaderMore from '../components/load-more'
import 'react-image-gallery/styles/scss/image-gallery.scss'
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

        // 升级兼容代码处理，如果路由里面没有token信息（配备/myorder/:toekn），就取本地存取信息
        if(!token||!code) {
            token = localStorage.token;
            code = localStorage.code;
        }

        let self = this;
        const {user, hotel, dispatch} = this.props;

        if (user.isLogin) {
            dispatch(fetchHotelLists({teamId: user.teamId, page: 1}));
        }
        else {
            dispatch(fetchLogin({token: token, code: code})).then((res)=>{
                changeTitle(getCookie('wechatName','')||'住那儿旅行');

                if (res.code == 406) {
                    // browserHistory.push('/cmsfont/register');
                    dispatch(fetchHotelLists({teamId: res.results.teamid, page: 1})).then((res_b)=>{
                        console.log('receive lists: ',hotel);
                    })
                }
                else if (res.code!=200 && !config.debug) {
                    browserHistory.push('/cmsfont/error');
                }
                else {
                    dispatch(fetchHotelLists({teamId: res.results.teamid, page: 1})).then((res_b)=>{
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

        // console.log("document: "+h1+"; window: "+h2+" scroll:"+h3+" h2+h3:"+(h2+h3));

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

    handleEnterRoom(id, room_id) {
        let {dispatch, hotel} = this.props;
        return (e) => {
            dispatch(changeRoom(id));
            browserHistory.push('/cmsfont/roomInfo/' + room_id)
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
                <div className="room-piece-container" key={item.id} onClick={this.handleEnterRoom(arr_id-1, item.id)}>
                    <RoomPiece data={item} />
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

                <ImageGallery
                        items={[
                            {
                                original: 'http://oi9d1dmyt.bkt.clouddn.com/4a0a458b2745496aa70562bef4db0c8a_th.png?imageMogr2/auto-orient/thumbnail/375x200!/format/jpg/interlace/1/blur/1x0/quality/75|imageslim'
                            }
                        ]}
                        ref='banner'
                        slideInterval={2000}
                        showThumbnails={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        autoPlay={true}
                        showNav={false}
                        showBullets={true}
                        showIndex={false}
                        onClick = {(e) => {
                            console.log(this.refs.banner.getCurrentIndex())
                        }}
                    ></ImageGallery>
                
                <div className="navs">
                    <Link to='/cmsfont/intro'>
                        <NavBar
                            moretext = '地图'
                        >锦江区宾馆</NavBar>
                    </Link>

                    <NavBar
                        moretext = '酒店详情'
                    >
                        <div className="hotel_facilities">
                            <span className="facilities_icon maojin"></span>
                            <span className="facilities_icon yashua"></span>
                            <span className="more">...</span>
                        </div>
                    </NavBar>

                    <NavBar
                        moretext = '24评论'
                    >
                        <div>
                            <span className="starts">
                            {
                                new Array(5).fill(0).map((_, index) => (
                                    <i key={'start_' + index} className={cn('iconfont', {
                                        'icon-star': index + 1 <= 4,
                                        'icon-start-blank': index + 1 > 4,
                                    })}></i>
                                ))
                            }
                            </span>
                            <span className="score">4分</span>
                        </div>
                    </NavBar>
                </div>

                <div className="date-container">
                    <div className="start-date" onClick={this.chooseStart}>
                        <div className="explain-text">入住</div>
                        <div className="date-ins">{from.get('month')+1}月{from.get('date')}日 今天</div>
                    </div>
                    <div className="num-date">
                        <div className="count-text">{moment(to).diff(moment(from), 'days')}晚</div>
                    </div>
                    <div className="end-date" onClick={this.chooseEnd}>
                        <div className="explain-text">离店</div>
                        <div className="date-ins">{to.get('month')+1}月{to.get('date')}日 明天</div>
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