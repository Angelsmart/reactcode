import {DEL} from "../action/action";
import {combineReducers} from "redux";

const initialState = {
    del:["明明","云祥","奥翔"]
}

export let del = (state=initialState,action)=>{
	state = JSON.parse(JSON.stringify(state));
    switch (action.type){
        case DEL :
             state.del.push("都是帅哥哥");
             return Object.assign({}, state, {
				del: state.del
			})
        default:
            return state; 
    }
}


const reducer = combineReducers({
	del
})
export default reducer;