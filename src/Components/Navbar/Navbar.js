import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Image/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo-container">
          <img src={Logo} alt="website logo" />
        </div>
        <div>
          <div className="link-container">
            <NavLink
              className={({ isActive }) => isActive ? 'active-link' : 'link' }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive ? 'active-link' : 'link' }
              to="/videos"
            >
              Videos
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive ? 'active-link' : 'link' }
              to="/login"
            >
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
