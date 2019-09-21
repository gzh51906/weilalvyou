import React, { Component } from 'react';

import { Icon, Input } from "antd"

const { Search } = Input;

class Destination extends Component {
    onSearch = (val) => {
        console.log(val);

    }

    render() {
        return (<div id="destination">
            <header>
                <h3>深圳<Icon type="caret-down" /></h3>
                <Search placeholder="搜索城市/目的地"
                    onSearch={this.onSearch}
                />
            </header>
        </div>)
    }
}

export default Destination;