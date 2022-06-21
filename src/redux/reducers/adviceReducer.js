import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  advice: [],
};

export const adviceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ADVICE:
      return { ...state, advice: payload };
    default:
      return state;
  }
};
