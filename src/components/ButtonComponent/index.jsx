import React from 'react';
import "./style.css"
class Button extends React.Component {
  render() {
    const { text, styleName} = this.props;


    return (
      <button className={`${styleName} btn`}>
        {text}
      </button>
    );
  }
}

export default Button;
