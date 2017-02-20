'use strict';

const utils = require('./lib/utils');
const ZooKeeperAPIClient = require('./lib/zookeeper_api_client');

module.exports = app => {
  const options = app.config.zookeeper;
  utils.convertMs(options, [ 'sessionTimeout', 'spinDelay', 'retries' ]);

  const opts = Object.assign({}, options, { cluster: app.cluster.bind(app) });
  const zookeeper = app.zookeeper = new ZooKeeperAPIClient(opts);

  app.beforeStart(function* () {
    yield zookeeper.ready();
  });
};
