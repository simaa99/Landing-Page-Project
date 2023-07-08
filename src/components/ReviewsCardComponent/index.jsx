import React, { Component } from "react";
import starIcon from "../../assests/starIcon.svg";
import "./style.css";
export default class index extends Component {
  render() {
    const { personImg, personName, descReviews } = this.props;
    return (
      <div className="reviews-card">
        <div className="top-review">
          <img src={personImg} alt="person-img" />
          <div className="review-content">
            <span>{personName}</span>
            <div className="star-review">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <img key={index} src={starIcon} alt="StarIcon" />
                ))}
            </div>
          </div>
        </div>
        <div className="bottom-review">
          <p>{descReviews}</p>
        </div>
      </div>
    );
  }
}
