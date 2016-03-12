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
  instructions: { type: String }
});

MedSchema.set('toJSON', {
  virtuals: true
});

// Validate use categories
MedSchema
  .path('use')
  .validate(function(valueArr, respond) {
    let bool = valueArr.every((value) => {
      return (categories.indexOf(value.toLowerCase()) >= -1);
    })
    respond(bool);
  }, 'Use must be a category');


mongoose.model('Medication', MedSchema);
