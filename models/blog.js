const mongoose = require('../config/database')

const options = {}

const schema = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  content: { type: String }
}, options)

const Blog = mongoose.model('Blog', schema)

module.exports = Blog
