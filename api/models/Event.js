'use strict';

const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const Event = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  startDateTime: {
    type: Date,
    required: false,
  },
  endDateTime: {
    type: Date,
    required: false,
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
    required: false,
  },
  registrationLink: {
    type: String,
    required: false,
  },
  partners: [
    {
      name: {
        type: String,
        required: false,
      },
      URL: {
        type: String,
        required: false,
      },
    },
  ],
  sponsors: [
    {
      name: {
        type: String,
        required: false,
      },
      URL: {
        type: String,
        required: false,
      },
    },
  ],
  recapURL: {
    type: String,
    required: false,
  },
  TBD: {
    type: Boolean,
    required: false,
    default: false,
  },
});

Event.plugin(timestamps);
Event.plugin(mongooseStringQuery);

module.exports = mongoose.model('Event', Event);
