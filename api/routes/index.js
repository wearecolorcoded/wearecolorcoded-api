'use strict';

const isLoggedIn = require('../middleware/isLoggedIn');

module.exports = function (app, passport) {
  const Events = require('../controllers/events');

  app.route('/')
    .get(isLoggedIn, (req, res, next) => res.render('index.ejs'));

  app.route('/login')
    .get((req, res, next) => res.render('login.ejs'))
    .post(passport.authenticate('local'), (req, res, next) => res.redirect('/'));

  app.route('/logout')
    .get((req, res, next) => {
      req.logout();
      res.redirect('/login');
    });

  app.route('/ping')
    .get((req, res) => res.status(200).send('pong!'));

  // event Routes
  app.route('/api/events')
    .get((...args) => Events.get(...args))
    .post((...args) => Events.create(...args));

  app.route('/api/events/:id')
    .get((...args) => Events.getById(...args))
    .put((...args) => Events.updateById(...args))
    .delete((...args) => Events.deleteById(...args));
};
