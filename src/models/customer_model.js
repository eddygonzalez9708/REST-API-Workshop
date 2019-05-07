require('dotenv').config()
let mongoose = require('mongoose')
const {
  server,
  database,
  user,
  password
} = process.env

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`, { useNewUrlParser: true })
mongoose.set('useCreateIndex', true)

let CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Customer', CustomerSchema)