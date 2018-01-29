/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';

class ConfiguratorPage extends Component {
  static propTypes = {}

  render() {
    
    return (
      <div className='o-flex-full-height-container o-overflow-hidden c-layout-main'> 

        <section className='o-flex-full-height-y-scrollable o-dark c-layout-main__left-column'>
          <div>

            <div className='o-flex-container c-header'>
              <div className='o-flex-full-height c-header__left'>
                <div className='c-composer-logo' />
                <select className='c-board-selector u-ml'>
                  <option value="" disabled selected>Select a board...</option>
                  <option value="volvo">Xylophone S</option>
                  <option value="saab">Xylophone M</option>
                  <option value="mercedes">Xylophone L</option>
                  <option value="audi">M10-A</option>
                </select>
              </div>

              <div className='o-flex-full-height c-header__right'>
                <a className='o-btn o-btn-secondary u-mr- u-mb0' onClick={this.props.toggleSidebar}>Sidebar</a>
                <a className='o-btn o-btn-secondary u-mr- u-mb0' onClick={this.props.toggleSidebarWide}>Sidebar Wide</a>
                <a className='o-btn o-btn-primary u-mr- u-mb0'>Load</a>
                <a className='o-btn o-btn-success u-mb0'>Save</a>
              </div>              
            </div>


            { 
              // <h1>Test</h1>
              // <h2>Test</h2>
              // <h3>Test</h3>
              // <h4>Test</h4>
              // <h5>Test</h5>
              // <h6>Test</h6>
              // <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
              // <input type='text' placeholder='Enter some text...' />
              // <select>
              //   <option value="volvo">Volvo</option>
              //   <option value="saab">Saab</option>
              //   <option value="mercedes">Mercedes</option>
              //   <option value="audi">Audi</option>
              // </select>
              // <a className='o-btn o-btn-primary u-mr-' onClick={this.toggleSidebar}>Primary</a>
              // <a className='o-btn o-btn-secondary u-mr-'>Secondary</a>
              // <a className='o-btn o-btn-tertiary u-mr-'>Tertiary</a>
              // <a className='o-btn o-btn-quaternary u-mr-'>Quaternary</a>
              // <a className='o-btn o-btn-success u-mr-'>Success</a>
              // <a className='o-btn o-btn-warning u-mr-'>Warning</a>
            }
          </div>
        </section>

        <aside className={classNames('o-flex-container o-overflow-y-scrollable o-flex-100 o-light c-layout-main__right-column', {'c-layout-main__right-column--open': this.props.sidebar.open}, {'c-layout-main__right-column--open-wide': this.props.sidebar.openWide} )}>
          <div>
            <h2>Key</h2>
            { 
              // <h2>Test</h2>
              // <h3>Test</h3>
              // <h4>Test</h4>
              // <h5>Test</h5>
              // <h6>Test</h6>
            }
            <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
            <input type='text' placeholder='Enter some text...' />
            <input type='text' placeholder='Enter some text...' />
            <input type='text' placeholder='Enter some text...' />
            <input type='text' placeholder='Enter some text...' />
            <input type='text' placeholder='Enter some text...' />
            <select>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <a className='o-btn o-btn-primary u-mr-'>Primary</a>
            <a className='o-btn o-btn-secondary u-mr-'>Secondary</a>
            <a className='o-btn o-btn-tertiary u-mr-'>Tertiary</a>
            <a className='o-btn o-btn-quaternary u-mr-'>Quaternary</a>
            <a className='o-btn o-btn-success u-mr-'>Success</a>
            <a className='o-btn o-btn-warning u-mr-'>Warning</a>
          </div>
        </aside>

      </div>
    )
  }
}

export default ConfiguratorPage;
