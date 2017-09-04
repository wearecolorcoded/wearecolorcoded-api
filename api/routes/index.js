'use strict';

const isLoggedIn = require('../middleware/isLoggedIn');

const API = '/api/v1';

module.exports = function (app, passport) {
  const Events = require('../controllers/events');

  app.route('/')
    .get(isLoggedIn, (req, res, next) => res.render('index.ejs'));

  app.route('/login')
    .get((req, res, next) => res.render('login.ejs'))
    .post(passport.authenticate('local'), (req, res, next) => res.redirect('/'));

  app.route('/logout')
    .get(isLoggedIn, (req, res, next) => {
      req.logout();
      res.redirect('/login');
    });

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
