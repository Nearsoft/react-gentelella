import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import Skycon from './Skycon'

class WeatherDay extends Component {
  render () {
    const { day, degrees, wind } = this.props
    return (
      <Col sm={2}>
        <div className="daily-weather">
          <h2 className="day">{day}</h2>
          <h3 className="degrees">{degrees}</h3>
          <Skycon width={32} height={32} {...this.props} />
          <h5>{wind} <i>km/h</i></h5>
        </div>
      </Col>
    )
  }
}

export default WeatherDay