import React, { Component, PropTypes } from 'react'
import './index.scss'
import ImageGallery from 'react-image-gallery';

class Scroll extends Component {

    render() {
        let img_lists = this.props.img_lists.map((item)=>{
            return {
                original: item+'?imageView2/5/w/375/h/200'
            }
        });

        return (
            <div className="scroll-container" style={{height: this.props.height}} onClick={this.props.handleClick}>
                <ImageGallery
                    items={img_lists}
                    slideInterval={2000}
                    showThumbnails={false}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    autoPlay={this.props.autoPlay}
                    showNav={false}
                    showBullets={true}
                    showIndex={false}/>
            </div>
        )
    }
}


// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default Scroll