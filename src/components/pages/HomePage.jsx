import React, { Component } from "react";
import Navbar from "../parts/Navbar";
import LoggedInNavbar from "../parts/LoggedInNavbar";
import HomeImage from "../parts/HomeImage";
import RoundImages from "../parts/RoundImages";
import Footer from "../parts/Footer";
import "../../styles/pages/homePage.css";

class Homepage extends Component {
  render() {
    return (
      <div className="home-wrapper">
        {localStorage.getItem("user") ? (
          <LoggedInNavbar className="navbar" />
        ) : (
          <Navbar className="navbar" />
        )}
        <HomeImage className="home-image" />
        <RoundImages className="round-images" />
        <Footer className="footer"></Footer>
      </div>
    );
  }
}

export default Homepage;
