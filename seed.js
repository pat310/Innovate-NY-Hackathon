/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.



        {
            name: '',
            use: ['']
            concentration: ,
            dosage: ,
            doseUnit: '',
            instructions: ''
            maxDose: ,
        },

*/

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = Promise.promisifyAll(mongoose.model('User'));
var Medication = Promise.promisifyAll(mongoose.model('Medication'));

var seedUsers = function () {

    var users = [
        {
            email: 'testing@fsa.com',
            password: 'password'
        },
        {
            email: 'obama@gmail.com',
            password: 'potus'
        }
    ];

    return User.createAsync(users);

};


//michael - doseUnit will be an enumerated field, please add if we need more
// ['mg', 'mEq', 'g', 'mcg', 'mL', 'unit']

//please add any other fields you think we should have!

//Pat and Carolyn:
//I will use the following categories (may add more as a think of them)

// Cardiac Arrest, Dysrythmia, Critical Care/ED [general], RSI, Seizure/Neuro, Sedation/Analgesia, Pressor
// Cardiac Arrest, Dysrhythmia, Critical Care [general], RSI, Seizure, Sedation, Pressor

//**MICHAEL: Should concentrations be an array? Could there be multiple concentrations
var seedMedications = function(){
    var medications = [
        {
            name: 'Adenosine',
            use: ['Dysrhythmia'], // i made these up, but this is the format
            concentration: 1,
            dosage: 0.1,
            doseUnit: 'mg',
            instructions: 'Comes in 3mg/mL. Dilute to 1mg/mL [2ml into 4ml NS]. Double the amount for second dose.',
            maxDose: 6,
        },
        {
            name: 'Amiodarone',
            use: ['Dysrhythmia', 'Cardiac Arrest'],
            concentration: 3,
            dosage: 5,
            doseUnit: 'mg',
            instructions: '[Mix 150mg (3mL) + 47mL D5W. Administer over 10 min.]',
            maxDose: 150,
        },
        {
            name: 'Atropine',
            use: ['Dysrhythmia', 'Cardiac Arrest', 'RSI'],
            concentration: 0.1,
            dosage: 0.02,
            doseUnit: 'mg',
            instructions: '',
            maxDose: 0.5,
        },
        {
            name: 'Sodium Bicarbonate',
            use: ['Cardiac Arrest', 'Critical Care/ED'],
            concentration: 1,
            dosage: 1,
            doseUnit: 'mEq',
            instructions: '',
            maxDose: 50,
        },
        {
            name: 'Calcium Chloride',
            use: ['Cardiac Arrest', 'Critical Care/ED', 'Dysrhythmia'],
            concentration: 100,
            dosage: 20,
            doseUnit: 'mg',
            instructions: '',
            maxDose: 1000,
        },
        {
            name: 'Dextrose 50%',
            use: ['Critical Care/ED', 'Seizure/Neuro'],
            concentration: 0.5,
            dosage: 0.5,
            doseUnit: 'g',
            instructions: '',
            maxDose: 25,
        },
        {
            name: 'Epinephrine 1:10,000',
            use: ['Cardiac Arrest', 'Critical Care/ED'],
            concentration: 0.1,
            dosage: 0.01,
            doseUnit: 'mg',
            instructions: '',
            maxDose: 1,
        },
        {
            name: 'Epinephrine 1:1,000',
            use: ['Cardiac Arrest', 'Critical Care/ED'],
            concentration: 1,
            dosage: 0.01,
            doseUnit: 'mg',
            instructions: 'IM/SC',
            maxDose: 0.3,
        },
        {
            name: 'Flumazenil',
            use: ['Critical Care/ED'],
            concentration: 100,
            dosage: 5,
            doseUnit: 'mcg',
            instructions: ''
        },
        {
            name: 'Hypertonic Saline',
            use: ['Seizure/Neuro'],
            concentration: 1,
            dosage: 0.5,
            doseUnit: 'mL',
            instructions: '',
            maxDose: 30,
        },

        {
            name: 'Lorazepam',
            use: ['Seizure/Neuro', 'Sedation/Analgesia'],
            concentration: 2,
            dosage: 0.05,
            doseUnit: 'mg',
            instructions: '',
            maxDose: 4,
        },

        {
            name: 'Lidocaine 2%',
            use: ['Cardiac Arrest', 'Dysrhythmia'],
            concentration: 20,
            dosage: 1,
            doseUnit: 'mg',
            instructions: ''
        },

        {
            name: 'Magnesium Sulfate',
            use: ['Dysrhythmia', 'Critical Care/ED'],
            concentration: 500,
            dosage: 25,
            doseUnit: 'mg',
            instructions: '',
            maxDose: 20000,
        },
        {
            name: 'Mannitol',
            use: ['Seizure/Neuro'],
            concentration: 0.25,
            dosage: 0.25,
            doseUnit: 'g',
            instructions: '',
            maxDose: 12.5,
        },
        {
            name: 'Naloxone',
            use: ['Critical Care/ED'],
            concentration: 0.4,
            dosage: 0.01,
            doseUnit: 'mg',
            instructions: '',
            maxDose: 2,
        },
        {
            name: 'Procainamide',
            use: ['Dysrhythmia'],
            concentration: 100,
            dosage: 15,
            doseUnit: 'mg',
            instructions: 'Administer over 30-60min until therapeutic/toxic effect',
            maxDose: 1000,
        },
        // {
        //     name: 'Phenylephrine',
        //     use: ['Pressor'],
        //     concentration: ,
        //     dosage: ,
        //     doseUnit: '',
        //     instructions: 'Comes 10mg/ml. Mix 0.1ml in 9.9ml NS'
        // },
        {
            name: 'Vasopressin',
            use: ['Cardiac Arrest', 'Pressor'],
            concentration: 20,
            dosage: 0.5,
            doseUnit: 'unit',
            instructions: '',
            maxDose: 40,
        },
        {
            name: 'Etomidate',
            use: ['RSI'],
            concentration: 2,
            dosage: 0.3,
            doseUnit: 'mg',
            instructions: ''
        },
        {
            name: 'Fentanyl',
            use: ['RSI', 'Sedation/Analgesia'],
            concentration: 50,
            dosage: 1,
            doseUnit: 'mcg',
            instructions: ''
        },
        {
            name: 'Ketamine',
            use: ['RSI', 'Sedation/Analgesia'],
            concentration: 10,
            dosage: 2,
            doseUnit: 'mg',
            instructions: ''
        },
        {
            name: 'Midazolam',
            use: ['RSI', 'Sedation/Analgesia'],
            concentration: 1,
            dosage: 0.1,
            doseUnit: 'mg',
            instructions: '',
            maxDose: 4,
        },
        {
            name: 'Propofol',
            use: ['RSI', 'Sedation/Analgesia'],
            concentration: 10,
            dosage: 2,
            doseUnit: 'mg',
            instructions: 'Push Dose',
            maxDose: 40,
        },
        {
            name: 'Rocuronium',
            use: ['RSI'],
            concentration: 10,
            dosage: 1,
            doseUnit: 'mg',
            instructions: ''
        },
        {
            name: 'Succinylcholine',
            use: ['RSI'],
            concentration: 20,
            dosage: 1,
            doseUnit: 'mg',
            instructions: '',
        },

        {
            name: 'Vecuronium',
            use: ['RSI'],
            concentration: 1,
            dosage: 0.1,
            doseUnit: 'mg',
            instructions: ''
        },

        {
            name: 'Dobutamine 1:1',
            use: ['Pressor'],
            concentration: 1000,
            dosage: 2,
            doseUnit: 'mcg/kg/min',
            instructions: '250mg/250ml'
        },

        {
            name: 'Defibrillation',
            use: ['Cardiac Arrest'],
            concentration: 1,
            dosage: 2,
            doseUnit: 'J',
            instructions: '',
            maxDose: 300,
        },
        {
            name: 'Cardioversion',
            use: ['Dysrhythmia'],
            concentration: 1,
            dosage: 0.5,
            doseUnit: 'J',
            instructions: ''
        },
        {
            name: 'Dopamine',
            use: ['Pressor'],
            concentration: 800,
            dosage: 2,
            doseUnit: 'mcg/kg/min',
            instructions: '200mg/250ml'
        },
        {
            name: 'Epinephrine Drip',
            use: ['Pressor'],
            concentration: 10,
            dosage: 0.05,
            doseUnit: 'mcg/kg/min',
            instructions: '0.5mg/50ml'
        },
        {
            name: 'Norepinephrine Drip',
            use: ['Pressor'],
            concentration: 10,
            dosage: 0.05,
            doseUnit: 'mcg/kg/min',
            instructions: '0.5mg/50ml'
        },

        // {
        //     name: '',
        //     use: ['']
        //     concentration: ,
        //     dosage: ,
        //     doseUnit: '',
        //     instructions: ''
        //     maxDose: ,
        // }

    ];

    return Medication.createAsync(medications);
};

function wipeDB(){
    var models = [User, Medication];
    return Promise.all(models.map(function(model){ return model.find({}).remove().exec();}));
}

connectToDb.then(function(){
    console.log(chalk.green('Connected to DB'));
    console.log(chalk.yellow('Wiping DB'));
    return wipeDB();
}, function(){console.log(chalk.red('Connection failed'));})
.then(function(){
    console.log(chalk.green('DB wiped!'));
    console.log(chalk.yellow('Seeding Users'));
    return seedUsers();
}, function(){console.log(chalk.red('Failed to wipe DB!'));})
.then(function(){
    console.log(chalk.green('Users seeded!'));
    console.log(chalk.yellow('Seeding Medications'));
    return seedMedications();
}, function(){console.log(chalk.red('Failed to seed Users!'));})
.then(function(){
    console.log(chalk.green('Medications seeded!'));
    process.kill(0);
}, function(err){console.log(chalk.red('Failed to seed medications!'), err);})
.catch(function(err){
    console.error(err);
    process.kill(1);
});
