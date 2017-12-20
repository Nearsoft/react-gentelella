import React, { Component } from 'react'
import XPanel from '../../../components/XPanel'
import { Summary, Col as SCol, ProgressBar } from '../../../components/widgets'
import { Col } from 'react-bootstrap'

class AppVersions extends Component {
  constructor (props) {
    super(props)
    this.state = {
      appVersionsVisible: true
    }
  }
  
  render () {
    const { appVersionsVisible } = this.state
    const onHide = e => this.setState({appVersionsVisible: !appVersionsVisible})

    return (
        <XPanel visible={appVersionsVisible} className="fixed_height_320" onHide={onHide}>
          <XPanel.Title title="App Versions">
              <XPanel.MenuItem onClick={e => console.log('settings 1') }>Settings 1</XPanel.MenuItem>
              <XPanel.MenuItem>Settings 2</XPanel.MenuItem>
          </XPanel.Title>
          <XPanel.Content>
            <h4>App Usage across versions</h4>
            <Stat version="0.1.5.2"  complete={60} kbytes="123k"/>
            <Stat version="0.1.5.3"  complete={45} kbytes="53k"/>
            <Stat version="0.1.5.4"  complete={25} kbytes="23k"/>
            <Stat version="0.1.5.5"  complete={5} kbytes="3k"/>
            <Stat version="0.1.5.6"  complete={2} kbytes="1k"/>
          </XPanel.Content>
        </XPanel>
    )
  }
}

function Stat({version, complete, kbytes}) {
  return (
    <Summary>
      <SCol>
        <span>{version}</span>
      </SCol>
      <SCol center w55>
        <ProgressBar value={complete} />
      </SCol>
      <SCol right w20>
        <span>{kbytes}</span>
      </SCol>
    </Summary>    
  )
}

export default AppVersions