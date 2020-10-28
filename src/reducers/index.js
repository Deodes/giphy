import { combineReducers } from "redux";
import gifs from "./gifs";
import inputValue from "./inputValue";
import offset from "./offset";

const rootReducer = combineReducers({
  gifs,
  inputValue,
  offset,
});

export default rootReducer;