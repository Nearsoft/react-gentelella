import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Dropdown } from 'react-bootstrap'

const propTypes = {
  collapsible: PropTypes.bool,
  closeButton: PropTypes.bool,
}

const defaultProps = {
  collapsible: true,
  closeButton: true,
}

class Title extends Component {
  constructor(props) {
    super(props)

    this.onCollapseClick = this.onCollapseClick.bind(this)
  }

  onCollapseClick(e) {
    const { shared } = this.props
    const { collapsed } = shared.getState()

    e.preventDefault()
    shared.setState({collapsed: !collapsed})
  }

  render () {
    const { title, smallTitle } = this.props;

    return (
        <div className="x_title">
          <h2>{title} {smallTitle ? (<small>{smallTitle}</small>) :null}</h2>
          <ul className="nav navbar-right panel_toolbox">
            <CollapseLink {...this.props} onCollapseClick={this.onCollapseClick} />
            <Settings {...this.props} />
            <CloseButton {...this.props}/>
          </ul>
          <div className="clearfix"></div>
        </div>
    )
  }
}

function CollapseLink({collapsible, shared, onCollapseClick}) {
  if (!collapsible) {
    return null
  }

  const { collapsed } = shared.getState()

  return (
    <li>
        <a className="collapse-link" onClick={onCollapseClick}>
          <i className={cn('fa', collapsed ? 'fa-chevron-down' : 'fa-chevron-up')}></i>
        </a>
    </li>
  )
}

function Settings({children}) {
  if (!children) {
    return null
  }

  return (
    <li>
      <Dropdown id="grid-menu-dropdown">
        <Dropdown.Toggle bsStyle="link"/>
        <Dropdown.Menu>
          {children}
        </Dropdown.Menu>
      </Dropdown>
    </li>
  )
}

function CloseButton({shared, closeButton}) {
  if (!closeButton) {
    return null;
  }

  return (
    <li>
      <a onClick={shared.onHide} className="close-link">
        <i className="fa fa-close"></i>
      </a>
    </li>)
}

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title