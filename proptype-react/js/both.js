var Both = React.createClass({
//	constructor(props){
//		super(props)
//	},
    
	getInitialState(){
		return {
			num:0
		}
		//设置默认的一些属性
	},
	componentwillMount(){
		//即将挂在组件到页面上
	},
	componentDidMount(){
		this.clickNum();
		this.setInterval();
		//已经将真实的DOM结构挂载到页面上
		//对DOM进行操作，请求数据的方法写在此处
	},
	componentWillUnmount(){
		this.clickNum.bind(this),
		this.setInterval.bind(this)
		//业务或者事件处理完毕，对已有的DOM或者方法进行解绑，销毁数据及DOM结构
	},
	
	
	
	
    clickNum:function(){
    	this.setState({
			   num:10
		  }) 
    	//上面的方法setState({})是修改state里面数据的唯一方法，不能直接修改state 
    },
    setInterval(){
    	setInterval(function(){
    		console.log("时间")
    	},100000000)
    },
    render(){
    	console.log(this.state.num);
//  	console.log(this.props);
    	const title = "哈哈哈的";
    	var array = ['1','5','4'];
    	var bothStyle = {
    		width:'100%',
    		height:'100%',
    		backgroundColor:'#555',
    		fontSize:20,
    		li:{
    			borderBottom:'1px solid red'
    		}
    	};
    	return(
    		<div style={bothStyle}>
    		    <Header />
	    		<ul>
	    		    { 
	    		      array.map((ele,index) => {
	    		      	 return (
	    		      	 	<li key={ index } style={bothStyle.li} onClick={ this.clickNum }>{ title }-->{ ele }</li>
	    		      	)
	    		      })
	    		    }
	    		</ul> 
	    		<Header />
	    		<Footers data='明明' />
    		</div>
    	)
    }
});

class Footers extends React.Component{
	constructor(props){
		super(props);
		console.log(this);
		//ES6的react组件中，在构造函数中可以设置state的默认值更加的方便灵活
		this.state = {
			flower:'玫瑰'
		};
		this.setState({
			flower:'带刺的玫瑰'
		})
	};
	componentDidMount(){
		
	};
	render(){
		const {data} = this.props;
		const massage = 'ES6语法';
		console.log(this.props)
		return (
			<div className = 'new_class'>
			   <span>{ massage }</span>
			   <br/>
			   <span>{ data }</span>
			</div>
		)
	}
}

var Header = React.createClass({
	
	render(){
		const msg = '我是头部';
		return <div className='admin-header'>
		   { msg }
		</div>
	}
})


ReactDOM.render(
	<Both/>,
	document.getElementById('root')
)
