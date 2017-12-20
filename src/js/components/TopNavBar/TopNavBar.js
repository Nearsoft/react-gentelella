import React, { Component } from 'react'
import SharedState from '../SharedState'
import childrenWithProps from '../childrenWithProps'
import Item from './Item'
import { bodyNextClick } from '../domUtils'

class TopNavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: null
    }

    this.shared = SharedState(this, {
      toggle: (item, e) => {
        if (e) e.preventDefault()
        const opened = item === this.state.opened ? null : item
        console.log('opened', opened)
        this.setState({ opened })
        this.closeOnClick.target(opened)
      }
    })

    this.closeOnClick = bodyNextClick(e => this.shared.toggle(null), false)
  }

  render () {
    const { shared } = this

    return (
      <ul className="nav navbar-nav navbar-right">
        { childrenWithProps(this.props.children, { shared }) }
      </ul>
    )
  }
}

TopNavBar.Item = Item

export default TopNavBar