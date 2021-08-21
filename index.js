const app = require('./src/config/express');
const mongoose = require('./src/config/mongoose');

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

// open mongoose connection
mongoose.connect();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`SERVER listening at http://localhost:${port}`)
})

module.exports = app;