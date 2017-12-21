import React from 'react';
import ReactDOM from 'react-dom';
import './css/custom.css';
// import registerServiceWorker from './registerServiceWorker';

import { Left, Top, Footer } from './js/navigation';
import history from './js/history';
import { Router } from 'react-router';
import PageContent, { Menu } from './js/routes';

import AppFactory from './js/App';
const App = AppFactory(React, Router, history, Left, Top, Footer, PageContent, Menu);

ReactDOM.render(<App/>, document.getElementById('root'));
// registerServiceWorker();
