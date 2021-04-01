const getStoryElements = (path, remote) => () => remote.get(path('/'));

export default (path, remote) => ({
  getStoryElements: getStoryElements(path, remote),
});
