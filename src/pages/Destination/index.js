import React, { Component } from 'react';
import { Icon } from "antd"
class Destination extends Component {
    render() {
        return (
            <div className="destination">
                <header>
                    <h3>深圳<Icon type="caret-down" /></h3>
                </header>
            </div>
        )
    }
}

export default Destination;