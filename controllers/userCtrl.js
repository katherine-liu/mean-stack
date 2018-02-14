const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const auth = (req, res) => {
  User.findOne({ userName: req.body.userName})
  .then(user => {
    if (!user) { return Promise.reject({ message: 'Invalid user name'})}
    else {
      bcrypt.compare(req.body.password, user.password)
      .then(result => {
        if (result) {
          const payload = { userName: user.userName }
          const secret = 'KATHERINE_BLOG_FOR_FUN'
          const token = jwt.sign(payload, secret)
          res.send({ token })
        } else {
          res.status(401).send({ message: 'Unauthorized' })
        }
      })
    }
  })
  .catch(err => res.status(400).send(err))
}

const me = (req, res) => {
  res.send(`hello ~ ${ req.decoded.userName }`)
}

const index = (req, res) => {
  User.find()
  .then(documents => res.send(documents))
  .catch(error => console.log(error))
}

const store = (req, res) => {
  bcrypt.hash(req.body.password, 10)
  .then(psw => {
    const user = new User({
      userName: req.body.userName,
      password: psw
    })

    user.save()
    .then(document => res.send('Registered Successfully!'))
    .catch(error => console.log(error))
  })
}

const show = (req, res) => {
  const id = req.params.id

  User.findById(id)
  .then(doc => res.send(doc))
  .catch(error => console.log(error))
}

const update = (req, res) => {
  const id = req.params.id
  const body = {
    userName: req.body.userName,
    password: req.body.password
  }

  User.findByIdAndUpdate(id, { $set: body }, { new: true })
  .then(doc => res.send(doc))
  .catch(err => console.log(err))
}

const destroy = (req, res) => {
  const id = req.params.id

  User.findByIdAndRemove(id)
  .then(doc => res.send(doc))
  .catch(err => console.log(err))
}

module.exports = { auth, index, store, show, update, destroy, me }
