import useAuth from './auth';
import createServer from '../util/server';

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL || '';

const v1BaseUrl = `${SERVER_BASE_URL}/api/v1`;

const v1AuthPath = (basePath, path = '') => `${v1BaseUrl}/auth${basePath}${path}`;

const loadStories = server => () => server.get(v1AuthPath('/stories'));
const loadCampaigns = server => () => server.get(v1AuthPath('/campaigns'));

const useAuthApi = () => {
  const { token } = useAuth();
  const server = createServer(token);

  return {
    loadStories: loadStories(server),
    loadCampaigns: loadCampaigns(server),
  };
};

export default useAuthApi;
