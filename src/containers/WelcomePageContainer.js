/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import WelcomePage from './WelcomePage'

const mapStateToProps = (state, ownProps) => {
  return { 
    ...ownProps
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
)(WelcomePage))
