'use strict'

const express = require('express')
const router = express.Router()
const {createUserController } = require('./controllers')
router.post('/users', createUserController)

module.exports = router