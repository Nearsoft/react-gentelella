import React, { Component } from 'react'
// import { matchPath } from 'react-router'
import SharedState from '../../components/SharedState'
import MenuSection from './MenuSection'
import GroupMenuItem from './GroupMenuItem'
import MenuItem from './MenuItem'

const childrenWithProps = (children, props) => React.Children.map(children, c => React.cloneElement(c, props))

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.shared = SharedState(this, {
      toggle: (section, group) => {
        const activeGroup = group === this.activeGroup ? null : group
        const activeSection = group ? section : null
        this.setState({ activeGroup, activeSection })
      }
    })
    this.state = {
      activeSection: null,
      activeGroup: null
    }
  }

  render() {
    const { children } = this.props

    return (
      <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
        { childrenWithProps(children, { shared: this.shared }) }
      </div>
    )
  }
}

SideBar.MenuSection = MenuSection
SideBar.GroupMenuItem = GroupMenuItem
SideBar.MenuItem = MenuItem

export default SideBar
