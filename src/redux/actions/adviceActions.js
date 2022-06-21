import { ActionTypes } from "../constants/actionTypes";

export const setAdvice = (advice) => {
  return {
    type: ActionTypes.SET_ADVICE,
    payload: advice,
  };
};
