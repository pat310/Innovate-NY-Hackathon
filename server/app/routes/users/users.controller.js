const _ = require('lodash');
const mongoose = require('mongoose');
const User = mongoose.model('User');


exports.ensureAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
    	if (req.method === "POST" && req.baseUrl === "/api/users") next();
    	else res.status(401).end();
    }
};

exports.getCalibrationImage = function(req, res, next){
  return User.findById(req.user._id)
  .then(function(user){

  })
  .then(null, next);
};

exports.addUser = function (req, res) {
	req.body.email = req.body.email.toLowerCase();
	User.find({email: req.body.email})
	.then(isUser => {
		if (isUser.length) {
			res.status(409).json({message: "Email Already In Use"})
		}
		else {
			return User.create(req.body)	
		}
	})
	.then(newUser => res.status(201).json({user: newUser.sanitize()}))
    .catch((error) => {
    	if (error.message === "User validation failed") res.status(400).json({message: "Invalid Email"})
    })
}