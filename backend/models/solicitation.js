const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  servicearea: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }

});

const Solicitation = mongoose.model('Solicitation', UserSchema);

module.exports = Solicitation;