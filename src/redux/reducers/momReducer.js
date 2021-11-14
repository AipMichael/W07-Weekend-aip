import { combineReducers } from "redux";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";

const momReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
});

export default momReducer;
