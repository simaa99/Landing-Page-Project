import React, { Component } from "react";
import "./style.css"
export default class index extends Component {
  render() {
    const { titleCard, descriptionCard, price, imageCardMenu, imageAltCard } =
      this.props;
    return (
      <div className="card-menu">
        <img src={imageCardMenu} alt={imageAltCard} className="card-icon" />
        <div className="card-menu-content">
          <div>
            <span>{titleCard}</span>
            <span>{descriptionCard}</span>
          </div>
          <div className="card-line"></div>
        </div>
        <span>{`Rc ${price}`}</span>
      </div>
    );
  }
}
