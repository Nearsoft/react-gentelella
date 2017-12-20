import React, { Component } from 'react'
import { Row, Col, Clearfix } from 'react-bootstrap'
import { XPanel, PageTitle } from '../../components'

class MediaGallery extends Component {
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
        <PageTitle showSearch title="Media Gallery" smallTitle="gallery design" onSearch={ text => console.log(text) }/>
        <Clearfix/>
        <Row>
          <Col md={ 12 } sm={ 12 } xs={ 12 }>
            <XPanel visible={ panelVisible } onHide={ onHide }>
              <XPanel.Title title="Media Gallery" smallTitle="gallery design">
                <XPanel.MenuItem>Settings 1</XPanel.MenuItem>
                <XPanel.MenuItem>Settings 2</XPanel.MenuItem>
              </XPanel.Title>
              <XPanel.Content>
                <Row>
                  <p>Media gallery design emelents</p>
                  <Thumbnail/>
                  <Thumbnail/>
                  <Thumbnail/>
                  <Thumbnail/>
                  <Thumbnail/>
                  <Thumbnail/>
                  <Thumbnail/>
                  <Thumbnail/>
                  <Thumbnail/>
                  <Thumbnail/>
                </Row>
              </XPanel.Content>
            </XPanel>
          </Col>
        </Row>
      </div>
    )
  }
}

const style = { width: '100%', display: 'block' }

function Thumbnail() {
  return (
    <div className="col-md-55">
      <div className="thumbnail">
        <div className="image view view-first">
          <img style={ style } src="/images/media.jpg" alt="this is a thumbnail"/>
          <div className="mask">
            <p>Your Text</p>
            <div className="tools tools-bottom">
              <a href="#!"><i className="fa fa-link"></i></a>
              <a href="#!"><i className="fa fa-pencil"></i></a>
              <a href="#!"><i className="fa fa-times"></i></a>
            </div>
          </div>
        </div>
        <div className="caption">
          <p>Snow and Ice Incoming for the South</p>
        </div>
      </div>
    </div>
  )
}

export default MediaGallery
