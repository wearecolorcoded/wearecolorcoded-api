'use strict';

const mongoose = require('mongoose');
const EventModel = mongoose.model('Events');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const Events = await EventModel.find({});

      res.json(Events);
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const newEvent = new EventModel(req.body);
      const createdEvent = await newEvent.save();

      res.json(createdEvent);
    } catch (error) {
      next(error);
    }
  },
  getById: async (req, res, next) => {
    try {
      const Event = await EventModel.findById(req.params.id);

      res.json(Event);
    } catch (error) {
      next(error);
    }
  },
  updateById: async (req, res, next) => {
    try {
      const Event = await EventModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });

      res.json(Event);
    } catch (error) {
      next(error);
    }
  },
  deleteById: async (req, res, next) => {
    try {
      await EventModel.remove({ _id: req.params.id });

      res.json({ message: 'Task succesfully deleted' });
    } catch (error) {
      next(error);
    }
  },
};
