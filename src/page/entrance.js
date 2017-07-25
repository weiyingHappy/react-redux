/**
 * 验证页面，通过此页面路由到其他页面
 * :hotel_token  为酒店对应的token
 * :alias        为跳转别名
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLogin } from '@/src/actions/user'
import { getBrowserEnv } from '@/src/common'
import { browserHistory } from 'react-router'

class Entrance extends Component {
  state = {
    auth: 0, // 验证状态 0:验证中 1:成功 2:失败
    msg: '验证中...'
  }
  componentWillMount() {
    const { dispatch } = this.props

    const token = this.props.params.hotel_token
    const alias = this.props.params.alias
    const code = this.props.location.query.code
    // 将token和code放入本地
    localStorage.token = token
    localStorage.code = code

    dispatch(fetchLogin({
        token,
        code
    })).then((data) => {
        // 因为这里的code不一定是200， 所以判断是否有results进行下一步
        if(data.results) {
            // 动态加载css
            let link_tag = document.createElement('link')
            link_tag.rel = 'stylesheet'

            const env = getBrowserEnv()
            let style_href = '/cmsfont/'
            if(env === 'development') {
                style_href = '/'
            }
            link_tag.href = style_href + 'theme/one/style1.css'

            document.querySelector('head').appendChild(link_tag)

            //TODO: 进行模板判断跳转路由
            switch(Number(alias)) {
                case 1:
                    browserHistory.push('/cmsfont/rooms')
                case 2:
                    browserHistory.push('/cmsfont/myorder')
                default:
                    this.setState({
                        msg: '未匹配到alias跳转'
                    })
            }
        } else {
            this.setState({
                auth: 2
            })
        }
    }).catch((error) => {
        alert('出现一个严重错误, code: cms_api')
    })
  }
  render() {
    if(this.state.auth === 2) {
        return (
            <div>登陆失败</div>
        )
    }
    return (
      <div>
        验证页面
        <ul>
            <li>状态：{this.state.msg}</li>
        </ul>
      </div>
    )
  }
}

export default connect()(Entrance)
