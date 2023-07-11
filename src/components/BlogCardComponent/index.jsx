import React, { Component } from "react";
import "./style.css";
export default class index extends Component {
  render() {
    const { blogImg, blogDesc, blogButton, blogTitle, isReverse } = this.props;
    const cardClass = isReverse ? "blog-card card-reverse" : "blog-card";

    return (
      <div className={cardClass}>
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
