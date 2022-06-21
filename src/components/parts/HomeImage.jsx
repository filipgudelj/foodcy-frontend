import React, { Component } from "react";
import HomeBackground from "../../images/HomeBackground.jpg";
import "../../styles/parts/homeImage.css";

class HomeImage extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="image-wrapper">
          <img className="image" src={HomeBackground}></img>
        </div>
        <div className="image-text">
          “Healthy eating is a way of life, so it's important to establish
          routines that are simple, realistically, and ultimately livable.”-
          Horace
        </div>
      </div>
    );
  }
}

export default HomeImage;
