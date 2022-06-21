import React, { Component } from "react";
import RegisterForm from "./components/forms/RegisterForm.jsx";
import LoginForm from "./components/forms/LoginForm.jsx";
import CreateRecipeForm from "./components/forms/CreateRecipeForm.jsx";
import CreateAdviceForm from "./components/forms/CreateAdviceForm.jsx";
import HomePage from "./components/pages/HomePage.jsx";
import NotFoundPage from "./components/pages/NotFoundPage";
import AboutPage from "./components/pages/AboutPage.jsx";
import RecipesPage from "./components/pages/RecipesPage.jsx";
import RecipeDetails from "./components/parts/RecipeDetails.jsx";
import AdvicePage from "./components/pages/AdvicePage.jsx";
import { Route, Routes, Navigate, Router } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/create-recipe" element={<CreateRecipeForm />} />
        <Route path="/create-advice" element={<CreateAdviceForm />} />
        <Route path="/advice" element={<AdvicePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="not-found" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
