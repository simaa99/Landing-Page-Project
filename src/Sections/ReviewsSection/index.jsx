import React, { Component } from "react";
import ReviewsCardComponent from "../../components/ReviewsCardComponent";
import ReviewData from "../../mock/ReviewData";
import TitleComponent from "../../components/TitleComponent";
import "./style.css";
export default class index extends Component {
  render() {
    return (
      <div className="review-section">
        <TitleComponent
          title="Reviews"
          subtitle="words from our food lovers"
          isCenter={true}
          isReverse={false}
        />
        <div className="review-item">
          {ReviewData.map((item) => (
            <ReviewsCardComponent
              key={item.id}
              personName={item.personName}
              personImg={item.personImg}
              descReviews={item.descReviews}
            />
          ))}
        </div>
      </div>
    );
  }
}
