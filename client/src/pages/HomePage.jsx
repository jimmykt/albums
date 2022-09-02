import "./HomePage.scss";
import ImageList from "../components/Image/ImageList";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../api/API.js";

function HomePage() {
  const isLoggedin = useSelector((state) => state.isLogged);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    // console.log(token);
    // console.log(isLoggedin);

    axios
      .get(API + "/users/currentuser", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        // console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  if (isLoggedin) {
    return (
      <main className="home">
        <ImageList />
      </main>
    );
  } else {
    return (
      <main className="home">
        <ImageList />
        <p>please login</p>
      </main>
    );
  }
}

export default HomePage;
