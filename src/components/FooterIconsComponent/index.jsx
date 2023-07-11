import React, { Component } from "react";
import icon1 from "../../assests/footerIcons/insta.svg";
import icon2 from "../../assests/footerIcons/twitter.svg";
import icon3 from "../../assests/footerIcons/you.svg";
import './style.css'
export default class index extends Component {
  render() {
    return (
      <div className="footer-img">
        <div className="div-img">
          <img src={icon1} alt="footer-icon" />
        </div>
        <div className="div-img">
          <img src={icon2} alt="footer-icon" />
        </div>
        <div className="div-img">
          <img src={icon3} alt="footer-icon" />
        </div>
      </div>
    );
  }
}
