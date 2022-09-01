import { combineReducers } from "redux";

import imagesReducer from "./imagesReducer";
import {
  toggleSignUpReducer,
  toggleLoginReducer,
  isLogged,
} from "./userToggles";

const allReducers = combineReducers({
  images: imagesReducer,
  isSignUpToggle: toggleSignUpReducer,
  isLoginToggle: toggleLoginReducer,
  isLogged,
});

export default allReducers;
