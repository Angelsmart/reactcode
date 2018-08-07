var Header = React.createClass({
	componentWillMount(){
		
	},
	componentDidMount(){
		//真实的DOM结构，可以进行操作DOM
	},
	componentWillUnmount(){
		//整个生命周期已经完成可以将组件或者方法进行卸载
	},
	render:function(){
		const Title = "我是LOG";
		/*var myStyle = {
			bigBox:{
				display:"flex",
				justifyContent:"space-around",
				width:'100%',
				height:'100',
				backgroundColor:'#ccc'
			},
			div:{
				width:'200',
				height:'100',
				backgroundColor:"green"
				
			}
		}*/
		let arr = ['孙悟空','猪八戒','沙僧'];
		return (//return 单标签的时候直接return DOM结构不需要小括号，如果这个单标签没有子元素，就要return一个小括号，小括号内部在写DOM结构
			<div className="bigBox">
			   <div className="div" >
			   {/*在DOM结构中注释必须用花括号包起来，不然会报错*/}
			     { /*arr*/ }
			     {
			     	arr.map((item,index)=>{
			     		console.log(index)
			     		return (
			     			<span className='span' key={index}> {item} </span>
			     		)
			     	})
			     }
			   </div>
               <div className="div" onClick={this.clickHeader}>
                    <Zimo />
               </div>
               <div className="div">
                    <Btn />
               </div>
			</div>
		)
	},
	clickHeader:function(){
		console.log('hahh');
	},
	
});

class Zimo extends React.Component{
	constructor(props){
		super(props);
		console.log(props)
	};
	clickAlert(){
		alert("黑蛋")
	};
	render(){
		const Titil="刀舞"
		return(
			<div onClick={this.clickAlert} className="nace_girl">{ Titil }</div>
		)
	};
}

let Btn = React.createClass({
	clickName(){
		alert("哈哈哈");
	},
	render(){
		let ming = "明明";
		return (
			<div className="btnbox">
			   <button className="btn" onClick={this.clickName}>{ ming }</button>
			</div>
		)
	}
})

ReactDOM.render(
	<Header/>,
	document.getElementById('root')
)
