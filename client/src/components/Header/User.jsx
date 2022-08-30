import "./User.scss";
import React, { useState } from "react";

function User({ userClick }) {
  return (
    <div className="User" onClick={userClick}>
      login
    </div>
  );
}

export default User;
