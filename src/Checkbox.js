
import PropTypes from 'prop-types'
import React, {Component} from 'react'

export default class Checkbox extends Component {
  constructor({checked}) {
    super()
    this.state = {checked}
  }
  toggle() {
    const checked = !this.state.checked
    this.props.onChange && this.props.onChange(checked)
    this.setState({checked})
  }
  render() {
    return (
      <span
          role="checkbox"
          aria-checked={this.state.checked}
          tabIndex="0"
          style={{cursor: 'default'}}
          id={this.props.id}
          onClick={this.toggle.bind(this)}
          onKeyUp={e => e.keyCode === 32 && this.toggle()}>
        {this.state.checked ? this.props.skinChecked : this.props.skinUnchecked}
      </span>
    )
  }
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string,
  checked: PropTypes.bool,
  skinChecked: PropTypes.node,
  skinUnchecked: PropTypes.node,
}

Checkbox.defaultProps = {
  skinChecked: '\u2611',
  skinUnchecked: '\u2610',
}
