import React from 'react'

import './index.scss'

import star_fill from '../../images/three/icon-1.png'
import star_blank from '../../images/three/icon-2.png'

export default class CommentItem extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        let info = this.props.info;
        return (
            <div className="comment-item">
                <div className="ci-a">
                    <div className="cia-a">{info.user_name} 说</div>
                    <div className="cia-b">
                        <img src={(parseInt(info.star)>=1?star_fill:star_blank)} className="comment-star-icon" />
                        <img src={(parseInt(info.star)>=2?star_fill:star_blank)} className="comment-star-icon" />
                        <img src={(parseInt(info.star)>=3?star_fill:star_blank)} className="comment-star-icon" />
                        <img src={(parseInt(info.star)>=4?star_fill:star_blank)} className="comment-star-icon" />
                        <img src={(parseInt(info.star)>=5?star_fill:star_blank)} className="comment-star-icon" />
                        <span className="comment-star-score">{info.star}</span>
                    </div>
                </div>
                <div className="ci-b">
                    {info.comment}
                </div>
                <div className="ci-c">
                    {info.time}
                </div>
            </div>
        )
    }
}
