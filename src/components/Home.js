import React from 'react';
import useAuth from '../hooks/auth';

const Home = () => {
  const { token } = useAuth();
  console.log('here?', token);

  return (
    <>
      <div>Home</div>
    </>
  );
};

export default Home;
