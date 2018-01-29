/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { toggleSidebar, toggleSidebarWide } from '../actions/sidebar'
import ConfiguratorPage from './ConfiguratorPage'

const mapStateToProps = (state, ownProps) => {
  return { 
    sidebar: state.sidebar,
    ...ownProps
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar : () => {dispatch(toggleSidebar())},
    toggleSidebarWide : () => {dispatch(toggleSidebarWide())}
  }
}

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
)(ConfiguratorPage))
