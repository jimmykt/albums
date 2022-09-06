import "./HomePage.scss";
import ImageList from "../components/Image/ImageList";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../api/API.js";
import { storeUser } from "../state/actions/User";
import { isLogged } from "../state/actions/userToggles";

function HomePage() {
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.isLogged);
  const User = useSelector((state) => state.User);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    axios
      .get(API + "/users/currentuser", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (Object.keys(User).length === 0) {
          dispatch(storeUser(res.data.user));
        }
        if (!isLoggedin) {
          dispatch(isLogged());
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  if (isLoggedin) {
    return (
      <main className="home">
        <p>{User.first_name}</p>
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
