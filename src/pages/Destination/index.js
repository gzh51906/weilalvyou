import React, { Component } from 'react';

import { Icon, Input, Tabs } from "antd"
import Api from "../../api"
const { Search } = Input;
const { TabPane } = Tabs;
class Destination extends Component {
    state = {
        citylist: [],
        data: [],
        current: "深圳"
    }
    onSearch = (val) => {
        console.log(val);
    }
    goto = (val) => {
        console.log(val);
        this.props.history.push(val)

    }
    getCityData = async () => {
        let { data: { data } } = await Api.get('destination/', {})
        let cities = data.length ? data[0].cities : [];
        this.setState({
            citylist: cities
        })
    }
    getContentData = async (sort) => {
        if (sort) {
            sort = sort;

        } else {
            sort = "深圳"
        }
        let { data: { data } } = await Api.post('destination/content', { sort: sort })
        let list = data.length ? data[0].list : [];
        this.setState({
            data: list, current: sort
        })
    }
    gotoDetail = (url) => {
        //对数据进行解剖 得到需要的数据 /village/detail/dgw5agZ7Xn?timeStamp=1569057272108   ==>  dgw5agZ7Xn
        console.log(url);
        this.props.history.push(`/detail${url}`)
        url = url.split("/")[3].split("?")[0]
        console.log(url);
        // this.props.history.push(`/detail/${url}`)



    }
    componentDidMount() {
        this.getCityData();
        this.getContentData();
    }
    render() {
        let { citylist, data, current } = this.state
        return (<div id="destination">
            <header>
                <h3>深圳<Icon type="caret-down" /></h3>
                <Search placeholder="搜索城市/目的地"
                    onSearch={this.onSearch}
                    onClick={this.goto.bind(this, 'search')}
                />
                <div className="nav">
                    <span>周边城市:</span>
                    <ul>
                        {
                            citylist.map(item => {
                                return <li key={item.name} onClick={this.getContentData.bind(this, item.name)} className={current == item.name ? 'active' : ''}>{item.name}
                                    {current == item.name ? <i></i> : <></>}
                                </li>
                            })
                        }
                    </ul>
                </div>
            </header>
            <div className="content" style={{ marginTop: 125 }}>
                <ul>
                    {
                        data.map(item => {
                            return <li key={item.imageURL} onClick={this.gotoDetail.bind(this, item.url)}>
                                <div className="top">
                                    <img src={`https://img.villaday.com${item.imageURL}`}></img>
                                    <span>￥<i>{item.displayPrice}</i>起</span>
                                </div>
                                <div className="bottom">
                                    <h3>{item.name}</h3>
                                    <h5>{item.desc}</h5>
                                    <span><Icon type="environment" />{item.address}</span>
                                </div>
                            </li>
                        })
                    }

                </ul>
            </div>
        </div>)
    }
}

export default Destination;