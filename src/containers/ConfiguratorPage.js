/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import BoardSVGContainer from '../components/BoardSVGContainer';
import BtnGroup from '../components/BtnGroup';
import boardConfig from '../data/xylophone-s-1_0_0.json';

class ConfiguratorPage extends Component {
  static propTypes = {}

  renderMainContainer = () => {
    if (this.props.display) {
      return (<BoardSVGContainer outline={ this.props.board.display.outline } keys={ this.props.board.display.keys } features={ this.props.board.display.features } />);
    } else if (true) {
      return (<BoardSVGContainer height={ boardConfig.board.display.height } width={ boardConfig.board.display.width } directory={ boardConfig.board.display.directory } outline={ boardConfig.board.display.outline } features={boardConfig.board.display.features} />);
    } else {
      return(<p style={{marginLeft: 'auto', marginRight: 'auto', marginTop:200}}>Select your board to start...</p>);
    }
  }

  render() {
    console.log(boardConfig);
    return (
      <div className='o-flex-full-height-container o-overflow-hidden c-layout-main'> 

        <section className='o-flex-full-height-y-scrollable o-flex-container o-flex-col o-dark c-layout-main__left-column'>

            <div className='o-flex-container c-header'>
              <div className=' c-header__left'>
                <div className='c-composer-logo' />
              </div>

              <div className='o-flex-full-height-container c-header__middle'></div>

              <div className='c-header__right'>
                <BtnGroup className='u-mr- u-mb0'>
                  <a className='o-btn o-btn-primary' onClick={this.props.toggleSidebar}>Tap</a>
                  <a className='o-btn o-btn-quaternary' onClick={this.props.toggleSidebarWide}>Press</a>
                  <a className='o-btn o-btn-quaternary'>Hold</a>
                </BtnGroup>
              </div>            
            </div>

            <div className='o-flex-full-height-container'>
              {this.renderMainContainer()}
            </div>

            <div className='o-flex-container c-footer'>
              <div className='c-footer__left'>
               <p className='u-mr- u-mb0' style={{display: 'inline'}}>LAYER:</p>
                <select className='o-flex-full-height u-mb0' style={{width: 70}}>
                  <option value='all'>All</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                </select>
              </div>

              <div className='o-flex-full-height-container c-footer__middle'></div>

              <div className='c-footer__right'>
                <a className='o-btn o-btn-success u-mb0'>Save</a>
                <a className='o-btn o-btn-secondary u-ml- u-mb0' onClick={this.props.toggleSidebar}>Flash</a>
              </div>            
            </div>

        </section>



        <aside className={classNames('o-overflow-y-scrollable o-flex-container o-flex-col o-light c-layout-main__right-column', {'c-layout-main__right-column--open': this.props.sidebar.open}, {'c-layout-main__right-column--open-wide': this.props.sidebar.openWide} )}>
          <div>
            <h2>Key</h2>
            <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
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
            <a className='o-btn o-btn-primary u-mr-' onClick={this.props.toggleSidebar}>Primary</a>
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
