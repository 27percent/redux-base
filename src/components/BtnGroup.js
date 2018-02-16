import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BtnGroup extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render() {
    return (
      <div className='o-btn-group'>
        {this.props.children}
      </div>
    )
  }
}

export default BtnGroup;