import React from 'react';
import useStoryElements from '../hooks/story-elements';
import StoryElement from './StoryElement';

const StoryElements = () => {
  const { storyElements } = useStoryElements();

  const items = storyElements.map(storyElement => (
    <li key={storyElement.id}>
      <StoryElement storyElement={storyElement} />
    </li>
  ));

  return (
    <ul>
      {items}
    </ul>
  );
};

export default StoryElements;
