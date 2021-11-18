require('./model');

const mongoose = require('mongoose');
const Organisations = mongoose.model('Organisations');

module.exports = {
  async getAll() {
    return await Organisations.find({});
  },
  async addNew(body) {
    return await new Organisations({
      name: body.name,
    }).save();
  }
};
