import "./Header.scss";

import React, { useState } from "react";
import pexels from "../../api/pexels_API";
import SearchSVG from "../../assets/icons/search.svg";
import UserComponent from "./User";

function Header() {
  const [search, setSearch] = useState("");
  const [found, setFound] = useState(0);

  const searchClick = (e) => {
    setSearch(e.target.value);
    onSearchSubmit(e.target.value);
  };

  const onSearchSubmit = async (term) => {
    const response = await pexels.get(`/v1/search`, {
      params: {
        query: term,
        per_page: 15,
        page: 1,
      },
    });
    setFound(response.data.photos);
    console.log(found);
  };

  return (
    <header className="header">
      <div className="header__logo-container">
        <h1 className="header__logo-title">Albums</h1>
      </div>

      <form className="header__form">
        <input
          className="header__search-imput"
          type="text"
          name="name"
          placeholder="Search"
          onChange={searchClick}
        ></input>
        <img className="header__search-icon" src={SearchSVG} alt="search"></img>
      </form>

      <UserComponent />
    </header>
  );
}

export default Header;
