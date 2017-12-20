import React, { Component } from 'react'
import { TopTileStats } from '../../../components/widgets'

const stats = [
  {
    title: {icon: 'user', label: 'Total Users'},
    value: {label: '2500'},
    bottom: {stat: '4%', label: 'From Last Week'}
  },
  {
    title: {icon: 'clock-o', label: 'Average Time'},
    value: {label: '123.50'},
    bottom: {stat: '3%', label: 'From Last Week'}
  },
  {
    title: {icon: 'user', label: 'Total Males'},
    value: {className: 'green', label: '2,500'},
    bottom: {stat: '4%', label: 'From Last Week'}
  },
  {
    title: {icon: 'user', label: 'Total Females'},
    value: {label: '4,567'},
    bottom: {className: 'red', stat: '12%', label: 'From Last Week'}
  },
  {
    title: {icon: 'user', label: 'Total Collections'},
    value: {label: '2,315'},
    bottom: {stat: '34%', label: 'From Last Week'}
  },
  {
    title: {icon: 'user', label: 'Total Connections'},
    value: {label: '7,325'},
    bottom: {stat: '34%', label: 'From Last Week'}
  },
]

class TopTile extends Component {
  render () {
    return (
      <TopTileStats stats={stats} />
    )
  }
}

export default TopTile