import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Clearfix } from 'react-bootstrap'
import WeatherDay from './WeatherDay'

const propTypes = {
  icon: PropTypes.func
}

class WeatherWeek extends Component {
  
  render () {
    const { week, skycons } = this.props

    return (
        <Row className="weather-days">
          { 
            week.map((day, index) => (
              <WeatherDay key={index.toString()} {...day} skycons={skycons} />
            ))
          }
          <Clearfix />
        </Row>
    )
  }
}

WeatherWeek.propTypes = propTypes

export default WeatherWeek