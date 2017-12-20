import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import XPanel from '../../components/XPanel'

class PricingTables extends Component {
  constructor(props) {
    super(props)
    this.state = {
      panelVisible: true
    }
  }

  render() {
    const { panelVisible } = this.state
    const onHide = e => this.setState({ panelVisible: !panelVisible })

    return (
      <div>
        <Row>
          <Col md={ 12 } sm={ 12 } xs={ 12 }>
            <XPanel visible={ panelVisible } onHide={ onHide }>
              <XPanel.Title title="Pricing Tables Design">
                <XPanel.MenuItem>Settings 1</XPanel.MenuItem>
                <XPanel.MenuItem>Settings 2</XPanel.MenuItem>
              </XPanel.Title>
              <XPanel.Content>
                <PriceElementFree/>
                <PriceElementMonthly/>
                <PriceElementHalfYearly/>
                <PriceElementHalfYearly/>
              </XPanel.Content>
            </XPanel>
          </Col>
        </Row>
      </div>
    )
  }
}


function PriceElementFree() {
  return (
    <Col md={ 3 } sm={ 6 } xs={ 12 }>
      <div className="pricing">
        <div className="title">
          <h2>Tally Box Design</h2>
          <h1>free</h1>
        </div>
        <div className="x_content">
          <div className="">
            <div className="pricing_features">
              <ul className="list-unstyled text-left">
                <li><i className="fa fa-times text-danger"></i> 2 years access <strong> to all storage
                  locations</strong></li>
                <li><i className="fa fa-times text-danger"></i> <strong>Unlimited</strong> storage</li>
                <li><i className="fa fa-check text-success"></i> Limited <strong> download quota</strong></li>
                <li><i className="fa fa-check text-success"></i> <strong>Cash on Delivery</strong></li>
                <li><i className="fa fa-check text-success"></i> All time <strong> updates</strong></li>
                <li><i className="fa fa-times text-danger"></i> <strong>Unlimited</strong> access to all files</li>
                <li><i className="fa fa-times text-danger"></i> <strong>Allowed</strong> to be exclusing per sale</li>
              </ul>
            </div>
          </div>
          <div className="pricing_footer">
            <a href="#!" className="btn btn-success btn-block"
               role="button">Download <span> now!</span></a>
            <p>
              <a href="#!">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </Col>
  )
}

function PriceElementMonthly() {
  return (
    <Col md={ 3 } sm={ 6 } xs={ 12 }>
      <div className="pricing ui-ribbon-container">
        <div className="ui-ribbon-wrapper">
          <div className="ui-ribbon">
            30% Off
          </div>
        </div>
        <div className="title">
          <h2>Tally Box Design</h2>
          <h1>$25</h1>
          <span>Monthly</span>
        </div>
        <div className="x_content">
          <div className="">
            <div className="pricing_features">
              <ul className="list-unstyled text-left">
                <li><i className="fa fa-check text-success"></i> 2 years access <strong> to all storage
                  locations</strong></li>
                <li><i className="fa fa-check text-success"></i> <strong>Unlimited</strong> storage</li>
                <li><i className="fa fa-check text-success"></i> Limited <strong> download quota</strong></li>
                <li><i className="fa fa-check text-success"></i> <strong>Cash on Delivery</strong></li>
                <li><i className="fa fa-check text-success"></i> All time <strong> updates</strong></li>
                <li><i className="fa fa-times text-danger"></i> <strong>Unlimited</strong> access to all files</li>
                <li><i className="fa fa-times text-danger"></i> <strong>Allowed</strong> to be exclusing per sale</li>
              </ul>
            </div>
          </div>
          <div className="pricing_footer">
            <a href="#!" className="btn btn-primary btn-block"
               role="button">Download <span> now!</span></a>
            <p>
              <a href="#!">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </Col>
  )
}

function PriceElementHalfYearly() {
  return (
    <Col md={ 3 } sm={ 6 } xs={ 12 }>
      <div className="pricing">
        <div className="title">
          <h2>Tally Box Design</h2>
          <h1>$25</h1>
          <span>Monthly</span>
        </div>
        <div className="x_content">
          <div className="">
            <div className="pricing_features">
              <ul className="list-unstyled text-left">
                <li><i className="fa fa-check text-success"></i> 2 years access <strong> to all storage
                  locations</strong></li>
                <li><i className="fa fa-check text-success"></i> <strong>Unlimited</strong> storage</li>
                <li><i className="fa fa-check text-success"></i> Limited <strong> download quota</strong></li>
                <li><i className="fa fa-check text-success"></i> <strong>Cash on Delivery</strong></li>
                <li><i className="fa fa-check text-success"></i> All time <strong> updates</strong></li>
                <li><i className="fa fa-times text-danger"></i> <strong>Unlimited</strong> access to all files</li>
                <li><i className="fa fa-times text-danger"></i> <strong>Allowed</strong> to be exclusing per sale</li>
              </ul>
            </div>
          </div>
          <div className="pricing_footer">
            <a href="#!" className="btn btn-success btn-block"
               role="button">Download <span> now!</span></a>
            <p>
              <a href="#!">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </Col>
  )
}


export default PricingTables
