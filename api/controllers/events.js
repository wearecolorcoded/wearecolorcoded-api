'use strict';

const API = require('../classes/API');

class UserAPI extends API {
  async eventList (req, res, next) {
    try {
      const records = await this.Model.find({});

      res.render('events.ejs', { records });
    } catch (error) {
      next(error);
    }
  }

  getEventForm (req, res, next) {
    res.render('createEvent.ejs');
  }

  async create (req, res, next) {
    const startDateTime = new Date(`${req.body.startDate} ${req.body.startTime}`);
    const endDateTime = new Date(`${req.body.endDate} ${req.body.endTime}`);
    const data = {
      name: req.body.name,
      description: req.body.description,
      startDateTime,
      endDateTime,
      location: {
        name: req.body.locationName,
        address: req.body.locationAddress,
      },
      imageURL: req.body.imageURL,
      registrationLink: req.body.registrationLink,
    };

    try {
      const record = new this.Model(data);
      await record.save();

      res.redirect('/');
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserAPI('Event');
