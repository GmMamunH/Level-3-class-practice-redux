import { DECREMENT, INCREMENT, RESET } from "./actionTypes";

export const increment = (value) => {
  return {
    type: INCREMENT,
    payload:{
      value: 5
    }
  };
};

export const decrement = (value) => {
  return {
    type: DECREMENT,
    payload:{
      value:2
    }
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
