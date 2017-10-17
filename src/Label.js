
import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'

export default class Label extends Component {
  onClick(e) {
    if (this.props.htmlFor) {
      this.target && this.target.click()
      return
    }

    // Ignore clicks on interactive children.
    if (e.target instanceof HTMLInputElement) {return}
    // Ignore all custom checkboxes.
    if (e.target.getAttribute('role') === 'checkbox') {return}

    this.target && this.target.click()
  }
  componentDidMount() {
    // If the label and the checkbox are linked by ID.
    if (this.props.htmlFor) {
      this.target = document.getElementById(this.props.htmlFor)
    } else {
      this.target = findDOMNode(this).firstElementChild
    }

    // In ARIA the linkage works the other way round.
    this.target && this.target.setAttribute('aria-labelledby', this.props.id)
  }
  render() {
    return (
      <span id={this.props.id}
          style={{cursor: 'default'}}
          onClick={this.onClick.bind(this)}>
        {this.props.children}
      </span>
    )
  }
}

Label.propTypes = {
  htmlFor: PropTypes.string,
  id: PropTypes.string.isRequired,
}
