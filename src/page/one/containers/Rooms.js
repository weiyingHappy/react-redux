import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { browserHistory, Link } from "react-router";
import moment from "moment";
import cn from "classnames";

import {
  fetchHotelLists,
  changeRoom,
  fetchHotelInfo
} from "@/src/actions/hotel";
import { fetchRoomList } from "@/src/actions/room";
import { fetchLogin } from "@/src/actions/user";
import { setDatePicker } from "@/src/actions/storage";

import config from "@/config/config.js";
import NavBar from "../components/navbar";
import Tabber from "../components/tabber";
import Loading from "../components/loading";
import LoadingPanel from "../components/loading-panel";
import RoomPiece from "../components/room-piece";
import { getCookie, changeTitle } from "../components/Common";
import LoaderMore from "../components/load-more";
import Scroll from "../components/scroll";
import { fetchJsSdk } from "@/src/actions/storage";
import { jsSdkInit } from "../components/Common";
import { covertEquipmentsToClassName, covertDate } from "@/src/common";
import "./rooms.scss";

// 加载房间配置的图标样式
import "../scss/facilities.scss";

class Rooms extends Component {
  constructor(props) {
    super(props);
    this.chooseStart = this.chooseStart.bind(this);
    this.chooseEnd = this.chooseEnd.bind(this);
    this.handleEnterRoom = this.handleEnterRoom.bind(this);
  }

  componentWillMount() {
    let token = localStorage.token;
    let code = localStorage.code;

    let self = this;
    const { user, hotel, dispatch } = this.props;
    console.log(config);
    if (user.isLogin) {
      this.loadData(user.teamId);

      dispatch(
        fetchJsSdk({
          teamId: user.teamid,
          appid: user.appid,
          appsecret: user.appsecret
        })
      ).then(res => {
        jsSdkInit(
          res.results,
          user.appid,
          config.basehost + this.props.pathname
        );
      });
    } else {
      dispatch(fetchLogin({ token: token, code: code })).then(res => {
        changeTitle(getCookie("wechatName", "") || "住那儿旅行");

        if (res.results) {
          this.loadData(res.results.teamid);

          // 获取jssdk
          dispatch(
            fetchJsSdk({
              teamId: res.results.teamid,
              appid: res.results.appid,
              appsecret: res.results.appsecret
            })
          ).then(json => {
            jsSdkInit(
              json.results,
              res.results.appid,
              config.basehost + this.props.pathname
            );
          });
        } else if (res.code != 200 && !config.debug) {
          browserHistory.push("/cmsfont/error");
        }
      });
    }
  }

  componentWillUnmount() {}

  // 抽象加载数据方法
  loadData(teamId) {
    const { dispatch } = this.props;

    dispatch(fetchHotelInfo(teamId));
    dispatch(fetchRoomList(teamId));
  }

  chooseStart() {
    this.props.dispatch(setDatePicker(1));
    browserHistory.push("/cmsfont/chooseDate");
  }

  chooseEnd() {
    this.props.dispatch(setDatePicker(2));
    browserHistory.push("/cmsfont/chooseDate");
  }

  // 跳转日期选择
  chooseDateRange() {
    browserHistory.push("/cmsfont/chooseDate");
  }

  handleEnterRoom(id, room_id) {
    let { dispatch, hotel } = this.props;
    return e => {
      dispatch(changeRoom(room_id));
      browserHistory.push("/cmsfont/roomInfo/" + room_id);
    };
  }

  openImg() {
    let { hotel } = this.props;
    wx.previewImage({
      current: hotel.intro.imgs ? hotel.intro.imgs[0] || "" : "", // 当前显示图片的http链接
      urls: hotel.intro.imgs // 需要预览的图片http链接列表
    });
  }

  openMap() {
    // 打开地图
    let { hotel } = this.props;
    wx.openLocation({
      latitude: parseFloat(hotel.intro.latitude), // 纬度，浮点数，范围为90 ~ -90
      longitude: parseFloat(hotel.intro.longitude), // 经度，浮点数，范围为180 ~ -180。
      name: hotel.intro.name, // 位置名
      address: hotel.intro.address, // 地址详情说明
      scale: 25, // 地图缩放级别,整形值,范围从1~28。默认为最大
      infoUrl: "", // 在查看位置界面底部显示的超链接,可点击跳转
      success: function(res) {
        // alert('成功')
      },
      fail: err => {
        // alert(JSON.stringify(err));
        console.log(err);
        alert("获取地图失败");
      }
    });
  }

  render() {
    const { hotel, user, storage, room } = this.props;
    let from = moment(storage.from);
    let to = moment(storage.to);

    let arr_id = 0;

    let lists = (room.rooms || []).map(item => {
      arr_id += 1;
      return (
        <div
          className="room-piece-container"
          key={item.id}
          onClick={this.handleEnterRoom(arr_id - 1, item.id)}
        >
          <RoomPiece hotel={hotel} data={item} />
        </div>
      );
    });

    return user.isFetching
      ? <div className="index-container">
          <Loading text="验证中...." isFetching={user.isFetching} />
        </div>
      : hotel.isFetching
        ? <div className="rooms-container">
            <Loading text="加载中..." isFetching={hotel.isFetching} />

            <Tabber
              highlight={4}
              token={user.wechatToken}
              code={user.wechatCode}
            />
          </div>
        : <div className="rooms-container">
            <Scroll
              img_lists={hotel.intro.imgs || []}
              height="200px"
              autoPlay
              handleClick={() => {
                this.openImg();
              }}
            />

            <div className="navs">
              <div
                onClick={() => {
                  this.openMap();
                }}
              >
                <NavBar moretext="地图">
                  {hotel.intro.name}
                </NavBar>
              </div>

              <div
                onClick={() => {
                  browserHistory.push("/cmsfont/intro");
                }}
              >
                <NavBar moretext="酒店详情">
                  <div className="hotel_facilities">
                    {hotel.intro.equipments
                      .slice(0, 6)
                      .map((equipment, index) => {
                        return (
                          <span
                            key={"equipment_" + index}
                            className={cn(
                              "facilities_icon",
                              covertEquipmentsToClassName(equipment)
                            )}
                          />
                        );
                      })}
                    {hotel.intro.equipments.length > 6
                      ? <span className="more">...</span>
                      : ""}
                  </div>
                </NavBar>
              </div>
              
              <div
                onClick={() => {
                  browserHistory.push("/cmsfont/comments");
                }}
              >
                <NavBar moretext={(hotel.intro.totalComments||0) + "评论"}>
                  <div>
                    <span className="starts">
                      {new Array(5).fill(0).map((_, index) =>
                        <i
                          key={"start_" + index}
                          className={cn("iconfont", {
                            "icon-star": index + 1 <= parseInt(hotel.intro.star),
                            "icon-start-blank":
                              index + 1 > parseInt(hotel.intro.star)
                          })}
                        />
                      )}
                    </span>
                    <span className="score">
                      {hotel.intro.star}分
                    </span>
                  </div>
                </NavBar>
              </div>
            </div>

            <div
              className="date-container"
              onClick={() => {
                this.chooseDateRange();
              }}
            >
              <div className="start-date">
                <div className="explain-text">入住</div>
                <div className="date-ins">
                  {from.get("month") + 1}月{from.get("date")}日 {covertDate(from)}
                </div>
              </div>
              <div className="num-date">
                <div className="count-text">
                  {moment(to).diff(moment(from), "days")}晚
                </div>
              </div>
              <div className="end-date">
                <div className="explain-text">离店</div>
                <div className="date-ins">
                  {to.get("month") + 1}月{to.get("date")}日 {covertDate(to)}
                </div>
              </div>
            </div>
            <LoadingPanel visible={room.fetchrooms}>房间列表加载中</LoadingPanel>
            {lists}
            <div style={{ height: "60px" }} />
            <Tabber
              highlight={4}
              token={user.wechatToken}
              code={user.wechatCode}
            />
          </div>;
  }
}

function select(state) {
  return {
    user: state.user,
    hotel: state.hotel,
    storage: state.storage,
    pathname: state.routing.locationBeforeTransitions.pathname,
    room: state.room
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Rooms);
