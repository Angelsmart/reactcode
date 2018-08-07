import React,{Component} from 'react';
class Root extends Component{
	constructor(props){
		super(props)
	}
	render(){
        let stylediv = {
        	width:"100%",
        	height:200,
        	backgroundColor:"blue",
        	color:"#fff",
        	fontSize:20,
        }
		return (
            <div style={stylediv}>
            	root里面的内容
            </div>
		)
	}
}

export default Root;