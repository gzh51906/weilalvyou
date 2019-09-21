import React, { Component } from 'react';
import api from '../../api'
require('./css/discover.scss');
class Discover extends Component {
  constructor(props){
    super(props);
    this.state={
      list: []
    }
  }
  componentDidMount(){
  this.onhand();
 }
 

 
onhand=async(val)=>{
  console.log(val);
  let {data} =   await api.post('discover',{})
  console.log(data);
}
  render(){
  let {list} =this.state;
    return(
      
 <div id="discover">
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