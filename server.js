'use strict';

// Load Environment variables from .env file
require('dotenv').load();
const {
  // NODE_ENV,
  NODE_PORT,
  MONGO_DB_HOST,
  MONGO_DB_NAME,
} = process.env;

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const logger = require('winston');
const path = require('path');

logger.info('[APP] Starting server initialization');
const app = express();

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${MONGO_DB_HOST}/${MONGO_DB_NAME}`, { useMongoClient: true })
  .then(() => {
    app.use(morgan('common'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json({type: '*/*'}));

    logger.info('[SERVER] Initializing Models');
    require('./api/models/event');

    logger.info('[SERVER] Initializing routes');
    const routes = require('./api/routes/events'); // importing routes
    routes(app); // register the route

    app.use(express.static(path.join(__dirname, 'public')));

    logger.info('[SERVER] Initializing custom middleware');
    app.use(require('./api/middleware/errorHandler'));
    app.use(require('./api/middleware/404'));

    app.listen(NODE_PORT);
    logger.info(`[SERVER] Listening on port ${NODE_PORT}`);
  })
  .catch((err) => {
    logger.error(`[APP] Failed to start. ${err}`);
    process.exit();
  });
