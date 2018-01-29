/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class App extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div> </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
})

export default withRouter(connect(mapStateToProps, {})(App))
