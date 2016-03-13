const _ = require('lodash');
const mongoose = require('mongoose');
const Medication = mongoose.model('Medication');

exports.getAll = function(req, res, next){
  return Medication.find()
    .then(function(medications){
      res.json(medications);
    })
    .then(null, next);
}

exports.getByUse = function(req, res, next){
  return Medication.findByUse(req.params.category)
    .then(function(medications){
      res.json(medications);
    })
    .then(null, next);
}

exports.getById = function(req, res, next){
  return Medication.findById(req.params.id)
    .then(function(medication){
      res.json(medication);
    })
    .then(null, next);
}