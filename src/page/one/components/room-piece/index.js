import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import moment from 'moment'
import './index.scss'

class RoomPiece extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { data } = this.props
        const { booked, num } = data.dynamic

        const getNotify = () => {
            const hotel = this.props.hotel.intro
            if(hotel.daofu == 1) {
                return '最晚留房至入住当天' + hotel.daofu_time
            }
        }

        const getTags = () => {
            const tags = []
            const hotel = this.props.hotel.intro

            if(hotel.daofu == 1) {
                tags.push('到店支付')
            }
            if(hotel.wuyou == 1) {
                tags.push('无忧行李')
            }
            if(hotel.seckill == 1) {
                tags.push('抢房')
            }

            return tags
        }

        // 房间剩余提醒
        const getStockNotiy = () => {
            if(booked == num) {
                return (
                    <div className="rest_error">· 今日满房</div> 
                )
            }
            if(booked/num >= 0.8) {
                return (
                    <div className="rest_waring">· 今日仅剩{num - booked}间</div>
                )
            }
        }

        return (
            <div className="room-piece">
                <div className="img-area">
                    <img src={data.imgs[0] + '?imageView2/1/w/90/h/90'} className="img-area-ins" />
                </div>
                {(data.tags && data.tags.length > 0) ? (<img src={data.tags} className="img-type" />) :''}
                <div className="info-area">
                    <div className="info-name-info">
                        <div className="info-name">{data.name}</div>
                        {/*
                            this.props.daofu == 1?
                            <div className="item-luggage">
                                <span className="icon"></span>
                                <span>到店支付</span>
                            </div>
                            :
                            ''*/
                        }
                    </div>
                    <div className="room_bewrite">
                        <span className="area">{data.area}m²</span> |  
                        <span className="bed">
                        {
                            data.bed_num == 2 ?
                                '双床':
                                '单床'
                        }
                        </span>
                        <div>{getNotify()}</div>
                    </div>
                    <div className="tags">
                        {
                            getTags().map((tag, index) => (
                                <span className="tag" key={'tag_' + index}>{tag}</span>
                            ))
                        }
                    </div>
                </div>

                <div className="order-opera">
                    <div className="price">
                        ￥
                        <span className="large">{data.dynamic.sprice.split('.')[0]}</span>
                        .{data.dynamic.sprice.split('.')[1]}
                    </div>
                    <button className={cn('order_btn', {
                        'full': booked == num
                    })}>预定</button>
                    {
                        getStockNotiy()
                    }
                </div>
            </div>
        )
    }
}

RoomPiece.propTypes = {
    data: PropTypes.object.isRequired,
    hotel: PropTypes.object.isRequired, // 房间所属酒店信息，因为需要判断到付
}

module.exports = RoomPiece;