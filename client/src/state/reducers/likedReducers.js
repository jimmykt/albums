export const liked = (state = {}, action) => {
  switch (action.type) {
    case "LIKE_IMG":
      return (state = action.payload);
    case "LOGOUT":
      return (state = {});
    default:
      return state;
  }
};

export default liked;
