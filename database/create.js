const Blog = require('../models/blog')

const blog1 = new Blog({
  title: 'First Blog'
})

blog1.save()
.then(document => console.log(document))
.catch(error => {console.log(error)})
