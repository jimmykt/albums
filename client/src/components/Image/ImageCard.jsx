function ImageCard({ Image }) {
  console.log(Image);

  return (
    <div>
      <img alt={Image.alt} src={Image.src.medium} />
    </div>
  );
}

export default ImageCard;
