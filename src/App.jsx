import React, { Component } from "react";
import "./App.css";
import SpecialSection from "./Sections/SpecialSection";
import BlogSection from "./Sections/BlogSection";

export default class App extends Component {
  render() {
    return (
      <>
        <SpecialSection />
        <BlogSection />
      </>
    );
  }
}
