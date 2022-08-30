import React, { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import app from "../../firebase.init";

const auth = getAuth(app)

const Login = () => {
  const [toggle, setToggle] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const handleCheckbox = (e) => {
    setToggle(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
      })
  }

  return (
    <section className="section">
      <div className="form-container custom-grid">
        <div className="form">
          <form>
            <h2 className="form__title">{toggle ? "Login" : "Sign Up"}</h2>
            {
              toggle ? (
                <>
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
                </>
              ) : (
                <>
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
                </>
            )}

            <button type="submit" className="form__button" onClick={handleSubmit}>
              {toggle ? "Login" : "Sign Up"}
            </button>
          </form>

          <div className="form__login-register">
            <span className="form__loginRegister-demo">
              {
                toggle ? 'New To Tech Geeks?' : 'Already have an account?'
              }
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
                {
                  toggle ? 'Create An Account' : 'Log in'
                }                
              </label>
            </div>
          </div>
          <p className="form__divider">or</p>

          <button className="form__google-btn">
            <FcGoogle className="form__google-btn-icon" />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
