import React, { Component } from "react";
import ButtonComponent from '../../components/ButtonComponent'
import './style.css'
export default class index extends Component {
  render() {
    return (
      <div className="hero-section">
        <div className="hero-content">
          <span>Welcome To Golden View Dine </span>
          <p>Explore the authentic vegan dishes with your friends and family</p>
          <ButtonComponent text="Read more"/>
        </div>
      </div>
    );
  }
}
