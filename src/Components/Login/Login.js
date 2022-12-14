import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../firebase.init.js";
import toast from "react-hot-toast";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [toggle, setToggle] = useState(true);
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmedPassword, setConfirmedPassword] = useState({
    value: "",
    error: "",
  });

  // console.log(email);

  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const handleCheckbox = (e) => {
    setToggle(e.target.checked);
  };

  const handleGoogleProvider = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        toast.success("Login success");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const handleEmail = (emailInput) => {
    if (/^\S+@\S+\.\S+$/.test(emailInput)) {
      setEmail({ value: emailInput, error: "" });
    } else {
      setEmail({ value: "", error: "Invalid email" });
    }
  };

  /* 
  Minimum six characters, at least one uppercase letter, one lowercase letter and      
  one number: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$"
  */

  const handlePassword = (passwordInput) => {
    const validPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (validPass.test(passwordInput)) {
      setPassword({ value: passwordInput, error: "" });
    } else {
      setPassword({
        value: "",
        error:
          "Minimum six characters, at least one uppercase letter, one lowercase letter and one number",
      });
    }
  };

  const handleConfirmedPassword = (confirmedPasswordInput) => {
    if (confirmedPasswordInput === password.value) {
      setConfirmedPassword({ value: confirmedPasswordInput, error: "" });
    } else {
      setConfirmedPassword({ value: "", error: "Password is miss mass" });
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        toast.success("Login success");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email.value && !password.value) {
      setEmail({ value: "", error: "Required email" });
      setPassword({ value: "", error: "Required Password" });
    }

    if (
      email.value &&
      password.value &&
      confirmedPassword.value === password.value
    ) {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((result) => {
          // Signed in
          toast.success("Account Created");
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          if (errorMessage.includes('auth/email-already-in-use')) {
            toast.error('Email already exist');            
          } else {
            toast.error(errorMessage);            
          }
        });
    }
  };

  return (
    <section className="section">
      <div className="form-container custom-grid">
        <div className="form">
          {toggle ? (
            <form onSubmit={handleSignIn}>
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
            <form onSubmit={handleSignUp}>
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
                  onBlur={(event) => handleEmail(event.target.value)}
                />
                {email?.error && <p className="text-red-500">{email.error}</p>}
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
                  onBlur={(event) => handlePassword(event.target.value)}
                />
                {password?.error && (
                  <p className="text-red-500">{password.error}</p>
                )}
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
                  onBlur={(event) =>
                    handleConfirmedPassword(event.target.value)
                  }
                />
                {confirmedPassword?.error && (
                  <p className="text-red-500">{confirmedPassword.error}</p>
                )}
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
