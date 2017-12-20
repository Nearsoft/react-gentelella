import React from 'react'
import PageContent from './PageContent'
import SideBar from '../components/SideBar'
import { HomeMenu } from './home'
import { ExtrasMenu } from './extras'

export const Menu = (
  <SideBar>
    <SideBar.MenuSection title="General">
    { HomeMenu }
    { ExtrasMenu }
    </SideBar.MenuSection>
  </SideBar>
)

export default PageContent
