import React, { Component } from "react";
import Vegetables from "../../images/Vegetables.jpg";
import Fruit from "../../images/Fruit.jpg";
import Meat from "../../images/Meat.jpg";
import Pasta from "../../images/Pasta.jpg";
import "../../styles/parts/roundImages.css";

class RoundImages extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="round-image-wrapper">
          <img src={Vegetables} className="round-image round-image-1" />
        </div>
        <div className="round-image-wrapper">
          <img src={Meat} className="round-image round-image-2" />
        </div>
        <div className="round-image-wrapper">
          <img src={Fruit} className="round-image round-image-3" />
        </div>
        <div className="round-image-wrapper">
          <img src={Pasta} className="round-image round-image-4" />
        </div>
      </div>
    );
  }
}

export default RoundImages;
