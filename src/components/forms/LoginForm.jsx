import React from "react";
import Form from "../common/Form";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../styles/forms/loginForm.css";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    const response = await axios
      .post("http://localhost:8000/api/login_check", {
        username: this.state.data.username,
        password: this.state.data.password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
      });
    console.log(response);
    console.log(localStorage.getItem("user"));
    window.location.reload();
  };

  render() {
    return (
      <div className="login-form-wrapper">
        <form onSubmit={this.handleSubmit} className="login-form">
          <h1 className="login-form-title">Login</h1>
          {this.renderInput(
            "username",
            "Username",
            "text",
            "login-item first-login-item"
          )}
          {this.renderInput("password", "Password", "password", "login-item")}
          {this.renderButton("Login", "login-button")}
          <Link to="/" className="return-link">
            <button className="return-button">&#8592;</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default LoginForm;
