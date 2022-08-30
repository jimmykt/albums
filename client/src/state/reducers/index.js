import { combineReducers } from "redux";

import storeUser from "./storeUserReducer";

const allReducers = combineReducers({
  User: storeUser,
});

export default allReducers;
