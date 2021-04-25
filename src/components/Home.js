import React from 'react';
import StoryList from './StoryList';
import CampaignList from './CampaignList';
import { StoriesProvider } from '../hooks/stories';
import { CampaignsProvider } from '../hooks/campaigns';

const Home = () => (
  <>
    <StoriesProvider>
      <StoryList />
    </StoriesProvider>
    <CampaignsProvider>
      <CampaignList />
    </CampaignsProvider>
  </>
);

export default Home;
