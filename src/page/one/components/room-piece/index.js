import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

class RoomPiece extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { data } = this.props

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
                        <div>{data.intro}</div>
                    </div>
                    <div className="tags">
                        
                    </div>
                </div>
            </div>
        )
    }
}

RoomPiece.propTypes = {
    data: PropTypes.object.isRequired
}

module.exports = RoomPiece;