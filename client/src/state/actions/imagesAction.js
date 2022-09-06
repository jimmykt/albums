export const storeImages = (data) => {
  return {
    type: "STORE_IMAGES",
    payload: data,
  };
};

export const removeImages = () => {
  return {
    type: "REMOVE_IMAGES",
  };
};
