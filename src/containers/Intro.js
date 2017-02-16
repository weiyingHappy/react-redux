import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import './intro.scss'
import Tabber from '../components/tabber'
import Loading from '../components/loading'
import Scroll from '../components/scroll'
import star_fill from '../static/images/three/icon-1.png'
import star_blank from '../static/images/three/icon-2.png'
import img_addr from '../static/images/three/icon-3.png'
import img_phone from '../static/images/three/icon-4.png'

import {fetchHotelLists} from '../actions/hotel'


class Intro extends Component {

    constructor (props) {
        super(props);


    }

    componentWillMount() {
        let self = this;
        const {user, hotel, dispatch} = this.props;

        if (hotel.hasData) {
            return ;
        }
        dispatch(fetchHotelLists({teamId: user.teamId, page: 1}));
    }

    render() {
        const {hotel, user } = this.props;
        return hotel.isFetching?(
            <div className="intro-container">
                <Loading text="加载中..." isFetching={hotel.isFetching} />

                <Tabber highlight={4} token={user.wechatToken} code={user.wechatCode}/>
            </div>
        ):(
            <div className="intro-container">
                <div className="top">
                    <Scroll img_lists={hotel.intro.imgs||[]} height="200px" />
                    <div className="hotel-info">
                        <div className="hotel-info-a">
                            <div className="hotel-name">{hotel.intro.name}</div>
                            <div className="hotel-star">
                                <img src={(parseInt(hotel.intro.star)>=1?star_fill:star_blank)} className="hotel-star-icon" />
                                <img src={(parseInt(hotel.intro.star)>=2?star_fill:star_blank)} className="hotel-star-icon" />
                                <img src={(parseInt(hotel.intro.star)>=3?star_fill:star_blank)} className="hotel-star-icon" />
                                <img src={(parseInt(hotel.intro.star)>=4?star_fill:star_blank)} className="hotel-star-icon" />
                                <img src={(parseInt(hotel.intro.star)>=5?star_fill:star_blank)} className="hotel-star-icon" />
                                <span className="hotel-star-score">{hotel.intro.star}</span>
                            </div>
                        </div>
                    </div>

                    <div className="addr-phone">
                        <div className="hotel-addr"><img src={img_addr} className="ha-img"/> <div> {hotel.intro.address}</div></div>
                        <a className="hotel-phone" href={"tel:"+hotel.intro.telphone}>
                            <img src={img_phone} className="hp-img"/>
                        </a>
                    </div>
                </div>
                <div className="hotel-intro">
                    <div className="hotel-intro-title">酒店介绍</div>
                    <div className="hotel-intro-body">
                        {hotel.intro.intro}
                    </div>
                </div>

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
export default connect(select)(Intro)