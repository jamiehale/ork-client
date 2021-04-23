import React, { createContext, useState, useContext, useEffect } from 'react';
import Api from '../api';

const CampaignsContext = createContext();

const useCampaigns = () => {
  const context = useContext(CampaignsContext);
  if (context === undefined) {
    throw new Error('useCampaigns must be used within a CampaignsProvider');
  }

  return context;
};

export const CampaignsProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    Api.getCampaigns()
      .then(campaigns => {
        setCampaigns(campaigns);
      });
  }, []);

  const value = {
    campaigns,
  };

  return (
    <CampaignsContext.Provider value={value}>
      {children}
    </CampaignsContext.Provider>
  );
};

export default useCampaigns;
