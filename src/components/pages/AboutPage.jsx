import React, { Component } from "react";
import Navbar from "../parts/Navbar";
import LoggedInNavbar from "../parts/LoggedInNavbar";
import AboutImage from "../parts/AboutImage";
import Footer from "./../parts/Footer";
import "../../styles/pages/aboutPage.css";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-wrapper">
        {localStorage.getItem("user") ? (
          <LoggedInNavbar className="navbar" />
        ) : (
          <Navbar className="navbar" />
        )}
        <AboutImage className="about-image" />
        <Footer className="footer" />
      </div>
    );
  }
}

export default AboutPage;
