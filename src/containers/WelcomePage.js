/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import { Link } from 'react-router-dom'
import SlimTabbedNav from '../components/SlimTabbedNav'
import TabPane from '../components/TabPane'

class WelcomePage extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='c-welcome-page'> 
        <div className='o-dark c-welcome-page__left-column'>
          <div className='c-composer-logo c-composer-logo--c' />
        </div>
        <div className='o-light c-welcome-page__right-column'>
          <div className='c-welcome-page__right-column__content'>
            <h1>Welcome to Composer.</h1>
            <p>Composer is a tool to configure Orchestrator-based keyboards visually.<br /> Its built and maintained by Interactive Objects and is open-source.<br /> You can view the source on <a href='#'>GitHub</a> and file bugs with <a href='#'>GitHub Issues</a>.</p>

            <SlimTabbedNav selected={0}>
              <TabPane label='New'>
                <div>
                  <select>
                    <option value="" disabled selected>Select a board...</option>
                    <option value="1">Xylophone S</option>
                    <option value="2">Xylophone M</option>
                    <option value="3">Xylophone L</option>
                    <option value="4">M10-A</option>
                  </select><br />
                  <input className='o-flex-full-height' type='text' placeholder='Give your layout a name...' /><br />
                  <Link className='o-btn o-btn-primary expand' to='/composer'>Create</Link><br />
                </div>
              </TabPane>
              <TabPane label='Load'>
                <div>
                  <input class="file-input" type="file" name="resume" /><br />
                  <Link className='o-btn o-btn-primary expand' to='/composer'>Load</Link><br />
                </div>
              </TabPane>
              <TabPane label='Browse'>
                <div>Browse</div>
              </TabPane>
            </SlimTabbedNav>

          </div>
        </div>
      </div>
    )
  }
}

export default WelcomePage;
