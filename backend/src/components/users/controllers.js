'use strict'

const { OK, INTERNAL_SERVER_ERR } = require('../../commons/const');
const userService = require('./service')

const createUserController = async (req, res) => {
    const { body } = req;
    try {
        const response = await userService.createUserService(body)
        res.status(OK).json(response)
    } catch (error) {
        res.status(INTERNAL_SERVER_ERR).json({ error: error.errors[0].message })
    }
}

module.exports = {
    createUserController
}