import React, { Component } from 'react';
import { Input, Button } from 'antd';
const { Search } = Input;
var i = 120;
class Login extends Component {
    state = {
        click: false,
        use: "",
        pwd: "",
        sendpwd: "",
        s: ""
    }
    send = () => {
        /*1.失去焦点后，点击发送验证码发送验证。
          2.输入验证码。(两个)输入框有值，登录变成橙色，点击登录，判断验证码和输入的是否一致。
        */
        // 生成验证码
        this.setState({
            click: true,
        })
        this.count();
        Math.floor(Math.random() * 1000000)
    }
    count = () => {
        setInterval(() => {
            i = i - 1;
        }, 1000)
    }
    login = () => {
        // 验证信息登录
    }
    cancle = () => {
        this.props.history.goBack(-1)
    }
    onBlur = (type, e) => {
        // 失去焦点获取电话和验证码信息
        e.persist();
        let value = e.target.value;
        if (type == "phone") {
            this.setState({
                use: value
            })
            // 点击发送验证码发送验证码
        } else {
            this.setState({
                pwd: value
            })
        }
    }
    render() {
        let { click } = this.state;
        // console.log(i);

        return (
            <div id="login">
                <ul className="form">
                    <li>
                        <Search placeholder="请输入手机号，验证或登录" onBlur={this.onBlur.bind(this, "phone")
                        } />
                    </li>
                    <li>
                        <Search placeholder="请输入验证码" style={{ width: '60%' }} onBlur={this.onBlur.bind(this, "pwd")} />
                        <Button type="primary" onClick={this.send}>{click == false ? '获取验证码' : '获取中'}</Button>
                    </li>
                    <li>
                        <Button type="primary" onClick={this.cancle}>取消</Button>
                        <Button type="primary" onClick={this.login}>登录</Button>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Login;