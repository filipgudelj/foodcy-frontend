import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Foodcy.png";
import Logout from "../svgs/Logout";
import "../../styles/parts/loggedInNavbar.css";

class LoggedInNavbar extends Component {
  logout = () => {
    console.log(localStorage.getItem("user"));
    localStorage.removeItem("user");
    console.log(localStorage.getItem("user"));
    window.location.reload();
  };

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
            <Link to="/create-recipe" className="second-navbar-list-item-link">
              <button className="create-recipe-btn">+ Recipe</button>
            </Link>
          </li>
          <li className="second-navbar-list-item">
            <Link to="/create-advice" className="second-navbar-list-item-link">
              <button className="create-advice-btn">+ Advice</button>
            </Link>
          </li>
          <li className="second-navbar-list-item second-navbar-list-item-logout">
            <button className="logout-btn" onClick={this.logout}>
              <Logout className="logout-btn-svg" />
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default LoggedInNavbar;
