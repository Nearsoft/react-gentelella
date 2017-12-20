import React, { Component } from 'react'

class Content extends Component {
  render () {
    const { shared, children } = this.props
    const { collapsed } = shared.getState()
    const style = collapsed ? {display: 'none'} : null

    return (
      <div className="x_content" style={style}>
        { children }
      </div>
    )
  }
}

export default Content