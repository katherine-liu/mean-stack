const express = require('express')
const router = express.Router()
const UserCtrl = require('../controllers/userCtrl')
const authenticate = require('../middleware/authenticate')

router.route('/users')
.get(UserCtrl.index)
.post(UserCtrl.store)

router.route('/users/:id')
.get(UserCtrl.show)
.patch(UserCtrl.update)
.delete(UserCtrl.destroy)

router.post('/auth', UserCtrl.auth)

router.get('/me', authenticate, UserCtrl.me)

module.exports = router
