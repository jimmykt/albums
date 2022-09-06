import { combineReducers } from "redux";

import imagesReducer from "./imagesReducer";
import liked from "./likedReducers";

import {
  toggleSignUpReducer,
  toggleLoginReducer,
  isLogged,
} from "./userToggles";
import { User } from "./User.js";

const allReducers = combineReducers({
  images: imagesReducer,
  isSignUpToggle: toggleSignUpReducer,
  isLoginToggle: toggleLoginReducer,
  isLogged,
  User,
  liked,
});

export default allReducers;
