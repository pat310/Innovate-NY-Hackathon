const _ = require('lodash');
const mongoose = require('mongoose');
const User = mongoose.model('User');


exports.ensureAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).end();
    }
};

exports.getCalibrationImage = function(req, res, next){
  return User.findById(req.user._id)
  .then(function(user){

  })
  .then(null, next);
};