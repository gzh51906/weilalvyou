import React, { Component } from 'react';
import axios from 'axios'
import { Icon, Input, Button, Spin, Alert } from "antd"
import Api from "../../api"
const { Search } = Input;

class DetailHtml extends Component {
    state = {
        around: "",
        data: "",
        current: 1,
        nav: [
            {
                key: 1,
                text: "房源详情"
            }, {
                key: 2,
                text: "周边美食娱乐"
            }, {
                key: 3,
                text: "小区环境"
            }
        ],
        open: false,
        navTop: false,
        id: "",
        set: false,
        detailList: []
    }
    componentDidMount() {
        // console.log(this.props);
        let url = this.props.location.search.slice(1).split("&")[0].split("url=")[1];
        let id = this.props.location.search.slice(1).split("&")[1].split("=")[1]
        this.setState({
            id: id
        })

        let arr = ["/village/detail/n6jylpnylo?timeStamp=1569057272108", "/village/detail/dgw5agZ7Xn?timeStamp=1569057272108", "/village/detail/rKa7zQAmkx?timeStamp=1569057272108"];
        let res = arr.includes(url);
        if (res) {
            url = url;
        } else {
            let index = Math.floor(Math.random() * 3);
            url = arr[url];
        }
        this.getData(url);

    }
    componentWillUnmount() {
        clearTimeout(this.time)
        this.setState = (state, callback) => {
            return;
        };
    }
    getData = async (path) => {
        let { data: { data } } = await Api.post('destination/detailList', { url: path });
        if (data.length != 0) {
            this.setState({
                around: data[0].around,
                data: data[0],
                detailList: data[0].list
            })
        }


        this.$tab = this.refs.tab;
        if (this.$tab) {
            this.offsetTop = this.$tab.offsetTop;
            window.addEventListener('scroll', this.handleScroll);
        }
    }
    gotoContent = (val) => {
        this.setState({
            current: val
        })
    }
    look = () => {
        let { open } = this.state;
        this.setState({
            open: !open
        })

    }
    handleScroll = () => {
        let sTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (!this.state.navTop && sTop >= this.offsetTop) {
            this.setState({
                navTop: true
            })
        }
        if (sTop < this.offsetTop) {
            this.setState({
                navTop: false
            })
        }
    }
    render() {
        let { open, data, nav, current, detailList, id } = this.state;
        let { around, detail } = data;
        let detail2 = detailList.filter(item => item.id == id);
        // console.log(detail2, data, "++++");
        return (<div id="realDetail">
            {
                detail2[0] ? <>
                    {
                        detail2.map(item => {
                            return <div key={item.id}>
                                <header>
                                    <div className="top">
                                        <img src={`https://img.villaday.com${item.imageUrl}`}></img>
                                        <span>￥<i>{item.showMinPrice}</i>起 人均:<i>￥{item.showMinAverage}</i></span>
                                    </div>
                                    <div className="title">
                                        <h3>{item.name}</h3>
                                        <p>
                                            <span><i></i>自助式服务</span>
                                            <span><i></i>特色客栈</span><span>{item.roomNum}室{item.hallNum}厅{item.bathRoomNum}卫·{item.acreage}㎡·{item.bedNum}床·{item.capacity}人</span>
                                            <span>房屋编号:{item.id}</span>
                                        </p>
                                    </div>
                                </header>
                                <div className="content">
                                    <div className="position">
                                        <p>地理位置</p>
                                        <p>深圳市大鹏新区葵涌街道官湖村<span>查看地图</span></p>
                                    </div>
                                    <ul className="nav" ref="tab" className={this.state.navTop ? 'fixed nav' : 'nav'}>{
                                        nav.map(item => {
                                            return <li
                                                key={item.key}
                                                onClick={this.gotoContent.bind(this, item.key)}
                                                className={current == item.key ? 'active' : ''}>{item.text}
                                                {current == item.key ? <i></i> : <></>}
                                            </li>
                                        })
                                    }</ul>
                                    <div className="tab">

                                        {
                                            current == 1 ? <><div className="detail">
                                                <div className={open ? "max allp" : "allp"}>
                                                    <p><b>特色:</b>观海平台、烧烤、烤全羊、海鲜私房菜 、花园、KTV、自动麻将、厨房。</p>
                                                    <p><b>详情:</b></p>
                                                    <p>1、房型：{item.roomNum}房{item.hallNum}厅{item.bathRoomNum}卫{item.bathRoomNum}厨2阳台可住{item.capacity}人；</p>
                                                    <p>2、楼层设置:</p>
                                                    <p>一楼：进口花园 KTV设备一套、沙发一套、电视，3间双床房（1.5+1.2 *2，1.2+1.2）公共卫生间；</p>
                                                    <p>二楼：五间房 2间1.8米大床房，1间1.5米麻将房，2间双床房（1.5+1.2米）；</p>
                                                    <p>三楼：五间房 2间1.8米大床房，1间1.5米麻将房，2间双床房（1.5+1.2米）；</p>
                                                    <p>四楼：观海大平台，可以烧烤、求婚、开会、K歌；
                                （注：房间均带独立卫生间）
                        </p>
                                                    <p>3、设施：投影，KTV；</p>
                                                    <p>4、厨房：免费使用（需自备食材、调味料、一次性碗筷等）；</p>
                                                    <p>5、烧烤：提供碳烤，免费提供2个烤炉，提供炭、其他需自备（一次性碗筷、食材、调味料等）；</p>
                                                    <p><br></br></p>
                                                    <p><b>温馨提示:</b></p>
                                                    <p>1、KTV使用时间为下午14点至晚上22点半；</p>
                                                    <p>2、一人一证登记入住，请每位顾客务必带身份证；</p>
                                                    <p>3、停车需收取费用，小车15元，大巴50元；</p>
                                                    <p>4、入住收取1000元押金（退房时别墅无损坏任何物品全额退回押金）；</p>
                                                    <p>5、烧烤、KTV、厨房使用完毕后卫生需自理；</p>
                                                    <p>6、不提供早餐。</p>
                                                </div>
                                                <li><span onClick={this.look}>{
                                                    open ? "收起" : "查看全部"
                                                }</span></li>
                                            </div>
                                                <div className="inf">
                                                    <p>房东信息</p>
                                                    <li><br /></li>
                                                    <li>{item.merchant.nickName}</li>
                                                    <li>房东信息已验证</li>
                                                    <img src={`https://img.villaday.com/${item.merchant.headImageURL}`} />
                                                    <div>查看Ta的房源 ></div>
                                                </div>
                                                <div className="facility">
                                                    <p>配套设施</p>
                                                    <ul>
                                                        <li>露台</li>
                                                        <li>烧烤</li>
                                                        <li>厨房</li>
                                                        <li>KTV</li>
                                                        <li>麻将</li>
                                                        <li>庭院</li>
                                                        <li>电视机</li>
                                                        <li>冰箱</li>
                                                        <li>空调</li>
                                                        <li>吹风机</li>
                                                    </ul>
                                                </div></> : <></>
                                        }
                                        {
                                            current == 2 ? <div className="around" dangerouslySetInnerHTML={{ __html: around }} /> : <></>
                                        }
                                        {
                                            current == 3 ? <div className="introduce" dangerouslySetInnerHTML={{ __html: detail }} /> : <></>
                                        }
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </> :
                    <Spin tip="加载中，如长时间未显示，请刷新..." size="large" />
            }

        </div>)
    }
}

export default DetailHtml;