'use strict';

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const timestamps = require('mongoose-timestamp');

const User = new mongoose.Schema({
  // passportLocalMongoose adds a username, hash and salt
});

User.plugin(passportLocalMongoose);
User.plugin(timestamps);

module.exports = mongoose.model('User', User);
