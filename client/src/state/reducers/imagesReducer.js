export const imagesReducer = (state = {}, action) => {
  switch (action.type) {
    case "STORE_IMAGES":
      return (state = action.payload);
    case "REMOVE_IMAGES":
      return (state = {});
    default:
      return state;
  }
};

export default imagesReducer;
