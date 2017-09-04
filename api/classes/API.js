'use strict';

const mongoose = require('mongoose');
const packageJSON = require('../../package.json');

module.exports = class API {
  constructor (model) {
    this.Model = mongoose.model(model);
  }

  async apiResHandler (res, data) {
    const date = new Date();
    const response = {
      version: packageJSON.version,
      datetime: date,
      timestamp: date.valueOf(),
      status: 'success',
      code: res.statusCode,
      data,
    };

    res.json(response);
  }

  async get (req, res, next) {
    try {
      const records = await this.Model.apiQuery(req.query);

      this.apiResHandler(res, records);
    } catch (error) {
      next(error);
    }
  }

  async create (req, res, next) {
    try {
      const record = new this.Model(req.body);
      const newRecord = await record.save();

      this.apiResHandler(res, newRecord);
    } catch (error) {
      next(error);
    }
  }

  async getById (req, res, next) {
    try {
      const record = await this.Model.findById(req.params.id);

      this.apiResHandler(res, record);
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

      this.apiResHandler(res, record);
    } catch (error) {
      next(error);
    }
  }
  async deleteById (req, res, next) {
    const _id = req.params.id;

    try {
      const deletedRecord = await this.Model.remove({ _id });

      this.apiResHandler(res, deletedRecord);
    } catch (error) {
      next(error);
    }
  }
};
