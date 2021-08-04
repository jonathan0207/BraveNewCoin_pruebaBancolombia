'use strict'

const { OK, INTERNAL_SERVER_ERR, ERR_COINS } = require('../../commons/const')
const coinService = require('./service')

const getAllCoins = async (req, res) => {
    const { currency } = req.query
    try {
        const cryptocoins = await coinService.getAllCoins(currency)
        res.status(OK).json(cryptocoins)
    } catch (error) {
        console.log(error);
        res.status(INTERNAL_SERVER_ERR).json({message: ERR_COINS})
    }
}

const getCoinController = async (req, res) => {
    const { id } = req.params
    try {
        const response = await coinService.getCoinsListByUser(id)
        res.status(OK).json(response)
    } catch (error) {
        res.status(INTERNAL_SERVER_ERR).json({ error: error.errors[0].message })
    }
}

const createCoinController = async (req, res) => {
    const { body } = req
    try {
        const response = await coinService.createCoinService(body)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error})
    }
}


module.exports = {
    getCoinController,
    getAllCoins,
    createCoinController
}