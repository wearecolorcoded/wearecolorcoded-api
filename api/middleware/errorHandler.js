'use strict';

const logger = require('winston');

module.exports = (err, req, res, next) => {
  logger.error(`[SERVER] ${err}`);

  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: (process.env.NODE_ENV === 'development' ? err : {}),
  });

  next(err);
};
