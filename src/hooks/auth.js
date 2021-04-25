import React, { useState, useContext, useEffect } from 'react';
import * as R from 'ramda';
import { useHistory } from 'react-router-dom';

const AuthContext = React.createContext();

const useAuth = () => {
  const context = useContext(AuthContext);
  if (R.isNil(context)) {
    throw new Error('useAuth must be used inside an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({
  children,
}) => {
  const history = useHistory();
  const [token, setToken] = useState(null);

  const isSignedIn = !R.isNil(token);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!R.isNil(authToken)) {
      setToken(authToken);
    }
  }, []);

  const onAuth = token => {
    setToken(token);
    localStorage.setItem('authToken', token);
    history.push('/app/home');
  };

  const onSignOut = () => {
    setToken(null);
    localStorage.removeItem('authToken');
    history.push('/');
  };

  const value = {
    isSignedIn,
    token,
    onAuth,
    onSignOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default useAuth;
