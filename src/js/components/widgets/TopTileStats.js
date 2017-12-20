import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import cn from 'classnames'

class TopTileStats extends Component {
  render () {
    const {stats} = this.props

    return (
      <Row className="tile_count">
        {
          stats.map((s, index) => (
            <Stat key={index.toString()} {...s} />
          ))
        }
      </Row>
    )
  }
}

function Stat ({title, value, bottom}) {
  return (
    <Col md={2} sm={4} xs={6} className="tile_stats_count">
      <span className="count_top"><i className={`fa fa-${title.icon || 'user'}`}></i> {title.label}</span>
      <div className={cn('count', value.className)}>{value.label}</div>
      <span className="count_bottom"><i className={bottom.className || 'green'}>{bottom.stat} </i> {bottom.label}</span>
    </Col>
  )
}

export default TopTileStats