/* global it */

import React from 'react';
import ReactDOM from 'react-dom';
import GeneralFormFactory from './GeneralForm';
import { EmptyComponent, XPanelMock } from '../../../testUtils';

const GeneralForm = GeneralFormFactory(React, EmptyComponent, EmptyComponent, XPanelMock, EmptyComponent, EmptyComponent);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GeneralForm/>, div);
});
