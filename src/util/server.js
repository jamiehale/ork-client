import axios from 'axios';
import * as R from 'ramda';

const addAuthHeader = (authToken, config) => (R.isNil(authToken) ? config : { ...config, headers: { ...config.headers, authorization: `Bearer ${authToken}` } });

const get = (authToken) => (url, config = {}) => axios.get(url, addAuthHeader(authToken, config))
  .then(R.prop('data'));

const post = (authToken) => (url, data = {}, config = {}) => axios.post(url, data, addAuthHeader(authToken, config))
  .then(R.prop('data'));

const del = (authToken) => (url, config = {}) => axios.delete(url, addAuthHeader(authToken, config))
  .then(R.prop('data'));

const patch = (authToken) => (url, data = {}, config = {}) => axios.patch(url, data, addAuthHeader(authToken, config))
  .then(R.prop('data'));

const put = (authToken) => (url, data = {}, config = {}) => axios.put(url, data, addAuthHeader(authToken, config))
  .then(R.prop('data'));

const createServer = (authToken) => ({
  get: get(authToken),
  post: post(authToken),
  del: del(authToken),
  patch: patch(authToken),
  put: put(authToken),
});

export default createServer;
