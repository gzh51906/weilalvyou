import React, { Component } from 'react';

import { Icon, Input, Button } from "antd"

const { Search } = Input;

class SearchHtml extends Component {
    onSearch = (val) => {
        if (val) {
            console.log(val);
        } else {
            console.log("nul");
        }
    }
    goto = (val) => {
        this.props.history.goBack();

    }

    render() {
        return (<div id="search">
            <header>
                <Search placeholder="点击搜索图标  搜索城市/目的地" onSearch={this.onSearch}
                /><Button type="link" size="small" onClick={this.goto}>取消
              </Button>
            </header>
            <content>我是内容</content>
        </div>)
    }
}

export default SearchHtml;