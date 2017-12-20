import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

class Summary extends Component {
  render () {
    return (
      <div className="widget_summary">
        {this.props.children}
      </div>
    )
  }
}

export const ALIGN = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
}

const propTypes = {
  // align: PropTypes.string,
  // width: PropTypes.number,
  left: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
  w20: PropTypes.bool,
  w25: PropTypes.bool,
  w55: PropTypes.bool
}

const defaultProps = {
  // align: ALIGN.LEFT,
  // width: 50
}

export class Col extends Component {
  render () {
    const {left, center, right} = this.props
    const align = (left && ALIGN.left) || (center && ALIGN.CENTER) || (right && ALIGN.RIGHT) || ALIGN.LEFT
    const { w20, w25, w55 } = this.props
    const width = (w20 && 20) || (w25 && 25) || (w55 && 55) || 25
    const alignClass = `w_${align}`
    const widthClass = `w_${width}`

    return (
      <div className={cn(alignClass, widthClass)}>
        {this.props.children}
        <div className="clearfix" />
      </div>
    )
  }
}

Col.propTypes = propTypes
Col.defaultProps = defaultProps
Summary.Col = Col

export default Summary