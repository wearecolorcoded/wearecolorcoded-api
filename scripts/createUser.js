'use strict';

// Load Environment variables from .env file
require('dotenv').load();
const {
  MONGO_DB_HOST,
  MONGO_DB_NAME,
} = process.env;

const mongoose = require('mongoose');

const username = process.argv[2];
const password = process.argv[3];

if (!username) {
  handleError('No username passed');
}

if (!password) {
  handleError('No password passed');
}

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${MONGO_DB_HOST}/${MONGO_DB_NAME}`, { useMongoClient: true })
  .then(async () => {
    const User = require('../api/models/User');

    try {
      User.register(new User({ username }), password, (err, user) => {
        if (err) {
          handleError(err);
        }

        console.log(`Succesfully Created User: ${user.username}`);
        process.exit();
      });
    } catch (err) {
      handleError(err);
    }
  });

function handleError (message) {
  console.log(message);
  process.exit(1);
}
