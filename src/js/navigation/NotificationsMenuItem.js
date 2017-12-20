import React, { Component } from 'react'
import { Item } from '../components/TopNavBar'

const notification = (img, name, time, message) => ({ img, name, time, message })
const notifications = [
  notification('/images/img.jpg', 'John Smith', '3 mins ago', 'Film festivals used to be do-or-die moments for movie makers. They were where...'),
  notification('/images/img.jpg', 'Juan Lopez', '6 mins ago', 'Film festivals used to be do-or-die moments for movie makers. They were where...'),
  notification('/images/img.jpg', 'Pito Perez', '10 mins ago', 'Film festivals used to be do-or-die moments for movie makers. They were where...'),
  notification('/images/img.jpg', 'Juan Camaney', '1 hr ago', 'Film festivals used to be do-or-die moments for movie makers. They were where...'),
]

class NotificationsMenuItem extends Component {
  render() {
    return (
      <Item { ...this.props }>
        <Item.Content className="info-number">
          <i className="fa fa-envelope-o"></i>
          <span className="badge bg-green">6</span>
        </Item.Content>
        <Item.SubMenu className="list-unstyled msg_list">
          {
            notifications.map((notification, index) => <Notification key={ index.toString() } { ...notification } />)
          }
          <li>
            <div className="text-center">
              <a onClick={ e => console.log('all alerts') }>
                <strong>See All Alerts</strong>
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </li>
        </Item.SubMenu>
      </Item>
    )
  }
}

function Notification({ img, name, time, message }) {
  return (
    <li>
      <a>
        <span className="image"><img src={ img } alt="Profile Pic"/></span>
        <span>
          <span>{ name }</span>
          <span className="time">{ time }</span>
        </span>
        <span className="message">{ message }</span>
      </a>
    </li>
  )
}

export default NotificationsMenuItem
