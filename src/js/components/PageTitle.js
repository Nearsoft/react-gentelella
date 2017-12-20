import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Button, FormControl } from 'react-bootstrap'
import InputController from './InputController'

const propTypes = {
  title: PropTypes.string,
  smallTitle: PropTypes.string,
  hideSearch: PropTypes.bool,
  onSearch: PropTypes.func
}

const defaultProps = {
  showSearch: false,
  onSearch: () => { }
}

class PageTitle extends Component {
  constructor(props) {
    super(props)
    this.searchInputController = InputController(this, 'search', '')
  }

  render () {
    const { title, smallTitle, showSearch, onSearch } = this.props

    return (
      <div className="page-title">
        <div className="title_left">
          <h3> {title} <small> {smallTitle}</small> </h3>
        </div>
        { showSearch ? <Search onSearch={onSearch} controller={this.searchInputController()} /> : null }
      </div>
    )
  }
}


function Search ({onSearch, controller}) {
  const { value } = controller
  const onSubmit = e => {
    e.preventDefault()
    onSearch(value, e)
  }

  return (
    <div className="title_right">
      <Col md={5} sm={5} xs={12} className="form-group pull-right top_search">
        <form className="input-group" onSubmit={onSubmit}>
          <FormControl { ...controller } placeholder="Search for..." />
          <span className="input-group-btn">
              <Button onClick={e => onSearch(value, e)}>Go!</Button>
          </span>
        </form>
      </Col>
    </div>    
  )
}

PageTitle.propTypes = propTypes
PageTitle.defaultProps = defaultProps

export default PageTitle