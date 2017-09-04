'use strict';

const logger = require('winston');

const packageJSON = require('../../package.json');

module.exports = (err, req, res, next) => {
  logger.error(`[SERVER] ${err}`);

  res.status(err.status || 500);

  const date = new Date();
  const response = {
    version: packageJSON.version,
    datetime: date,
    timestamp: date.valueOf(),
    status: 'error',
    code: res.statusCode,
    data: {},
    error: err.message,
  };

  res.json(response);
};
