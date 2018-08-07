import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Home from './view/home';
import Root from './view/root';
import { Provider }  from 'react-redux';
import store from './store/store';
import Childs from './view/child';
// import PropTypes from 'prop-types';
// import { Router,Route,IndexRoute,hashHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

// Route.propTypes = {
//     path:PropTypes.string,
//     component:PropTypes.func.isRequired
// };
// IndexRoute.propTypes = {
//     component:PropTypes.func.isRequired,
// };
// Provider.PropTypes = {
// 	store: PropTypes.object.isRequired,
// };

ReactDOM.render(

	<Provider store = {store}>

		<Childs />
	</Provider>,
	
	
	document.getElementById('root')
	);
registerServiceWorker();
