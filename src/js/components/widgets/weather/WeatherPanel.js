/* global Skycons */
import React, { Component } from 'react'
import { Row, Col, Clearfix } from 'react-bootstrap'
import Skycon from './Skycon'
import WeatherWeek from './WeatherWeek'

export const WEATHER_ICONS = {
  'CLEAR_DAY': Skycons.CLEAR_DAY,
  'CLEAR_NIGHT': Skycons.CLEAR_NIGHT,
  'PARTLY_CLOUDY_DAY': Skycons.PARTLY_CLOUDY_DAY,
  'PARTLY_CLOUDY_NIGHT': Skycons.PARTLY_CLOUDY_NIGHT,
  'CLOUDY': Skycons.CLOUDY,
  'RAIN': Skycons.RAIN,
  'SLEET': Skycons.SLEET,
  'SNOW': Skycons.SNOW,
  'WIND': Skycons.WIND,
  'FOG': Skycons.FOG
}

class WeatherPanel extends Component {
  constructor(props) {
    super(props)
    this.skycons = new Skycons({})
  }

  componentDidMount () {
    this.skycons.play()
  }

  render () {
    const { today, week } = this.props

    return (
      <div>
          <Row>
            <Col sm={12}>
              <div className="temperature"><b>{today.day}</b>, {today.time}
                <span>F</span>
                <span><b>C</b></span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <div className="weather-icon">
                <Skycon height={84} width={84} icon={today.icon} skycons={this.skycons} />
              </div>
            </Col>
            <Col sm={8}>
              <div className="weather-text">
                <h2>{today.place} <br/><i>{today.iconDescription}</i></h2>
              </div>
            </Col>
          </Row>
          <Col sm={12}>
            <div className="weather-text pull-right">
              <h3 className="degrees">23</h3>
            </div>
          </Col>
          <Clearfix />
          <WeatherWeek week={week} skycons={this.skycons}/>
      </div>
    )
  }
}

export default WeatherPanel