import React, { useState } from 'react';
import * as R from 'ramda';
import useAuth from '../hooks/auth';
import useApi from '../hooks/api';

const Login = () => {
  const { signIn } = useApi();
  const { onAuth } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleChangeUsername = e => {
    setUsername(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleSignIn = e => {
    e.preventDefault();
    setError(null);
    signIn(username, password)
      .then(R.prop('token'))
      .then(onAuth)
      .catch(setError);
  };

  return (
    <div>
      <div>Login</div>
      <form onSubmit={handleSignIn}>
        <input name="username" type="text" value={username} onChange={handleChangeUsername} />
        <input name="password" type="password" value={password} onChange={handleChangePassword} />
        <button>Go</button>
      </form>
      {error && (
        <p>{error}</p>
      )}
    </div>
  );
};

export default Login;
