// Include the momentJS library
var moment = require("moment");

// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Account Schema
var CustomerSchema = new Schema({

  // Customer ID
  customerid: {
    type: String,
    required: true
  },
  
  // First Name
  firstname: {
    type: String,
    required: true
  },
  
  // Last Name
  lastname: {
    type: String,
    required: true
  },

  // Full Name
  fullname: {
    type: String,
    required: true
  },

  // Customer Address
  address: {
    type: String,
    required: true
  },

  // Customer City
  city: {
    type: String,
    required: true
  },

  // Customer State
  state: {
    type: String,
    required: true
  },

  // Customer Zip Code
  zipcode: {
    type: String,
    required: true
  },

  // Customer Phone Number
  phonenum: {
    type: String,
    required: true
  },

  // Customer Username
  username: {
    type: String,
    required: true
  },

  // Customer Password
  password: {
    type: String,
    required: true
  },
    
  // Date of customer update (saving as a string to pretify it in Moment-JS)
  updated: {
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm A')
  },

  // Create a relation with the Accounts model
  customerid: [{
    type: Schema.Types.ObjectId,
    ref: 'Accounts'
  }]

});

// Create the Customer model with Mongoose
var Customer = mongoose.model('Customer', CustomerSchema);

// Export the Model
module.exports = Customer;