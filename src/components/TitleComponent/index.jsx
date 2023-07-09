import React, { Component } from "react";
import "./style.css";

export default class Index extends Component {
  getStyles = () => {
    const { isCenter, isReverse } = this.props;
    let titleColor, subtitleColor, alignItems;

    if (isCenter) {
      titleColor = isReverse ? "#FFFFFC" : "#FFCE6D";
      subtitleColor = isReverse ? "#FFCE6D" : "#FFFFFC";
      alignItems = "center";
    } else {
      titleColor = "#FFCE6D";
      subtitleColor = "#FFFFFC";
      alignItems = "initial";
    }

    const rowGap = isCenter ? "1rem" : "0rem";

    return {
      alignItems,
      rowGap,
      titleColor,
      subtitleColor,
    };
  };

  render() {
    const { title, subtitle } = this.props;
    const styles = this.getStyles();

    return (
      <div
        className="title-section"
        style={{ alignItems: styles.alignItems, rowGap: styles.rowGap }}
      >
        <h2 className="title" style={{ color: styles.titleColor }}>
          {title}
        </h2>
        <p className="subtitle" style={{ color: styles.subtitleColor }}>
          {subtitle}
        </p>
      </div>
    );
  }
}
