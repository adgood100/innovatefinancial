// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Comment Schema
var TransactionsSchema = new Schema({

  // Transaction ID

  transactionid: {
    type: String,
    required: true
  },
 
  // Account Number
  accountnum: {
    type: String,
    required: true
  },

  // Transaction Type Debit/Credit

  trantype: {
    type: String,
    required: true
  },

  // Transaction Amount

  transamount: {
    type: Number,
    required: false
  },

  // Transaction Detail
  
  transdetail: {
    type: String,
    required: true
  },

  // Transaction date

  transdate: {
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm A')
    required: true
  },

  // Transaction Line Item Balance

  transbalance: {
    type: Number,
    required: false
  }
 
});


// Create the Transactions model with Mongoose
var Transactions = mongoose.model('Transactions', TransactionsSchema);

// Export the Model
module.exports = Transactions;