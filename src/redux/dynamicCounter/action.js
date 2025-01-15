/* eslint-disable no-unused-vars */
import {
  DYNAMIC_DECREMENT,
  DYNAMIC_INCREMENT,
  DYNAMIC_RESET,
} from "./actionTypes";

export const increment = (value) => {
  return {
    type: DYNAMIC_INCREMENT,
    payload: {
      value: 5,
    },
  };
};

export const decrement = (value) => {
  return {
    type: DYNAMIC_DECREMENT,
    payload: {
      value: 2,
    },
  };
};

export const reset = () => {
  return {
    type: DYNAMIC_RESET,
  };
};
