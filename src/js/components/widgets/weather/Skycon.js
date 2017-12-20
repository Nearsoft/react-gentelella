import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}

const defaultProps = {
  width: 32,
  height: 32
}

class Skycon extends Component {
  componentDidMount () {
    this.props.skycons.add(this.canvas, this.props.icon)
  }

  componentWillUnmount () {
    this.props.skycons.remove(this.canvas)
  }

  render () {
    const { width, height } = this.props

    return (
      <canvas ref={c => this.canvas = c}  width={width} height={height}></canvas>
    )
  }
}

Skycon.propTypes = propTypes
Skycon.defaultProps = defaultProps

export default Skycon