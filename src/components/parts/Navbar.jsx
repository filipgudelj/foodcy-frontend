import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Foodcy.png";
import "../../styles/parts/navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <ul className="first-navbar-list">
          <li className="first-navbar-list-logo-wrapper">
            <Link to="/">
              <img src={Logo} alt="Logo" className="logo" />
            </Link>
          </li>
          <li className="first-navbar-list-item first-navbar-list-item-second-element">
            <Link to="/about" className="first-navbar-list-item-link">
              About
            </Link>
          </li>
          <li className="first-navbar-list-item">
            <Link to="/recipes" className="first-navbar-list-item-link">
              Recipes
            </Link>
          </li>
          <li className="first-navbar-list-item">
            <Link to="/advice" className="first-navbar-list-item-link">
              Advice
            </Link>
          </li>
        </ul>
        <ul className="second-navbar-list">
          <li className="second-navbar-list-item">
            <Link to="/login" className="second-navbar-list-item-link">
              <button className="login-btn">Login</button>
            </Link>
          </li>
          <li className="second-navbar-list-item">
            <Link to="/register" className="second-navbar-list-item-link">
              <button className="register-btn">Register</button>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
