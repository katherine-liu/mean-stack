const express = require('express')
const router = express.Router()
const blogCtrl = require('../controllers/blogCtrl')

router.route('/blogs')
.get(blogCtrl.index)
.post(blogCtrl.store)

router.route('/blogs/:id')
.get(blogCtrl.show)
.patch(blogCtrl.update)
.delete(blogCtrl.destroy)

module.exports = router
