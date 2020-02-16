import collectionReducer from "./collection";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  collectionReducer,
  isLogged: loggedReducer
});

export default allReducers;
