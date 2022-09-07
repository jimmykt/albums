import "./Dashboard.scss";

import { useSelector, useDispatch } from "react-redux";
import { isLogged } from "../../state/actions/userToggles";
import { logOutUser } from "../../state/actions/User";
import { Link } from "react-router-dom";

// import { ID_API } from "../../api/pexels_API";
// import { createClient } from "pexels";
// import pexels from "../../api/pexels_API";
import pexels from "../../api/pexels_API";

function Header() {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.User);
  console.log(User);

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(isLogged());
    dispatch(logOutUser());
  };

  const UpperCaseFirst = (string) => {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  };

  const displayLikedPhotos = async () => {
    const response = await pexels.get(`/v1/photos/170811`);
    console.log(response);
  };

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <h1 className="dashboard__name">
          {UpperCaseFirst(User.first_name)} {UpperCaseFirst(User.last_name)}
          {"'s "}
          Dashboard
        </h1>
        <Link to="/" className="link">
          <button className="dashboard__logoutbutton" onClick={logout}>
            Logout
          </button>
        </Link>
      </div>
      <button className="dashboard__button" onClick={displayLikedPhotos}>
        Liked Photos
      </button>
    </div>
  );
}

export default Header;
