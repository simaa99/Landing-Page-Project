import React, { Component } from "react";
import "./App.css";
import SpecialSection from "./Sections/SpecialSection";
import BlogSection from "./Sections/BlogSection";
import ReviewsSection from "./Sections/ReviewsSection";
import MenuSection from "./Sections/MenuSection";
import StatisticSection from "./Sections/StatisticSection";
import AboutSection from "./Sections/AboutSection";
import CookingSection from "./Sections/CookingSection";
import ComeJoinSection from "./Sections/ComeJoinSection";
export default class App extends Component {
  render() {
    return (
      <>
        <AboutSection />
        <SpecialSection />
        <MenuSection />
        <ComeJoinSection />
        <CookingSection />
        <StatisticSection />
        <ReviewsSection />
        <BlogSection />
      </>
    );
  }
}
