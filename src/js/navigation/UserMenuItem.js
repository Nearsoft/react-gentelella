import React, { Component } from 'react'
import { Item } from '../components/TopNavBar'

class UserMenuItem extends Component {
  render () {
    return (
      <Item {...this.props}>
        <Item.Content className="user-profile">
          <img src="images/img.jpg" alt=""/>John Doe
          <span className=" fa fa-angle-down"></span>
        </Item.Content>
        <Item.SubMenu className="dropdown-usermenu pull-right">
          <li><a href="javascript:;"> Profile</a></li>
          <li>
            <a href="javascript:;">
              <span className="badge bg-red pull-right">50%</span>
              <span>Settings</span>
            </a>
          </li>
          <li><a href="javascript:;">Help</a></li>
          <li><a href="login.html"><i className="fa fa-sign-out pull-right"></i> Log Out</a></li>
        </Item.SubMenu>
      </Item>
    )
  }
}

export default UserMenuItem