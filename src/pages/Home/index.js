import React, { Component } from 'react';

import api from "../../api"

import { Carousel } from 'antd';

import { Icon, Input, Button } from "antd"

require('../Home/css/home.scss');


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            list: [],
            list2: [],
            header: [],
            header2: [],
            main: [],
            city:"深圳"
        }
    }
   async componentDidMount(){

       let { data : {data}} = await api.get('/home', {

       })
       console.log(data);
       let list = data[1].body.slice(0, 4);
       let list2 = data[1].body.slice(4, 8);
       let header = data[2].body.slice(0, 4);
       let header2 = data[2].body.slice(4, 8);
       let main = data[3].body.list;
    //    console.log(list);

       this.setState({
           list: list,
           list2: list2,
           header: header,
           header2: header2,
           main:main,

        //    list,
       })
   }
    tabcity = () => {
        this.setState({
            isShow:!this.state.isShow
        })
    }
    tabcity2 = (city) => {
        this.setState({
            isShow: false,
            city
        })
    }

    render() {
        let { list,list2,header,header2,main } = this.state;
        return (
            <div id="home">
                <div className="nav">
                    <div className="nav-left">
                        <img className="fl-left" src={`//img.villaday.com/images/activity/demand/logo.png`} />
                    </div>
                    <div className="center">

                        <input placeholder="点击搜索图标  搜索城市/目的地" />
                        {/* <Icon type="search" className="box"/> */}
                    </div>
                    <div className="nav-right">
                        <a onClick={this.tabcity}>{this.state.city}<Icon type="caret-down" /></a>
                    </div>
                </div>
                {
                    this.state.isShow?<div className="nav-fix">
                        <ul className="fix" >
                        <li className="destination_city" onClick={this.tabcity2.bind(null,'深圳')}>深圳</li>
                        <li className="destination_city" onClick={this.tabcity2.bind(null,'上海')}>上海</li>
                        <li className="destination_city" onClick={this.tabcity2.bind(null,'北京')}>北京</li>
                        <li className="destination_city" onClick={this.tabcity2.bind(null,'成都')}>成都</li>
                        <li className="destination_city" onClick={this.tabcity2.bind(null,'乌鲁木齐')}>乌鲁木齐</li>
                    </ul>
                </div>:""
                }

                <div className="header">
                    <h1 className="fl">
                    <Carousel autoplay>
                        <div>
                            <a href="../Destination/index.js">
                                <img className="fl-left" src={`https://img.villaday.com/images/t9/421/421-14827466.jpg?x-oss-process=image/resize,m_fill,w_750,h_500,limit_0/sharpen,100/format,webp`} />
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <img className="fl-left" src={`https://img.villaday.com/images/t9/406/406-14755427.png?x-oss-process=image/resize,m_fill,w_750,h_500,limit_0/sharpen,100/format,webp`} />
                            </a>
                        </div>
                    </Carousel>
                    </h1>
                </div>
                <div className="hotRecom1">
                    <h3>热门推荐</h3>
                    <ul className="clearfix">
                        {

                            list.map(item => {

                                return(
                            <li key={item.id}>
                                <a href="#/scene/detail/1mLemJwX42" className="autolink">
                                    <div className="hotImg">
                                        <img src={`https://img.villaday.com${item.icon}`} />
                                    </div>
                                    <p>{item.name}</p>
                                </a>
                            </li>
                            )
                                 })
                        }
                    </ul>
                    <ul className="clearfix">
                        {
                            list2.map(list2 => {
                                return(

                                    <li key={list2.id}>
                                    <a href="#/scene/detail/1mLemJwX42" className="autolink">
                                        <div className="hotImg">
                                            <img src={`https://img.villaday.com${list2.icon}`} />
                                        </div>
                                     <p>{list2.name}</p>
                                    </a>
                                </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="destination">
                    <div className="destinationHd">
                        <h3 className="fl">热门城市</h3>
                        <a className="fr" href="#/destination/selectCity" id="moreCity">更多城市 <i></i></a>
                    </div>
                    <div className="destinationBd">
                        <ul className="classfix">
                            {
                                header.map(header =>{
                                    return(
                                        <li className="destination_city" key={header.id}>
                                            <a href="">{header.name}</a>
                                        </li>
                                    )
                                })

                            }

                        </ul>
                        <ul className="classfix">
                            {
                                header2.map(header2 => {
                                    return (
                                    <li className="destination_city" key={header2.id}>
                                        <a href="">{header2.name}</a>
                                    </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
                <div className="destination">
                    <div className="destinationHd">
                        <h3 className="fl">目的地推荐</h3>
                        <a className="fr" href="#/destination/selectCity" id="moreCity">更多目的地<i></i></a>
                    </div>
                    {
                        main.map(main =>{
                            return(
                                <div className="list_content" key={main.url}>
                                    <div className="houseItem">
                                        <div className="houseFocus">
                                            <a href="" className="autolink">
                                                <img src={`https://img.villaday.com${main.imageURL}`} />
                                            </a>
                                        </div>
                                        <div className="imgPubLeft2">
                                            <div>￥<span className="fs30">{main.displayPrice}起</span></div>
                                        </div>
                                    </div>
                                    <div className="spacing_01">
                                        <h3 className="fs25">{main.name}</h3>
                                        <p className="fs25">{main.desc}</p>
                                        <div className="mark_01 mt10">
                                            <Icon type="environment" />{main.address}
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    }

                </div>
            </div>
        )
    }
}

export default Home;