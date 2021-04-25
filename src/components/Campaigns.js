import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import { CampaignsProvider } from '../hooks/campaigns';
import CampaignList from './CampaignList';

const Campaigns = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <CampaignsProvider>
          <CampaignList />
        </CampaignsProvider>
      </Route>
      <Route path={`${path}/:campaignId`}>
        <div>yup</div>
      </Route>
    </Switch>
  );
};

export default Campaigns;
