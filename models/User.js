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
  email: {
    type: String,
    // required: true
  },
  cellnumber: {
    type: String,
    // required: true
  },
  createdDate: {
    type: Date,
    default: new Date().toLocaleString()
  }
});

module.exports = mongoose.model("User", UserSchema);
