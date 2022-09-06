import "./User.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin, isLogged } from "../../state/actions/userToggles";
import { logOutUser } from "../../state/actions/User";
import { Link } from "react-router-dom";
import dashboard from "../../assets/icons/dashboard.png";

function User() {
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.isLogged);

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(isLogged());
    dispatch(logOutUser());
  };

  if (!isLoggedin) {
    return (
      <div
        className="User"
        onClick={() => {
          dispatch(toggleLogin());
        }}
      >
        login
      </div>
    );
  } else {
    return (
      <Link to="/dashboard" className="link">
        <div className="dash">
          <img className="dash__img" src={dashboard} alt="dashboard" />
        </div>
      </Link>
    );
  }
}

export default User;
