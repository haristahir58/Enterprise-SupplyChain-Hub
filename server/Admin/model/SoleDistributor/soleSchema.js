const mongoose = require('mongoose');

const soleSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      },
      profession: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      }

});

const SoleUsers = mongoose.model('Sole Distributors Users', soleSchema);
module.exports = SoleUsers;