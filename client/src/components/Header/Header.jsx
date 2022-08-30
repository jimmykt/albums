import "./Header.scss";
import { Link } from "react-router-dom";

import UserComponent from "./User";
import SearchSVG from "../../assets/icons/search.svg";

function Header() {
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
        ></input>
        <img className="header__search-icon" src={SearchSVG} alt="search"></img>
      </form>

      <UserComponent />
    </header>
  );
}

export default Header;
