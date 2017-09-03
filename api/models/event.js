'use strict';

const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const EventSchema = new mongoose.Schema({
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

EventSchema.plugin(timestamps);
EventSchema.plugin(mongooseStringQuery);

module.exports = mongoose.model('Event', EventSchema);
