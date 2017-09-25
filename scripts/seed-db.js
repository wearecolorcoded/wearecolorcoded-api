'use strict';

// Load Environment variables from .env file
require('dotenv').load();
const {
  MONGO_DB_HOST,
  MONGO_DB_NAME,
} = process.env;

const MongooseSeed = require('mongoose-seed-db');

process.on('unhandledRejection', error => {
  // Will print "unhandledRejection err is not defined"
  console.log('unhandledRejection', error.message);
});

MongooseSeed.connect(`mongodb://${MONGO_DB_HOST}/${MONGO_DB_NAME}`).then(() => {
  MongooseSeed.loadModels(`${__dirname}/../api/models`);
  MongooseSeed.clearAll()
    .then(() => {
      MongooseSeed.populate(`${__dirname}/seeders`)
        .then(() => {
          process.exit();
        });
    });
});
