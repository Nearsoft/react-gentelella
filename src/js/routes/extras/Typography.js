import React, { Component } from 'react'
import { Row, Col, Clearfix } from 'react-bootstrap'
import { XPanel, PageTitle } from '../../components'

class Typography extends Component {
  constructor (props) {
    super(props)
    this.state = {
      panelVisible: true
    }
  }
  
  render () {
    const { panelVisible } = this.state
    const onHide = e => this.setState({panelVisible: !panelVisible})

    return (
      <div>
        <PageTitle title="Typography" showSearch />
        <Clearfix />
        <Row>
          <Col md={12} sm={12} xs={12}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Title title="Typography" smallTitle="different design elements">
                  <XPanel.MenuItem>Settings 1</XPanel.MenuItem>
                  <XPanel.MenuItem>Settings 2</XPanel.MenuItem>
              </XPanel.Title>
              <XPanel.Content>
                <Quotes />
                <Headings />
                <Clearfix />
                <LabelsAndBadges />
              </XPanel.Content>
            </XPanel>
          </Col>
        </Row>
      </div>
    )
  }
}

function Quotes () {
  return (
    <Col md={8} lg={8} sm={7}>
      <BlockQuote />
      <BlockQuoteReverse />
    </Col>
  )
}

function BlockQuote () {
  return (
      <blockquote>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer>Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
  )
}

function BlockQuoteReverse () {
  return (
    <blockquote className="blockquote-reverse">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        posuere erat a ante Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  )
}

function Headings () {
  return (
    <Col md={4} lg={4} sm={5}>
      <h1>h1. Bootstrap heading</h1>
      <h2>h2. Bootstrap heading</h2>
      <h3>h3. Bootstrap heading</h3>
      <h4>h4. Bootstrap heading</h4>
      <h5>h5. Bootstrap heading</h5>
      <h6>h6. Bootstrap heading</h6>
    </Col>    
  )
}

function LabelsAndBadges () {
  return (
    <Col md={12}>
      <h4>Labels and badges</h4>
      <span className="label label-default">Default</span>
      <span className="label label-primary">Primary</span>
      <span className="label label-success">Success</span>
      <span className="label label-info">Info</span>
      <span className="label label-warning">Warning</span>
      <span className="label label-danger">Danger</span>
      <span className="badge bg-green">42</span>
    </Col>    
  )
}

export default Typography