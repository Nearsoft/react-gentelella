import React, { Component } from 'react'
import { Row, Col, Clearfix } from 'react-bootstrap'
import { ProgressBar } from '../../../components/widgets'

const performance = [
  {title: 'Facebook Campaing', value: 80},
  {title: 'Twiter Campaing', value: 60},
  {title: 'Conventional Media', value: 40},
  {title: 'Bill boards', value: 50},
]

class NetworkActivities extends Component {  
  render () {
    return (
      <div className="dashboard_graph">
        <Title />

        <div className="col-md-9 col-sm-9 col-xs-12">
          <div id="chart_plot_01" className="demo-placeholder"></div>
        </div>

        <TopCampaings performance={performance} />

        <Clearfix />
      </div>
    )
  }
}

function Title () {
  return (
    <Row className="x_title">
      <Col md={6}>
        <h3>Network Activities <small>Graph title sub-title</small></h3>
      </Col>
      <Col md={6}>
        <div id="reportrange" className="pull-right" style={{background: '#fff', cursor: 'pointer', padding: '5px 10px', border: '1px solid #ccc'}}>
          <i className="glyphicon glyphicon-calendar fa fa-calendar"></i>
          <span>December 30, 2014 - January 28, 2015</span> <b className="caret"></b>
        </div>
      </Col>
    </Row>    
  )
}

function TopCampaings ({performance}) {
  return (
    <Col md={3} sm={3} xs={12} className="bg-white">
      <div className="x_title">
        <h2>Top Campaign Performance</h2>
        <Clearfix />
      </div>
      {
        performance.map((p, index) => (<Campaing key={index.toString()} {...p} />))
      }
    </Col>
  )
}

function Campaing ({title, value}) {
  return (
    <div>
      <p>{title}</p>
      <div className="">
        <ProgressBar value={value} className="progress_sm" style={{width: '76%'}} />
      </div>
    </div>    
  )
}

export default NetworkActivities