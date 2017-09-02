'use strict';

module.exports = function (app) {
  const Events = require('../controllers/events');

  // event Routes
  app.route('/events')
    .get(Events.getAll)
    .post(Events.create);

  app.route('/events/:id')
    .get(Events.getById)
    .put(Events.updateById)
    .delete(Events.deleteById);
};
