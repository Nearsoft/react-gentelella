import React, { Component } from 'react'
import XPanel from '../../../components/XPanel'
import { Col } from 'react-bootstrap'

class VisitorsLocations extends Component {
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
      <XPanel visible={panelVisible} onHide={onHide}>
        <XPanel.Title title="Visitors Locations" smallTitle="geo-presentation" />
        <XPanel.Content>
          <div className="dashboard-widget-content">
            <Col md={4} className="hidden-small">
              <h2 className="line_30">125.7k Views from 60 countries</h2>
              <CountriesList />
            </Col>
            <Col id="world-map-gdp" md={8} sm={12} xs={12} style={{height: '230px'}}></Col>
          </div>
        </XPanel.Content>
      </XPanel>
    )
  }
}

function CountriesList () {
  const props = (country, percent) => ({country, percent})

  return (
    <table className="countries_list">
      <tbody>
        <CountryItem {...props('United States', 33)} />
        <CountryItem {...props('France', 27)} />
        <CountryItem {...props('Germany', 16)} />
        <CountryItem {...props('Spain', 11)} />
        <CountryItem {...props('Britain', 10)} />
      </tbody>
    </table>
  )
}

function CountryItem ({country, percent}) {
  return (
    <tr>
      <td>{country}</td>
      <td className="fs15 fw700 text-right">{percent}%</td>
    </tr>
  )
}

export default VisitorsLocations