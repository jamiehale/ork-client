import React from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import useCampaigns, { CampaignsProvider } from '../hooks/campaigns';

const CampaignsList = () => {
  const { url } = useRouteMatch();
  const { campaigns } = useCampaigns();

  const items = campaigns.map(campaign => (
    <li key={campaign.id}>
      <Link to={`${url}/${campaign.id}`}>{campaign.name}</Link>
    </li>
  ));

  return (
    <ul>
      {items}
    </ul>
  );
};

const Campaigns = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <CampaignsProvider>
          <CampaignsList />
        </CampaignsProvider>
      </Route>
      <Route path={`${path}/:campaignId`}>
        <div>yup</div>
      </Route>
    </Switch>
  );
};

export default Campaigns;
