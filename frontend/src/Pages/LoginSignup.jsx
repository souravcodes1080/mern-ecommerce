import React from "react";
import "./pagesCss/loginSignup.css";
function LoginSignup() {
  return (
    <>
      <div className="loginSignup">
        <div className="loginSignup-container">
          <h1>Sign Up</h1>
          <div className="loginSignup-fields">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>

          <p className="loginSignup-login">
            Already have an account? <span>Login</span>
          </p>
          <div className="loginSignup-agree">
            <input type="checkbox" name="" id="" />
            <p>I agree to the terms of use & policy privacy.</p>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </>
  );
}

export default LoginSignup;
