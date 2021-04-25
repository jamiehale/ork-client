import React from 'react';
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';
import useCampaigns from '../hooks/campaigns';

const CampaignList = () => {
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

export default CampaignList;
