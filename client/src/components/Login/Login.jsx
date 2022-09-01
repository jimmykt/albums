import "./Login.scss";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  toggleLogin,
  toggleSignUp,
  isLogged,
} from "../../state/actions/userToggles";
import { storeUser } from "../../state/actions/User";
import { API } from "../../api/API";
import axios from "axios";

function Login() {
  const dispatch = useDispatch();

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const signUpClicked = (e) => {
    e.preventDefault();
    dispatch(toggleLogin());
    dispatch(toggleSignUp());
  };

  const loginCLick = (e) => {
    e.preventDefault();
    axios
      .post(API + "/users/login", loginUser)
      .then((res) => {
        console.log(res.data.user);
        localStorage.setItem("token", res.data.token);
        dispatch(isLogged());
        dispatch(toggleLogin());
        dispatch(storeUser(res.data.user));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const inputReference = useRef(null);

  return (
    <div className="login">
      <form className="login__form" action="submit">
        <input
          className="input login__username"
          ref={inputReference}
          type="text"
          name="email"
          id="email"
          placeholder="email"
          onChange={(e) =>
            setLoginUser({ ...loginUser, email: e.target.value })
          }
        />
        <input
          className="input login__password"
          type="password"
          name="passowrd"
          id="password"
          placeholder="password"
          onChange={(e) =>
            setLoginUser({ ...loginUser, password: e.target.value })
          }
        />
        <div className="login__button-container">
          <button
            className="button login__button"
            onClick={(e) => {
              loginCLick(e);
            }}
          >
            login
          </button>
          <button
            className="button login__button"
            onClick={(e) => {
              signUpClicked(e);
            }}
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
