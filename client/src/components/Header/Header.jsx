import "./Header.scss";

import React, { useState } from "react";
import pexels from "../../api/pexels_API";
import SearchSVG from "../../assets/icons/search.svg";
import UserComponent from "./User";
import Login from "../Login/Login";

import { useSelector, useDispatch } from "react-redux";
import { storeImages } from "../../state/actions/imagesAction";
function Header() {
  const dispatch = useDispatch();
  const Images = useSelector((state) => state.images);
  const [showLogin, setShowLogin] = useState(false);

  const searchClick = (e) => {
    e.preventDefault();
    onSearchSubmit(e.target[0].value);
  };
  const onSearchSubmit = async (term) => {
    const response = await pexels.get(`/v1/search`, {
      params: {
        query: term,
        per_page: 15,
        page: 1,
      },
    });
    dispatch(storeImages(response.data.photos));
  };

  const userClick = () => {
    setShowLogin(!showLogin);
    console.log(showLogin);
  };

  return (
    <header className="header">
      <div className="header__logo-container">
        <h1 className="header__logo-title">Albums</h1>
        <UserComponent userClick={userClick} />
      </div>

      <form className="header__form" onSubmit={searchClick}>
        <input
          className="header__search-imput"
          type="text"
          name="name"
          placeholder="Search"
        ></input>

        <input
          className="header__search-icon"
          type="image"
          src={SearchSVG}
          alt="Submit Form"
        />
      </form>

      {showLogin ? <Login /> : ""}
    </header>
  );
}

export default Header;
