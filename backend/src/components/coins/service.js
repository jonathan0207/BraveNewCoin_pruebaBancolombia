'use strict'

const { get } = require('../../commons/request')
const { config } = require('../../config/config')

const { Coin } = require('../../models/coin')

const getAllCoins = async (currency) => {
    const response = await get(`${config.cryptocoinUrl}/coins/markets?vs_currency=${currency}`)
    return response.data
}

const getCoinsListByUser = async (userId) => {
    return Coin.findAll({ where: { UserId: userId } })
}

const createCoinService = async (coin) => {
    const response = await get(`${config.cryptocoinUrl}/coins/${coin.name}`)
    const { name, symbol } = response.data
    const obj = {
        name,
        symbol,
        price: response.data.market_data.current_price.usd,
        UserId: coin.UserId
    }
    return Coin.create(obj)
}


module.exports = {
    getCoinsListByUser,
    getAllCoins,
    createCoinService
}