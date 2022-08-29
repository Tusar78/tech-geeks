import React, { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import Logo from "../../Assets/Image/logo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <div className='navbar'>
      <nav className="nav custom-grid">
        <img src={Logo} alt="Website Logo" className="nav__logo" />

        <div className="nav__menu">
          <a href="/" className="nav__link">Home</a>
          <a href="/" className="nav__link">Videos</a>
          <a href="/" className="nav__link">Login</a>
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