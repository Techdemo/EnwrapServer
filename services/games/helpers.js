require('./model');

const mongoose = require('mongoose');
const Games = mongoose.model('Games');

module.exports = {
  async getAll() {
    return await Games.find({})
  },

  async addNew(body) {
    return await new Games({
      title: body.title,
      introText: body.introText,
      winningText: body.winningText,
      losingText: body.losingText,
      totalGameTime: body.totalGameTime,
      personalized: body.personalized,
      rounds: body.rounds,
    }).save();
  }
}