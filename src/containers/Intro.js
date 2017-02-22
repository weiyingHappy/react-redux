import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import config from '../../config/config'

import './intro.scss'
import Tabber from '../components/tabber'
import Loading from '../components/loading'
import Scroll from '../components/scroll'
import star_fill from '../static/images/three/icon-1.png'
import star_blank from '../static/images/three/icon-2.png'
import img_addr from '../static/images/three/icon-3.png'
import img_phone from '../static/images/three/icon-4.png'

import {getCookie, jsSdkInit} from '../components/Common'
import {fetchHotelLists} from '../actions/hotel'
import {fetchJsSdk} from '../actions/storage'


class Intro extends Component {

    constructor (props) {
        super(props);
        this.handleShowMap = this.handleShowMap.bind(this);
        this.showImg = this.showImg.bind(this);
        this.state = {
            map_loading: false,
            err_msg: ''
        }
    }


    componentWillMount() {
        let self = this;
        const {user, hotel, storage, dispatch} = this.props;

        if (!hotel.hasData) {
            dispatch(fetchHotelLists({teamId: user.teamId, page: 1}));
        }

        let info = {
            teamId: user.teamId,
            appid: user.appid,
            appsecret: user.appsecret
        };
        console.log("000000000");
        if (storage.js_sdk.hasData) {
            jsSdkInit(storage.js_sdk, user.appid, config.my_host+'/intro');
        }
        else {
            dispatch(fetchJsSdk(info)).then((res)=>{
                console.log('jssdk res: ', res);
                jsSdkInit(res.results, user.appid, config.my_host+'/intro');
            });
        }
    }

    showImg() {
        let {hotel} = this.props;
        wx.previewImage({
            current: hotel.intro.imgs?(hotel.intro.imgs[0]||''):'', // 当前显示图片的http链接
            urls: hotel.intro.imgs // 需要预览的图片http链接列表
        });
    }

    handleShowMap() {
        let {hotel} = this.props, self = this;
        self.setState({
            map_loading: true
        });
        wx.openLocation({
            latitude: parseFloat(hotel.intro.latitude), // 纬度，浮点数，范围为90 ~ -90
            longitude: parseFloat(hotel.intro.longitude), // 经度，浮点数，范围为180 ~ -180。
            name: hotel.intro.name, // 位置名
            address: hotel.intro.address, // 地址详情说明
            scale: 25, // 地图缩放级别,整形值,范围从1~28。默认为最大
            infoUrl: '', // 在查看位置界面底部显示的超链接,可点击跳转
            success: function(res) {
                self.setState({
                    map_loading: false
                });
            },
            fail: (err) => {
                alert(JSON.stringify(err));
                self.setState({
                    map_loading: false
                });
            }
        });
        setTimeout(()=>{
            if (self.state.map_loading) {
                alert('获取地图失败');
                self.setState({
                    map_loading: false
                })
            }
        },5000)
    }


    render() {
        const {hotel, user,storage } = this.props;
        return hotel.isFetching?(
            <div className="intro-container">
                <Loading text="加载中..." isFetching={hotel.isFetching} />

                <Tabber highlight={4} token={user.wechatToken} code={user.wechatCode}/>
            </div>
        ):(
            <div className="intro-container">
                <div className="top">
                    <Scroll img_lists={hotel.intro.imgs||[]} height="200px" handleClick={this.showImg}/>
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
                        {storage.js_sdk.hasData?(
                            <div className="hotel-addr" onClick={this.handleShowMap}>
                                <img src={img_addr} className="ha-img"/>
                                <div>
                                    {hotel.intro.address}
                                </div>
                            </div>
                        ):(
                            <div className="hotel-addr">
                                <div className="weui-loading"></div>
                            </div>
                        )}
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
                <Loading text="获取位置中" isFetching={this.state.map_loading} />

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
export default connect(select)(Intro)