import { createStore,applyMiddleware } from 'redux';
import reducer from '../reducer/del';
import {createLogger} from 'redux-logger'

let logger = createLogger()
let store = createStore(
	reducer,
	initialState,
	applyMiddleware(thunk,promise,logger)
	)
export default store;