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



class App extends Component {
  state = {}
  goto = (path) => {
    this.props.history.push(path)
  }
  render() {
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
            <Redirect from="/" to="/home" exact />
          </Switch>
        </div>
        <ul className="nav_footer_y" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background:'#fff' }}>
          <li onClick={this.goto.bind(this, "./home")}><Icon type="home" />首页</li>
          <li onClick={this.goto.bind(this, "./destination")}><Icon type="environment" />目的地</li>
          <li onClick={this.goto.bind(this, "./thinktank")}><Icon type="plus-circle" theme="filled" className="colrname" />提交需求</li>
          <li onClick={this.goto.bind(this, "./discover")}><Icon type="global" />发现</li>
          <li onClick={this.goto.bind(this, "./mine")}><Icon type="user" />我的</li>
        </ul>
        {
          this.props.location.pathname == "/thinktank" ? <></> : <span className="online_serve"><Icon type="message" />在线咨询</span>
        }

      </div >

    );
  }
}
App = withRouter(App);//返回一个新的组件 

export default App;