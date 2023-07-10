import React, { Component } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import TitleComponent from "../../components/TitleComponent";
import IconBookTableComponent from "../../components/IconBookTableComponent";
import "./style.css";
export default class index extends Component {
  render() {
    return (
      <div className="book-table-full">
        <div className="right-icon-book">
          <IconBookTableComponent />
        </div>
        <div className="book-table-item">
          <TitleComponent
            title="Come join us for a lunch this weekend and enjoy"
            subtitle="FLAT 10% OFF"
            isCenter={true}
            isReverse={true}
          />
          <ButtonComponent text="Book Table" />
        </div>
        <div className="left-icon-book">
          <IconBookTableComponent />
        </div>
      </div>
    );
  }
}
