const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserId = new Schema({
  userId: {
    type: String,
    required: true,
  },
})

const Organisation_UserSchema = new Schema({
  organisationId: {
    type: String,
    required: true,
  },
  userArrays: [UserId]
}, { collection: 'organisation_user'})

module.exports = mongoose.model('Organisation_User', Organisation_UserSchema);