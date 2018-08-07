import { REDUCE,ADD } from '../action/index';
import { combineReducers } from 'redux';

// 初始化默认的值
const initialState = {
	arr:['8','7','6']
};

const addReducer = (state=initialState,action) => {
	state = JSON.parse(JSON.stringify(state));
	switch(action.type){
		//如果是这个就执行这个步骤
		case REDUCE:
		     state.arr.pop();
		     Object.assign({},state,{});
		return Object.assign({}, state, { arr:state.arr});
		case ADD:
		     state.arr.push('黑蛋');
		return Object.assign({},state,{arr:state.arr});
		default:
		return state;     
	}
}

const reducer = combineReducers({
	addReducer
})
export default reducer;