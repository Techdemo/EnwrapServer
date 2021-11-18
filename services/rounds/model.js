const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoundSchema = new Schema({
  introText: {
    type: String,
    required: true,
  },
  solution: {
    type: Number,
    required: true
  }
})

mongoose.model('Rounds', RoundSchema);