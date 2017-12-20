import React, { Component } from 'react'

class TimeLine extends Component {
  render () {
    return (
      <ul className="list-unstyled timeline widget">
        {this.props.children}
      </ul>
    )
  }
}

export class TimeLineItem  extends Component {
  render () {
    return (
      <li>
        <div className="block">
          <div className="block_content">
            {this.props.children}
          </div>
        </div>
      </li>      
    )
  }
}

export const TimeLineTitle = ({children}) => (<h2 className="title"><a>{children}</a></h2>)

export const TimeLineByLine = ({children}) => (<div className="byline">{children}</div>)

export const TimeLineContent = ({children}) => (<p className="excerpt">{children}</p>)

TimeLine.Item = TimeLineItem
TimeLine.Title = TimeLineTitle
TimeLine.ByLine = TimeLineByLine
TimeLine.Content = TimeLineContent

export default TimeLine