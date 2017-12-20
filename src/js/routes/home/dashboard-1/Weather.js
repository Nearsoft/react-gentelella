import React, { Component } from 'react'
import XPanel from '../../../components/XPanel'
import { WeatherPanel, WEATHER_ICONS } from '../../../components/widgets'

const wday = (day, degrees, wind, icon) => ({day, degrees, wind, icon})

const week = [
  wday('Mon', 25, 14, WEATHER_ICONS.RAIN),
  wday('Tue', 25, 12, WEATHER_ICONS.CLOUDY),
  wday('Wed', 27, 14, WEATHER_ICONS.WIND),
  wday('Thu', 28, 15, WEATHER_ICONS.SNOW),
  wday('Fri', 28, 11, WEATHER_ICONS.PARTLY_CLOUDY_DAY),
  wday('Sat', 26, 10, WEATHER_ICONS.CLEAR_DAY),  
]

const today = {
  day: 'Monday',
  time: '07:30 AM',
  icon: WEATHER_ICONS.PARTLY_CLOUDY_DAY,
  place: 'Texas',
  iconDescription: 'Partly Cloudy Day'
}

class Weather extends Component {
  constructor (props) {
    super(props)
    this.state = {
      panelVisible: true
    }
  }
  
  render () {
    const { panelVisible } = this.state
    const onHide = e => this.setState({panelVisible: !panelVisible})
    
    return (
      <XPanel visible={panelVisible} onHide={onHide}>
        <XPanel.Title title="Weather" />
        <XPanel.Content>
          <WeatherPanel today={today} week={week} />
        </XPanel.Content>
      </XPanel>
    )
  }
}

export default Weather