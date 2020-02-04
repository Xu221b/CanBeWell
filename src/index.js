import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import { CookiesProvider } from 'react-cookie';
import MonitorTimer from './MonitorTimer';
//import routes from './routes';
//import registerServiceWorker from './registerServiceWorker';

//import * as firebase from 'firebase';
//import {DB_CONFIG} from './Config/config';
//import { Router } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Link, Switch, } from "react-router-dom";
//import { BrowserRouter as Link } from "react-router-dom";

//firebase.initializeApp(DB_CONFIG);
//ReactDOM.render(<Router routes={routes} />, document.getElementById('root'));
ReactDOM.render(<CookiesProvider><MonitorTimer /></CookiesProvider>, document.getElementById('root'));
