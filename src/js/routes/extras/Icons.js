import React, { Component } from 'react'
import { Row, Col, Clearfix } from 'react-bootstrap'
import { XPanel, PageTitle } from '../../components'
import iconsData from './icons-data.json'

class Icons extends Component {
  constructor (props) {
    super(props)
    this.state = {
      panelVisible: true,
      search: ''
    }
  }
  
  render () {
    const { panelVisible } = this.state
    const onHide = e => this.setState({panelVisible: !panelVisible})
    const onSearch = search => this.setState({ search })
    const { search } = this.state

    return (
      <div>
        <PageTitle showSearch title="Font Awesome Icons" smallTitle="try the search, it works!" onSearch={onSearch}/>
        <Clearfix />
        <Row>
          <Col md={12} sm={12} xs={12}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Title title="Font Awesome Icons" smallTitle="different icon design elements">
                  <XPanel.MenuItem>Settings 1</XPanel.MenuItem>
                  <XPanel.MenuItem>Settings 2</XPanel.MenuItem>
              </XPanel.Title>
              <XPanel.Content>
                <IconsSection groupId="web-application" search={search} />
                <IconsSection groupId="file-type" search={search} />
                <IconsSection groupId="spinner" className="fa-spin" search={search}>
                  <div className="alert alert-success">
                    <ul className="fa-ul">
                      <li>
                        <i className="fa fa-info-circle fa-lg fa-li"></i> These icons work great with the <code>fa-spin</code> class. Check out the 
                        {' '}<a href="../examples/#spinning" className="alert-link">spinning icons example</a>.
                      </li>
                    </ul>
                  </div>                  
                </IconsSection>
                <IconsSection groupId="form-control" search={search} />
                <IconsSection groupId="payment" search={search} />
                <IconsSection groupId="chart" search={search} />
                <IconsSection groupId="currency" search={search} />
                <IconsSection groupId="text-editor" search={search} />
                <IconsSection groupId="directional" search={search} />
                <IconsSection groupId="video-player" search={search} />
                <IconsSection groupId="brand" search={search}>
                  <div className="alert alert-success">
                    <ul className="margin-bottom-none padding-left-lg">
                      <li>All brand icons are trademarks of their respective owners.</li>
                      <li>The use of these trademarks does not indicate endorsement of the trademark holder by Font Awesome, nor vice versa.</li>
                    </ul>
                  </div>
                  <div className="alert alert-warning">
                    <h4><i className="fa fa-warning"></i> Warning!</h4> Apparently, Adblock Plus can remove Font Awesome brand icons with their "Remove Social Media Buttons" setting. We will not use hacks to force them to display. Please
                    {' '}<a href="https://adblockplus.org/en/bugs" className="alert-link">report an issue with Adblock Plus</a> if you believe this to be an error. To work around this, you'll need to modify the social icon class names.
                  </div>
                </IconsSection>
                <IconsSection groupId="medical" search={search} />
              </XPanel.Content>
            </XPanel>
          </Col>
        </Row>
      </div>
    )
  }
}

function IconsSection({groupId, children, search='', className=''}) {
  const { header, icons } = iconsData[groupId]

  return (
    <section id={groupId}>
      <h2 className="page-header">{header}</h2>
      { children }
      <Row className="fontawesome-icon-list">
      {
        icons.map(icon => {
          const isAlias = !!icon.alias
          const code = isAlias ? icon.alias : icon

          if (search && code.indexOf(search) === -1) {
            return null
          }

          return (
            <Col key={code} md={3} sm={4} xs={12} className="fa-hover">
              <a href={`#/${code}`}>
                <i className={`fa ${className} fa-${code}`}></i>
                {`fa-${code}`}
                { isAlias ? <span className="text-muted"> (alias)</span> : null }
              </a>
            </Col>
          )
        })
      }
      </Row>    
    </section>
  )
}

export default Icons