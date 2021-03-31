import React, { createContext, useState, useContext, useEffect } from 'react';

const StoryElementsContext = createContext();

const useStoryElements = () => {
  const context = useContext(StoryElementsContext);
  if (context === undefined) {
    throw new Error('useStoryElements must be used within a StoryElementsProvider');
  }

  return context;
};

export const StoryElementsProvider = ({ children }) => {
  const [storyElements, setStoryElements] = useState([]);

  useEffect(() => {
    setStoryElements([]);
  }, []);

  const value = {
    storyElements,
  };

  return (
    <StoryElementsContext.Provider value={value}>
      {children}
    </StoryElementsContext.Provider>
  );
};

export default useStoryElements;
