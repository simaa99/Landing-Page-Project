import React, { Component } from "react";
import './style.css'
export default class index extends Component {
  render() {
    const { srcImg, text ,alt} = this.props;
    return (
      <div className="footer-icons">
        <img src={srcImg} alt={alt}/>
        <span>{text}</span>
      </div>
    );
  }
}
