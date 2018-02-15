/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { toggleSidebar, toggleSidebarWide } from '../actions/sidebar'
import BoardSVG from './BoardSVG'

const mapStateToProps = (state, ownProps) => {
  return { 
    sidebar: state.app.sidebar,
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
)(BoardSVG))
