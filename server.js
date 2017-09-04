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
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const logger = require('winston');
const path = require('path');
// const cors = require('cors');

logger.info('[APP] Starting server initialization');
const app = express();

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${MONGO_DB_HOST}/${MONGO_DB_NAME}`, { useMongoClient: true })
  .then(() => {
    app.set('views', path.join(__dirname, 'public'));
    app.set('view engine', 'ejs');

    app.use(morgan('common'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json({type: '*/*'}));
    app.use(cookieParser());
    app.use(require('express-session')({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(path.join(__dirname, 'public')));

    logger.info('[SERVER] Initializing Models');
    const UserModel = require('./api/models/User');
    require('./api/models/Event');

    // passport config
    logger.info('[SERVER] Initializing passport');
    passport.use(UserModel.createStrategy());
    passport.serializeUser(UserModel.serializeUser());
    passport.deserializeUser(UserModel.deserializeUser());

    // use it before all route definitions
    // app.use(cors({ origin: 'http://localhost:3000' }));

    // Routes
    logger.info('[SERVER] Initializing routes');
    const routes = require('./api/routes/index'); // importing routes
    routes(app, passport);

    // Middleware
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
