import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { matchPath } from 'react-router'
import cn from 'classnames'
import childrenWithProps from '../childrenWithProps'

const isActive = ({ location }) => (linkTo) => matchPath(location.pathname, {path: linkTo, exact: false, strict: false})

class MenuSection extends Component {
  render () {
    const { title, children, shared } = this.props
    const { activeSection } = shared.getState()
    const active = activeSection === this
    const toggle = (group) => shared.toggle(this, group)

    return (
      <div className={cn('menu_section', { active: true })}>
        <h3>{title}</h3>
        <Route render={rcp => (
          <ul className="nav side-menu">
            { 
              childrenWithProps(children, { 
                toggle,
                shared,
                isActive: isActive(rcp), 
                isActiveSection: active 
              })
            }
          </ul>
        )} />
      </div>
    )
  }
}

export default MenuSection