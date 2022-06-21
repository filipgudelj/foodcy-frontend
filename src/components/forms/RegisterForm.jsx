import React from "react";
import Form from "../common/Form";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../styles/forms/registerForm.css";

class RegisterForm extends Form {
  state = {
    data: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    firstname: Joi.string().required().label("Firstname"),
    lastname: Joi.string().required().label("Lastname"),
    username: Joi.string().required().min(6).label("Username"),
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } })
      .label("Email"),
    password: Joi.string().required().min(8).label("Password"),
  };

  doSubmit = async () => {
    const response = await axios.post("http://localhost:8000/api/users", {
      username: this.state.data.username,
      firstname: this.state.data.firstname,
      lastname: this.state.data.lastname,
      email: this.state.data.email,
      password: this.state.data.password,
    });
    console.log(response);
    console.log("Registered");
    window.location.reload();
  };

  render() {
    return (
      <div className="register-form-wrapper">
        <form onSubmit={this.handleSubmit} className="register-form">
          <Link to="/" className="return-link">
            <button className="return-button">&#8592;</button>
          </Link>
          <h1 className="register-form-title">Register</h1>
          {this.renderInput(
            "firstname",
            "Firstname",
            "text",
            "first-register-item register-item"
          )}
          {this.renderInput("lastname", "Lastname", "text", "register-item")}
          {this.renderInput("username", "Username", "text", "register-item")}
          {this.renderInput("email", "Email", "text", "register-item")}
          {this.renderInput(
            "password",
            "Password",
            "password",
            "register-item"
          )}
          {this.renderButton("Register", "register-button register-item")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
