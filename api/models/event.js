'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {
    type: String,
    requried: true,
  },
  description: {
    type: String,
    requried: true,
  },
  startDateTime: {
    type: Date,
    requried: true,
  },
  endDateTime: {
    type: Date,
    requried: true,
  },
  location: {
    name: {
      type: String,
      requried: true,
    },
    address: {
      type: String,
      requried: true,
    },
  },
  imageURL: {
    type: String,
    requried: true,
  },
  registrationLink: {
    type: String,
    requried: true,
  },
});

module.exports = mongoose.model('Events', EventSchema);
