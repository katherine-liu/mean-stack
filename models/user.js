const mongoose = require('../config/database')
const schema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = mongoose.model('User', schema)
module.exports = User
