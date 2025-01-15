import { combineReducers } from "redux";
import staticReducerCounter from "./staticCounter/reducer";
import dynamicReducerCounter from "./dynamicCounter/reducer";
const rootReducer = combineReducers({
  staticCounter: staticReducerCounter,
  dynamicCounter: dynamicReducerCounter,
});
export default rootReducer;
