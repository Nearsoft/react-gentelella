// Top Navigation
import React, { Component } from 'react'
import TopNavBar from '../components/TopNavBar'
import UserMenuItem from './UserMenuItem'
import NotificationsMenuItem from './NotificationsMenuItem'

class Top extends Component {
  render () {
    return (
      <div className="top_nav">
        <div className="nav_menu">
          <nav>
            <div className="nav toggle">
              <a id="menu_toggle"><i className="fa fa-bars"></i></a>
            </div>
            <TopNavBar>
              <UserMenuItem />
              <NotificationsMenuItem />
            </TopNavBar>
          </nav>
        </div>
      </div>
    )
  }
}

export default Top