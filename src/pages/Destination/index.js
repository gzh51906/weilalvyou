import React, { Component } from 'react';

import { Icon, Input, Tabs } from "antd"
import Api from "../../api"
const { Search } = Input;
const { TabPane } = Tabs;
class Destination extends Component {
    state = {
        citylist: [],
        data: []
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
    getContentData = async () => {
        let { data: { data } } = await Api.get('destination/content', {})
        console.log(data);

        this.setState({
            data: data
        })
    }
    componentDidMount() {
        this.getCityData();
        this.getContentData();
    }
    render() {
        let { citylist } = this.state
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
                                return <li key={item.name}>{item.name}</li>
                            })
                        }
                    </ul>
                </div>
            </header>
            <div className="content" style={{ marginTop: 125 }}>
                <ul>

                    <li>
                        <div className="top" style={{ width: '100%', height: 150, backgroundColor: 'pink' }}>
                            <img></img>
                            <span>￥<i>888</i>起</span>
                        </div>
                        <div className="bottom">
                            <h3>深圳·较场尾</h3>
                            <h5>连海岸线都不愿意离开的民宿村</h5>
                            <p><Icon type="environment" />深圳大鹏新区</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>)
    }
}

export default Destination;