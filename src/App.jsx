import React, { Component } from "react";
import "./App.css";
import SpecialSection from "./Sections/SpecialSection";
import BlogSection from "./Sections/BlogSection";
import ReviewsSection from "./Sections/ReviewsSection";
import MenuSection from "./Sections/MenuSection";

export default class App extends Component {
  render() {
    return (
      <>
        <SpecialSection />
        <MenuSection/>
        <ReviewsSection/>
        <BlogSection />
      </>
    );
  }
}
