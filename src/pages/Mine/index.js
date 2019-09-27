import React, { Component } from 'react';
import { Icon, Avatar } from "antd"
import cookie from 'react-cookies'
class Mine extends Component {
    state = {
        content: [
            { id: 1, icon: "profile", text: "我的订单" },
            { id: 2, icon: "credit-card", text: "我的共享卡" },
            { id: 3, icon: "money-collect", text: "优惠券" },
            { id: 4, icon: "heart", text: "我想去" },
            { id: 5, icon: "eye", text: "浏览记录" }
        ],
        user: ""
    }
    componentDidMount() {
        this.checkLogin();
    }
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }
    checkLogin = () => {
        let user = cookie.load("user");
        // 实现电话号码为123****1457的效果;
        if (!user) {
            this.props.history.push("/login");
        } else {
            user = user.substr(0, 3) + '****' + user.substr(7);
            this.setState({ user: user })
        }
    }
    logout = () => {
        cookie.remove('user');
        this.checkLogin();
    }
    goto = (val) => {
        // 1->我的订单   2->我的共享卡   3->优惠券   4->我想去  5->浏览记录
        switch (val) {
            case 1:
                this.props.history.push('/order')
                break;
            case 2:
                this.props.history.push('/sharecard')
                break;
            case 3:
                this.props.history.push('/coupon')
                break;
            case 4:
                this.props.history.push('/want')
                break;
            case 5:
                this.props.history.push('/record')
                break;
            default:
                break;
        }

    }

    render() {
        let { content, user } = this.state;
        return (
            <div id="mine">
                <header>
                    <Avatar size={68} icon="user" /><span>{user}</span>
                    <b onClick={this.logout}><Icon type="logout" />退出</b>
                </header>
                <div className="content">
                    {
                        content.map(item => {
                            return <p key={item.id} onClick={this.goto.bind(this, item.id)}><Icon type={item.icon} /><span>{item.text}</span><Icon type="right" />
                            </p>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Mine;