import React, { Component } from "react";
import AboutComponent from "../../components/AboutComponent";
import AboutImg from "../../assests/AboutImg.svg";
export default class index extends Component {
  render() {
    return (
      <AboutComponent
        imgUrl={AboutImg}
        imgAlt="About Img"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque."
        titleAbout="About Us"
        descAbout="Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine"
      />
    );
  }
}
