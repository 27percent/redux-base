/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import { Link } from 'react-router-dom'

class WelcomePage extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='c-welcome-page'> 
        <div className='o-dark c-welcome-page__left-column'>
          <div className='c-composer-logo' />
        </div>
        <div className='o-light c-welcome-page__right-column'>
          <div className='c-welcome-page__right-column__content'>
            <h1>Welcome to Composer.</h1>
            <p>Composer is a tool to configure Orchestrator-based keyboards visually - no coding required. <br /> Its built and maintained by Interactive Objects and is open-source. You can view the source on <a href='#'>GitHub</a> and also file bugs with <a href='#'>GitHub Issues</a>.</p>
            <Link className='o-btn o-btn-primary u-mr-' to='/composer'>Create new profile</Link><br />
            <Link className='o-btn o-btn-primary u-mr-' to='/composer'>Load saved profile</Link><br />
            <Link className='o-btn o-btn-primary u-mr-' to='/composer'>Explore shared profiles</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default WelcomePage;
