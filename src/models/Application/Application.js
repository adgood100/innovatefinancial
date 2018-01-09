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
  middlename: {
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
  product: {
    type: String,
    required: false
  },
  update:{
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm A')
  },

  customerid: [{
    type: Schema.Types.ObjectId,
    ref: 'Accounts'
  }]


})

export default ApplicationSchema;
