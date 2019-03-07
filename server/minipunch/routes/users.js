const router = require('koa-router')()

import { saveUser, fetchUser } from '../controllers/user'

router.prefix('/users')

router.post('/saveUser', saveUser).get('/user', fetchUser)

module.exports = router
