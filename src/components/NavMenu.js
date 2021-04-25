import React from 'react';
import { Link } from "react-router-dom";
import useAuth from '../hooks/auth';

const NavMenu = () => {
  const { isSignedIn, onSignOut } = useAuth();

  const handleSignOut = e => {
    onSignOut();
  };

  return (
    <div>
      <ul>
        <li><Link to="/app/home">Home</Link></li>
        {isSignedIn ? (
          <li><button onClick={handleSignOut}>Sign Out</button></li>
        ) : (
          <li><Link to="/app/sign-in">Sign In</Link></li>
        )}
      </ul>
    </div>
  );
};

export default NavMenu;
