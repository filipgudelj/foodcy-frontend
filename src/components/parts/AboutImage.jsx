import React, { Component } from "react";
import AboutBackground from "../../images/AboutBackground.jpg";
import "../../styles/parts/aboutImage.css";

class AboutImage extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="image-wrapper">
          <img className="image" src={AboutBackground}></img>
        </div>
        <div className="image-text-wrapper">
          <div className="image-text-title">OUR MISSION</div>
          <div className="image-text-subtitle">
            We exist for people to (re)define eating habits on their own terms
          </div>
        </div>
      </div>
    );
  }
}

export default AboutImage;
