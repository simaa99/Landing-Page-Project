import React, { Component } from "react";
import SpecialCardComponent from "../../components/SpecialCardComponent";
import Container from "../../components/ContainerComponent";
import TitleComponent from "../../components/TitleComponent";
import "./style.css";
import specialData from "../../mock/specialData";
export default class index extends Component {
  render() {
    return (
      <div className="specail-section">
        <Container width={90}>
          <TitleComponent
            title="Special"
            subtitle="What makes us special"
            isCenter={true}
            isReverse={false}
          />
          <div className="special-item">
            {specialData.map((item) => (
              <SpecialCardComponent
                key={item.id}
                cardTitle={item.cardTitle}
                cardDescription={item.cardDescription}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
              />
            ))}
          </div>
        </Container>
      </div>
    );
  }
}
