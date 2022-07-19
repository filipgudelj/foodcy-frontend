import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import HomeBackground from "../../images/HomeBackground.jpg";
import "../../styles/parts/homeImage.css";

class HomeImage extends Component {
  render() {
    let decodedJwt = "";
    if (localStorage.getItem("user")) {
      const jwt = localStorage.getItem("user");
      decodedJwt = jwtDecode(jwt).username;
      console.log(decodedJwt);
    }
    return (
      <div className={this.props.className}>
        <div className="username">
          Welcome{decodedJwt ? `, ${decodedJwt}!` : " to Foodcy!"}
        </div>
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
