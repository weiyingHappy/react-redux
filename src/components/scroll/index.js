import React, { Component, PropTypes } from 'react'
import './index.scss'
import ImageGallery from 'react-image-gallery';
import defaultImg from '../../static/images/two/icon-5.png'

class Scroll extends Component {

    render() {
        let img_lists = this.props.img_lists.map((item)=>{
            return {
                original: item
            }
        });

        return (
            <div className="scroll-container" style={{height: this.props.height}}>
                <ImageGallery
                    items={img_lists}
                    slideInterval={2000}
                    showThumbnails={false}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    autoPlay={false}
                    showNav={false}
                    showBullets={true}
                    showIndex={false}/>
            </div>
        )
    }
}


// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default Scroll