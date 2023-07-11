import React, { Component } from "react";
import FooterIcon from "../../components/FooterIcon";
import FooterIconsComponent from "../../components/FooterIconsComponent";
import FooterListComponent from "../../components/FooterListComponent";
import footerData from "../../mock/footerData";
import FooterTitleComponent from "../../components/FooterTitleComponent";
import "./style.css";
import ButtonComponent from "../../components/ButtonComponent";
import emailIcon from "../../assests/bytesize_mail.svg";
import Container from "../../components/ContainerComponent";

export default class index extends Component {
  render() {
    return (
        <div className="footer-section">
          <div className="footer">
          <Container width={80}>

            <div className="footer-top">
              <div className="footer-right">
                <FooterTitleComponent />

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sollicitudin
                </p>
                <FooterIconsComponent />
              </div>
              <FooterListComponent />
              <div className="footer-icon">
                <span className="contact-us-text">contact us</span>
                {footerData.map((item, index) => (
                  <FooterIcon
                    key={index}
                    srcImg={item.srcImg}
                    text={item.text}
                    alt={item.alt}
                  />
                ))}
              </div>
            </div>
            </Container>
          </div>
          <Container width={80}>
          <div className="footer-middle">
            <div className="footer-subscribe">
              <img src={emailIcon} alt="" />
              <span>Subscribe to our Newsletter</span>
            </div>
            <div className="footer-input">
              <input type="text" placeholder="Your Email id" />
              <ButtonComponent text="Subscribe" styleName="styling-button" />
            </div>
          </div>
          </Container>
          <div className="footer-bottom">
            <span>Copyright © 2022 Golden Dine website</span>
            <span>All rights reserved</span>
          </div>
        </div>
    );
  }
}
