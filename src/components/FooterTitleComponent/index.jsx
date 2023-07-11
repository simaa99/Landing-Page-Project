import React, { Component } from "react";
import logoFooter from '../../assests/Logo.svg'
import './style.css'
export default class index extends Component {
  render() {
    return (
      <div className="footer-title">
        <img src={logoFooter} alt="logo-img" />
        <span>Golden View Dine </span>
      </div>
    );
  }
}
