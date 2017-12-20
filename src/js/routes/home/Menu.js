import React from 'react'
import { GroupMenuItem, MenuItem } from '../../components/SideBar'

const Menu = (
  <GroupMenuItem title="Home" icon="home" to="/home">
    <MenuItem title="Dashboard 1" to="/home/dashboard-1" />
  </GroupMenuItem>
)

export default Menu