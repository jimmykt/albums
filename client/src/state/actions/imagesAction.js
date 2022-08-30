export const storeImages = (data) => {
  return {
    type: "STORE",
    payload: data,
  };
};

export const removeImages = () => {
  return {
    type: "REMOVE",
  };
};
