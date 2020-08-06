const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const custSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Customer first name is required'],
    minlength: 1
  },
  lastName: {
    type: String,
    required: [true, 'Customer last name is required'],
    minlength: 1
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: Number
  },
  phone_Num: {
    type: Number,
    required: [true, 'Customer phone number is required'],
    min: [10, 'Has to be a number of at least 10 digits']
  },
  email: {
    type: String,
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please add a valid email address.',
    ],
    required: [true, 'Please enter Email Address'],
    unique: true,
    lowercase: true,
    dropDups: true
  },
  membership_date: {
    type: Date,
    default: Date.now()
  },
  work_orders: [{
    type: Schema.Types.ObjectId,
    ref: "workOrder"
  }]

});
//Customers full-name 
custSchema.methods.setFullName = () => {
  this.full_name = `${this.firstName} ${this.lastName}`

  return this.full_name;
};
const Customers = mongoose.model("Customers", custSchema);

module.exports = Customers;