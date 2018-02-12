const Blog = require('../models/blog')
Blog.find()
.then(documents => console.log('\nfind all: \n', documents))

Blog.find({ title: 'The 1st post'})
.then(documents => console.log('\nfind all \'The 1st post\': \n', documents))

Blog.findOne({ title: 'The 1st post'})
.then(document => console.log('\nfind the first matched result: \n', document))

Blog.findById('5a77d275d8d7655d47146039')
.then(document => console.log('\nfind by id result: \n', document))
