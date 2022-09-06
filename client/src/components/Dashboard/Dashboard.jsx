import "./Dashboard.scss";

import { useSelector, useDispatch } from "react-redux";
import { isLogged } from "../../state/actions/userToggles";
import { logOutUser } from "../../state/actions/User";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.User);

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(isLogged());
    dispatch(logOutUser());
  };

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <h1 className="dashboard__name">
          {User.first_name.charAt(0).toUpperCase() + User.first_name.slice(1)}{" "}
          {User.last_name.charAt(0).toUpperCase() + User.last_name.slice(1)}{" "}
          Dashboard
        </h1>
        <Link to="/" className="link">
          <button className="dashboard__logoutbutton" onClick={logout}>
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
