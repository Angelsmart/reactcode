import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store/index';

class Childs extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { del,deletewang } = this.props;
		return (
			<div>
			 {
				del.map((item, index) => {
					return <p key={index}>{ item}</p>
				})
			}
			<button onClick={()=>deletewang()}>添加</button>
			</div>
		)
	}
};
function popArray(state) {
	return {
		del: state.del.del
	}
}

function popDispath(dispatch) {
	return {
		deletewang: () => dispatch({
			type: 'DEL'
		})
	}
}

export default connect(
	popArray,
	popDispath
)(Childs);