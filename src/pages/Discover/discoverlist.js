import React ,{Component} from 'react';
import api from '../../api'
require('./css/discoverlist.scss');
class Discoverlist extends Component{
    constructor(props){
        super(props)
        this.state ={
            data:[]
        }
    }
    async componentDidMount(){
        let {id} = this.props.match.params;
        let {data:{data:data}} = await api.post('discover/goods',{id});
        this.setState({
            data:data
        })
    }
    
    render(){
        let{data} =this.state;
            console.log(data)
            return(
                <div id="list" style={{height:'1000px',}}>
            <div className="mink">
             {
                 data.map(item=>{
                         return(
                             <div key={item.id}>
                            <img src={ `https://img.villaday.com${item.imageUrl}`}/>
                            <div dangerouslySetInnerHTML={{ __html: item.detail }}></div>
                           <div className="dailist" style={{height:'390px',}}>
                           <img  src={ `http://img.villaday.com${item.image1}`}/>
                            <h2>{item.name}</h2>
                            <p>{item.addss}</p>
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
export default Discoverlist;