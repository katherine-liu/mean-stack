const Blog = require('../models/blog')

let id = '5a77d275d8d7655d47146039'
let body = {
  title: 'Updated: Google I/O'
}

Blog.findByIdAndUpdate(id, { $set: body }, { new: true })
.then(document => console.log('\nfind by id and updated: \n', document))
