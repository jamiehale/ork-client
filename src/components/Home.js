import React from 'react';
import StoryList from './StoryList';
import CampaignList from './CampaignList';
import NewStory from './NewStory';
import { StoriesProvider } from '../hooks/stories';
import { CampaignsProvider } from '../hooks/campaigns';

const Home = () => (
  <>
    <StoriesProvider>
      <StoryList />
      <NewStory />
    </StoriesProvider>
    <CampaignsProvider>
      <CampaignList />
    </CampaignsProvider>
  </>
);

export default Home;
