import React, { Component } from 'react'
import XPanel from '../../../components/XPanel'
import CheckList from '../../../components/CheckList'
import { TodoList as TDL } from '../../../components/widgets'

const mock_items = [
  {text: 'Schedule meeting with new client'},
  {text: 'Create email address for new intern'},
  {text: 'Have IT fix the network printer'},
  {text: 'Copy backups to offsite location'},
  {text: 'Food truck fixie locavors mcsweeney'},
  {text: 'Food truck fixie locavors mcsweeney'},
  {text: 'Create email address for new intern'},
  {text: 'Have IT fix the network printer'},
  {text: 'Copy backups to offsite location'},
]

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      panelVisible: true
    }
    this.listChange = () => this.forceUpdate()
    this.checkList = CheckList({ items: mock_items })
  }

  componentDidMount () {
    this.checkList.on('change', this.listChange)
  }
  
  componentWillUnmount () {
    this.checkList.off('change', this.listChange)
  }
  
  render () {
    const { panelVisible } = this.state
    const onHide = e => this.setState({panelVisible: !panelVisible})
    
    return (
      <XPanel visible={panelVisible} onHide={onHide}>
        <XPanel.Title title="To Do List" smallTitle="Sample tasks" />
        <XPanel.Content>
          <TDL checkList={this.checkList}/>
        </XPanel.Content>
      </XPanel>
    )
  }
}

export default TodoList