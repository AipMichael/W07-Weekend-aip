import { combineReducers } from "redux";
import userReducer from "./userReducer";

const momReducer = combineReducers({
  user: userReducer,
});

export default momReducer;
