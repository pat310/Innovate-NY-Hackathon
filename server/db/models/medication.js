'use strict';

const mongoose = require('mongoose');
const _ = require('lodash');

let categories = ['cardiac arrest', 'dysrhythmia', 'critical care', 'rsi', 'seizure', 'sedation', 'pressor', 'frequently used', 'general'];

const MedSchema = new mongoose.Schema({
  name: { type: String, required: true },
  use: [String], // Cardiac Arrest, Dysrhythmia, Critical Care [general], RSI, Seizure, Sedation, Pressor, Frequently Used
  concentration: { type: Number, required: true }, //or should this be a default instead?
  dosage: { type: Number, required: true },
  doseUnit: { type: String, enum: ['mg', 'mEq', 'g', 'mcg', 'mL', 'unit'], required: true },
  instructions: { type: String },
  urlArr: [String]
});

MedSchema.set('toJSON', {
  virtuals: true
});

// Validate use categories
MedSchema
  .path('use')
  .validate(function(valueArr, respond) {
    let bool = valueArr.every((value) => {
      return (categories.indexOf(value.toLowerCase()) > -1);
    })
    respond(bool);
  }, 'Use must be a category');

MedSchema.pre('save', function(next){ 
  this.urlArr = this.use.map((category, idx) => {
    let catArr = category.split(' ');
    let strArr = catArr.map((word, idx) => {
      if(idx === 0) return word.toLowerCase();
      else return word[0].toUpperCase() + word.slice(1, word.length);
    })
    return strArr.join('');
  })
  return next();
})

MedSchema.statics.findByUse = function(category){
  return this.find()
    .then(function(allMeds){
      return allMeds.filter((medication) => {
        return (medication.urlArr.indexOf(category) > -1);
      })
    })
}

mongoose.model('Medication', MedSchema);
