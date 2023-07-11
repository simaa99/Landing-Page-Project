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
import HeroSection from "./Sections/HeroSection";
import FooterSection from "./Sections/FooterSection";

export default class App extends Component {
  render() {
    return (
      <>
        <HeroSection />
        <AboutSection />
        <SpecialSection />
        <MenuSection />
        <ComeJoinSection />
        <CookingSection />
        <StatisticSection />
        <ReviewsSection />
        <BlogSection />
        <FooterSection/>
      </>
    );
  }
}
