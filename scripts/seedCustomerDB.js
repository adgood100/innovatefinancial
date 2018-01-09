const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
var mongoIncrementalIdGenerator = require("mongo-incremental-id-generator");

// This file empties the Customers collection and inserts the Customers below

// Database Configuration with Mongoose
// ---------------------------------------------------------------------------------------------------------------

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB

var db = process.env.MONGO_URI || "mongodb://root:root@ds013901.mlab.com:13901/innovatefinancial100";

  mongoose.Promise = Promise;
//  mongoose.connect('mongodb://localhost/innovatefinancial', {
//    useMongoClient: true
//  });

  mongoose.connect(db, {
    useMongoClient: true
  });

// Import the Customer model
var Customer = require('./models/Customer.js');

// ---------------------------------------------------------------------------------------------------------------

const customerSeed = [
  {
    customerid: '0'
    idGenerator.generateId(customerid, 1, function (err, id) {
      customerid: id,
    })
    salutation: 'Ms.',
    firsname: 'Alicia',
    middlename: 'Diane',
    lastname: 'Good',
    fullname: firstname + ' ' + lastname,
    address: '5910 North Dr.',
    city: 'Flower Mound',
    state: 'Texas',
    zipcode: '75028',
    phonenum: '972-555-1212',
    username: 'agood@gmail.com',
    password: '12345',
    updated: new Date(Date.now())

},
  {
    customerid: '0'
    idGenerator.generateId(customerid, 1, function (err, id) {
      customerid: id,
    })
    salutation: 'Ms.',
    firsname: 'Alison',
    middlename: 'D',
    lastname: 'Perry',
    fullname: firstname + ' ' + lastname,
    address: '100 Main St.',
    city: 'Dallas',
    state: 'Texas',
    zipcode: '75024',
    phonenum: '214-555-1212',
    username: 'aperry@gmail.com',
    password: '22345',
    updated: new Date(Date.now())
},
  {
    customerid: '0'
    idGenerator.generateId(customerid, 1, function (err, id) {
      customerid: id,
    })
    salutation: 'Mr.',
    firsname: 'Robert',
    middlename: 'J',
    lastname: 'Kirk',
    fullname: firstname + ' ' + lastname,
    address: '1001 Town Blvd.',
    city: 'Denton',
    state: 'Texas',
    zipcode: '75065',
    phonenum: '817-555-1212',
    username: 'rkirk@gmail.com',
    password: '32345',
    updated: new Date(Date.now())
  }
];

db.Customer
  .remove({})
  .then(() => db.Customer.collection.insertMany(customerSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
