export const likedImage = (img) => {
  return {
    type: "LIKE_IMG",
    payload: img,
  };
};
