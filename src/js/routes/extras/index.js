import React from 'react'
import { Route } from 'react-router'
import PricingTables from './PricingTables'
import Typography from './Typography'
import Glyphicons from './Glyphicons'
import Icons from './Icons'
import MediaGallery from './MediaGallery'
import ExtrasMenu from './Menu'

export default [
  <Route key="pricing-tables" path="/extras/pricing-tables" component={PricingTables} />,
  <Route key="typography" path="/extras/typograpy" component={Typography} />,
  <Route key="glyphicons" path="/extras/glyphicons" component={Glyphicons} />,
  <Route key="icons" path="/extras/icons" component={Icons} />,
  <Route key="media-gallery" path="/extras/media-gallery" component={MediaGallery} />,
]
export { ExtrasMenu }