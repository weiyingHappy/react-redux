import React, { Component } from 'react'
import { connect } from 'react-redux'
import config from '../../config/config.js'
import './Luggage.scss'
import { Picker } from 'antd-mobile'
import moment from 'moment'
import { Link } from 'react-router'

class Luggage extends Component {

    constructor () {
        super();
        this.chooseStart = this.chooseStart.bind(this);
        this.chooseEnd = this.chooseEnd.bind(this);
        this.handleOkWuyouOrder = this.handleOkWuyouOrder.bind(this);
        this.chooseWuyouOrder = this.chooseWuyouOrder.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            chooseWuyouOrder: false,
            number: 1,
            isChoosing: 0,
            modal_show: 'none',
            name: '',
            checked: true,
            phone: this.getCookie('phone')||'',
            start: {
                time: undefined,
                address: ''
            },
            end: {
                time: undefined,
                address: ''
            },
            wuyouOrder: [],
            islogin: (config.debug==true?'1':this.getCookie('islogin')),
            canedit: false, // 判断编辑状态
            selectStart: undefined,
            selectEnd: undefined,
        }
    }
    getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = decodeURI(window.location.search).substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

    getCookie(c_name)
    {
        if (document.cookie.length>0)
        {
            try {
                var reg = new RegExp("(^|\\s)" + c_name + "=([^;]*)(;|$)");
                let res = document.cookie.match(reg);
                if (res) {
                    return res[2];
                }
                else {
                    return null;
                }
            }
            catch(e) {
                console.log(e);
            }
        }
        return ""
    }

    componentWillMount() {
    }

    // 初始化地址和联系人
    initDefaultTime (val) {
        let {wuyouOrder, isChoosing} = this.state

        if (val!==undefined) {
            isChoosing = val
        }

        console.log('isChoosing', isChoosing, val)
        
        if (!wuyouOrder[isChoosing]) return

        let defaultStart = moment(wuyouOrder[isChoosing].end + ' 12:00')
        let defaultEnd = moment(wuyouOrder[isChoosing].end + ' 16:00')

        // 如果当前日期是酒店退房日期
        if (moment().isSame(moment(wuyouOrder[isChoosing].end), 'day')) {
            let startTime = moment().add(2, 'hour')
            defaultStart = startTime
            defaultEnd = startTime.add(4, 'hour')
        }

        this.setState({
            start: Object.assign({}, this.state.start, {
                // time: defaultStart,
                address: wuyouOrder[isChoosing].team.address
            }),
            name: wuyouOrder[isChoosing].user_name,
            phone: wuyouOrder[isChoosing].phone
        })
    }

    // 验证选择时间
    validDate (currentDate ) {
        return currentDate.isAfter(moment()) || currentDate.isSame(moment(), 'day')
    }

    handleOkWuyouOrder (val) {
        let self = this;
        return () => {
            console.log("handle ok city", val);
            self.setState({
                isChoosing: val
            });
            window.history.go(-1)
            this.initDefaultTime(val)
        };
    }

    chooseWuyouOrder() {
        let self = this;
        if (this.state.wuyouOrder.length ==0) {
            location.href = 'room_finder'
            return ;
        }
        this.setState({
            chooseWuyouOrder: true
        });

        var stateObj = { luggage: "choose_wuyou_order" };
        history.pushState(stateObj, "page 2", "choose_wuyou_order");
        window.onpopstate = function(event) {
            self.setState({
                chooseWuyouOrder: false
            })
        };
    }
    handlePhoneChange(e) {
        let val = e.target.value;
        let reg = /^[0-9]*$/;
        if (reg.test(val)) {
            this.setState({
                phone: e.target.value
            })
        }
    }

    chooseStart(value) {
        this.setState({
            start: Object.assign({}, this.state.start, {time: value})
        })

    }
    chooseEnd(value) {
        this.setState({
            end: Object.assign({}, this.state.end, {time: value})
        })
    }
    handleSubmit() {
        let self = this;
        let {wuyouOrder, name, phone, start, end} = this.state;
        if (wuyouOrder.length == 0) {
            alert('暂无可用酒店订单，请先预定酒店');
            return ;
        }
        if (start.time == undefined || end.time == undefined || start.address=='' || end.address=='') {
            alert("请填写完整时间和地址项");
            return ;
        }
        if (this.state.checked == false) {
            alert("请阅读用户许可协议");
            return ;
        }
        this.setState({
            modal_show: 'block'
        })
    }


    // 初始化起始时间
    initStartTime () {
        if (this.state.start.time) return
        this.setState({
            start: Object.assign({}, this.state.start, {
                time: moment().add(2, 'hour').add(1, 'minute'),
            })
        })
    }
    // 初始化结束时间
    initEndTime () {
        if (this.state.end.time) return        
        this.setState({
            end: Object.assign({}, this.state.end, {
                time: moment(this.state.start.time).add(4, 'hour'),
            })
        })
    }
    // 交换地址
    switchLocation () {
        this.setState({
            start: {
                ...this.state.start,
                address: this.state.end.address
            },
            end: {
                ...this.state.end,
                address: this.state.start.address
            },
            canedit: !this.state.canedit
        })
    }

    // 生成日期数组
    getDateArr (minDate, maxDate) {
        if (!minDate) {
            minDate = moment().add(2, 'hour').add(2, 'minute')
        }
        maxDate = moment(minDate).add(1, 'year')


        const datearr = []
        let flag = true
        let _minDate = moment(minDate)
        while (flag) {
            if (_minDate.isSame(maxDate, 'day')) {
                flag = false
            } else {
                datearr.push(moment(_minDate.format('YYYY-MM-DD')))
                _minDate.add(1, 'day')
            }
        }
        
        let starthour = 9
        let startmin = 0

        starthour = minDate.format('HH')
        startmin = minDate.format('mm')
                        
        if (startmin>0&&startmin<20) {
            startmin = 20
        }
        if (startmin>20&&startmin<40) {
            startmin = 40
        }
        if (startmin>40&&startmin<60) {
            startmin = 0
        }

        if (starthour<9) {
            starthour = 9
            startmin = 0
        }

        let newarr = datearr.map((value)=>{

            let timearr = []

            for (let i = starthour; i < 22; i++) {


                for (let j = startmin; j<60; j+=20) {
                    let hourv = Number(i)
                    let minutev = Number(j)
                    let str = ''
                    if (minutev===60) {
                        hourv+=1
                        if (hourv===24) {
                            hourv = 0
                        }
                        minutev = 0
                    }

                    str = `${String(hourv).length===1?'0'+hourv:hourv}:${String(minutev).length===1?'0'+minutev:minutev}`

                    timearr.push({
                        label: str,
                        value: str
                    })
                }

                startmin = 0
                
            }
            starthour = 9
            return {
                label: value.format('YYYY年MM月DD日'),
                value: value.format('YYYY-MM-DD'),
                children: timearr
            }
        })
        console.log(minDate.format('YYYY-MM-DD HH:mm'))
        
        return newarr.filter((x)=>x.children.length>0)
    }

    convertValueToPicker (value) {
        if (!value) return undefined
        return [value.format('YYYY-MM-DD'), value.format('HH:mm')]
    }

    render () {
        const startArr = this.getDateArr(moment().add(2, 'hour'))
        const endArr = this.getDateArr(moment(this.state.start.time).add(4, 'hour'))

        return (
            <div className="container">
                <div className="panel">
                    <div className="title">请您确认行李的酒店订单</div>
                    
                    <div className="location">
                        <div className="text">暂无可用酒店订单，请先预定酒店</div>
                        <div className="navicon"><i className="iconfont icon-right"></i></div>
                    </div>
                    <div className="form">
                        <div className="label">
                            <div className="top">起</div>
                            <div className="switch" onClick={this.switchLocation.bind(this)}><i className="iconfont icon-btnswitch"></i></div>
                            <div className="bottom">终</div>
                        </div>
                        <div className="controls">
                            <div className="inputs">
                                <div onClick={(e)=>{e.stopPropagation()}} className="label">时间</div>
                                {/*<ReactDatetime  isValidDate={this.validDate} value={this.state.start.time} onChange={this.chooseStart} inputProps={{readOnly:true, placeholder:'请提前两小时预定'}} locale="zh-cn"></ReactDatetime>*/}
                                {/*<DatePicker title="上门时间" value={this.state.start.time} minDate={moment().add(2, 'hour').add(2, 'minute')} maxDate={moment(this.state.end.time).add(1, 'day')} className="forss" mode="datetime" onChange={this.chooseStart}>
                                    <input readOnly type="text" value={this.state.start.time?this.state.start.time.format('YYYY年MM月DD日 HH:mm'):''} placeholder="请提前两小时预定"/>
                                </DatePicker>*/}
                                <Picker
                                    data={startArr}
                                    cols={2}
                                    title="上门时间" onChange={(data)=>{
                                        this.chooseStart(moment(data[0]+' '+data[1]))
                                    }}>
                                    <input readOnly type="text" value={this.state.start.time?this.state.start.time.format('YYYY年MM月DD日 HH:mm'):''} placeholder="请提前两小时预定"/>                                    
                                </Picker>
                            </div>
                            <div className="inputs">
                                <div className="label">地址</div>
                                <textarea rows="1" type="text" readOnly={!this.state.canedit} value={this.state.start.address} className='address-input' onChange={(e)=>{
                                    this.setState({
                                        start: Object.assign({}, this.state.start, {address:e.target.value})
                                    })
                                }}/>
                            </div>
                            <div className="inputs">
                                <div onClick={(e)=>{e.stopPropagation()}} className="label">时间</div>
                                {/*<ReactDatetime isValidDate={this.validDate} value={this.state.end.time} onChange={this.chooseEnd} inputProps={{readOnly:true, placeholder: '需在预约时间后至少4小时'}} locale="zh-cn"></ReactDatetime>*/}
                                {/*<DatePicker title="送达时间"  value={this.state.end.time} minDate={moment(this.state.start.time).add(4, 'hour')} maxDate={moment(this.state.end.time).add(1, 'day')} className="forss" mode="datetime" value={this.state.end.time} onChange={this.chooseEnd}>
                                    <input readOnly type="text" value={this.state.end.time?this.state.end.time.format('YYYY年MM月DD日 HH:mm'):''} placeholder="需在预约时间后至少4小时"/>
                                </DatePicker>*/}
                                <Picker
                                    data={endArr}
                                    cols={2}
                                    disabled={this.state.start.time?false:true}
                                    title="送达时间" onChange={(data)=>{
                                        this.chooseEnd(moment(data[0]+' '+data[1]))
                                    }}>
                                    <input readOnly type="text" value={this.state.end.time?this.state.end.time.format('YYYY年MM月DD日 HH:mm'):''} placeholder="需在预约时间后至少4小时"/>
                                </Picker>
                            </div>
                            <div className="inputs" style={{fontSize: 0}}>
                                <div className="label">地址</div>
                                <textarea rows="1" type="text" readOnly={this.state.canedit} value={this.state.end.address} className='address-input' onChange={(e)=>{
                                    this.setState({
                                        end: Object.assign({}, this.state.end, {address:e.target.value})
                                    })
                                }}/>
                            </div>
                        </div>
                    </div>
                    <div className="count">
                        <div className="label">行李总数</div>
                        <div className="count_controller">
                            <button className="reduce" onClick={()=>{
                                this.setState({
                                    number: Math.max(this.state.number-1,1)
                                })
                            }}><i className="iconfont icon-reduce"></i></button>
                            <input type="number" value={this.state.number} disabled style={{textAlign:'center'}} onChange={(e)=>{
                                this.setState({number:e.target.value})
                            }}/>
                            <button className="plus" onClick={()=>{
                                this.setState({
                                    number: this.state.number+1
                                })
                            }}><i className="iconfont icon-plus"></i></button>
                        </div>
                    </div>
                    <div className="lincense">

                        <div className="weui-cells_checkbox checkbox">
                            <label className=" weui-check__label" htmlFor="s12">
                                <div className="weui-cell__hd">
                                    <input type="checkbox" name="checkbox1" className="weui-check" id="s12" checked={this.state.checked} onChange={(e)=>{}} onClick={()=>{this.setState({checked:!this.state.checked})}}/>
                                    <i className="weui-icon-checked"></i>
                                </div>
                            </label>
                        </div>
                        <span>我已阅读并同意无忧行李<span className="lincen"><a href="http://u.yi-lv.com/xieyi.html">《用户许可协议》</a></span></span>
                    </div>
                    <div className="subbtn">
                        <div className="subbtn-a">
                            <div className="sbba-top">
                                预估:{39*parseInt(this.state.number)}元
                            </div>
                            <div className="sbba-bottom">
                                39元/件 <span style={{textDecoration: 'line-through'}}>69元/件</span>
                            </div>
                        </div>
                        <button className="subbtn-b">提交</button>
                    </div>
                    <div className="toOrder">
                        <Link to={'/cmsfont/luggageOrders'}>查看无忧订单></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Luggage)