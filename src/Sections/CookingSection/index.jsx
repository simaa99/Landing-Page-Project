import React, { Component } from "react";
import AboutComponent from "../../components/AboutComponent";
import CookingImg from "../../assests/cookingImg.svg";
import './style.css'
export default class index extends Component {
  render() {
    return (
      <AboutComponent
        imgUrl={CookingImg}
        imgAlt="Cooking Img"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit."
        titleAbout="Cooking ingredients"
        descAbout="What goes in"
        styleContent="style-content"
      />
    );
  }
}
