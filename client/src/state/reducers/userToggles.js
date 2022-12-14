export const toggleSignUpReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_SIGNUP":
      return !state;
    default:
      return state;
  }
};

export const toggleLoginReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_LOGIN":
      return !state;
    default:
      return state;
  }
};

export const isLogged = (state = false, action) => {
  switch (action.type) {
    case "IS_LOGGED":
      return !state;
    default:
      return state;
  }
};
