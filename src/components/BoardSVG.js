import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
// import D3Container from './D3Container';
// import ScalableSvg from './ScalableSvg';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom';
import {AutoSizer} from 'react-virtualized';

const svgs = require.context('../../public/images/svgs/boards', true, /\.svg$/)

const boardSvgs = svgs.keys()
  .reduce((images, key) => {
    images[key] = svgs(key)
    return images
  }, {})

const arrayOfSVGFilenames = svgs.keys();
const specificSVG = svgs("./xyloboard-s/outline.svg");
const allSVGsInAnArray = svgs.keys().map(svgs);

class BoardSVG extends Component {
  static propTypes = {
    // selected: PropTypes.number,
    // children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired
  }

  constructor(props) {
    super(props);

    // this.state = {
    //   selected: this.props.selected || 0
    // };
  }

  handleClick = (index, event) => {
    event.preventDefault();
    // this.setState({
    //   selected: index
    // });
  }

  renderFeature = feature => {
    if (feature.visible) {
      return (
        <ScalableSvg label={feature.label} svg={feature.svgFileName} onClick={this.handleClick.bind(this, index)} width={feature.width} height={feature.height} x={feature.position.x} y={feature.position.y} />
      );
    } else {
      return (
        <ScalableSvg label={feature.label} svg={STANDARD_SVG} onClick={this.handleClick.bind(this, index)} width={feature.width} height={feature.height} x={feature.position.x} y={feature.position.y} />
      );
    }
  }

  renderKeys = () => {
    return (
      <div style={{ position: 'absolute', width: 1055.14, height: 305.698, display: 'inline-block', left: 18.589, top: 18.589, padding: '2px', lineHeight: 0, overflow: 'hidden'}}>
        <div className='c-keyboard-row'>
          <div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' />
        </div>
        <div className='c-keyboard-row'>
          <div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' />
        </div>
        <div className='c-keyboard-row'>
          <div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' />
        </div>
        <div className='c-keyboard-row'>
          <div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' /><div className='c-key' />
        </div>
      </div>
    )
  }

  renderOutline = outline => {
    return (
      <div dangerouslySetInnerHTML={{ __html: svgs(`./${this.props.directory}/${outline.svg}`) }} style={{position: 'absolute', left: outline.left, top: outline.top, height: outline.height, width: outline.width}} />
    )
  }

  render() { 

    return (
        <div className='c-board-svg__container' style={{ width: this.props.width }}>
          <div className='c-board-svg' style={{ height: this.props.height, width: this.props.width }}>

            {this.renderOutline(this.props.outline)}
            {this.props.features.map(this.renderVisibleFeature)}
            {this.renderKeys()}

          </div>

          <div className='c-board-feature-generic-container'>
            {this.props.features.map(this.renderNonVisibleFeature)}
          </div>

      </div>
    )

  }
  renderVisibleFeature = feature => {
    if (feature.visible) {
      return (
        <div className='clickable' style={{position: 'absolute', left: feature.left, top: feature.top, height: feature.height, width: feature.width}} onClick={this.props.toggleSidebar} dangerouslySetInnerHTML={{ __html: svgs(`./${this.props.directory}/${feature.svg}`) }} />
      )
    }
    return null;
  }

  renderNonVisibleFeature = feature => {
    if (!feature.visible) {
      return (
        <div className='c-board-feature-generic'>{feature.name}</div>
      );
    }
    return null;
  }

}

export default BoardSVG;

