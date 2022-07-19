import React, { useEffect } from "react";
import LoggedInNavbar from "./../parts/LoggedInNavbar";
import Navbar from "./../parts/Navbar";
import Footer from "./../parts/Footer";
import { useDispatch } from "react-redux";
import RecipeComponent from "../parts/RecipeComponent";
import axios from "axios";
import { setRecipes } from "../../redux/actions/recipesActions";
import "../../styles/pages/recipesPage.css";

const RecipesPage = () => {
  const dispatch = useDispatch();

  const fetchRecipes = async () => {
    const response = await axios
      .get(`${process.env.REACT_APP_API_URI}api/recipes`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setRecipes(response.data["hydra:member"]));
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="recipes-wrapper">
      {localStorage.getItem("user") ? (
        <LoggedInNavbar className="navbar" />
      ) : (
        <Navbar className="navbar" />
      )}
      <div className="recipe-list">
        <RecipeComponent />
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default RecipesPage;
