/**
* UserController
*
* @description :: Server-side logic for managing locations
* @help        :: See http://links.sailsjs.org/docs/controllers
*/
var passport = require('passport');

module.exports = {
  index: function(req, res){
    if (req.isAuthenticated()) {
      res.json({
        authenticated: true,
        user: req.user
      })
    } else {
      res.json({
        authenticated: false,
        user: null
      })
    }
  }
};
