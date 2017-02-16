import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import moment from 'moment'

import config from '../../config/config.js'
import Loading from '../components/loading'
import Scroll from '../components/scroll'
import './roomInfo.scss'

class RoomInfo extends Component {

    constructor (props) {
        super(props);

        this.state = {
            inventory: 0
        }
    }

    componentWillMount() {
        console.log(this.props.hotel.lists[this.props.hotel.room_id]);
    }

    chooseStart() {

    }

    chooseEnd() {

    }


    render() {
        const {hotel, user, storage } = this.props;
        const room = hotel.lists[hotel.room_id];

        return (
            <div className="roomInfo-container">
                <div className="top-a">
                    <Scroll img_lists={room.imgs||[]} height="180px" />

                    <div className="top-a-des">
                        <div className="top-a-left">
                            {room.name}
                        </div>
                        {this.state.inventory == 0 ? (<div className="no-room-text">当前日期无房</div>):(
                            <div className="top-a-right">
                                <div className="top-a-right-a">￥{room.nowPrice.oprice}</div>
                                <div className={"top-a-right-b "+(room.inventory==0?"no-room-price":"")}>
                                    ￥{room.nowPrice.sprice}</div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="date-container">
                    <div className="start-date" onClick={this.chooseStart}>
                        <div className="explain-text">入住</div>
                        <div className="date-ins">{storage.from.get('month')+1}月{storage.from.get('date')}日</div>
                    </div>
                    <div className="end-date" onClick={this.chooseEnd}>
                        <div className="explain-text">离店</div>
                        <div className="date-ins">{storage.to.get('month')+1}月{storage.to.get('date')}日</div>
                    </div>
                    <div className="num-date">
                        <div className="explain-text">共</div>
                        <div className="date-ins">{storage.to.diff(storage.from, 'days')}</div>
                        <div className="explain-text">晚</div>
                    </div>
                    <div className="sign">
                    </div>
                </div>

                <div className="middle-a">
                    <div>
                        <div className="item-label">房间面积</div>
                        <div className="item-value">{room.area} m²</div>
                    </div>
                    <div>
                        <div className="item-label">床　　数</div>
                        <div className="item-value">{(room.bed_num==1?'单床':'双床')}</div>
                    </div>
                    <div>
                        <div className="item-label">床 &nbsp;规 &nbsp;格</div>
                        <div className="item-value">{room.bed}</div>
                    </div>
                </div>

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
export default connect(select)(RoomInfo)