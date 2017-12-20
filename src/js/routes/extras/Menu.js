import React from 'react'
import { GroupMenuItem, MenuItem } from '../../components/SideBar'

const Menu = (
  <GroupMenuItem title="Extras" icon="windows" to="/extras">
    <MenuItem title="Pricing Tables" to="/extras/pricing-tables" />
    <MenuItem title="Typography" to="/extras/typograpy" />
    <MenuItem title="Glyphicons" to="/extras/glyphicons" />
    <MenuItem title="Icons" to="/extras/icons" />
    <MenuItem title="Media Gallery" to="/extras/media-gallery" />
  </GroupMenuItem>
)

export default Menu