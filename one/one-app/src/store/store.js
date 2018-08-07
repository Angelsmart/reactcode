import { createStore } from 'redux';
import reducer from '../reducer/index';

// 创建store
let store = createStore(reducer);
export default store;