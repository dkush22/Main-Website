import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

ReactDOM.render(<Provider><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
