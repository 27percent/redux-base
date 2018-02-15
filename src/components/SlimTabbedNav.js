import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';

class SlimTabbedNav extends Component {
  static propTypes = {
    selected: PropTypes.number,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.selected || 0
    };
  }

  handleClick = (index, event) => {
    event.preventDefault();
    this.setState({
      selected: index
    });
  }

  renderTabs = () => {
    function labels(child, index){
      return (<a href="#" key={index} className={classNames('c-slim-tabbed-nav__tab', { 'selected' : this.state.selected === index })} onClick={this.handleClick.bind(this, index)}>{child.props.label}</a>);
    }

    return (
      <div className="c-slim-tabbed-nav__tabs u-mb-">
        {this.props.children.map(labels.bind(this))}
      </div>
    );
  }

  renderContent = () => {
    return ( 
      <div className="c-slim-tabbed-nav__content">
        {this.props.children[this.state.selected]}
      </div>
    );
  }

  render() {
    return (
      <div className='c-slim-tabbed-nav'> 
        {this.renderTabs()}
        {this.renderContent()}
      </div>
    )
  }
}

export default SlimTabbedNav;
