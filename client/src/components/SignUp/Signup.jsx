import "./SignUp.scss";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleSignUp } from "../../state/actions/userToggles";
import { API } from "../../api/API";
import axios from "axios";

function SignUp() {
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signupMessage, setSignupMessage] = useState(0);

  const submitForm = (e) => {
    e.preventDefault();
    if (newUser.password === newUser.confirmPassword) {
      axios
        .post(API + "/users/signup", newUser)
        .then((res) => {
          console.log(res.data.users);
        })
        .catch((err) => {
          console.log(err.response);
          setSignupMessage(err.response.data);
        });
    } else {
      setSignupMessage("Password do not match");
    }
  };
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
        <button
          className="Signup__button"
          onClick={(e) => {
            submitForm(e);
          }}
        >
          Sign Up
        </button>
        <button
          className="Signup__button-cancel"
          onClick={() => {
            dispatch(toggleSignUp());
          }}
        >
          x
        </button>
      </form>

      <p className="Signup__message"> {signupMessage ? signupMessage : ""}</p>
    </div>
  );
}

export default SignUp;
