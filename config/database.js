const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1:27017/blog'

const options = {
  // useMongoClient: true
}

mongoose.Promise = global.Promise

mongoose.connect(uri, options)
.then(db => {
  console.log('connect to db successfully :)')
})
.catch(error => {
  console.log('connect to db error :()')
  console.log(error)
})

module.exports = mongoose
