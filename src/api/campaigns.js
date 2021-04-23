const getCampaigns = (path, remote) => () => remote.get(path('/'));

export default (path, remote) => ({
  getCampaigns: getCampaigns(path, remote),
});
