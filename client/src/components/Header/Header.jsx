import "./Header.scss";
import pexels from "../../api/pexels_API";
import SearchSVG from "../../assets/icons/search.svg";
import UserComponent from "./User";
import Login from "../Login/Login";
import SignUp from "../SignUp/Signup";

import { useSelector, useDispatch } from "react-redux";
import { storeImages } from "../../state/actions/imagesAction";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();

  const isLoginToggle = useSelector((state) => state.isLoginToggle);
  const isSignUpToggle = useSelector((state) => state.isSignUpToggle);

  const searchClick = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    searchAPI(e.target.value);
  };

  const searchAPI = async (term) => {
    const response = await pexels.get(`/v1/search`, {
      params: {
        query: term,
        per_page: 20,
        page: 1,
      },
    });
    dispatch(storeImages(response.data.photos));
  };

  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/" className="link">
          <h1 className="header__logo-title">Albums</h1>
        </Link>
        <UserComponent />
      </div>

      <form className="header__form" onSubmit={searchClick}>
        <input
          className="header__search-imput"
          type="text"
          name="name"
          placeholder="Search"
          onChange={searchClick}
        ></input>

        <input
          className="header__search-icon"
          type="image"
          src={SearchSVG}
          alt="Submit Form"
        />
      </form>

      {isLoginToggle ? <Login /> : ""}
      {isSignUpToggle ? <SignUp /> : ""}
    </header>
  );
}

export default Header;
