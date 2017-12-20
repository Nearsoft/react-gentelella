import React, { Component } from 'react'
import XPanel from '../../../components/XPanel'
import { TimeLine as TL } from '../../../components/widgets'
import { Col } from 'react-bootstrap'

const mock_data_item = {
  title: 'Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?',
  byline: {
    time: '13 hours ago',
    by: 'Jane Smith',
  },
  content: 'Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and'
}

const mock_data = [mock_data_item, mock_data_item, mock_data_item, mock_data_item]

class RecentActivities extends Component {
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
      <Col md={4} sm={4} xs={12}>
        <XPanel visible={panelVisible} onHide={onHide}>
          <XPanel.Title title="Recent Activities" smallTitle="Sessions" />
          <XPanel.Content>
            <div className="dashboard-widget-content">
              <TL>
                {
                  mock_data.map((entry, index) => (
                    <TL.Item key={index.toString()}>
                        <TL.Title>{entry.title}</TL.Title>
                        <TL.ByLine>
                          <span>{entry.byline.time}</span> by <a>{entry.byline.by}</a>
                        </TL.ByLine>
                        <TL.Content>
                          {entry.content}… <a>Read&nbsp;More</a>
                        </TL.Content>
                    </TL.Item>
                  ))
                }
              </TL>
            </div>
          </XPanel.Content>
        </XPanel>
      </Col>
    )
  }
}

export default RecentActivities