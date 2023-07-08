import React, { Component } from "react";
import "./style.css";
export default class index extends Component {
  render() {
    const {
      imageStatistic,
      imageAltStatistic,
      descStatistic,
      numberStatistic,
    } = this.props;
    return (
      <div className="statistic-section">
        <img src={imageStatistic} alt={imageAltStatistic} />
        <div>
          <span>{`${numberStatistic}+`}</span>
          <span>{descStatistic}</span>
        </div>
      </div>
    );
  }
}
