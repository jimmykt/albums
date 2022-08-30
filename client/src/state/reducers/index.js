import { combineReducers } from "redux";

import imagesReducer from "./imagesReducer";

const allReducers = combineReducers({
  images: imagesReducer,
});

export default allReducers;
