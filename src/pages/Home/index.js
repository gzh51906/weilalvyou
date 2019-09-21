import React, { Component } from 'react';
import Api from "../../api"
class Home extends Component {
    cl = async () => {
        let { data: { data } } = await Api.get('sort/', {})
        console.log(data);
    }

    render() {
        return (
            <div onClick={this.cl}>首页</div>
        )
    }
}

export default Home;