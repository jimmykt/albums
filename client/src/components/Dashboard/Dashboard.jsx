import "./Dashboard.scss";

import { useSelector, useDispatch } from "react-redux";
import { isLogged } from "../../state/actions/userToggles";
import { logOutUser } from "../../state/actions/User";
import { Link } from "react-router-dom";

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
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <h1 className="dashboard__name">
          {UpperCaseFirst(User.first_name)} {UpperCaseFirst(User.last_name)}{" "}
          Dashboard
        </h1>
        <Link to="/" className="link">
          <button className="dashboard__logoutbutton" onClick={logout}>
            Logout
          </button>
        </Link>
      </div>
      <button className="dashboard__button">Liked Photos</button>
    </div>
  );
}

export default Header;
