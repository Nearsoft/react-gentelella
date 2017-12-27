import React from 'react';
import { Route } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import { XPanel, PageTitle } from '../../components';
import { GroupMenuItem, MenuItem } from '../../components/SideBar';
import FormButtonsFactory from './FormButtons';
import GeneralFormFactory from './GeneralForm';
import FormsMenuFactory from './FormsMenu';

const FormButtons = FormButtonsFactory(React, Row, Col, XPanel, PageTitle);
const GeneralForm = GeneralFormFactory(React, Row, Col, XPanel, PageTitle);
const FormsMenu = FormsMenuFactory(React, GroupMenuItem, MenuItem);

export default [
  <Route key="general-form" path="/forms/general-form" component={ GeneralForm }/>,
  <Route key="form-buttons" path="/forms/form-buttons" component={ FormButtons }/>
]

export { FormsMenu }
