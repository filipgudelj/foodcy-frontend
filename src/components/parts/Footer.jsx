import React, { Component } from "react";
import Logo from "../../images/Foodcy.png";
import FacebookLogo from "../svgs/FacebookLogo";
import InstagramLogo from "./../svgs/InstagramLogo";
import TwitterLogo from "./../svgs/TwitterLogo";
import { Link } from "react-router-dom";
import "../../styles/parts/footer.css";

class Footer extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="logo-wrapper">
          <Link to="/" className="logo-wrapper-link">
            <img src={Logo} alt="Logo" className="logo-img" />
          </Link>
          <div className="logo-text">
            Foodcy <br /> Eat healthy
          </div>
        </div>
        <ul className="icons-list">
          <li className="icons-list-item">
            <a href="#" className="icons-list-item-link">
              <FacebookLogo className="icon" />
            </a>
          </li>
          <li className="icons-list-item">
            <a href="#" className="icons-list-item-link">
              <InstagramLogo className="icon" />
            </a>
          </li>
          <li className="icons-list-item">
            <a href="#" className="icons-list-item-link">
              <TwitterLogo className="icon" />
            </a>
          </li>
        </ul>
        <div className="copyright-text">
          &copy;Copyright. Application Foodcy. All Rights Reserved.
        </div>
      </div>
    );
  }
}

export default Footer;
