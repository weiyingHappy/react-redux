import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import img_logo from '../static/images/one/icon-4.png'
import img_phone from '../static/images/one/icon-1.png'
import img_code from '../static/images/one/icon-2.png'
import img_dialog from '../static/images/one/icon-3.png'
import './register.scss'

import Loading from '../components/loading'
import Dialog from '../components/dialog'
import {fetchCode, fetchCheckCode, fetchRegister} from '../actions/register'

class Register extends Component {

    constructor (props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.phoneChange = this.phoneChange.bind(this);
        this.codeChange = this.codeChange.bind(this);
        this.handleGetCode = this.handleGetCode.bind(this);
        this.backTime = this.backTime.bind(this);
        this.handleDialogClick = this.handleDialogClick.bind(this);

        this.state = {
            btn_txt: '获取验证码',
            phone: '',
            code: '',
            isDisplayDialog: false,
            sb_code: 0,
            sb_msg: ''
        }
    }

    componentWillMount() {

    }



    getCookie(c_name, pre = '')
    {
        c_name = pre+c_name;
        if (document.cookie.length>0)
        {
            try {
                var reg = new RegExp("(^|\\s)" + c_name + "=([^;]*)(;|$)");
                let res = document.cookie.match(reg);
                if (res) {
                    let ret = decodeURIComponent(res[2]);
                    return ret;
                }
                else {
                    return null;
                }
            }
            catch(e) {
                console.log(e);
            }
        }
        return null;
    }

    handleSubmit(e) {
        e.preventDefault();
        let self = this;
        let phone = this.state.phone;
        let code = this.state.code;
        let info = {
            phone: phone,
            code: code
        };

        this.props.dispatch(fetchCheckCode(info)).then((res_a) => {
            console.log('check over', res_a);

            if (res_a.code == 200) {
                let info_b = {
                    phone: phone,
                    nickname: self.getCookie('nickname', this.props.teamId),
                    team_id: self.props.teamId,
                    wxid: self.getCookie('openid', this.props.teamId)
                };

                alert("phone:"+info_b.phone+"-----"+"wxid: "+info_b.wxid);

                self.props.dispatch(fetchRegister(info_b)).then((res_b)=>{
                    console.log('submit over', res_b);
                    if (res_b.code == 200) {
                        self.setState({
                            sb_code: res_b.code,
                            sb_msg: '注册成功',
                            isDisplayDialog: true
                        })
                    }
                    else {
                        self.setState({
                            sb_code: res_b.code,
                            sb_msg: res_b.sb_msg+'-submit failed',
                            isDisplayDialog: true
                        })
                    }
                });
            }
            else {
                self.setState({
                    sb_code: res_a.code,
                    sb_msg: res_a.msg+'-checkcode failed',
                    isDisplayDialog: true
                })
            }

        });
    }

    phoneChange(e) {
        let val = e.target.value;
        let reg = /^[0-9]*$/;

        if (reg.test(val)) {
            this.setState({
                phone: val
            });
        }
    }

    codeChange(e) {
        let val = e.target.value;
        let reg = /^[0-9]*$/;

        if (reg.test(val)) {
            this.setState({
                code: val
            });
        }
    }

    backTime(cnt) {
        if (cnt == 0) {
            this.setState({
                btn_txt: '获取验证码'
            });
            return ;
        }
        this.setState({
            btn_txt: cnt.toString()+' 秒'
        });
        setTimeout(function() {
            this.backTime(cnt-1)
        }.bind(this),1000);
    }

    handleGetCode(e) {
        let self = this;
        e.preventDefault();
        let phone = this.state.phone;
        let reg = /^1[34578]\d{9}$/;

        if (!reg.test(phone)) {
            alert("手机号不合法");
            return ;
        }

        this.props.dispatch(fetchCode(phone)).then((res)=>{
            console.log("dispatch over: ", res);
            self.backTime(60);
        });
    }

    handleDialogClick() {
        this.setState({
            isDisplayDialog: false
        });
        if (this.state.sb_code == 200) {
            browserHistory.push('/cmsfont/index/'+this.props.user.wechatToken+'?code='+this.props.user.wechatCode);
        }
    }

    render() {
        const { dispatch, register } = this.props;
        return (
            <div className="register-container">
                <div className="top">
                    <img src={img_logo} className="logo-img"/>
                </div>

                <form className="signForm" onSubmit={this.handleSubmit}>
                    <div className="phone-container">
                        <div className="icon-container">
                            <img src={img_phone} className="phone-image"/>
                        </div>
                        <input type="tel" placeholder="请输入手机号码" value={this.state.phone} className="input-phone" onChange={this.phoneChange}/>
                    </div>
                    <div className="code-container">
                        <div className="icon-container">
                            <img src={img_code} className="code-image" />
                        </div>
                        <input type="tel" placeholder="输入短信接收到验证码" value={this.state.code} className="input-code" onChange={this.codeChange}/>
                        <button className="get-code" onClick={this.handleGetCode} disabled={(this.state.btn_txt=='获取验证码'?false:true)}
                             style={{color:this.state.btn_txt=='获取验证码'?'#ff5000':'#aaa'}}>{this.state.btn_txt}</button>
                    </div>
                    <button type="submit" className="submitButton">立即验证</button>
                </form>

                <Loading text="loading..." isFetching={register.isFetching} />
                
                <Dialog isDisplay={this.state.isDisplayDialog} handleClick={this.handleDialogClick}>
                    <div className="register-dialog">
                        <img src={img_dialog} className="tanchu-img"/>
                        <div>
                            {this.state.sb_msg}
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}


function select(state) {
    return {
        register: state.register,
        user: state.user,
        teamId: state.user.teamId
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Register)