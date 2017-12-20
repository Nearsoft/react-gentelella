import React, { Component } from 'react'
import XPanel from '../../../components/XPanel'
import { Col } from 'react-bootstrap'

class DeviceUsage extends Component {
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
      <XPanel visible={panelVisible} className="fixed_height_320" onHide={onHide}>
        <XPanel.Title title="Device Usage" />
        <XPanel.Content>
          <table className="" style={{width: '100%'}}>
            <tbody>
              <tr>
                <th style={{width: '37%'}}>
                  <p>Top 5</p>
                </th>
                <th>
                  <Col lg={7} md={7} sm={7} xs={7}>
                    <p className="">Device</p>
                  </Col>
                  <Col lg={5} md={5} sm={5} xs={5}>
                    <p className="">Progress</p>
                  </Col>
                </th>
              </tr>
              <tr>
                <td>
                  <canvas className="canvasDoughnut" height="140" width="140" style={{margin: '15px 10px 10px 0'}}></canvas>
                </td>
                <td>
                  <DataTable />
                </td>
              </tr>
            </tbody>
          </table>
        </XPanel.Content>
      </XPanel>
    )
  }
}

function DataTable() {
  const props = (color, system, percent) => ({color, system, percent})

  return (
      <table className="tile_info">
        <tbody>
          <DataRow {...props('blue', 'IOS', 30)} />
          <DataRow {...props('green', 'Android', 10)} />
          <DataRow {...props('purple', 'Blackberry', 20)} />
          <DataRow {...props('aero', 'Symbian', 15)} />
          <DataRow {...props('red', 'Others', 30)} />
        </tbody>
      </table>    
  )
}

function DataRow({color, system, percent}) {
  return (
    <tr>
      <td>
        <p><i className={`fa fa-square ${color}`}></i>{system} </p>
      </td>
      <td>{percent}%</td>
    </tr>    
  )
}

export default DeviceUsage