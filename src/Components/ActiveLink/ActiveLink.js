import React from 'react';
import { useResolvedPath, useMatch, Link } from 'react-router-dom';

const ActiveLink = ({ to, children, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true })
  return (
    <>
      <Link
        className={match ? 'nav__link text-[#1B4388]' : 'nav__link'}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </>
  );
};

export default ActiveLink;