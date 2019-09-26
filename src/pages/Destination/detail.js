import React, { Component } from 'react';

import { Icon, Input, Button } from "antd"
import Api from "../../api"
const { Search } = Input;

class detailHtml extends Component {
    constructor(props) {
        super();
        this.$tab = null;
        this.offsetTop = 0;
    }
    state = {
        around: "",
        data: "",
        current: 1,
        nav: [
            {
                key: 1,
                text: "小区房源"
            }, {
                key: 2,
                text: "评论"
            }, {
                key: 3,
                text: "周边玩乐"
            }, {
                key: 4,
                text: "小区介绍"
            }
        ],
        navTop: false
    }

    componentDidMount() {
        let path1 = this.props.history.location.search
        let path = this.props.location.pathname.slice(7);
        path = `${path}${path1}`;
        // console.log("原来的path", path);

        let arr = ["/village/detail/n6jylpnylo?timeStamp=1569057272108", "/village/detail/dgw5agZ7Xn?timeStamp=1569057272108", "/village/detail/rKa7zQAmkx?timeStamp=1569057272108"];
        let res = arr.includes(path);
        if (res) {
            path = path;
        } else {
            let index = Math.floor(Math.random() * 3);
            path = arr[index];
        }
        // console.log("现在的", path);

        this.getData(path);
        setTimeout(() => {
            this.$tab = this.refs.tab;
            if (this.$tab) {
                this.offsetTop = this.$tab.offsetTop;
                window.addEventListener('scroll', this.handleScroll);
            }
        }, 2000)
    }
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
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
    getData = async (path) => {
        let { data: { data } } = await Api.post('destination/detailList', { url: path });
        if (data.length != 0) {
            this.setState({
                around: data[0].around,
                data: data[0]
            })
        }
    }
    goto = (val) => {
        this.props.history.goBack();
    }
    gotoContent = (val) => {
        this.setState({
            current: val
        })
    }
    go2detail = (id, path) => {
        // console.log(id, path);

        this.props.history.push(`/house/detail?url=${path}&id=${id}`)
    }
    render() {
        let { around, data, nav, current } = this.state;
        let { detail, discuss, list, url } = data;
        return (<div id="detail">
            {
                data ?
                    <>
                        <header>
                            <img src={`https://img.villaday.com${data.imageURL}`} />
                            <div className="content">
                                <h2>{data.name}</h2>
                                <p>{data.desc}</p>
                                <span><Icon type="environment" />{data.city}·{data.area}</span>
                            </div>
                        </header>
                        <ul className="nav" ref="tab" className={this.state.navTop ? 'fixed nav' : 'nav'}>
                            {
                                nav.map(item => {
                                    return <li key={item.key} onClick={this.gotoContent.bind(this, item.key)} className={current == item.key ? 'active' : ''}
                                    >{item.text}
                                        {current == item.key ? <i></i> : <></>}</li>
                                })
                            }
                        </ul>
                        {
                            current == 1 ? <ul className="houses">
                                {
                                    list.map(item => {
                                        return <li key={item.id} onClick={this.go2detail.bind(this, item.id, url)}>
                                            <div className="top">
                                                <img src={`https://img.villaday.com${item.imageUrl}`} className="img"></img>
                                                <span>￥<i>{item.showMinPrice}</i>起</span>
                                                <img src={`https://img.villaday.com/${item.merchant.headImageURL}`} className="headP"></img>
                                            </div>
                                            <div className="bottom">
                                                <h3>{item.name}</h3>
                                                <p>{item.description}</p>
                                                <p>{item.village.description}</p>
                                            </div>
                                        </li>
                                    })
                                }
                            </ul> : <></>
                        }
                        {
                            current == 2 ? <ul className="discuss">
                                {
                                    discuss.map(item => {
                                        return <li key={item.id}>
                                            <p className="head"><img src={item.headImgUrl}></img><span>{item.nickName}</span><b>{item.submitDate}</b></p>
                                            <p className="detail">{item.detail}</p>
                                        </li>
                                    })
                                }

                            </ul> : <></>
                        }
                        {
                            current == 3 ? <div className="around" dangerouslySetInnerHTML={{ __html: around }} /> : <></>
                        }
                        {
                            current == 4 ? <div className="introduce" dangerouslySetInnerHTML={{ __html: detail }} /> : <></>
                        }</>
                    : <></>
            }
        </div >)

    }
}

export default detailHtml;