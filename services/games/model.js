const mongoose = require('mongoose');
const RoundSchema = require('../rounds/model');
const Schema = mongoose.Schema;

const GamesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  totalGameTime: {
    type: Number,
    required: true
  },
  introText: {
    type: String,
    required: true
  },
  winningText: {
    type: String,
    required: true
  },
  losingText: {
    type: String,
    required: true
  },
  personalized: {
    type: Boolean,
    required: true
  },
  rounds: [RoundSchema]
})

mongoose.model('Games', GamesSchema);