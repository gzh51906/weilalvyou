import React, { Component } from 'react';
import { Icon } from "antd"
import "./style/common.css"
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';


import Home from './pages/Home';
import Destination from './pages/Destination';
import Login from './pages/Login';
import Discover from './pages/Discover';
import Mine from './pages/Mine';
import ThinkTank from './pages/ThinkTank';
import Search from './pages/Destination/search'
import Discoverlist from './pages/Discover/discoverlist'
import Detail from './pages/Destination/detail'

class App extends Component {
  state = {
    current: "/home",
    data: [
      {
        name: "首页",
        path: "/home",
        icon: "home"
      }, {
        name: "目的地",
        path: "/destination",
        icon: "environment"
      }, {
        name: "提交需求",
        path: "/thinktank",
        icon: "plus-circle"
      }, {
        name: "发现",
        path: "/discover",
        icon: "global"
      }, {
        name: "我的",
        path: "/mine",
        icon: "user"
      }
    ]
  }
  goto = (path) => {
    this.props.history.push(path);
    this.setState({
      current: path
    })
  }
  componentDidMount() {
  }
  render() {
    let { current, data } = this.state;
    let path1 = this.props.history.location.pathname;
    path1 = `.${path1}`;
    return (
      <div >
        <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/destination" component={Destination} />
            <Route path="/thinktank" component={ThinkTank} />
            <Route path="/discover" component={Discover} />
            <Route path="/mine" component={Mine} />
            <Route path="/login" component={Login} />
            <Route path="/search" component={Search} />
            <Route path="/discoverlist/:id" component={Discoverlist}/>
            <Route path="/detail" component={Detail} />
            <Redirect from="/" to="/home" exact />
          </Switch>
        </div>
        {this.props.location.pathname == "/search" ? <></> : <ul className="nav_footer_y" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff' }}>
          {
            data.map(item => {
              return <li onClick={this.goto.bind(this, `${item.path}`)} key={item.name} className={item.path == current ? 'active' : '' || item.path == path1 ? 'active' : ''}>
                <Icon type={item.icon} className={item.name == '提交需求' ? 'colrname' : ''} theme={item.name == '提交需求' ? 'filled' : ''} />
                {item.name}
              </li>
            })
          }
        </ul>
        }

        {
          this.props.location.pathname == "/thinktank" || this.props.location.pathname == "/search" ? <></> : <span className="online_serve"><Icon type="message" />在线咨询</span>
        }

      </div >

    );
  }
}
App = withRouter(App);//返回一个新的组件 

export default App;