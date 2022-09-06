export const User = (state = {}, action) => {
  switch (action.type) {
    case "STORE_USER":
      return (state = action.payload);
    case "LOGOUT":
      return (state = {});
    default:
      return state;
  }
};

export default User;
