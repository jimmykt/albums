export const imagesReducer = (state = {}, action) => {
  switch (action.type) {
    case "STORE":
      return (state = action.payload);
    case "REMOVE":
      return (state = {});
    default:
      return state;
  }
};

export default imagesReducer;
