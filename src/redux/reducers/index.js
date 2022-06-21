import { combineReducers } from "redux";
import { recipeReducer, selectedRecipeReducer } from "./recipeReducer";
import { adviceReducer } from "./adviceReducer";

const reducers = combineReducers({
  allRecipes: recipeReducer,
  recipe: selectedRecipeReducer,
  allAdvice: adviceReducer,
});

export default reducers;
