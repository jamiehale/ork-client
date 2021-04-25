import createServer from '../util/server';

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL || '';

const v1BaseUrl = `${SERVER_BASE_URL}/api/v1`;

const v1Path = (basePath, path = '') => `${v1BaseUrl}/${basePath}${path}`;

const signIn = server => (username, password) => server.post(v1Path('/sessions'), { username, password });

const useApi = () => {
  const server = createServer();

  return {
    signIn: signIn(server),
  };
};

export default useApi;
