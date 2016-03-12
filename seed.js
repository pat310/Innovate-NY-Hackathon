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
            instructions: 'Comes in 3mg/mL. Dilute to 1mg/mL [2ml into 4ml NS]'
        },
        {
            name: 'Amiodarone',
            use: ['Dysrhythmia', 'Cardiac Arrest'],
            concentration: 3,
            dosage: 5,
            doseUnit: 'mg',
            instructions: '[Mix 150mg (3mL) + 47mL D5W. Administer over 10 min.]'
        },
        {
            name: 'Atropine',
            use: ['Dysrhythmia', 'Cardiac Arrest', 'RSI'],
            concentration: 0.1,
            dosage: 0.02,
            doseUnit: 'mg',
            instructions: ''
        },
        {
            name: 'Sodium Bicarbonate',
            use: ['Cardiac Arrest', 'Critical Care'],
            concentration: 1,
            dosage: 1,
            doseUnit: 'mEq',
            instructions: ''
        },
        // {
        //     name: '',
        //     use: [''],
        //     concentration: ,
        //     dosage: ,
        //     doseUnit: '',
        //     instructions: ''
        // },

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
