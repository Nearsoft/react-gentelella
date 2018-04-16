import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import { XPanel, PageTitle } from '../../components';
import { GroupMenuItem, MenuItem } from '../../components/SideBar';
import FormButtonsFactory from './FormButtons';
import GeneralFormFactory from './GeneralForm';
import FormsMenuFactory from './FormsMenu';

/* Form Elements */
import { XFormGroupFactory, XInputFactory } from '../../components/XFormGroup';
const XInput = XInputFactory(React, PropTypes, Col);
const XFormGroup = XFormGroupFactory(React, PropTypes, XInput);

const FormButtons = FormButtonsFactory(React, Row, Col, XPanel, PageTitle);
const GeneralForm = GeneralFormFactory(React, Row, Col, XPanel, PageTitle, XFormGroup);
const FormsMenu = FormsMenuFactory(React, GroupMenuItem, MenuItem);

export default [
  <Route key="general-form" path="/forms/general-form" component={ GeneralForm }/>,
  <Route key="form-buttons" path="/forms/form-buttons" component={ FormButtons }/>
]

export { FormsMenu }
