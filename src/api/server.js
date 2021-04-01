import axios from 'axios';
import * as R from 'ramda';

const get = () => (url, config = {}) => axios.get(url, config)
  .then(R.prop('data'));

const post = () => (url, data = {}, config = {}) => axios.post(url, data, config)
  .then(R.prop('data'));

const del = () => (url, config = {}) => axios.delete(url, config)
  .then(R.prop('data'));

const patch = () => (url, data = {}, config = {}) => axios.patch(url, data, config)
  .then(R.prop('data'));

const put = () => (url, data = {}, config = {}) => axios.put(url, data, config)
  .then(R.prop('data'));

export default () => ({
  get: get(),
  post: post(),
  del: del(),
  patch: patch(),
  put: put(),
});
