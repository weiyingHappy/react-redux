import React from 'react'
import { connect } from 'react-redux'
import CouponItem from '../components/coupon-item'
import './chooseCoupon.scss'

import noneimg from '../static/images/five/icon-18.png'
import chooseImg1 from '../static/images/five/icon-19.png'
import chooseImg2 from '../static/images/five/icon-20.png'
import { chooseCoupon } from '../actions/coupon'
import { updateOrderPrice } from '../actions/storage'
import { browserHistory } from 'react-router'

const Zanwu = ({desc}) => {
    return (
        <div className="zanwu">
            <img src={noneimg} className="zanwu-a"/>
            <div className="zanwu-b">{desc}</div>
        </div>
    )
};
Zanwu.propTypes = {
    desc: React.PropTypes.string.isRequired
};

class ChooseCoupon extends React.Component {
    constructor (props) {
        super(props);
        this.aClick = this.aClick.bind(this);

        this.state = {
            tab: 0,
            isChoosing: 0
        };
    }

    componentWillMount() {
        let {recommend,disable,available} = this.props.coupon;
        let id = -1, self = this;
        available.map((item) => {
            id += 1;
            if (recommend.id == item.id) {
                self.setState({
                    isChoosing: id
                })
            }
        })
    }

    aClick(id) {
        let self = this;
        return () => {
            console.log('click ',id);
            self.setState({
                isChoosing: id
            })
        }
    }

    handleChoose () {
        const { dispatch } = this.props

        dispatch(chooseCoupon(this.props.coupon.available[this.state.isChoosing]))

        browserHistory.push('/cmsfont/orderGenerate')
    }


    render () {
        let {recommend,disable,available} = this.props.coupon;
        let {tab} = this.state;
        let a_id = -1;
        let a_lists = available.map((item) => {
            a_id += 1;
            return (
                <div className="ci-container" key={item.id} onClick={this.aClick(a_id)}>
                    <CouponItem item={item} type="choose-a"/>
                    <img style={{display: (a_id==this.state.isChoosing?'block':'none')}} className="ci-choosing" src={item.type==0?chooseImg1:chooseImg2}></img>
                </div>
            )
        });
        let d_lists = disable.map((item) => {
            return (
                <CouponItem item={item} key={item.id} type="choose-b"/>
            )
        });


        return (
            <div className="choose-coupon">
                <div className="cc-top">
                    <div className="cct-a" style={{color: (tab==0?'#FF5000':'#333333'), borderBottom: (tab==0?'2px solid #FF5000':'none')}} onClick={()=>{this.setState({tab:0})}}>
                        可用优惠券({available.length})
                    </div>
                    <div className="cct-b" style={{color: (tab==1?'#FF5000':'#333333'), borderBottom: (tab==1?'2px solid #FF5000':'none')}} onClick={()=>{this.setState({tab:1})}}>
                        不可用优惠券({disable.length})
                    </div>
                </div>
                <div className="cc-middle">
                    <div className="cc-b">
                        <div className="ccb-left">
                            去兑换 >
                        </div>
                        <div className="ccb-right">
                            兑换规则
                        </div>
                    </div>

                    <div className="cc-list-area">
                        {tab==0?(
                            available.length==0?(<Zanwu desc="暂无可用优惠券~"/>):(
                                a_lists
                            )
                        ):(
                            disable.length==0?(<Zanwu desc='暂无不可用优惠券~' />):(
                                d_lists
                            )
                        )}
                    </div>
                    {tab==0?(
                        <div className="cc-bottom">
                            {available.length!=0?(
                                <button className="ccb-a" onClick={this.handleChoose.bind(this)}>
                                    确定
                                </button>):''}
                            <div className="ccb-b">
                                {/*没有更多优惠券，参与活动<span className="ccbb-a">获得优惠券 ></span>*/}
                            </div>
                        </div>
                    ):''}
                </div>

            </div>
        )
    }
}

function select(state) {
    return {
        coupon: state.coupon,
        storage: state.storage
    }
}

export default connect(select)(ChooseCoupon)