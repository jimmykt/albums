import "./ImageCard.scss";
import heart from "../../assets/icons/heart.svg";
import axios from "axios";
import { API } from "../../api/API";
import { useSelector } from "react-redux";

function ImageCard({ Image }) {
  const User = useSelector((state) => state.User);
  // const Images = useSelector((state) => state.images);

  const likedPhoto = () => {
    const like = {
      user_id: User.user_id,
      image_id: Image.id,
    };
    console.log(like);
    axios
      .post(API + "/images/addlike", like)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="imageCard">
      <img
        className="imageCard__image"
        alt={Image.alt}
        src={Image.src.medium}
      />
      <div className="imageCard__info-container">
        <p className="imageCard__photographer">By: {Image.photographer}</p>
        <img
          className="imageCard__like-svg"
          onClick={likedPhoto}
          src={heart}
          alt="heart"
        />
      </div>
    </div>
  );
}

export default ImageCard;
