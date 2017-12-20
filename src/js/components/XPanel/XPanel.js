import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames';
import SharedState from  '../SharedState'
import Title from './Title'
import Content from './Content'
import { MenuItem } from 'react-bootstrap'

const propTypes = {
  visible: PropTypes.bool,
  onHide: PropTypes.func
}

const defaultProps = {
  visible: true,
  onHide: () => {}
}

class XPanel extends Component {
  constructor(props) {
    super(props)
    this.shared = SharedState(this, {
      onHide: props.onHide
    })
    this.state = {
      collapsed: false
    }
  }

  render () {
    const { children, className } = this.props
    const childrenProps = {shared: this.shared}
    const childrenWithProps = React.Children.map(children, c => React.cloneElement(c, childrenProps))
    const collapsedStyle = this.state.collapsed ? {height: 'auto'} : {}
    const visibleStyle = this.props.visible ? {} : {display: 'none'}
    const style = {...collapsedStyle, ...visibleStyle}

    return (
      <div className={cn('x_panel', className, {tile: true})} style={style}>
        {childrenWithProps}
      </div>
    )
  }
}

XPanel.propTypes = propTypes
XPanel.defaultProps = defaultProps
XPanel.Title = Title
XPanel.Content = Content
XPanel.MenuItem = MenuItem

export default XPanel