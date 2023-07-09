import React, { Component } from "react";
import leftIcon from "../../assests/left-icon-book-table.svg";
import rightIcon from "../../assests/right-icon-book-table.svg";
import "./style.css";
export default class index extends Component {
  render() {
    return (
      <div className="book-table-icon">
        <img src={rightIcon} alt="book-table-icon" />
        <img src={leftIcon} alt="book-table-icon" />
      </div>
    );
  }
}
