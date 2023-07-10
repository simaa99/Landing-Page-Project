import React, { Component } from "react";
import "./style.css";
export default class index extends Component {
  render() {
    const { imageSrc, imageAlt, cardTitle, cardDescription } = this.props;
    return (
      <div className="card">
        <img src={imageSrc} alt={imageAlt} className="card-icon" />
        <div className="card-content">
          <h2 className="card-title">{cardTitle}</h2>
          <p className="card-description">{cardDescription}</p>
        </div>
      </div>
    );
  }
}
