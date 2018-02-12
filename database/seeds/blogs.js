const data = require('./blogs.json')
const Blog = require('../../models/blog.js')

.insertMany(data)
.then(() => {
  console.log('Insert data successfully!')
})
