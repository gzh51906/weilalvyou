import React, { Component } from 'react';
<<<<<<< HEAD
import axios from 'axios';
require('./css/discover.css');
class Discover extends Component {
  constructor(props){
    super(props);
    this.state={
      list: []
=======
class Discover extends Component {

    render() {
        return (
            <div>发现</div>
        )
>>>>>>> bc6833fa32ca7ca765f3a2d55a359d543f033990
    }
    // this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
   
}
 
onhand=(val)=>{
   axios.post('http://localhost:1906/cart',{val})
   .then(res => {
      this.setState({
        list:res.data.data
      })
      })
}
  render(){
  let {list} =this.state;
    return(
      
 <div>
   <div className="header">
    <ul className="nav">
     <li onClick={this.onhand.bind(this,"推荐路线")}>推荐•路线</li>
     <li onClick={this.onhand.bind(this,"精美别墅")}>精品•美墅</li>
     <li onClick={this.onhand.bind(this,"优惠活动")}>优惠•活动</li>
     </ul>
   </div>
   <div className="main">
     {  
         list.map(item=>{
          return item.list.map(ele=>{
            return(
              <a href="###" key={ele.id}>
              <dl>
              <dt><img  src={ `https://img.villaday.com${ele.imageUrl}`}/></dt>
              <dd>
            <p>
            {ele.title}
            </p>
            </dd>
            </dl>
            </a>
            )
          }) 
        })
      }
   </div>
 </div>
  
    )
  }
}
export default Discover;