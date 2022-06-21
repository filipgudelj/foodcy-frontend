import React from "react";
import { useSelector } from "react-redux";
import Placeholder from "../../images/Placeholder.jpg";
import { Link } from "react-router-dom";
import RecipeImage from "./RecipeImage";
import "../../styles/parts/recipeComponent.css";

const RecipeComponent = () => {
  const recipes = useSelector((state) => state.allRecipes.recipes);

  const renderList = recipes.map((recipe) => {
    const { id, title, company, image } = recipe;
    return (
      <div className="recipe-wrapper" key={id}>
        {company !== "" && company !== null ? (
          <div className="recipe-wrapper-company">{company}</div>
        ) : null}
        <div className="recipe-wrapper-title">{title}</div>
        {image === null ? (
          <img src={Placeholder} className="recipe-wrapper-img" />
        ) : (
          <RecipeImage image={image} />
        )}
        <Link to={`/recipes/${id}`}>
          <button className="read-more-btn">READ MORE</button>
        </Link>
      </div>
    );
  });
  return renderList;
};

export default RecipeComponent;
