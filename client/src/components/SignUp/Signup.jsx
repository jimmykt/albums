import "./SignUp.scss";
import React, { useState, useRef } from "react";

function SignUp() {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputReference = useRef(null);

  return (
    <div className="Signup">
      <form className="Signup__form">
        <input
          className="Signup__input"
          ref={inputReference}
          type={"text"}
          name={"first-name"}
          id={"first-name"}
          placeholder="First Name"
          onChange={(e) =>
            setNewUser({ ...newUser, firstName: e.target.value })
          }
        />

        <input
          className="Signup__input"
          type={"text"}
          name={"last-name"}
          id={"last-name"}
          placeholder="Last Name"
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
        />

        <input
          className="Signup__input"
          type={"text"}
          name={"email"}
          id={"email"}
          placeholder="email"
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />

        <input
          className="Signup__input"
          type={"password"}
          name={"password"}
          id={"password"}
          placeholder="Password"
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
        <input
          className="Signup__input"
          type={"password"}
          name={"password-confirm"}
          id={"password-confirm"}
          placeholder="Confirm Password"
          onChange={(e) =>
            setNewUser({ ...newUser, confirmPassword: e.target.value })
          }
        />
        <button className="Signup__button">Sign Up</button>
        <span className="Signup__response"></span>
      </form>
    </div>
  );
}

export default SignUp;
