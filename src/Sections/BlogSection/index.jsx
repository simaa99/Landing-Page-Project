import React, { Component } from "react";
import BlogCardComponent from "../../components/BlogCardComponent";
import Container from "../../components/ContainerComponent";
import TitleComponent from "../../components/TitleComponent";
import "./style.css";
import BlogData from "../../mock/BlogData";
export default class index extends Component {
  render() {
    return (
      <div className="Blog-section">
        <Container width={90}>
          <TitleComponent
            title="Blogs"
            subtitle="words from our food lovers"
            isCenter={true}
            isReverse={false}
          />
          <div class="Blog-item">
            {BlogData.map((item) => (
              <BlogCardComponent
                key={item.id}
                blogTitle={item.blogTitle}
                blogDesc={item.blogDesc}
                blogImg={item.blogImg}
                blogButton={item.blogButton}
                isReverse={item.isReverse}
              />
            ))}
          </div>
        </Container>
      </div>
    );
  }
}
