const { createUser, test } = require('../controllers/usersController')
const router = require('express').Router()

router.post('/', createUser)
router.get('/', test)

module.exports = router
