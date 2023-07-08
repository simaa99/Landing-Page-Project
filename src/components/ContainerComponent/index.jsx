import React, { Component } from 'react';

class Container extends Component {
  render() {
    const { children, width } = this.props;
    const widthValue = width || 80;

    const containerStyle = {
      width: `${widthValue}%`,
      margin: '0 auto'
    };

    return (
      <div className="container" style={containerStyle}>
        {children}
      </div>
    );
  }
}

export default Container;
