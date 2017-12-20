import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const propTypes = {
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  value: PropTypes.number
}

const defaultProps = {
  minValue: 0,
  maxValue: 100,
  value: 50,
  style: {}
}

class ProgressBar extends Component {
  render () {
    const { value, minValue, maxValue, className, style } = this.props
    const range = (maxValue - minValue)
    const complete = Math.floor(((value - minValue) / range) * 100)
    const barStyle={width: `${complete}%`}

    return (
      <div className={cn('progress', className)} style={style}>
        <div className="progress-bar bg-green" role="progressbar" aria-valuenow={complete} aria-valuemin={minValue} aria-valuemax={maxValue} style={barStyle}>
          <span className="sr-only">{complete}% Complete</span>
        </div>
      </div>
    )
  }
}

ProgressBar.propTypes = propTypes
ProgressBar.defaultProps = defaultProps

export default ProgressBar