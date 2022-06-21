import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectedRecipe,
  removeSelectedRecipe,
} from "../../redux/actions/recipesActions";
import Placeholder from "../../images/Placeholder.jpg";
import { Link } from "react-router-dom";
import RecipeImage from "./RecipeImage";
import "../../styles/parts/recipeDetails.css";

const RecipeDetails = () => {
  const recipe = useSelector((state) => state.recipe);
  const { title, ingredients, steps, timeToEat, image } = recipe;
  const { recipeId } = useParams();
  const dispatch = useDispatch();

  const fetchRecipeDetails = async () => {
    const response = await axios
      .get(`http://localhost:8000/api/recipes/${recipeId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedRecipe(response.data));
  };

  useEffect(() => {
    if (recipeId && recipeId !== "") fetchRecipeDetails();
    return () => {
      dispatch(removeSelectedRecipe());
    };
  }, [recipeId]);

  return (
    <div className="recipe-details-wrapper">
      {Object.keys(recipe).length === 0 ? (
        <div className="loading">...Loading</div>
      ) : (
        <div className="recipe-details">
          <div className="recipe-details-img-wrapper">
            {image === null ? (
              <img src={Placeholder} className="recipe-wrapper-img" />
            ) : (
              <RecipeImage image={image} />
            )}
          </div>
          <ul className="recipe-details-list">
            <li className="recipe-details-list-item recipe-details-list-item-title">
              {title}
            </li>
            <li className="recipe-details-list-item">
              Time To Eat:
              <br />
              <br /> {timeToEat}
            </li>
            <li className="recipe-details-list-item">
              Ingredients:
              <br />
              <br /> {ingredients}
            </li>
            <li className="recipe-details-list-item">
              Steps:
              <br />
              <br /> {steps}
            </li>
          </ul>
          <Link to="/recipes" className="return-link">
            <button className="return-button">&#8592;</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
