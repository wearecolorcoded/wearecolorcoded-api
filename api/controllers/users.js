'use strict';

const API = require('../classes/API');

class UserAPI extends API {
  login (req, res, next) {
    res.redirect('/');
  }

  logout (req, res, next) {
    req.logout();

    res.redirect('/login');
  }
}

module.exports = new UserAPI('User');
