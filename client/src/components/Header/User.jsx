import "./User.scss";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleLogin, toggleSignUp } from "../../state/actions/userToggles";

function User() {
  const dispatch = useDispatch();

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
}

export default User;
