import React, { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import Logo from "../../Assets/Image/logo.png";
import ActiveLink from '../ActiveLink/ActiveLink';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const pathName = location.pathname;

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <div className={pathName.includes('blog') ? 'navbar hidden' : 'navbar'}>
      <nav className="nav custom-grid">
        <ActiveLink to="/">
          <img src={Logo} alt="Website Logo" className="nav__logo" />
        </ActiveLink>

        <div className={toggle ? "nav__menu" : "nav__menu nav__menu-hide"}>
          <ul className="nav__list">
            <li className="nav__item">
              <ActiveLink to="/home">
                Home
              </ActiveLink>
            </li>
            <li className="nav__item">
              <ActiveLink to="/videos">
                Videos
              </ActiveLink>
            </li>
            <li className="nav__item">
              <ActiveLink to="/login">
                Login
              </ActiveLink>
            </li>
          </ul>
        </div>

        <button className='nav__toggle' onClick={handleToggle}>
          {
            toggle ? <MdOutlineClose className='nav__toggle-icon'  /> : <HiOutlineMenuAlt4 className='nav__toggle-icon' />
          }          
        </button>
      </nav>
    </div>
  );
};

export default Navbar;