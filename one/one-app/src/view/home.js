import React,{Component} from 'react';
import Root from './root';
class Home extends Component{
    constructor(props){
   	    super(props)
    }
    render(){
    	let styleDiv = {
    		width:'100%',
    		height:100,
    		backgroundColor:'#666',
    	}
    	return (
    		//必须一个大的Div来包起来
            <div>
                <div  style={styleDiv}>
                    <ul>
                      <li>点击</li>
                    </ul> 
                </div>
                
                <div>
                    <Root />
                </div>
            </div>
    	)
    }
}

export default Home;