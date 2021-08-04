'use strict'

const express = require('express')
const router = express.Router()

const {
    getCoinController,
    getAllCoins,
    createCoinController
} = require('./controllers')

router.get('/coins/list/:id', getCoinController)
router.get('/coins', getAllCoins)
router.post('/coins', createCoinController)

module.exports = router