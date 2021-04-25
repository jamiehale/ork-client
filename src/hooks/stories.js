import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import useAuthApi from './auth-api';

const StoriesContext = createContext();

const useStories = () => {
  const context = useContext(StoriesContext);
  if (context === undefined) {
    throw new Error('useStories must be used within a StoriesProvider');
  }

  return context;
};

export const StoriesProvider = ({ children }) => {
  const { loadStories, createStory } = useAuthApi();
  const [stories, setStories] = useState([]);

  useEffect(() => {
    loadStories()
      .then(setStories);
  }, []);

  const createNewStory = useCallback((name) => {
    createStory(name)
      .then(() => loadStories())
      .then(setStories);
  }, [createStory, loadStories, setStories]);

  const value = {
    stories,
    createNewStory,
  };

  return (
    <StoriesContext.Provider value={value}>
      {children}
    </StoriesContext.Provider>
  );
};

export default useStories;
