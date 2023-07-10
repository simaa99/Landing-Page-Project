import React, { Component } from "react";
import StatisticComponent from "../../components/StatisticComponent";
import Container from "../../components/ContainerComponent";
import "./style.css";
import StatisticData from "../../mock/StatisticData";
export default class index extends Component {
  render() {
    return (
      <div className="statistic-full-section">
        <Container width={70}>
          <div className="statistic-item">
            {StatisticData.map((item) => (
              <StatisticComponent
                key={item.id}
                numberStatistic={item.numberStatistic}
                imageStatistic={item.imageStatistic}
                descStatistic={item.descStatistic}
                imageAltStatistic={item.imageAltStatistic}
              />
            ))}
          </div>
        </Container>
      </div>
    );
  }
}
