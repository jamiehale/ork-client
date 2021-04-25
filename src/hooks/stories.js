import React, { createContext, useState, useContext, useEffect } from 'react';
import useAuthApi from './auth-api';

const StoriesContext = createContext();

const useStories = () => {
  const context = useContext(StoriesContext);
  if (context === undefined) {
    throw new Error('useStoryElements must be used within a StoriesProvider');
  }

  return context;
};

export const StoriesProvider = ({ children }) => {
  const { loadStories } = useAuthApi();
  const [stories, setStories] = useState([]);

  useEffect(() => {
    loadStories()
      .then(storyElements => {
        setStories(storyElements);
      });
  }, []);

  const value = {
    stories,
  };

  return (
    <StoriesContext.Provider value={value}>
      {children}
    </StoriesContext.Provider>
  );
};

export default useStories;
