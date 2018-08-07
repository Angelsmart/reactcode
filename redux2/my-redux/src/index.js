import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './client/home';
import Childs from './client/childs';
import store from './store/store';
import { Provider }  from 'react-redux';
import {applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';


const Render = () =>{
	ReactDOM.render(
	<Provider store={store}>
			<Home />	
	</Provider>,
	 document.getElementById('root'));
}

registerServiceWorker();
store.subscribe(()=>{
	console.log(this.props);
	Render();
})
Render();

