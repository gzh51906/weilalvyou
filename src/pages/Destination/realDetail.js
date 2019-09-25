import React, { Component } from 'react';
import axios from 'axios'
import { Icon, Input, Button } from "antd"

const { Search } = Input;

class DetailHtml extends Component {
    componentDidMount() {
        this.getdata();
    }
    getdata = async () => {
        let aa = await axios.get("https://m.villaday.com/api/house/get/de5zoY7mQV/?_=1569326356612");
        console.log("aa::", aa);

    }
    render() {
        return (<div id="realDetail">
            <header>
                我是头部
            </header>
            <content>我是内容</content>
        </div>)
    }
}

export default DetailHtml;