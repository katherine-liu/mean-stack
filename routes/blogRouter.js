const express = require('express')
const router = express.Router()
const BlogCtrl = require('../controllers/blogCtrl')

router.route('/blogs')
.get(BlogCtrl.index)
.post(BlogCtrl.store)

router.route('/blogs/:id')
.get(BlogCtrl.show)
.patch(BlogCtrl.update)
.delete(BlogCtrl.destroy)

module.exports = router
