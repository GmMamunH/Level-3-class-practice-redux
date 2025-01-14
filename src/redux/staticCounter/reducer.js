import { DECREMENT, INCREMENT, RESET } from "./actionTypes";

const initialState = {
  value: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload.value,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload.value,
      };

    case RESET:
      return { ...state, value: (state.value = 0) };
    default:
      return state;
  }
};
export default reducer;
