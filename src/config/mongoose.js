const mongoose = require('mongoose');
const { mongo } = require('./vars');

mongoose.connection.on("error", err => {
  console.log("err", err)
  process.exit(-1);
})

exports.connect = () => {
  mongoose
    .connect(mongo.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('mongoDB connected...'));
  return mongoose.connection;
};