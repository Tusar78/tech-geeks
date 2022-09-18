import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../firebase.init.js";

const Login = () => {
  const [toggle, setToggle] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const handleCheckbox = (e) => {
    setToggle(e.target.checked);
  };

  const handleGoogleProvider = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // const user = result.user;
        // console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  return (
    <section className="section">
      <div className="form-container custom-grid">
        <div className="form">
          {toggle ? (
            <form>
              <h2 className="form__title">Login</h2>
              <div className="form__group">
                <label htmlFor="email" className="form__label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form__input email"
                />
              </div>
              <div className="form__group">
                <label htmlFor="password" className="form__label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form__input password"
                />
              </div>
              <button type="submit" className="form__button">
                Login
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="form__title">Sign Up</h2>
              <div className="form__group">
                <label htmlFor="email" className="form__label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form__input email"
                />
              </div>
              <div className="form__group">
                <label htmlFor="password" className="form__label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form__input password"
                />
              </div>
              <div className="form__group">
                <label htmlFor="confirmedPassword" className="form__label">
                  Confirmed Password
                </label>
                <input
                  type="password"
                  name="confirmed-password"
                  id="confirmedPassword"
                  className="form__input confirmed-password"
                />
              </div>
              <button type="submit" className="form__button">
                Sign Up
              </button>
            </form>
          )}

          <div className="form__login-register">
            <span className="form__loginRegister-demo">
              {toggle ? "New To Tech Geeks?" : "Already have an account?"}
            </span>
            <div className="flex">
              <input
                type="checkbox"
                name="checkbox"
                className="hidden"
                id="loginRegister"
                onClick={handleCheckbox}
              />
              <label
                htmlFor="loginRegister"
                className="form__loginRegister-text"
              >
                {toggle ? "Create An Account" : "Log in"}
              </label>
            </div>
          </div>
          <p className="form__divider">or</p>

          <button className="form__google-btn" onClick={handleGoogleProvider}>
            <FcGoogle className="form__google-btn-icon" />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
