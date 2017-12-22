// Include the momentJS library
var moment = require("moment");

// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Accounts Schema
var AccountsSchema = new Schema({

  // Customer ID
  customerid: {
    type: String,
    required: true
  },

  // Account Number
  accountnum: {
    type: String,
    required: true
  },
  
  // Account Type
  accounttype: {
    type: String,
    required: true
  },
  
  // Account Balance
  acctbalance: {
    type: Number,
    required: false
  },

  // Account Overdraft Limit
  acctoverdraftlimit: {
    type: Number,
    required: false
  },
    
  // Date of account opened (saving as a string to pretify it in Moment-JS)
  dateopened: {
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm A')
  },

  // Create a relation with the Transactions model
  accountnum: [{
    type: Schema.Types.ObjectId,
    ref: 'Transactions'
  }]

});

// Create the Accounts model with Mongoose
var Accounts = mongoose.model('Accounts', AccountsSchema);

// Export the Model
module.exports = Accounts;