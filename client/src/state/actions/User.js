export const storeUser = (user) => {
  return {
    type: "STORE_USER",
    payload: user,
  };
};

export const logOutUser = () => {
  return {
    type: "LOGOUT",
  };
};
