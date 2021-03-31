import React from 'react';
import { StoryElementsProvider } from './hooks/story-elements';
import StoryElements from './StoryElements';

const App = () => (
  <StoryElementsProvider>
    <StoryElements />
  </StoryElementsProvider>
);

export default App;
