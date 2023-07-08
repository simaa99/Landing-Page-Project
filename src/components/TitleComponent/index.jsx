import React, { Component } from "react";
import "./style.css"
export default class index extends Component {
  render() {
    const {title , subtitle , isCenter} = this.props;

    const titleColor = isCenter ? "#FFFFFC" : "#FFCE6D";
    const subtitleColor = isCenter ? "#FFCE6D" : "#FFFFFC";
    const alignItems = isCenter ? "center" : "initial";
    const rowGap = isCenter ? "1rem" : "0rem";
    return (
        <div className="title-section" style={{ alignItems , rowGap }}>
        <h2 className="title" style={{ color: titleColor }}>
          {title}
        </h2>
        <p className="subtitle" style={{ color: subtitleColor }}>
          {subtitle}
        </p>
      </div>
    );
  }
}
