import React from 'react'
import './index.scss'

class RoomPiece extends React.Component {
    constructor (props) {
        super(props);

        this.state = {

        }
    }

    render() {

        return (
            <div className="room-piece">
                <div className="img-area">
                    <img src={this.props.img_src+'?imageView2/0/w/200'} className="img-area-ins" />
                </div>
                {(this.props.tag && this.props.tag.length > 0) ? (<img src={this.props.tag} className="img-type" />) :''}
                <div className="info-area">
                    <div className="info-name-info">
                        <div className="info-name">{this.props.name}</div>
                        <div className="info-info">{this.props.info}</div>
                    </div>
                    <div className="info-score">
                        评分: {this.props.score||5}
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = RoomPiece;