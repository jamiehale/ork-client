import React, { createContext, useState, useContext, useEffect } from 'react';
import useAuthApi from './auth-api';

const CampaignsContext = createContext();

const useCampaigns = () => {
  const context = useContext(CampaignsContext);
  if (context === undefined) {
    throw new Error('useCampaigns must be used within a CampaignsProvider');
  }

  return context;
};

export const CampaignsProvider = ({ children }) => {
  const { loadCampaigns } = useAuthApi();
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    loadCampaigns()
      .then(campaigns => {
        setCampaigns(campaigns);
      });
  }, [loadCampaigns, setCampaigns]);

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
