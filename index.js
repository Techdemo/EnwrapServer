const express = require('express');
const path = require('path')
const compression = require('compression')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const app = express();
app.use(cors())
const port = process.env.PORT || 5000;

mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-shard-00-00-xn2pr.mongodb.net:27017,cluster0-shard-00-01-xn2pr.mongodb.net:27017,cluster0-shard-00-02-xn2pr.mongodb.net:27017/enwrap?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on("error", err => {
  console.log("err", err)
})

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})

app
  .use(compression())
  .use(express.json())

require('./routes/proposal.api')(app);
require('./routes/auth.api.js')(app);

app.listen(port, () => {
  console.log(`SERVER listening at http://localhost:${port}`)
})





