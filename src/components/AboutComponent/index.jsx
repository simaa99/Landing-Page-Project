import React, { Component } from "react";
import Container from "../ContainerComponent";
import TitleComponent from "../TitleComponent";
import ButtonComponent from "../ButtonComponent";
import "./style.css";
export default class Index extends Component {
  render() {
    const { imgUrl, imgAlt, paragraph, titleAbout , descAbout , styleContent} = this.props;
    return (
      <Container width={80}>
        <div className={`${styleContent} full-content`}>
          <div className="right-content">
            <TitleComponent
              title={titleAbout}
              subtitle={descAbout}
              isCenter={false}
              isReverse={false}
            />
            <p>{paragraph}</p>
            <ButtonComponent text="Read more" />
          </div>
          <div className="left-content">
            <img src={imgUrl} alt={imgAlt} />
          </div>
        </div>
      </Container>
    );
  }
}
