const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    // required: true
  },
  surname: {
    type: String,
    // required: true
  },
  age: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    // required: true
  },
  cellnumber: {
    type: String,
    // required: true
  },
  city: {
    type: String,
    // required: true
  },
  hospital: {
    type: String,
    // required: true
  },
  health_condition: {
    type: String,
    // required: true
  },
  primary_emergency: {
    type: String,
    // required: true
  },
  secondary_emergency: {
    type: String,
    // required: true
  },
  createdDate: {
    type: Date,
    default: new Date().toLocaleString()
  }
});

module.exports = mongoose.model("User", UserSchema);
