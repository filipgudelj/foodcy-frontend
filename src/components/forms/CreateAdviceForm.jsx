import React from "react";
import Form from "../common/Form";
import Joi from "joi-browser";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import "../../styles/forms/createAdviceForm.css";

class CreateAdviceForm extends Form {
  state = {
    data: {
      title: "",
      content: "",
    },
    errors: {},
    redirect: false,
  };

  schema = {
    title: Joi.string().required().min(5).max(45).label("Title"),
    content: Joi.string().required().min(5).max(300).label("Content"),
  };

  config() {
    const user = JSON.parse(localStorage.getItem("user"));
    return {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
  }

  doSubmit = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URI}api/advice`,
      {
        title: this.state.data.title,
        content: this.state.data.content,
      },
      this.config()
    );
    this.setState({ redirect: true });
  };

  render() {
    return (
      <div className="create-advice-form-wrapper">
        {this.state.redirect === true && (
          <Navigate to="/advice" replace={true} />
        )}
        <form onSubmit={this.handleSubmit} className="create-advice-form">
          <h1 className="create-advice-form-title">Advice</h1>
          {this.renderInput(
            "title",
            "Title",
            "text",
            "create-advice-item first-create-advice-item"
          )}
          {this.renderTextarea(
            "content",
            "content",
            "create-advice-item create-advice-item-bigger"
          )}
          {this.renderButton("Create", "create-button  create-advice-item")}
          <Link to="/" className="return-link">
            <button className="return-button">&#8592;</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default CreateAdviceForm;
