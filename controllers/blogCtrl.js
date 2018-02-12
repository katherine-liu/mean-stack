const Blog = require('../models/blog')

const index = (request, response) => {
  Blog.find()
  .then(documents => response.send(documents))
  .catch(error => console.log(error))
}

const store = (request, response) => {
  const blog = new Blog({
    title: request.body.title,
    author: request.body.author,
    content: request.body.content
  })

  blog.save()
  .then(document => response.send(document))
  .catch(error => console.log(error))
}

const show = (req, res) => {
  const id = req.params.id

  Blog.findById(id)
  .then(doc => res.send(doc))
  .catch(error => console.log(error))
}

const update = (req, res) => {
  const id = req.params.id
  const body = {
    title: req.body.title,
    author: req.body.author,
    content: req.body.content
  }

  Blog.findByIdAndUpdate(id, { $set: body}, { new: true })
  .then(doc => res.send(doc))
}

const destroy = (req, res) => {
  const id = req.params.id

  Blog.findByIdAndRemove(id)
  .then(doc => res.rend(doc))
  .catch(error => console.log(error))
}

module.exports = { index, store, show, update, destroy }
