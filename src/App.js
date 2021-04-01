import React from 'react';
import { StoryElementsProvider } from './hooks/story-elements';
import StoryElements from './components/StoryElements';

const App = () => (
  <StoryElementsProvider>
    <StoryElements />
  </StoryElementsProvider>
);

export default App;
