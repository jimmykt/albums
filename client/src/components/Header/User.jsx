import "./User.scss";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin, isLogged } from "../../state/actions/userToggles";

function User() {
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.isLogged);
  console.log(isLoggedin);

  const logout = () => {
    dispatch(isLogged());
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
