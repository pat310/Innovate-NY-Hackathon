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
var Drugs = Promise.promisfyAll(mongoose.model('Drugs'));

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

var seedDrugs = function(){
    var drugs = [
        {
            name: 'Adenosine',
            use: ['cardiac arrest', 'seizure'], // i made these up, but this is the format
            concentration: 3,
            dosage: 0.1,
            doseUnit: 'mg',
            instructions: '3mg/mL dilute to 1mg/mL'
        },
        {
            name:
            use:
            concentration:
            dosage:
            doseUnit:
            instructions: 
        },
    ];

    return Drugs.createAsync(drugs);
};

function wipeDB(){
    var models = [User, Drugs];
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
    console.log(chalk.yellow('Seeding Drugs'));
    return seedDrugs();
}, function(){console.log(chalk.red('Failed to seed Users!'));})
.then(function(){
    console.log(chalk.green('Drugs seeded!'));
    process.kill(0);
}, function(){console.log(chalk.red('Failed to seed drugs!'));})
.catch(function(err){
    console.error(err);
    process.kill(1);
});
