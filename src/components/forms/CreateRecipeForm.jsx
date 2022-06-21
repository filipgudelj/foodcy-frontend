import React from "react";
import Form from "../common/Form";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../styles/forms/createRecipeForm.css";

class CreateRecipeForm extends Form {
  state = {
    data: {
      title: "",
      ingredients: "",
      steps: "",
      company: "",
      timeToEat: "",
      image: "",
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required().min(5).max(25).label("Title"),
    ingredients: Joi.string().required().min(5).max(300).label("Ingredients"),
    steps: Joi.string().required().min(5).max(500).label("Steps"),
    company: Joi.label("Company"),
    timeToEat: Joi.string().required().min(5).max(30).label("TimeToEat"),
    image: Joi.label("Image"),
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
      "http://localhost:8000/api/recipes",
      {
        title: this.state.data.title,
        ingredients: this.state.data.ingredients,
        steps: this.state.data.steps,
        company: this.state.data.company,
        timeToEat: this.state.data.timeToEat,
      },
      this.config()
    );
    window.location.reload();
  };

  render() {
    return (
      <div className="create-recipe-form-wrapper">
        <form onSubmit={this.handleSubmit} className="create-recipe-form">
          <h1 className="create-recipe-form-title">Recipe</h1>
          {this.renderInput(
            "title",
            "Title",
            "text",
            "create-recipe-item first-create-recipe-item"
          )}
          {this.renderTextarea(
            "ingredients",
            "Ingredients",
            "create-recipe-item create-recipe-item-bigger"
          )}
          {this.renderTextarea(
            "steps",
            "Steps",
            "create-recipe-item create-recipe-item-bigger"
          )}
          {this.renderInput(
            "timeToEat",
            "Time To Eat",
            "text",
            "create-recipe-item"
          )}
          {this.renderInputFile(
            "image",
            "Image",
            "file",
            "create-recipe-item create-recipe-item-img"
          )}
          {this.renderInput(
            "company",
            "Company (optional)",
            "text",
            "create-recipe-item"
          )}
          {this.renderButton("Create", "create-button  create-recipe-item")}
          <Link to="/" className="return-link">
            <button className="return-button">&#8592;</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default CreateRecipeForm;
