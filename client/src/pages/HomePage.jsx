import "./HomePage.scss";
import ImageList from "../components/Image/ImageList";
import axios from "axios";
import { API } from "../api/API.js";

function HomePage() {
  const getUser = () => {
    axios
      .get(API + "/users/getallusers")
      .then((res) => {
        console.log(res);
        console.log("hi");
      })
      .catch((err) => {
        console.log(err);
        console.log("no");
      });
  };

  return (
    <main>
      {getUser()}
      <ImageList />
    </main>
  );
}

export default HomePage;
