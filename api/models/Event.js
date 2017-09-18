'use strict';

const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const Event = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDateTime: {
    type: Date,
    required: true,
  },
  endDateTime: {
    type: Date,
    required: true,
  },
  location: {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  imageURL: {
    type: String,
    required: true,
  },
  registrationLink: {
    type: String,
    required: true,
  },
});

Event.plugin(timestamps);
Event.plugin(mongooseStringQuery);

module.exports = mongoose.model('Event', Event);
