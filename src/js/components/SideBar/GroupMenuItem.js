import React, { Component } from 'react'
import cn from 'classnames'
import childrenWithProps from '../childrenWithProps'

class GroupMenuItem extends Component {
  render () {
    const { icon, title, shared, children, to, isActive, isActiveSection, toggle } = this.props
    const { activeGroup } = shared.getState()
    const active = activeGroup === this

    return (
      <li className={cn({active})}><a onClick={ () => toggle(this) }><i className={`fa fa-${icon}`}></i> {title} <span className="fa fa-chevron-down"></span></a>
        <ul className="nav child_menu" style={{display: active ? 'block': 'none'}}>
          { childrenWithProps(children, { isActive }) }
        </ul>
      </li>      
    )
  }
}

export default GroupMenuItem