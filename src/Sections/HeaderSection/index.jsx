import React, { Component } from "react";
import logo from "../../assests/Logo.svg";
import search from "../../assests/akar-icons_search.svg";

import "./style.css";
export default class index extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="Logo" />
        <nav>
          <ul>
            <li>
              <a href="*">Home</a>
            </li>
            <li>
              <a href="*">About Us</a>
            </li>
            <li>
              <a href="*">Specials</a>
            </li>
            <li>
              <a href="*">Blogs</a>
            </li>
            <img src={search} alt="search" className="search" />
          </ul>
        </nav>
        <div className="btn-book">
          <button>-- Book Now ---</button>
        </div>
      </header>
    );
  }
}
