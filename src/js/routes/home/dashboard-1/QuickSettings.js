import React, { Component } from 'react'
import XPanel from '../../../components/XPanel'

class QuickSettings extends Component {
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
      <XPanel visible={ panelVisible } className="fixed_height_320" onHide={ onHide }>
        <XPanel.Title title="Quick Settings"/>
        <XPanel.Content>
          <div className="dashboard-widget-content">
            <QuickList/>
            <div className="sidebar-widget">
              <h4>Profile Completion</h4>
              <canvas width="150" height="80" id="chart_gauge_01" className=""
                      style={ { width: '160px', height: '100px' } }></canvas>
              <div className="goal-wrapper">
                <span id="gauge-text" className="gauge-value pull-left">0</span>
                <span className="gauge-value pull-left">%</span>
                <span id="goal-text" className="goal-value pull-right">100%</span>
              </div>
            </div>
          </div>
        </XPanel.Content>
      </XPanel>
    )
  }
}

function QuickList() {
  const props = (icon, label) => ({ icon, label })

  return (
    <ul className="quick-list">
      <QuickListItem { ...props('calendar-o', 'Settings') } />
      <QuickListItem { ...props('bars', 'Subscription') } />
      <QuickListItem { ...props('bar-chart', 'Auto Renewal') } />
      <QuickListItem { ...props('line-chart', 'Achievements') } />
      <QuickListItem { ...props('bar-chart', 'Auto Renewal') } />
      <QuickListItem { ...props('line-chart', 'Achievements') } />
      <QuickListItem { ...props('area-chart', 'Logout') } />
    </ul>
  )
}

function QuickListItem({ icon, label }) {
  return (
    <li>
      <i className={ `fa fa-${icon}` }></i>
      <a href="#!">{ label }</a>
    </li>
  )
}

export default QuickSettings
