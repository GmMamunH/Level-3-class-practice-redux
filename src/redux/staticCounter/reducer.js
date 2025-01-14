import { DECREMENT, INCREMENT, RESET } from "./actionTypes";

const initialState = {
  value: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 2,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    case RESET:
      return { ...state, value: (state.value = 0) };
    default:
      return state;
  }
};
