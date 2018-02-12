const Blog = require('../models/blog')

let id = '5a77d275d8d7655d47146037'

Blog.findByIdAndRemove(id)
.then(document => console.log('\nfind by id and delete the 2nd blog: \n', document))
