

import React, { Component } from 'react';
import { Input, message, Button } from 'antd';
const { Search } = Input;
import cookie from 'react-cookies'

class Login extends Component {
    state = {
        click: false,
        use: "",
        pwd_send: "",
        pwd_input: "",
        sendpwd: "",
        s: 60,
        check: false
    }
    error = (type) => {
        // 错误提示信息
        switch (type) {
            case "phone":
                message.error('手机格式不正确，请输入正确的手机号码', 5)
                break;
            case "code":
                message.error('验证码错误，请核对后再次输入', 5)
                break;
            case "no":
                message.error('正在发送中,请稍等', 3)
                break;
            default:
                break;
        }
    };
    send = () => {
        // 点击发送验证码按钮触发
        /*1.失去焦点后，点击发送验证码发送验证。
          2.输入验证码。(两个)输入框有值，登录变成橙色，点击登录，判断验证码和输入的是否一致。
        */
        let { use, check, s } = this.state;
        this.checkPhone(use)
        if (check) {
            // 检验手机格式是否一致，生成验证码
            let msg = Math.floor(Math.random() * 1000000);
            console.log("验证码", msg);
            if (s != 0) {
                this.error("no")
            }
            this.setState({
                click: true,
                pwd_send: msg
            })
            let timer = setInterval(() => {
                this.setState({ s: (s--) }, () => {
                    if (s === 0) {
                        clearInterval(timer);
                        this.setState({
                            s: 60,
                            click: false
                        })
                    }
                });
            }, 1000)
        } else {
            this.setState({
                click: false,
            })
        }
    }
    login = () => {
        // 点击登录
        // 验证信息登录
        let { pwd_input, pwd_send, use } = this.state;
        if (pwd_input == pwd_send && pwd_send.length != 0) {
            this.props.history.push("/mine");
            cookie.save('user', use)
        } else {
            this.error("code")
        }

    }
    checkPhone = (phone) => {
        // 校验电话号码
        if (!(/^1[3456789]\d{9}$/.test(phone))) {
            this.error("phone");
            this.setState({ check: false })
            return false;
        }
        this.setState({ check: true })

    }
    input = (type, e) => {
        e.persist();
        let len = e.target.value.length;
        if (type == "phone") {
            this.setState({
                uselen: len
            })
        } else {
            this.setState({
                pwdlen: len
            })
        }
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
                pwd_input: value
            })
        }
    }
    cancle = () => {
        // 取消按钮，回到前一页
        this.props.history.goBack(-1)
    }
    componentWillUnmount() {
        // 取消异步(延时器)防止内存泄漏
        this.setState = (state, callback) => {
            return;
        };
    }
    render() {
        let { click, s } = this.state;
        return (
            <div id="login">
                <ul className="form">
                    <li>
                        <Search placeholder="请输入手机号，验证或登录" onBlur={this.onBlur.bind(this, "phone")
                        } onInput={this.input.bind(this, "phone")}
                        />
                    </li>
                    <li>
                        <Search placeholder="请输入验证码" style={{ width: '60%' }} onBlur={this.onBlur.bind(this, "pwd")}
                            onInput={this.input.bind(this, "pwd")}
                        />
                        {click == false ? <Button type="primary" onClick={this.send}>获取验证码</Button> : <Button type="primary"> 获取中 {s}s</Button>}
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































