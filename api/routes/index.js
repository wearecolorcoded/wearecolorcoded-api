'use strict';

const isLoggedIn = require('../middleware/isLoggedIn');

const API = '/api/v1';

module.exports = function (app, passport) {
  const Events = require('../controllers/events');
  const Users = require('../controllers/users');

  app.route('/')
    .get(isLoggedIn, (req, res, next) => res.render('index.ejs'));

  app.route('/login')
    .get((req, res, next) => res.render('login.ejs'))
    .post(passport.authenticate('local'), (...args) => Users.login(...args));

  app.route('/logout')
    .post(isLoggedIn, (...args) => Users.logout(...args));

  app.route('/ping')
    .get((req, res) => res.status(200).send('pong!'));

  // event Routes
  app.route(`${API}/events`)
    .get((...args) => Events.get(...args))
    .post(isLoggedIn, (...args) => Events.create(...args));

  app.route(`${API}/events/:id`)
    .get((...args) => Events.getById(...args))
    .put(isLoggedIn, (...args) => Events.updateById(...args))
    .delete(isLoggedIn, (...args) => Events.deleteById(...args));
};
