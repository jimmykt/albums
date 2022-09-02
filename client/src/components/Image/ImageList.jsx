import ImageCard from "./ImageCard";
import { useSelector } from "react-redux";
import "./ImageList.scss";

function ImageList() {
  const Images = useSelector((state) => state.images);

  if (Images.length !== undefined) {
    return (
      <div className="ImageList">
        {Images.map((image) => {
          return <ImageCard key={image.id} Image={image} />;
        })}
      </div>
    );
  }
}

export default ImageList;
