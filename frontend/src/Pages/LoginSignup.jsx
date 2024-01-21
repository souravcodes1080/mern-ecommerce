import React, { useState } from "react";
import "./pagesCss/loginSignup.css";
function LoginSignup() {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log(formData)
  };
  const signup = async () => {
    console.log(formData)
  };

  return (
    <>
      <div className="loginSignup">
        <div className="loginSignup-container">
          <h1>{state}</h1>
          <div className="loginSignup-fields">
            {state === "Signup" ? (
              <input
                name="username"
                value={formData.username}
                onChange={changeHandler}
                type="text"
                placeholder="Name"
              />
            ) : (
              <></>
            )}
            <input
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="email"
              placeholder="Email"
            />
            <input
              name="password"
              value={formData.password}
              onChange={changeHandler}
              type="password"
              placeholder="Password"
            />
          </div>

          {state === "Signup" ? (
            <p className="loginSignup-login">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setState("Login");
                }}
              >
                Login
              </span>
            </p>
          ) : (
            <p className="loginSignup-login">
              Create An Account{" "}
              <span
                onClick={() => {
                  setState("Signup");
                }}
              >
                Sign Up
              </span>
            </p>
          )}

          <div className="loginSignup-agree">
            <input type="checkbox" name="" id="" />
            <p>I agree to the terms of use & policy privacy.</p>
          </div>
          <button
            onClick={() => {
              state === "Login" ? login() : signup();
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginSignup;
