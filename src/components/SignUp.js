import React, { useState } from 'react';
import * as R from 'ramda';
import useApi from '../hooks/api';
import { useHistory } from 'react-router';

const SignUp = () => {
  const { signUp } = useApi();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState(null);

  const handleChangeUsername = e => {
    setUsername(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleChangePasswordConfirmation = e => {
    setError(null);
    setPasswordConfirmation(e.target.value);
  };

  const handleSignUp = e => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      setError('Passwords must match');
      return;
    }
    if (password.length < 8 || password.length > 32) {
      setError('Password must be 8-32 characters long');
      return;
    }
    setError(null);
    signUp(username, password)
      .then(() => {
        history.push('/app/home');
      })
      .catch(error => {
        if (error.response) {
          setError(R.propOr('Error signing up', 'message', error.response.data));
        } else {
          setError('Server error signing up');
        }
      });
  };

  return (
    <div>
      <div>Sign Up</div>
      <form onSubmit={handleSignUp}>
        <input name="username" type="text" value={username} onChange={handleChangeUsername} />
        <input name="password" type="password" value={password} onChange={handleChangePassword} />
        <input name="password-confirmation" type="password" value={passwordConfirmation} onChange={handleChangePasswordConfirmation} />
        <button>Sign Up</button>
      </form>
      {error && (
        <p>{error}</p>
      )}
    </div>
  );
};

export default SignUp;
