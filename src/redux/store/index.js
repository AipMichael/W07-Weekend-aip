import { createStore, applyMiddleware } from "redux";
import momReducer from "../reducers/momReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const configureStore = () => {
  return createStore(momReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default configureStore;
