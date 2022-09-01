import { combineReducers } from "redux";

import imagesReducer from "./imagesReducer";
import { toggleSignUpReducer, toggleLoginReducer } from "./userToggles";

const allReducers = combineReducers({
  images: imagesReducer,
  isSignUpToggle: toggleSignUpReducer,
  isLoginToggle: toggleLoginReducer,
});

export default allReducers;
