import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  checkList: PropTypes.object
}

class TodoList extends Component {
  render () {
    const { checkList } = this.props
    const onChange = (index) => checkList.toggle(index)

    return (
      <div className={this.props.className}>
        <ul className="to_do">
          {
            checkList.items().map((item, index) => (
              <TodoListItem key={index.toString()} {...item} onChange={e => onChange(index)} />
            ))
          }
        </ul>
      </div>
    )
  }
}

function TodoListItem ({checked, text, onChange}) {
  return (
    <li>
      <p style={{textDecoration: checked ? 'line-through' : ''}}>
        <input type="checkbox" checked={checked} className="flat" onChange={onChange}/> {text}
      </p>
    </li>
  )
}

TodoList.propTypes = propTypes

export default TodoList