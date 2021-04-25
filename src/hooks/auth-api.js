import useAuth from './auth';
import createServer from '../util/server';
import { useCallback, useMemo } from 'react';

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL || '';

const v1BaseUrl = `${SERVER_BASE_URL}/api/v1`;

const v1AuthPath = (basePath, path = '') => `${v1BaseUrl}/auth${basePath}${path}`;

const useAuthApi = () => {
  const { token } = useAuth();
  const server = useMemo(() => createServer(token), [token]);

  const loadStories = useCallback(() => server.get(v1AuthPath('/stories')), [server]);
  const createStory = useCallback((name) => server.post(v1AuthPath('/stories'), { name }), [server]);
  const loadCampaigns = useCallback(() => server.get(v1AuthPath('/campaigns')), [server]);

  return {
    loadStories,
    createStory,
    loadCampaigns,
  };
};

export default useAuthApi;
