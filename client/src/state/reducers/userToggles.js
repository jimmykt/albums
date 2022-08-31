export const toggleSignUpReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE":
      return !state;
    default:
      return state;
  }
};

export const toggleLoginReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE":
      return !state;
    default:
      return state;
  }
};
