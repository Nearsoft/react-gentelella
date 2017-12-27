/* global it */

import React from 'react';
import ReactDOM from 'react-dom';
import FormButtonsFactory from './FormButtons';
import { EmptyComponent, XPanelMock } from '../../../testUtils';

const FormButtons = FormButtonsFactory(React, EmptyComponent, EmptyComponent, XPanelMock, EmptyComponent);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormButtons/>, div);
});
