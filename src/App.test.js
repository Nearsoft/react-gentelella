/* global it */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import AppFactory from './js/App';
import history from './js/history';
import { EmptyComponent } from './testUtils';

const App = AppFactory(React, Router, history, EmptyComponent, EmptyComponent, EmptyComponent, EmptyComponent, EmptyComponent);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
});
