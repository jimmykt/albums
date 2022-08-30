import "./Login.scss";
import React, { useState, useRef } from "react";

function Login({ toggleSignup }) {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
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
          <button className="button login__button">login</button>
          <button className="button login__button">SignUp</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
