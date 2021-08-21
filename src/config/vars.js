require('dotenv').config()

module.exports = {
  mongo: {
    uri: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.xn2pr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  }
}