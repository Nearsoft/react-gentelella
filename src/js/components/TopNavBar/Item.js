import React, { Component } from 'react'
import cn from 'classnames'
import childrenWithProps from '../childrenWithProps'

class Item extends Component {
  render() {
    const { shared, className, children } = this.props
    const { opened } = shared.getState()
    const open = opened === this.element
    const toggleMenu = (e) => shared.toggle(this.element, e)

    return (
      <li role="presentation" ref={ li => this.element = li } className={ cn(className, { open }) }>
        { childrenWithProps(children, { opened, toggleMenu }) }
      </li>
    )
  }
}

function Content({ children, className, open, toggleMenu }) {
  return (
    <a href="#!" className={ cn('dropdown-toggle', className) } aria-expanded={ open } onClick={ toggleMenu }>
      { children }
    </a>
  )
}

function SubMenu({ children, className }) {
  return (
    <ul className={ cn('dropdown-menu', className) } role="menu">
      { children }
    </ul>
  )
}

Item.Content = Content
Item.SubMenu = SubMenu

export default Item
