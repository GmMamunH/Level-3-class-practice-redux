import {
  DYNAMIC_DECREMENT,
  DYNAMIC_INCREMENT,
  DYNAMIC_RESET,
} from "./actionTypes";

const initialState = {
  value: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DYNAMIC_INCREMENT:
      return {
        ...state,
        value: state.value + action.payload.value,
      };
    case DYNAMIC_DECREMENT:
      return {
        ...state,
        value: state.value - action.payload.value,
      };

    case DYNAMIC_RESET:
      return { ...state, value: (state.value = 0) };
    default:
      return state;
  }
};
export default reducer