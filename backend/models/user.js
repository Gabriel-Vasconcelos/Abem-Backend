const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  cityandstate: {
    type: String,
    required: true
  },
  cellphone: {
    type: Number,
    required: true
  },
  birthdate: {
    type: String,
    required: true
  },
  mothername: {
    type: String,
    required: true
  }
  
});

const User = mongoose.model('User', UserSchema);

module.exports = User;