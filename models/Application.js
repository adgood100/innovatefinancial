var moment = require("moment");

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ApplicationSchema = new Schema({
  //first Name
  firstname: {
    type: String,
    required: true
    },
//middle initial
  middleinitial: {
    type: String,
    required: false
  },
// Last Name
  lastname: {
    type: String,
    required: true
  },
  //Cumulative Address
  address: {
    type: String,
    required: true
  },
  // Applicant's City
  city: {
    type: String,
    required: true
  },

  // Applicant's State
  state: {
    type: String,
    required: true
  },

  // Applicant's Zip Code
  zipcode: {
    type: String,
    required: true
  },
  //Applicant's Phone Number
  phonenumber:{
    type: String,
    required: true
  },
  email: {
      type: String,
      required: true
  },
  socialsecurity:{
    type: String,
    required: true
  },
  update:{
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm A')
  },
  product: {
    type: String,
    required: true
  },
  customerid: [{
    type: Schema.Types.ObjectId,
    ref: 'Accounts'
  }]


})
