'use strict';

const mongoose = require('mongoose');

module.exports = class API {
  constructor (model) {
    this.Model = mongoose.model(model);
  }

  async get (req, res, next) {
    try {
      const records = await this.Model.apiQuery(req.query);

      res.json(records);
    } catch (error) {
      next(error);
    }
  }

  async create (req, res, next) {
    try {
      const record = new this.Model(req.body);
      const newRecord = await record.save();

      res.json(newRecord);
    } catch (error) {
      next(error);
    }
  }

  async getById (req, res, next) {
    try {
      const record = await this.Model.findById(req.params.id);

      res.json(record);
    } catch (error) {
      next(error);
    }
  }

  async updateById (req, res, next) {
    const data = req.body || {};
    const _id = req.params.id;
    const opts = { new: true };

    try {
      const existingRecord = await this.Model.findOne({ _id });

      if (!existingRecord) {
        return next('The resource you requested could not be found.');
      }

      const record = await this.Model.findOneAndUpdate({ _id }, data, opts);

      res.send(200, record);
    } catch (error) {
      next(error);
    }
  }
  async deleteById (req, res, next) {
    const _id = req.params.id;

    try {
      await this.Model.remove({ _id });

      res.json({ message: 'Task succesfully deleted' });
    } catch (error) {
      next(error);
    }
  }
};
