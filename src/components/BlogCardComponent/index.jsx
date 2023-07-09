import React, { Component } from "react";
import "./style.css";
export default class index extends Component {
  render() {
    const { blogImg, blogDesc, blogButton, blogTitle, isReverse } = this.props;
    const flexDirection = isReverse ? "column-reverse" : "column";

    return (
      <div className="blog-card" style={{ flexDirection }}>
        <div className="top-blog-card">
          <img src={blogImg} alt="blog-img" />
        </div>
        <div className="bottom-blog-card">
          <span>{blogTitle}</span>
          <p>{blogDesc}</p>
          <button>{blogButton}</button>
        </div>
      </div>
    );
  }
}
