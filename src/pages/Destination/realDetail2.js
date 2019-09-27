import React,
{
    Component
} from 'react';

import {
    Icon,
    Input,
    Button,
    Carousel,
    Calendar, Modal,
} from "antd";

import {
    detach
} from 'redux-saga';
import "../../style/rem.js"
import "../../style/realDetail2.scss"

import {
    bannerData, cateData, environmentData
} from "./data/detail2_data"

class DetailHtml extends Component {
    state = {
        isOpen: false,
        toggleNum: 1,
        isFixed: false,
        isTalk: true,
        visible: false,
    }
    componentDidMount() {
        let tab = this.refs.tab;
        let offsetTop = tab.offsetTop;
        window.onscroll = () => {
            var scrollT = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if (scrollT > offsetTop) {
                this.setState({
                    isFixed: true
                })
            } else {
                this.setState({
                    isFixed: false
                })
            }

        }


    }
    open = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    toggleTalk = () => {
        this.setState({
            isTalk: false
        })
        setTimeout(() => {
            this.setState({
                isTalk: true
            })
        }, 15 * 1000);
    }
    onPanelChange(value, mode) {
        console.log(value, mode);
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {
        return <div id="realDetail2">
            <div className="banner">
                <Carousel autoplay> {
                    bannerData.map(item => {
                        return <div key={item}> <img src={
                            "https://img.villaday.com" + item} />
                        </div>
                    })
                }
                </Carousel>
                <div className="bannerPrice">
                    <span>
                        ￥<b>2380</b>起 人均:￥119
                    </span>
                </div>
            </div>

            <div className="hIntroduct">
                <h3>南栖客栈海景天台烧烤K歌聚会包场</h3>
                <p>
                    <i></i>
                    <span>自助式服务</span>
                    <i></i>
                    <span>特色客栈</span>
                    <span>9室1厅10卫·390㎡·14床·20人</span>
                </p>
                <div>
                    <span>团建别墅</span>
                    <span>轰趴客栈</span>
                    <span>房屋编号：RH-21711</span>
                </div>
            </div>

            <div className="pubCell">
                <div className="pubCell_top">地理位置</div>
                <div className="pubCell_bottom">
                    <p>
                        <Icon type="environment" theme="filled" />
                        深圳,深圳市大鹏新区较场尾
                    </p>
                    <p>查看地图</p>
                </div>
            </div>

            <ul className={this.state.isFixed ? "toggle_fix" : "toggle"} ref="tab">
                <li onClick={() => this.setState({ toggleNum: 1 })} className={this.state.toggleNum == 1 ? "toggleActive" : ""}>房源详情</li>
                <li onClick={() => this.setState({ toggleNum: 2 })} className={this.state.toggleNum == 2 ? "toggleActive" : ""}>周边美食娱乐</li><li onClick={
                    () => this.setState({
                        toggleNum: 3
                    })} className={this.state.toggleNum == 3 ? "toggleActive" : ""}>小区环境</li>
            </ul>

            {/* 房源详情 */}
            <div style={this.state.toggleNum == 1 ? { display: "block" } : { display: "none" }}>
                <div className="toggle_container">
                    <div className={this.state.isOpen ? " toggle_container_text open_active" : "toggle_container_text"} >
                        <p>
                            <strong>特色：</strong>
                            离海边十米、北欧风民宿、海景天台、KTV、麻将、厨房、烧烤。
                    </p>
                        <p><br /></p>
                        <p><strong>详情：</strong> </p>
                        <p>
                            1、房型：3层390平米，9房1厅1厨10卫，可住20人；</p>
                        <p>
                            2、床型：8张1.2米单人床、3张1.5米大床、2张1.8米大床、1张2米大圆床；</p>
                        <p>
                            3、设施：KTV、投影设备、麻将、WIFI、电视、电水壶等；</p>
                        <p>
                            4、厨房：可免费使用，食材自备；</p>
                        <p>
                            5、烧烤：天台烧烤，免费提供一个烧烤炉。</p>
                        <p><br /></p>
                        <p><strong>温馨提示：</strong> </p>
                        <p>
                            1、入住押金500元，退房时返还；</p>
                        <p>
                            2、KTV、麻将娱乐时间截止至晚上23：00；</p>
                        <p>
                            3、使用厨房和烧烤炉后需要清洁打扫，如无清洁，需收取100元清洁费。</p>
                    </div>
                    <div className="viewAllcfg2">
                        <a className="viewAllBtn" id="viewArticleBtn" onClick={this.open}>{this.state.isOpen ? "收起" : "展开"}</a>
                    </div>
                </div>
                {/* 评价 */}
                <div className="evaluation">
                    <div className="evaluation_top">
                        用户评价
                </div>
                    <div className="evaluation_container">
                        <div className="userhead">
                            <img src="../pages/Destination/images/dft_head.png" />
                        </div>
                        <div className="userinfo">
                            <p>李杰</p>
                            <p>2018-05-31</p>
                        </div>
                        <div className="star"></div>

                    </div>
                    <div className="user_words">
                        很舒适，老板人很好，距离海近
                </div>
                    <div className="more_evaluation">
                        查看更多评论
                    <Icon type="right" />
                    </div>
                </div>
                {/* 房东信息 */}
                <div className="evaluation landlord">
                    <div className="evaluation_top">
                        房东信息
                </div>
                    <div className="evaluation_container">

                        <div className="userinfo">
                            <p>南栖客栈</p>
                            <p>房东信息已验证<Icon type="check-circle" theme="filled" />
                            </p>
                        </div>
                        <div className="userhead">
                            <img src="../pages/Destination/images/dft_head.png" />
                        </div>

                    </div>

                    <div className="more_evaluation">
                        查看ta的房源
                    <Icon type="right" />
                    </div>
                </div>
                {/* 配套设施 */}
                <div className="evaluation facilities">
                    <div className="evaluation_top">
                        配套设施
                    </div>
                    <ul className="all_facilities">
                        <li>
                            <p><Icon type="check-circle" /></p>
                            <p>yuan</p>
                        </li>
                        <li>
                            <p><Icon type="check-circle" /></p>
                            <p>su</p>
                        </li>
                        <li>
                            <p><Icon type="check-circle" /></p>
                            <p>lan</p>
                        </li>
                        <li>
                            <p><Icon type="check-circle" /></p>
                            <p>xiao</p>
                        </li>
                        <li>
                            <p><Icon type="check-circle" /></p>
                            <p>peng</p>
                        </li>
                        <li>
                            <p><Icon type="check-circle" /></p>
                            <p>you</p>
                        </li>
                        <li>
                            <p><Icon type="check-circle" /></p>
                            <p>hahaha</p>
                        </li>
                    </ul>
                    <div className="viewAllcfg2">
                        <a className="viewAllBtn" id="viewArticleBtn" onClick={this.showModal}>查看全部</a>

                        {/* 弹出的对话框 */}
                        <Modal
                            title="房屋设施"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <ul className="all_facilities">
                                <li>
                                    <p><Icon type="android" theme="filled" /></p>
                                    <p>露台</p>
                                </li>
                                <li>
                                    <p><Icon type="car" theme="filled" /></p>
                                    <p>露台</p>
                                </li>
                                <li>
                                    <p><Icon type="carry-out" theme="filled" /></p>
                                    <p>露台</p>
                                </li>
                                <li>
                                    <p><Icon type="ci-circle" theme="filled" /></p>
                                    <p>露台</p>
                                </li>
                                <li>
                                    <p><Icon type="cloud" theme="filled" /></p>
                                    <p>露台</p>
                                </li>
                                <li>
                                    <p><Icon type="code" theme="filled" /></p>
                                    <p>露台</p>
                                </li>
                                <li>
                                    <p><Icon type="compass" theme="filled" /></p>
                                    <p>露台</p>
                                </li>
                            </ul>
                            <ul className="all_facilities">
                                <li>
                                    <p><Icon type="codepen-square" theme="filled" /></p>
                                    <p>露台</p>
                                </li>
                                <li>
                                    <p><Icon type="contacts" theme="filled" /></p>
                                    <p>露台</p>
                                </li>
                                <li>
                                    <p><Icon type="container" theme="filled" /></p>
                                    <p>露台</p>
                                </li>
                                <li>
                                    <p><Icon type="control" theme="filled" /></p>
                                    <p>露台</p>
                                </li>
                                <li>
                                    <p><Icon type="crown" theme="filled" /></p>
                                    <p>露台</p>
                                </li>
                            </ul>
                            <ul className="all_facilities">
                                <li>
                                    <p><Icon type="dashboard" theme="filled" /></p>
                                    <p>露台</p>
                                </li>
                                <li>
                                    <p><Icon type="database" theme="filled" /></p>
                                    <p>露台</p>
                                </li>
                                <li>
                                    <p><Icon type="dollar-circle" theme="filled" /></p>
                                    <p>露台</p>
                                </li>
                                <li>
                                    <p><Icon type="dribbble-circle" theme="filled" /></p>
                                    <p>露台</p>
                                </li>

                            </ul>
                        </Modal>
                    </div>

                </div>
            </div>

            {/* 周边美食娱乐 */}
            <div style={this.state.toggleNum == 2 ? { display: "block" } : { display: "none" }} className="cate" dangerouslySetInnerHTML={{ __html: cateData }}>
            </div>

            {/* 小区环境 */}
            <div style={this.state.toggleNum == 3 ? { display: "block" } : { display: "none" }} className="environment" dangerouslySetInnerHTML={{ __html: environmentData }}>
            </div>

            {/* 预定服务 */}
            <div className="evaluation booking">
                <div className="evaluation_top">
                    预定价格
                    <span>小提示：节假日价格，请咨询在线客服！</span>
                </div>
                <div style={{ width: "95%", border: '1px solid #d9d9d9', borderRadius: 4, margin: "auto" }}>
                    <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
                </div>
            </div>
            {/* 弹出的对话框 */}
            <div className="talk" style={this.state.isTalk ? { display: "block" } : { display: "none" }} onClick={this.toggleTalk}>
                <p>欢迎咨询维拉度假，请问有什么可以帮您的吗？</p>
                <p>
                    <span>现在咨询</span>
                    <span>稍后再说</span>
                </p>
                <Icon type="close" onClick={this.toggleTalk} />
            </div>
        </div>
    }
}

export default DetailHtml