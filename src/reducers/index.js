import collectionReducer from "./collection";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  collectionReducer
});

export default allReducers;
