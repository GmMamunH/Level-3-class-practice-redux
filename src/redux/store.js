import { createStore } from "redux";
import { reducer } from "./staticCounter/reducer";

export const store = createStore(reducer);
