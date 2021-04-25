import React from 'react';
import { Link } from 'react-router-dom';
import useStories from '../hooks/stories';

const StoryList = () => {
  const { stories } = useStories();

  const items = stories.map(story => (
    <li key={story.id}>
      <Link to={`/app/stories/${story.id}`}>{story.name}</Link>
    </li>
  ));

  return (
    <ul>
      {items}
    </ul>
  );
};

export default StoryList;
