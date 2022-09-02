import "./ImageCard.scss";

function ImageCard({ Image }) {
  console.log(Image);

  return (
    <div className="imageCard">
      <img
        className="imageCard__image"
        alt={Image.alt}
        src={Image.src.medium}
      />
      <p className="imageCard__photographer">By: {Image.photographer}</p>
    </div>
  );
}

export default ImageCard;
