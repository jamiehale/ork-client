import React from 'react';
import { Link } from "react-router-dom";
import useAuth from '../hooks/auth';

const NavMenu = () => {
  const { isLoggedIn, onSignOut } = useAuth();

  const handleSignOut = e => {
    onSignOut();
  };

  return (
    <div>
      <ul>
        <li><Link to="/app/home">Home</Link></li>
        <li><Link to="/app/campaigns">Campaigns</Link></li>
        {isLoggedIn && (
          <li><button onClick={handleSignOut}>Sign Out</button></li>
        )}
      </ul>
    </div>
  );
};

export default NavMenu;
