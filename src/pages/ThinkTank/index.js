import React, { Component } from 'react';

import { Icon, Input, Button } from "antd";

require('../ThinkTank/css/think.scss');

class ThinkTank extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    async componentDidMount() {
        
    }


    render() {
        return (
            <div id="think">
                <div className="header">
                    <a className="fl" href="">
                        <Icon type="left" />
                        返回
                    </a>
                    <h2 className="logo">
                        <img src={`//img.villaday.com/images/activity/demand/logo.png`} />
                    </h2>
                </div>
                <div className="box">
                    <img src={`//img.villaday.com/images/view/demand/demand_181115.jpg`} />
                </div>
                <div className="pubForm pFormCon">
                    <ul>
                        <li className="pfLi pr0">
                            <label>出游类型</label>
                            <ul className="pList cfix">
                                <li className="cur">
                                    <a className="demand_type">家庭</a>
                                </li>
                                <li>
                                    <a className="demand_type">公司</a>
                                </li>
                                <li>
                                    <a className="demand_type">同学</a>
                                </li>
                                <li>
                                    <a className="demand_type">其它</a>
                                </li>
                            </ul>
                        </li>
                        <li className="pfLi pr0">
                            <label>出游人数</label>
                            <ul className="pList cfix">
                                <li className="default">
                                    <a className="demand_people">1-5</a>
                                </li>
                                <li className="default">
                                    <a className="demand_people">6-10</a>
                                </li>
                                <li className="default cur">10+</li>
                            </ul>
                        </li>
                        <li className="pfLi">
                            <label>出游时间</label>
                            <div className="pubTxt">
                                <input id="date" className="pInt" placeholder="请填写"/>
                            </div>
                        </li>
                        <li className="pfLi" id="mobile">
                            <label>联系姓名</label>
                            <input id="phone" className="pInt" placeholder="请填写"/>
                        </li>
                        <li>
                            <label>联系电话</label>
                        </li>
                        <li className="pt25">
                            <a className="btn3" id="submitBtn">提交需求</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ThinkTank;