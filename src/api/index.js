import createServer from './server';
import storyElements from './story-elements';

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL || '';

const v1BaseUrl = `${SERVER_BASE_URL}/api/v1`;

const v1AuthPath = (basePath) => (path = '') => `${v1BaseUrl}/auth${basePath}${path}`;

const server = createServer();

export default {
  ...storyElements(v1AuthPath('/story-elements'), server),
};
