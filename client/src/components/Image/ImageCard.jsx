import "./ImageCard.scss";
import heart from "../../assets/icons/heart.svg";

function ImageCard({ Image }) {
  console.log(Image);

  return (
    <div className="imageCard">
      <img
        className="imageCard__image"
        alt={Image.alt}
        src={Image.src.medium}
      />
      <div className="imageCard__info-container">
        <p className="imageCard__photographer">By: {Image.photographer}</p>
        <img className="imageCard__like-svg" src={heart} alt="heart" />
      </div>
    </div>
  );
}

export default ImageCard;
