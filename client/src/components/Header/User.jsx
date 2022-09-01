import "./User.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin, isLogged } from "../../state/actions/userToggles";
import { logOutUser } from "../../state/actions/User";

function User() {
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.isLogged);
  const User = useSelector((state) => state.User);

  console.log("isLogged: " + isLoggedin);
  console.log("User: ");
  console.log(User);

  const logout = () => {
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
      <div
        className="User-logout"
        onClick={() => {
          logout();
        }}
      >
        LogOut
      </div>
    );
  }
}

export default User;
